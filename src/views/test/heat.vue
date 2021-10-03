<template>
  <div id="viewDiv">
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
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
      feature: "",
      fields: []
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
              "esri/core/urlUtils",
              "esri/config",
              "esri/Map",
              "esri/Basemap",
              "esri/views/MapView",
              "esri/layers/TileLayer",
              "esri/layers/support/Field",
              "esri/layers/FeatureLayer",
              "esri/tasks/QueryTask",
              "esri/tasks/support/Query",
              "esri/tasks/Geoprocessor",
              "esri/tasks/support/FeatureSet"
            ])
            .then(
              ([
                urlUtils,
                esriConfig,
                Map,
                Basemap,
                MapView,
                TileLayer,
                Field,
                FeatureLayer,
                QueryTask,
                Query,
                Geoprocessor,
                dom,
                on
              ]) => {
                urlUtils.addProxyRule({
                  urlPrefix: "122.112.216.247:6080",
                  proxyUrl: "http://localhost/DotNet/proxy.ashx"
                });
                esriConfig.request.corsEnabledServers.push("122.112.216.247/");

                var activeWidget = null;

                var street = new TileLayer({
                  url:
                    "http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
                });
                // var street = new TileLayer({
                //   url:
                //     "http://122.112.216.247:6080/arcgis/rest/services/Servers/Map/MapServer"
                // });
                var baseMap = new Basemap({
                  baseLayers: [street]
                });
                var map = new Map({
                  basemap: baseMap
                  // layers: [layer]
                });
                this.myMap = map;

                this.mapViewL = new MapView({
                  center: [118.2358, 32.26102],
                  container: "viewDiv",
                  map: map,
                  zoom: 13
                });

                mapApi.esriApi.GetHeatmapRenderer().then(HeatmapRenderer => {
                  var _this = this;
                  var heatmapRenderer = new HeatmapRenderer({
                    //设置渲染器
                    // field: "price",
                    colorStops: [
                      { ratio: 0.4, color: "rgba(0, 255, 0, 0)" },
                      { ratio: 0.75, color: "rgba(255, 140, 0, 1)" },
                      { ratio: 0.9, color: "rgba(255, 0,   0, 1)" }
                    ],
                    blurRadius: 8,
                    maxPixelIntensity: 230,
                    minPixelIntensity: 10
                  });
                  debugger;
                  var heatDataUrl = "js/json/housePoint1.json";
                  $.getJSON(heatDataUrl, {}, function(data, textStatus, jqXHR) {
                    //读取数据，设置点数据集
                    var features = [];
                    for (var i = 0; i < data.heatData.length; i++) {
                      var x = data.heatData[i].X;
                      var y = data.heatData[i].Y;
                      // var price = data.heatData[i].properties.Price;
                      features.push({
                        geometry: {
                          type: "point",
                          x: x,
                          y: y
                        },
                        attributes: {
                          ObjectID: i //重要！！！
                        }
                        // price: price //重要！！！
                      });
                    }

                    var featureLayer = new FeatureLayer({
                      source: features, //点数据集
                      title: "热力图",
                      objectIdField: "ObjectID", //重要！！！
                      renderer: heatmapRenderer //渲染器
                    });

                    _this.myMap.add(featureLayer);
                  });
                });
              }
            );
        });
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

