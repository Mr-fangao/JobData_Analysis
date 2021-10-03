import esriLoad from "esri-loader";
export default class GDrawbuffer {
  constructor(view) {
    this.view = view;
    // this.buffer = null;
    this.finished = {};
    return new Promise(resolve => {
      esriLoad.loadModules(["esri/views/2d/draw/Draw", "esri/Graphic", "esri/geometry/Point", "esri/geometry/geometryEngine"]).then(([Draw, Graphic, Point, geometryEngine]) => {
        this.draw = new Draw({
          view: view,
          pointSymbol: {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            style: "circle",
            color: "#8A2BE2",
            size: "16px"
          },
          polygonSymbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [140, 140, 222, 0.5],
            outline: {
              color: [0, 0, 0, 0.5],
              width: 2
            }
          },
        });
        this.Graphic = Graphic
        this.geometryEngine = geometryEngine
        var action = this.draw.create("point", {
          mode: "click" //点击方式加点
        });
        this.view.focus();
        // 绘制完成事件
        action.on("draw-complete", evt => {
          this.view.isEdit = true;
          this.view.graphics.removeAll();
          var coordinates = event.coordinates;
          var point = new Point({
            hasZ: false,
            hasM: false,
            x: coordinates[0],
            y: coordinates[1],
            spatialReference: this.view.spatialReference
          });
          var graphic = new this.Graphic({
            geometry: point,
            symbol: {
              type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
              style: "square",
              color: "blue",
              size: "8px", // pixels
              outline: { // autocasts as new SimpleLineSymbol()
                color: [255, 255, 0],
                width: 3 // points
              }
            }
          });
          // 将绘制的图形添加到view
          this.view.graphics.add(graphic);
        });
        resolve(this);
      })
    })
  }

  on(name, event) {
    this.finished[name] = event;
  }

  enableCreatePoint(distance, callback) {
    var action = this.draw.create("point", {
      mode: "click" //点击方式加点
    });
    // 获取焦点
    this.view.focus();
    // 绘制完成事件
    action.on("draw-complete", event => {
      this.view.isEdit = true;
      this.view.graphics.removeAll();
      var coordinates = event.coordinates;
      mapApi.esriApi.GetPoint().then(Point => {
        var point = new Point({
          hasZ: false,
          hasM: false,
          x: coordinates[0],
          y: coordinates[1],
          spatialReference: this.view.spatialReference
        })
        //生成绘制的图形
        mapApi.esriApi.GetGraphic().then(Graphic => {
          var graphic = new Graphic({
            geometry: point,
            symbol: {
              type: "simple-marker",
              style: "circle",
              color: [255, 0, 0],
              size: 5,
              outline: {
                color: [255, 0, 0],
                width: 1
              }
            }
          });
          // 将绘制的图形添加到view
          this.view.graphics.add(graphic);
          if (event.type == "draw-complete") {
            mapApi.esriApi.GetgeometryEngine().then(geometryEngine => {
              var polySym = {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [140, 140, 222, 0.5],
                outline: {
                  color: [0, 0, 0, 0.5],
                  width: 2
                }
              };
              var buffer = geometryEngine.buffer(point, distance, "kilometers", false);
              this.view.graphics.add(
                new Graphic({
                  geometry: buffer,
                  symbol: polySym
                })
              );
              if (callback) {
                callback(buffer)
              }
            })
          }
        })
      })
    });
  }
  // createPoint(event) {
  //   console.log(this);
  //   //获取所有顶点
  //   this.view.isEdit = true;
  //   this.view.graphics.removeAll();
  //   var coordinates = event.coordinates;
  //   mapApi.esriApi.GetPoint().then(Point => {
  //     var point = new Point({
  //       hasZ: false,
  //       hasM: false,
  //       x: coordinates[0],
  //       y: coordinates[1],
  //       spatialReference: this.view.spatialReference
  //     })
  //     //生成绘制的图形
  //     mapApi.esriApi.GetGraphic().then(Graphic => {
  //       var graphic = new Graphic({
  //         geometry: point,
  //         symbol: {
  //           type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
  //           style: "square",
  //           color: "blue",
  //           size: "8px", // pixels
  //           outline: { // autocasts as new SimpleLineSymbol()
  //             color: [255, 255, 0],
  //             width: 3 // points
  //           }
  //         }
  //       });
  //       // 将绘制的图形添加到view
  //       this.view.graphics.add(graphic);
  //       var _this = this;
  //       if (event.type == "draw-complete") {
  //         mapApi.esriApi.GetgeometryEngine().then(geometryEngine => {
  //           var polySym = {
  //             type: "simple-fill", // autocasts as new SimpleFillSymbol()
  //             color: [140, 140, 222, 0.5],
  //             outline: {
  //               color: [0, 0, 0, 0.5],
  //               width: 2
  //             }
  //           };
  //           var buffer = geometryEngine.buffer(point, 2, "kilometers", false);
  //           window.buffer = buffer;
  //           console.log(window.buffer);
  //           this.view.graphics.add(
  //             new Graphic({
  //               geometry: buffer,
  //               symbol: polySym
  //             })
  //           );
  //         })
  //       }
  //     })
  //   })
  // }
}
