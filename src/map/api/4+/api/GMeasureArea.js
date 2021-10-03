/* eslint-disable */
import {
  esriApi
} from "../GEsriApi"
class GMeasureArea {
  constructor(opt) {
    this.view = opt.mapView;
    this.body = document.getElementById("viewDiv");
    this.area = 0;
    this.activePolygon = null;
    this.isDrawActive = false;
    this.units = "square-meters";
    this.tooltip = null;
    this.graphicLayer = null;

    this.pointerDownListener = null;
    this.pointerMoveListener = null;
    this.doubleClickListener = null;
    this.viewExtentChange = null;
    //register
    this.register();
    //load api
    return new Promise(resolve => {
      Promise.all([
        esriApi.GetGraphicsLayer(),
        esriApi.GetPolygon(),
        esriApi.GetGraphic(),
        esriApi.GetgeometryEngine()
      ]).then(([GraphicsLayer, Polygon, Graphic, geometryEngine]) => {
        this.drawingSymbol = {
          type: "simple-fill",
          color: [102, 0, 255, 0.15],
          outline: {
            color: "red",
            style: "dash",
            width: 1.5
          }
        };
        this.finishedSymbol = {
          type: "simple-fill",
          color: [102, 0, 255, 0.15],
          outline: {
            color: "red",
            style: "dash",
            width: 1.5
          }
        };
        this.markerSymbol = {
          type: "simple-marker",
          style: "circle",
          color: "white",
          size: "10px", // pixels
          outline: { // autocasts as esri/symbols/SimpleLineSymbol
            color: 'red',
            width: 1.5 // points
          }
        };
        this.GraphicsLayer = GraphicsLayer;
        this.Polygon = Polygon;
        this.Graphic = Graphic;
        this.geometryEngine = geometryEngine;
        resolve(this);
      });
    });
  }

  register() {
    onemap.pubsub.subscribe("clear", e => {
      this.close();
    })
  }

  start() {
    this.view.isEdit = true;
    if (!this.isDrawActive) {
      this.close();
      this.createGraphicLayer();
      this.createTooltipNode();
      this.activateDraw();
    } else {
      this.deactivateDraw();
      this.clearPolygon();
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
    this.isDrawActive = true;
    this.clearPolygon();
    this.pointerDownListener = this.view.on('pointer-down', function (event) {
      event.stopPropagation();
      var point = self.createPoint(event);
      self.showMarker(point);
      self.addVertex(point);
    });

    this.pointerMoveListener = this.view.on("pointer-move", function (event) {
      if (self.activePolygon) {
        event.stopPropagation();
        var point = self.createPoint(event);
        self.updateFinalVertex(point);
      }
    });

    this.doubleClickListener = this.view.on("double-click", function (event) {
      onemap.pubsub.publish("changeCursor", "pointer");
      event.stopPropagation();
      var searchArea = self.addVertex(event.mapPoint, true);
      if (!searchArea) {
        return null;
      }
      self.deactivateDraw();
    });

    this.viewExtentChange = this.view.watch('extent', function () {
      var screenPoint = self.view.toScreen(self.tooltip.point);
      self.tooltip.style.left = (screenPoint.x + 10) + "px";
      self.tooltip.style.top = (screenPoint.y + 10) + "px";
    });
  }

  deactivateDraw() {
    this.isDrawActive = false;
    this.activePolygon = null;

    this.pointerDownListener.remove();
    this.pointerMoveListener.remove();
    this.doubleClickListener.remove();
  }

  createPoint(event) {
    return this.view.toMap(event);
  }

  addVertex(point, isFinal) {
    var polygon = this.activePolygon;
    var ringLength;
    if (!polygon) {
      polygon = new this.Polygon({
        spatialReference: this.view.spatialReference
      });
      polygon.addRing([point, point]);
    } else {
      ringLength = polygon.rings[0].length;
      polygon.insertPoint(0, ringLength - 1, point);
    }
    this.activePolygon = polygon;
    return this.redrawPolygon(polygon, isFinal);
  }

  redrawPolygon(polygon, finished) {
    var geometry = finished ? this.geometryEngine.simplify(polygon) : polygon;
    if (!geometry && finished) {
      console.log(
        "Cannot finish polygon. It must be a triangle at minimum. Resume drawing..."
      );
      return null;
    }
    this.clearPolygon();
    var polygonGraphic = new this.Graphic({
      geometry: geometry,
      symbol: finished ? this.finishedSymbol : this.drawingSymbol
    });
    this.graphicLayer.add(polygonGraphic);
    return geometry;
  }

  updateFinalVertex(point) {
    var polygon = this.activePolygon.clone();
    var ringLength = polygon.rings[0].length;
    polygon.insertPoint(0, ringLength - 1, point);
    this.measurePolygon(polygon);

    this.redrawPolygon(polygon);

    var point = polygon.centroid;
    if (point.x < 0 && point.y < 0) {
      point.x = -point.x;
      point.y = -point.y;
    }
    var event = this.view.toScreen(point);
    this.showToolTip(event.x, event.y, point);
  }

  measurePolygon(polygon) {
    this.area = this.geometryEngine.planarArea(polygon, this.units).toFixed(2);
    this.area = Math.abs(this.area);
    return this.area;
  }

  clearPolygon() {
    var polygonGraphic = this.graphicLayer.graphics.find(function (graphic) {
      return graphic.geometry.type === "polygon";
    });
    if (polygonGraphic) {
      this.graphicLayer.remove(polygonGraphic);
    }
  }

  showMarker(point) {
    var markerFeature = new this.Graphic({
      geometry: point,
      symbol: this.markerSymbol
    });
    this.view.graphics.add(markerFeature);
  }

  showToolTip(x, y, p) {
    if (this.area === 0) return false;
    this.tooltip.point = p;
    if (this.area > 1000000) {
      this.tooltip.innerText = (this.area / 1000000).toFixed(2) + "平方公里";
    } else {
      this.tooltip.innerText = this.area + "平方米";
    }
    this.tooltip.style.left = (x + 10) + "px";
    this.tooltip.style.top = y + "px";
  }

  close() {
 
    if (this.viewExtentChange != null) {
      this.viewExtentChange.remove();
    }
    this.view.graphics.removeAll();
    if (this.graphicLayer !== null) {
      this.view.map.remove(this.graphicLayer);
      this.graphicLayer = null;
    }
    console.log(this.tooltip);
    if (this.tooltip) {
      this.body.removeChild(this.tooltip);
      this.tooltip = null;
    }
  }
}

export default GMeasureArea;
