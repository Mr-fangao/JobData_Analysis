<template>
  <layout>
    <Sider ref="side1" :width='180'>
      <sider-menu/>
    </Sider>
    <Content>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Breadcrumb>
          <Icon :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
          <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
        </Breadcrumb>
      </Header>
      <div class="animated fadeIn">
        <div id="viewDiv">
        </div>
        <div class="threeMap">
          <Button @click="go2D" icon="android-globe">二维地图</Button>
        </div>
      </div>
    </Content>
  </layout>

</template>
<script>
import SiderMenu from "@/views/main/siderMenu";
import axios from "axios";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
export default {
  data() {
    return {
      mapTileLayerLayers: "",
      TileLayerStreets: "",
      MapImageLayer: "",
      IsMapToolsView: true,
      toolsUrl: "static/map/tools.json",
      mapView: null
    };
  },
  mounted() {
    this.addLayer();
  },
  methods: {
    getGoodsList() {
      axios.get("/static/layer.json").then(res => {
        var result = res.data;
      });
    },
    addLayer() {
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
              "esri/Basemap",
              "esri/views/MapView",
              "esri/views/SceneView",
              "esri/layers/TileLayer",
              "esri/layers/FeatureLayer",
              "esri/layers/MapImageLayer",
              "dojo/dom",
              "dojo/on",
              "dojo/domReady!"
            ])
            .then(
              ([
                esriConfig,
                Map,
                Basemap,
                MapView,
                SceneView,
                TileLayer,
                FeatureLayer,
                MapImageLayer,
                dom,
                on
              ]) => {
                var street = new TileLayer({
                  url:
                    "http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
                });
                var housingLayer = new TileLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/Servers/Map/MapServer",
                  id: "ny-housing",
                  opacity: 0.9
                });
                var renderer = {
                  type: "simple", // autocasts as new SimpleRenderer()
                  symbol: {
                    type: "polygon-3d", // autocasts as new PolygonSymbol3D()
                    symbolLayers: [
                      {
                        type: "extrude", // autocasts as new ExtrudeSymbol3DLayer()
                        material: { color: [203, 177, 152] }
                      }
                    ]
                  },
                  visualVariables: [
                    {
                      type: "size",
                      field: "Floor"
                    }
                  ]
                };

                var buildingLayer = new FeatureLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/jinzhu2/MapServer/0",
                  opacity: 0.9,
                  renderer: renderer,
                  outFields: ["Floor"],
                  popupTemplate: {
                    title: "{Floor}",
                    content: "地块编号:{Floor}<br/>地上层数:{Floor}", // autocasts as new PopupTemplate()
                    fieldInfos: [
                      {
                        fieldName: "Floor",
                        format: {
                          digitSeparator: true,
                          places: 0
                        }
                      }
                    ]
                  }
                });

                var baseMap = new Basemap({
                  baseLayers: [street, housingLayer]
                });
                var layer = new TileLayer({
                  url:
                    "http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"
                });
                // var layer = new MapImageLayer({
                //   url:
                //     "https://192.168.122.13:6443/arcgis/rest/services/WGS84/sx/MapServer"
                // });

                var map = new Map({
                  basemap: baseMap,
                  layers: [buildingLayer, layer]
                });

                var view = new SceneView({
                  container: "viewDiv",
                  map: map
                });

                view.on("layerview-create", function(event) {
                  if (event.layer.id === "ny-housing") {
                    // Explore the properties of the population layer's layer view here
                    console.log(
                      "LayerView for male population created!",
                      event.layerView
                    );
                  }
                  if (event.layer.id === "streets") {
                    // Explore the properties of the transportation layer's layer view here
                    // Explore the properties of the transportation layer's layer view here
                    console.log(
                      "LayerView for streets created!",
                      event.layerView
                    );
                  }
                });

                view.when(function() {
                  housingLayer.when(function() {
                    view.goTo(housingLayer.fullExtent);
                  });
                });

                var streetsLayerToggle = dom.byId("streetsLayer");
              }
            );
        });
    },
    go2D() {
      this.$router.push("/locationResources");
    }
  },
  components: {
    SiderMenu
  }
};
</script>
<style>
.threeMap {
  position: absolute;
  right: 0;
  top: 104px;
}
.left {
  width: 410px;
  height: 150px;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.ivu-layout-sider {
  height: 1000px;
}
</style>
