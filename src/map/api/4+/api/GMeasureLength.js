/* eslint-disable */
import {
  esriApi
} from "../GEsriApi"
export default class GMeasureLength {
  constructor(opt) {
    this.view = opt.mapView;
    this.units = "meters"; // meters | feet | kilometers | miles | nautical-miles | yards
    this.isActive = false;
    this.activeFeature = null;
    this.finishedFeature = null;
    this.lineLength = 0;
    this.tooltipNodes = [];
    this.body = document.getElementById('viewDiv');
    this.tooltip = null;
    this.graphicLayer = null;

    this.pointerDownListener = null;
    this.pointerMoveListener = null;
    this.doubleClickListener = null;
    this.viewExtentChange = null;
    this.register();

    return new Promise(resolve => {
      Promise.all([
        esriApi.GetGraphicsLayer(),
        esriApi.GetPolyline(),
        esriApi.GetGraphic(),
        esriApi.GetgeometryEngine(),
      ]).then(([GraphicsLayer, Polyline, Graphic, geometryEngine]) => {
        this.symbol = {
          type: "simple-line",
          color: "red",
          width: 1.5,
          style: "dash",
          cap: 'round'
        };
        this.markerSymbol = {
          type: "simple-marker",
          style: "circle",
          color: "white",
          size: "10px",
          outline: {
            color: 'red',
            width: 1
          }
        };
        this.GraphicsLayer = GraphicsLayer;
        this.Polyline = Polyline;
        this.geometryEngine = geometryEngine;
        this.Graphic = Graphic;
        resolve(this);
      });
    });
  }

  register() {
    onemap.pubsub.subscribe("clear", e => {
      this.close();
    });
  }

  start() {
    this.view.isEdit = true;
    if (!this.isActive) {
      this.close();
      this.createGraphicLayer();
      this.createTooltipNode();
      this.activateDraw();
    } else {
      this.deactivateDraw();
      this.clearPolyline();
    }
  }

  createTooltipNode() {
    this.tooltip = document.createElement('span');
    this.tooltip.className = "onemap-measure tooltip";
    this.body.appendChild(this.tooltip);
  }

  //创建承载面的图层
  createGraphicLayer() {
    if (this.graphicLayer === null) {
      this.graphicLayer = new this.GraphicsLayer();
      this.view.map.add(this.graphicLayer);
    } else {
      this.graphicLayer.removeAll();
    }
  }

  activateDraw() {
    var self = this;
    this.isActive = true;
    this.clearPolyline();
    this.finishedFeature = null;
    this.pointerDownListener = this.view.on("pointer-down", function (pointerDownEvent) {
      var point = self.view.toMap(pointerDownEvent);
      self.showMarker(point);
      if (!self.activeFeature) {
        var line = self.createLine(point, point);
        self.activeFeature = new self.Graphic({
          geometry: line,
          symbol: self.symbol
        });
        self.graphicLayer.add(self.activeFeature);
      } else {
        var newLine = self.addVertex(self.activeFeature.geometry,
          point);
        self.updateFeature(newLine);
        self.showToolTip(pointerDownEvent.x, pointerDownEvent.y, point, true);
      }
    });
    this.pointerMoveListener = this.view.on("pointer-move", function (event) {
      self.updateLastVertex(event);
      if (self.activeFeature) {
        var length = self.measurePolyline(self.activeFeature.geometry);
        self.showToolTip(event.x, event.y);
      }
    });
    this.doubleClickListener = this.view.on("double-click", function (event) {
      onemap.pubsub.publish("changeCursor", "pointer");
      event.stopPropagation();
      self.finishDrawing(event);
      self.measurePolyline(self.finishedFeature.geometry);
    });
    this.viewExtentChange = this.view.watch('extent', function () {
      self.tooltipNodes.forEach(function (node) {
        var screenPoint = self.view.toScreen(node.point);
        node.style.left = (screenPoint.x + 10) + "px";
        node.style.top = screenPoint.y + "px";
      });
    });
  }

  createLine(startPosition, endPosition) {
    var startPointCoordinates = [
      startPosition.x,
      startPosition.y,
    ];
    var endPointCoordinates = [
      endPosition.x,
      endPosition.y,
    ];

    var line = new this.Polyline({
      spatialReference: this.view.spatialReference,
      hasZ: false,
      hasM: false,
      paths: [
        [
          startPointCoordinates,
          endPointCoordinates
        ]
      ]
    });
    return line;
  }

  addVertex(line, newPoint) {
    var polyline = line.clone();
    var lastPointIndex = line.paths[0].length;
    polyline.insertPoint(0, lastPointIndex, newPoint);
    return polyline;
  }

  updateLastVertex(pointerMoveEvent) {
    if (this.activeFeature) {
      var point = this.view.toMap(pointerMoveEvent);
      var polyline = this.activeFeature.geometry.clone();
      var lastPointIndex = polyline.paths[0].length - 1;
      var updatedLine = polyline.setPoint(0, lastPointIndex, point);

      this.updateFeature(updatedLine);
    }
  }

  updateFeature(polyline) {
    this.clearPolyline();
    // line to measure
    var newFeature = new this.Graphic({
      geometry: polyline,
      symbol: this.symbol
    });
    this.activeFeature = newFeature;

    var densifiedGraphic = newFeature.clone();
    densifiedGraphic.geometry = this.densifyPolyline(newFeature.geometry);
    this.graphicLayer.add(densifiedGraphic);
  }

  densifyPolyline(geometry) {
    return geometry;
  }

  measurePolyline(polyline) {
    this.lineLength = this.geometryEngine.planarLength(polyline, this.units).toFixed(2);
    return Math.abs(this.lineLength);
  }

  finishDrawing(event) {
    this.body.removeChild(this.tooltip);
    this.tooltip = null;

    var point = event.mapPoint;

    var polyline = this.activeFeature.geometry.clone();
    var finalLine = this.addVertex(polyline, point);
    this.updateFeature(finalLine);

    var densifiedPolyline = this.densifyPolyline(finalLine);
    this.finishedFeature = new this.Graphic({
      geometry: densifiedPolyline,
      symbol: this.symbol
    });
    //移除最后一个点
    this.body.removeChild(this.tooltipNodes.pop());
    this.deactivateDraw();
  }

  deactivateDraw() {
    this.isActive = false;
    this.activeFeature = null;
    this.lineLength = 0;

    this.pointerDownListener.remove();
    this.pointerMoveListener.remove();
    this.doubleClickListener.remove();
  }

  clearPolyline() {
    var polylineGraphic = this.graphicLayer.graphics.find(function (graphic) {
      return graphic.geometry && graphic.geometry.type ===
        "polyline";
    });

    if (polylineGraphic) {
      this.graphicLayer.remove(polylineGraphic);
    }
  }

  showMarker(point) {
    var markerFeature = new this.Graphic({
      geometry: point,
      symbol: this.markerSymbol
    });
    this.view.graphics.add(markerFeature);
  }

  showToolTip(x, y, p, state) {
    if (state && state == true) {
      if (this.lineLength > 0) {
        var newNode = this.tooltip.cloneNode();
        newNode.innerText = this.lineLength + '米';
        newNode.point = p;
        newNode.style.left = (x + 10) + "px";
        newNode.style.top = y + "px";
        this.body.appendChild(newNode);
        this.tooltipNodes.push(newNode);
      }
    } else {
      this.tooltip.innerText = this.lineLength + '米';
      this.tooltip.style.left = (x + 10) + 'px';
      this.tooltip.style.top = y + 'px';
    }
  }

  close() {
    if (this.viewExtentChange != null) {
      this.viewExtentChange.remove();
    }
    this.view.graphics.removeAll();
    if (this.graphicLayer !== null) {
      this.view.map.remove(this.graphicLayer);
      this.graphicLayer = null;
    }   console.log(this.tooltip)
    this.tooltipNodes.forEach(function (node) {
      this.body.removeChild(node);
    }, this);
    this.tooltipNodes = [];
  }
}