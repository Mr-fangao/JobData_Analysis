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
          url: "https://js.arcgis.com/3.23/init.js",
          css: "https://js.arcgis.com/3.23/esri/css/esri.css"
        })
        .then(r => {
          esriLoader
            .loadModules([
              "esri/map",
              "esri/renderers/HeatmapRenderer",
              // "esri/views/HeatmapRenderer",
              "dojo/domReady!"
              // "esri/layers/support/Field",
              // "esri/layers/FeatureLayer",
              // "esri/tasks/QueryTask",
              // "esri/tasks/support/Query",
              // "esri/tasks/Geoprocessor",
              // "esri/tasks/support/FeatureSet"
            ])
            .then(([Map, HeatmapRenderer, // MapImageLayer,
              // Field,
              // FeatureLayer,
              // QueryTask,
              // Query,
              // Geoprocessor,
              dom, on]) => {
              map = new Map("map", {
                zoom: 8,
                // maxZoom: 8,
                // minZoom: 8,
                center: [120.243, 29.056],
                logo: false
              });

              var tiledUrl =
                "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer";

              var TiledLayer = new esri.layers.ArcGISTiledMapServiceLayer(
                tiledUrl
              );

              map.addLayer(TiledLayer);

              var layerDefinition = {
                geometryType: "esriGeometryPoint",
                fields: [
                  {
                    name: "num",
                    type: "esriFieldTypeInteger",
                    alias: "num"
                  }
                ]
              };
              var featureCollection = {
                layerDefinition: layerDefinition,
                featureSet: null
              };
              //创建FeatureLayer图层
              var featureLayer = new esri.layers.FeatureLayer(
                featureCollection,
                {
                  mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,
                  outFields: ["*"],
                  opacity: 1
                }
              );
              debugger;
              var heatmapRenderer = new HeatmapRenderer({
                field: "num",
                colors: [
                  "rgba(255, 0, 0, 0)",
                  "rgb(0, 255, 0)",
                  "rgb(255, 255, 0)",
                  "rgb(255, 0, 0)"
                ],
                blurRadius: 12
                // maxPixelIntensity: 20,
                // minPixelIntensity: 2
              });
              featureLayer.setRenderer(heatmapRenderer); //heatmapRendererhtml中创建的渲染器
              map.addLayer(featureLayer);

              var heatDataUrl = "https://lxqjss.github.io/data/heatJson2.json";
              $.getJSON(heatDataUrl, {}, function(data, textStatus, jqXHR) {
                for (var i = 0; i < data.heatData.length; i++) {
                  var x = data.heatData[i].lng;
                  var y = data.heatData[i].lat;
                  var point = new esri.geometry.Point(
                    x,
                    y,
                    new esri.SpatialReference({
                      wkid: 4326
                    })
                  ); //初始化起点
                  var graphic = new esri.Graphic(point);
                  graphic.setAttributes({
                    num: Number(data.heatData[i].num)
                  });
                  featureLayer.add(graphic);
                }
              });
            });
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

