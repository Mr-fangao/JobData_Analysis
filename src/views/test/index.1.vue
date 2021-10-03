<template>
  <div id="viewDiv">
  </div>
</template>
<script>
import axios from "axios";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
import { debug } from "util";
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
      feature: ""
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
              "esri/layers/TileLayer",
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
                TileLayer,
                FeatureLayer,
                QueryTask,
                Query,
                Geoprocessor,
                dom,
                on
              ]) => {
                var activeWidget = null;
                var street = new TileLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/Servers/Map/MapServer"
                });

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
                  "http://122.112.216.247:6080/arcgis/rest/services/Servers/DJpoint/MapServer/0";

                var queryTask = new QueryTask({
                  url: gwrPOint
                });
                var query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = "OBSERVED>='3946'";
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
      debugger;
      var gpUrl =
        "http://122.112.216.247:6080/arcgis/rest/services/Servers/kingModel/GPServer/kingModel";
      mapApi.esriApi.GetGeoprocessor().then(Geoprocessor => {
        var Kriging_GP = new Geoprocessor(gpUrl);
        this.krigingGP = Kriging_GP;
        var parms = {
          DJGWR: featureSet,
          Z_value_field: "LocalR2"
          //传入的几何对象
        };
        Kriging_GP.outSpatialReference = { wkid: 102100 };
        Kriging_GP.processSpatialReference = { wkid: 102100 };
        console.log(parms);
        Kriging_GP.submitJob(parms).then(this.gpJobComplete);
      });
      //   Kriging_GP.submitJob(params).then(this.gpJobComplete);
    },
    gpJobComplete(jobinfo) {
      console.log(jobinfo);
      debugger;
      if (jobinfo.jobStatus == "job-succeeded") {
        mapApi.esriApi.GetImageParameters().then(ImageParameters => {
          var imageParams = new ImageParameters({
            format: "png32",
            imageSpatialReference: 102100
          });
          var layer = this.krigingGP.getResultMapImageLayer(jobinfo.jobId);
          layer.opacity = 0.7;
          layer.title = "克里金插值";
          this.myMap.layers.add(layer);
        });

        // Kriging_GP.getResultImage(jobinfo.jobId, "fx", imageParam, getResultImaLayer);
      } else {
        alert("任务失败");
      }
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

