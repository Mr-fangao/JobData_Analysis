<template>
  <div>
    <div id="viewDiv" region="center">
      <div class="smallTools">
        <MapToolsView :mapView="mapview" v-if="IsMapToolsView" :url="toolsUrl"></MapToolsView>
      </div>
      <div class="smallMapbar">
        <ul>
          <li class="btn">
            <span class="icon baseLayer" @click="switch3d"></span>
            <span>3D</span>
          </li>
        </ul>
        <layerView :active="active" />
      </div>
    </div>
  </div>
</template><script>
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
import Register from "@/map/api/register";
import Server from "@/core/server";
import { services } from "@/core/config/services";
import measureArea from "@/map/components/measureArea";
import measureLength from "@/map/components/measureLength";
import MapToolsView from "@/map/components/MapToolsView";
import GDrawSketch from "@/map/api/4+/GDrawSketch";
import GConvertGeometry from "@/map/api/js/convert/GConvertGeometry";
import GMapSymbol from "@/map/api/js/GMapSymbol";
import layerView from "./layerView";
import housePoint from "@/vuex/store";
export default {
  data() {
    return {
      visible: false,
      active: false,
      pts: [],
      isShow: false,
      shape: "",
      txt_input: "",
      list: [],
      dialog: false,
      pageSize: 10,
      txt_select: "",
      data: [],
      baseLayer: "",
      firstPoint: "",
      street: "",
      transition: "",
      routeLayer: "",
      routeParams: "",
      houseSymbol: "",
      stopSymbol: "",
      routeSymbol: "",
      routeResult: "",
      routeTask: "",
      isExtent: true,
      isPopup: true,
      isPan: true,
      defaultMapExtent: "13175030.812,3804452.901,2",
      spatialReference: "",
      toolsUrl: "js/json/common_tools.json",
      mapTileLayerLayers: "",
      TileLayerStreets: "",
      MapImageLayer: "",
      mapview: null,
      serverPolygon: "",
      IsMapToolsView: false,
      break1: 500,
      break2: 1000,
      break3: 1500
    };
  },
  computed: {
    height() {
      return document.body.clientHeight - 200;
    }
  },
  watch: {
    data() {
      this.onPageChange(1);
    }
  },
  mounted() {
    this.spatialReference = "";
    // this.addLayer(mapView => {
    //   this.mapLoaded(mapView);
    // });
    this.addLayer();
    // this.register();
    // setTimeout(() => {
    //   this.showGraphics();
    // }, 600);
  },
  methods: {
    switch3d() {
      this.$router.push("/3dmap");
    },
    register() {
      //接收外部结果
      onemap.pubsub.subscribe("showQuickSearchResult", arg => {
        this.isExtent = false;
        this.isPan = false;
        this.isPopup = arg.isPopup || true;
        this.data = arg.list;
        this.visible = true;
      });
      onemap.pubsub.subscribe("hideQuickSearchResult", arg => {
        this.visible = false;
        this.data = [];
      });

      //clear
      onemap.pubsub.subscribe("clear", arg => {
        this.visible = false;
        this.data = [];
      });
    },
    mapLoaded(mapView) {
      new Register(mapView)
        .mapEvent()
        .mapAPI()
        .parentMapAPI();
      if (this.isIQuery) {
        new GIQuery({
          mapView: mapView,
          isPopup: this.isIPopup
        }).toggle();
      }
    },
    onToggleLayer() {
      debugger;
      this.active = !this.active;
    },

    addLayer(callback) {
      esriLoader
        .loadScript({
          url: MapAPI.js,
          css: MapAPI.css
        })
        .then(r => {
          esriLoader
            .loadModules([
              "esri/config",
              "esri/Map",
              "esri/layers/GroupLayer",
              "esri/Basemap",
              "esri/views/MapView",
              "esri/layers/MapImageLayer",
              "esri/layers/TileLayer",
              "esri/tasks/ServiceAreaTask",
              "esri/layers/FeatureLayer",
              "esri/tasks/support/DataLayer",
              "esri/tasks/support/ServiceAreaParameters",
              "esri/tasks/support/ServiceAreaSolveResult",
              "esri/symbols/SimpleLineSymbol",
              "esri/symbols/SimpleFillSymbol",
              "esri/Color",
              "esri/layers/GraphicsLayer",
              "esri/geometry/Extent",
              "esri/widgets/LayerList",
              "esri/Graphic",
              "esri/tasks/support/FeatureSet",
              "dojo/on"
            ])
            .then(
              ([
                esriConfig,
                Map,
                GroupLayer,
                Basemap,
                MapView,
                MapImageLayer,
                TileLayer,
                ServiceAreaTask,
                FeatureLayer,
                DataLayer,
                ServiceAreaParameters,
                ServiceAreaSolveResult,
                SimpleLineSymbol,
                SimpleFillSymbol,
                Color,
                GraphicsLayer,
                Extent,
                LayerList,
                Graphic,
                FeatureSet,
                dom,
                on
              ]) => {
                esriConfig.request.corsEnabledServers.push(
                  "http://122.112.216.247:6080"
                );
                var activeWidget = null;

                var tilelayer = new TileLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/Servers/Map/MapServer"
                });
                var layer = new FeatureLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/serverTest/MapServer/8"
                });
                this.baseLayer = layer;

                var baseMap = new Basemap({
                  baseLayers: [layer]
                });

                var map = new Map({
                  basemap: baseMap,
                  layers: [layer,tilelayer]
                });
                this.map = map;
                this.mapview = new MapView({
                  container: "viewDiv",
                  map: map
                });

                this.mapview.ui.remove(["attribution", "zoom"]);
                var view = this.mapview;
                var stops = new DataLayer();
                stops.geometry = view.extent;
                stops.name = "Hospitals";
                console.log(map);
                // var houseSymbol = GMapSymbol.gethousePointSymbol({});
                // this.houseSymbol = houseSymbol;
                // var stopSymbol = {
                //   type: "simple-marker",
                //   style: "cross",
                //   size: 15,
                //   outline: {
                //     width: 4
                //   }
                // };
                // this.stopSymbol = stopSymbol;
                // var routeSymbol = {
                //   type: "simple-line",

                //   color: [82, 152, 255, 1],
                //   width: 5
                // };
                // this.routeSymbol = routeSymbol;
                var serverParams = new ServiceAreaParameters({
                  facilities: {
                    type: "layer",
                    layerName: "Hospitals",
                    impedanceAttribute:"Time"
                    // where: "BEDS > 100"
                  },
                  defaultBreaks: [this.break1, this.break2, this.break3]
                  // outSpatialReference: {
                  //   wkid: 3857
                  // }
                });

                var serviceAreaTask = new ServiceAreaTask({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/serverTest/NAServer/ServiceArea"
                });
                serviceAreaTask.solve(serverParams).then(
                  solveResult => {
                    // console.log(solveResult.serviceAreaPolygons);
                    var AreaPolygons = solveResult.serviceAreaPolygons;
                    console.log(AreaPolygons);
                    var polygonSymbol = new SimpleFillSymbol(
                      "solid",
                      new SimpleLineSymbol("solid", new Color([232, 104, 80])),
                      new Color([232, 104, 80, 0.25])
                    );
                    AreaPolygons.forEach((AreaPolygons, index) => {
                      debugger;
                      // var symbol = GMapSymbol.getSymbol(geometry);
                      var graphics = [];
                      var graphic = new Graphic({
                        geometry: AreaPolygons.geometry,
                        symbol: polygonSymbol
                      });
                      graphics.push(graphic);
                      view.graphics.addMany(graphics);
                    });
                    // AreaPolygons.forEach(function(e) {
                    //   debugger;
                    //   var polygonSymbol = new SimpleFillSymbol(
                    //     "solid",
                    //     new SimpleLineSymbol(
                    //       "solid",
                    //       new Color([232, 104, 80])
                    //     ),
                    //     new Color([232, 104, 80, 0.25])
                    //   );
                    //   e.setSymbol(polygonSymbol);
                    //   console.log(e);
                    //   debugger;
                    //   // var graphic = new Graphic({
                    //   //   geometry: e
                    //   // });
                    //   // graphic.setSymbol(polygonSymbol);
                    //   map.graphics.add(graphic);
                    //   console.log(map);
                    // });
                    // AreaPolygons.forEach(
                    //   solveResult.serviceAreaPolygons,
                    //   function(serviceArea) {
                    //     debugger;
                    //     serviceArea.setSymbol(polygonSymbol);
                    //     this.map.graphics.add(serviceArea);
                    //   }
                    // );
                  },
                  function(err) {
                    console.log(err.message);
                  }
                );

                // onemap.pubsub.publish("drawPolygonByGeoJson", {
                //   list: this.serverPolygon,
                //   extent: true
                // });
              }
            );

          // this.routeTask = routeTask;
          // var ext = String(this.defaultMapExtent).split(",");
          // if (ext.length > 3) {
          //   console.log("extent 配置有误");
          //   return false;
          // }
          // var zoom = parseInt(ext[2]);
          // var center = {
          //   x: parseFloat(ext[0]),
          //   y: parseFloat(ext[1]),
          //   spatialReference: this.spatialReference
          // };

          // view.when(function() {
          //   var layerList = new LayerList({
          //     view: view
          //   });
          //   view.ui.add(layerList, "top-right");
          // });
          // this.mapview.initExtent = {
          //   center: center,
          //   zoom: zoom
          // };
          window.mapview = this.mapview;
          // callback(this.mapview);
          this.IsMapToolsView = true;
        });
    },
    // switchbasemap() {
    //   if (this.baseLayer.visible) {
    //     this.baseLayer.visible = false;
    //     this.street.visible = true;
    //   } else {
    //     this.baseLayer.visible = true;
    //     this.street.visible = false;
    //   }
    // },
    watchLayer() {}
    // addLastStop() {
    //   var lastpoint = mapApi.convert.toGeometryByWKT.parse({
    //     wkt: housePoint.state.shapePoi,
    //     spatialReference: window.mapview.spatialReference
    //   });
    //   this.transition = lastpoint;
    //   var _this = this;
    //   lastpoint.then(data => {
    //     mapApi.esriApi.GetGraphic().then(Graphic => {
    //       var stop = new Graphic({
    //         geometry: data,
    //         symbol: this.houseSymbol
    //       });
    //       this.routeLayer.add(stop);
    //       this.routeParams.stops.features.push(stop);
    //       if (this.routeParams.stops.features.length >= 2) {
    //         this.routeTask
    //           .solve(this.routeParams)
    //           .then(this.showRoute, this.logError);
    //       }
    //     });
    //   });
    // },
    // addPoint(value) {
    //   var firstpoint = mapApi.convert.toGeometryByWKT.parse({
    //     wkt: value.Shape,
    //     spatialReference: window.mapview.spatialReference
    //   });
    //   var _this = this;
    //   firstpoint.then(data => {
    //     mapApi.esriApi.GetGraphic().then(Graphic => {
    //       `  `;
    //       var stop = new Graphic({
    //         geometry: data,
    //         symbol: this.stopSymbol
    //       });
    //       this.routeLayer.add(stop);

    //       this.routeParams.stops.features.push(stop);

    //       this.addLastStop();
    //     });
    //   });
    // },
    // addStop(value) {
    //   debugger;
    //   if (this.routeLayer.graphics.length > 2) {
    //     this.routeLayer.removeAll();
    //     this.addPoint(value);
    //   } else {
    //     this.addPoint(value);
    //   }
    // },
    // showRoute(data) {
    //   debugger;
    //   var routeResult = data.routeResults[0].route;
    //   routeResult.symbol = this.routeSymbol;
    //   this.routeResult = routeResult;
    //   this.routeLayer.add(routeResult);
    //   console.log(this.routeLayer);
    //   console.log(this.routeLayer);
    // },
    // logError(error) {
    //   console.error(error);
    // }
  },
  components: {
    measureArea,
    measureLength,
    MapToolsView,
    layerView
  }
};
</script>

<style >
.main .container-fluid {
  padding: 0 0px;
}
.breadcrumb {
  position: relative;
  margin-bottom: 0.01rem;
  border-bottom: 1px solid #cfd8dc;
}
#layerToggle {
  top: 20px;
  right: 20px;
  position: absolute;
  z-index: 99;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  opacity: 0.75;
}
.baidu {
  position: absolute;
  right: 0;
  top: 115px;
}

.list-wrapper {
  padding: 10px;
  overflow-y: auto;
}
</style>