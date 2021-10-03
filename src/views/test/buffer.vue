<template>
  <div id="viewDiv">
  </div>
</template>
<script>
import axios from "axios";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
import { constants } from "fs";

export default {
  data() {
    return {
      mapTileLayerLayers: "",
      TileLayerStreets: "",
      MapImageLayer: "",
      view: null,
      IsMapToolsView: false,
      from: "",
      Mymap: "",
      mapViewL: null,
      mapViewR: null,
      left: "-100px",
      top: "-100px",
      width: 0,
      feature: "",
      results: ""
    };
  },
  mounted() {
    this.addLayerL();
  },
  methods: {
    addLayerL() {
      esriLoader
        .loadScript({
          url: MapAPI.js,
          css: MapAPI.css
        })
        .then(r => {
          esriLoader
            .loadModules([
              "esri/Map",
              "esri/Basemap",
              "esri/views/MapView",
              "esri/layers/MapImageLayer",
              "esri/layers/TileLayer",
              "esri/tasks/support/LinearUnit",
              "esri/layers/FeatureLayer",
              "esri/tasks/QueryTask",
              "esri/tasks/support/Query",
              "esri/tasks/Geoprocessor",
              "esri/tasks/support/FeatureSet"
            ])
            .then(
              ([
                Map,
                Basemap,
                MapView,
                MapImageLayer,
                TileLayer,
                LinearUnit,
                FeatureLayer,
                QueryTask,
                Query,
                Geoprocessor,
                dom,
                on
              ]) => {
                var activeWidget = null;

                // var street = new MapImageLayer({
                //   url:
                //     "http://122.112.216.247:6080/arcgis/rest/services/Server/MAP/MapServer"
                // });
                var street = new TileLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/Servers/Map/MapServer"
                });
                var dis = new LinearUnit({
                  distance: 1000,
                  units: "esriMeters"
                });
                this.distance = dis;
                var baseMap = new Basemap({
                  baseLayers: [street]
                });
                var map = new Map({
                  basemap: baseMap
                  // layers: [layer]
                });
                this.myMap = map;

                this.mapViewL = new MapView({
                  container: "viewDiv",
                  map: map
                });
                var gwrPOint =
                  "http://122.112.216.247:6080/arcgis/rest/services/Servers/gwrfeature/MapServer/0";

                var queryTask = new QueryTask({
                  url: gwrPOint
                });
                var query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = "PRICE>='3946'";
                // queryTask.execute(query, this.doGP);
                // queryTask.execute(query).then(function(results) {
                //   this.doGP(results);
                // });

                queryTask.execute(query).then(this.doGP);
              }
            );
        });
    },
    doGP(featureSet) {
      var gpUrl =
        "http://122.112.216.247:6080/arcgis/rest/services/Servers/buffer/GPServer/buffer";
      mapApi.esriApi.GetGeoprocessor().then(Geoprocessor => {
        var _this = this;
        var Kriging_GP = new Geoprocessor(gpUrl);
        var parms = {
          SDE_DJGWR: featureSet,
          Distance__value_or_field_: this.distance
        };
        Kriging_GP.submitJob(parms).then(jobinfo => {
          if (jobinfo.jobStatus == "job-succeeded") {
            Kriging_GP.getResultData(
              jobinfo.jobId,
              "Output_Feature_Class"
            ).then(function(results) {
              console.log("projected points: ", results.value);
              var GwrPoint = results.value.features;
              var polygonSymbol = {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [51, 51, 204, 0.9],
                style: "solid",
                outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: "blue",
                  width: 1
                }
              };
              GwrPoint.forEach((GwrPoint, index) => {
                mapApi.esriApi.GetGraphic().then(Graphic => {
                  let graphics = [];
                  let graphic = new Graphic({
                    geometry: GwrPoint.geometry,
                    symbol: polygonSymbol
                  });
                  graphics.push(graphic);
                  console.log(graphics);
                  _this.mapViewL.graphics.addMany(graphics);
                });
              });

              console.log(GwrPoints);
            });
          }
        });
      });

      //   Kriging_GP.submitJob(params).then(this.gpJobComplete);
    },
    // gpJobComplete(jobinfo) {
    //   console.log(jobinfo);
    //   debugger;
    //   if (jobinfo.jobStatus == "job-succeeded") {
    //     Kriging_GP.getResultData(
    //       jobinfo.jobId,
    //       "GeographicallyWeightedRegression10",
    //       result
    //     );
    //   }
    // },
    addResult(results) {
      console.log(results);
    }
  },
  data() {
    return {
      social: []
    };
  }
};
</script>
<style>
#viewDiv {
  padding: 0;
  margin: 0;
  height: 800px;
  width: 100%;
}
</style>

