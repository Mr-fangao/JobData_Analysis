<template>
  <div id="viewDiv">
  </div>
</template>
<script>
import axios from "axios";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
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
              "esri/layers/MapImageLayer",
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
                FeatureLayer,
                QueryTask,
                Query,
                Geoprocessor,
                dom,
                on
              ]) => {
                var activeWidget = null;

                var street = new MapImageLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/Server/MAP/MapServer"
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
                  "http://122.112.216.247:6080/arcgis/rest/services/Server/FEATURELAYE/FeatureServer/0";

                var queryTask = new QueryTask({
                  url: gwrPOint
                });
                var query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = "PRICE>='8000'";
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
        "http://122.112.216.247:6080/arcgis/rest/services/Server/noRaster/GPServer/Model1";
      mapApi.esriApi.GetGeoprocessor().then(Geoprocessor => {  
        alert("任务失败");
        var Kriging_GP = new Geoprocessor(gpUrl);
        var parms = {
          SDE_GWRTEST: featureSet //传入的几何对象
        };
        console.log(parms);
        Kriging_GP.execute(parms).then(this.gpJobComplete);
      });

      //   Kriging_GP.submitJob(params).then(this.gpJobComplete);
    },
    gpJobComplete(jobinfo) {
      console.log(jobinfo);
      debugger;
      // if (jobinfo.jobStatus == "job-succeeded") {
      //   // var imageParam = new ImageParameters();
      //   // imageParam.imageSpatialReference = new SpatialReference(102100);
      //   // imageParam.transparent = true;
      //   var imageParams = new ImageParameters({
      //     format: "png32",
      //     imageSpatialReference: spatialReference_ID
      //   });

      //   // Kriging_GP.getResultImage(jobinfo.jobId, "fx", imageParam, getResultImaLayer);
      //   var layer = Kriging_GP.getResultMapImageLayer(jobinfo.jobId);
      //   layer.opacity = 0.7;
      //   layer.title = "克里金插值";
      //   this.myMap.layers.add(layer);
      // } else {
      //   alert("任务失败");
      // }
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

