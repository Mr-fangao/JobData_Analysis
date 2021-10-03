import esriLoader from "esri-loader";
import GMeasureArea from "./api/GMeasureArea";
import GMeasureLength from "./api/GMeasureLength";

// import GIQuery from "../js/GIQuery";
// import GClip from "@api/api/GClip";
// import GMarkerClusterLayer from "./api/GMarkerClusterLayer";
// import GCanvasLayer from "./api/GCanvasLayer";
// import Server from "@/core/server";
// import {
//   services
// } from "@/core/services";
export default class GMapTools {
  constructor(opt) {
    this.mapView = opt.mapView || null;
    esriLoader.loadModules(["esri/widgets/Zoom"]).then(([Zoom]) => {
      this.zoom = new Zoom({
        view: this.mapView
      });
    });
    // this.gIQuery = new GIQuery({
    //   mapView: this.mapView
    // });

    // this.GClip = new GClip();

    // window.geone.pubsub.subscribe("clear", e => {
    //   this.mapView.isEdit = false;
    //   this.mapView.popup.close();
    //   this.mapView.graphics.removeAll();
    //   if (parent.geone) {
    //     parent.geone._data = null;
    //     parent.geone._geometry = null;
    //   }
    // });
  }
  mapScreen() {

    let initExtent = this.mapView.initExtent;
    let initialExtent = this.mapView.initialExtent;
    this.mapView.goTo({
      target: initialExtent.center,
      zoom: initExtent.zoom
    });
  }

  fullScreen() {
    if (parent.window) {
      onemap.utils.screen.toggle("app-body")
    } else {
      onemap.utils.screen.toggle("app-body")
    }
  }
  zoomIn() {
    let maxZoom = this.mapView.constraints.effectiveMaxZoom;
    let zoom = this.mapView.zoom;
    if (zoom < maxZoom) {
      this.zoom.zoomIn();
    }
  }

  zoomOut() {
    let minZoom = this.mapView.constraints.effectiveMinZoom;
    let zoom = this.mapView.zoom;
    if (zoom > minZoom) {
      this.zoom.zoomOut();
    }
  }

  measureArea() {
    // window.geone.pubsub.publish("clear");
    new GMeasureArea({
      mapView: this.mapView
    }).then(gMeasureArea => {
      gMeasureArea.start();
    });
  }

  measureLength() {
    // window.geone.pubsub.publish("clear");
    new GMeasureLength({
      mapView: this.mapView
    }).then(gMeasureLength => {
      gMeasureLength.start();
    });
  }

  // iQueryTool() {
  //   // this.gIQuery.toggle();
  // }

  // swipeMap() {
  //   if (parent.myLayer) {
  //     parent.myLayer.showLayer({
  //       title: "拉框对比",
  //       maxmin: false,
  //       full: true,
  //       url: "map.html?page=mapSwipe"
  //     });
  //   }
  // }

  // cmpMap() {
  //   // add tab
  //   if (parent.myLayer) {
  //     parent.myLayer.showLayer({
  //       title: "图层对比",
  //       maxmin: false,
  //       full: true,
  //       url: "map.html?page=mapCmp"
  //     });
  //   }
  // }

  // print() {
  //   // this.GClip.StartCapture()
  //   Server.get({
  //     url: services.query + "clustererMapLayer"
  //   }).then(rsp => {
  //     if (rsp.status === 1) {
  //       // var layer = new GMarkerClusterLayer({
  //       //   markers: markers
  //       // });
  //       var layer = new GCanvasLayer({
  //         markers: rsp.data
  //       });
  //       this.mapView.myLayer.addLayer(layer);
  //     }
  //   });
  // }

  clear() {
    onemap.pubsub.publish("clear");
  }
}
