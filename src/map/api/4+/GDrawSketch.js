import esriLoad from "esri-loader";
export default class GDrawSketch {
  constructor(view) {
    this.view = view;
    this.finished = {};
    return new Promise(resolve => {
      esriLoad.loadModules(["esri/widgets/Sketch/SketchViewModel", "esri/geometry/geometryEngine"]).then(([SketchViewModel, geometryEngine]) => {
        this.sketch = new SketchViewModel({
          view: view,
          pointSymbol: {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            style: "circle",
            color: "#8A2BE2",
            size: "16px"
          },
          polylineSymbol: {
            type: "simple-line", // autocasts as new SimpleMarkerSymbol()
            color: "#8A2BE2",
            width: "2",
            style: "solid"
          },
          polygonSymbol: {
            type: "simple-fill", // autocasts as new SimpleMarkerSymbol()
            color: "rgba(138,43,226, 0.2)",
            style: "solid",
            outline: { // autocasts as new SimpleLineSymbol()
              color: "#8A2BE2",
              width: 2
            }
          }
        });
        // console.log(this.sketch);
        this.sketch.on("create-complete", evt => {
          view.graphics.add(evt.target.graphic);
          if (this.finished["create-complete"]) {
            this.finished["create-complete"]({
              geometry: evt.geometry,
              area: geometryEngine.planarArea(evt.geometry, "square-meters").toFixed(2)
            });
          }
        });
        this.sketch.on("draw-complete", evt => {  
          view.graphics.add(evt.graphic);
          if (this.finished["draw-complete"]) {
            this.finished["draw-complete"]({
              geometry: evt.geometry,
              area: geometryEngine.planarArea(evt.geometry, "square-meters").toFixed(2)
            });
          }
        })
        resolve(this);
      })
    })
  }

  on(name, event) {
    this.finished[name] = event;
  }

  create(type = "polygon") {
    this.view.isEdit = true;
    this.view.graphics.removeAll();
    this.sketch.create(type);
  }
}
