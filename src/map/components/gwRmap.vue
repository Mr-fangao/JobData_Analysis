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
          <li id="switchbasemap" @click="switchbasemap">
            <span class="icon baseLayerImg"></span>
            <span>影像</span>
          </li>
          <!-- <li class="btn" @click="onToggleLayer">
            <span class="icon layerView"></span>
            <span>图层</span>
          </li> -->
        </ul>
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
export default {
  data() {
    return {
      visible: false,
      isShow: false,
      shape: "",
      txt_input: "",
      list: [],
      dialog: false,
      pageSize: 10,
      txt_select: "",
      data: [],
      baseLayer: "",
      street: "",
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
      IsMapToolsView: false
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
    this.addLayer(mapView => {
      this.mapLoaded(mapView);
    });
    this.register();
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
        .mapEventfore()
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
      if (document.getElementsByClassName) {
        var target = document.getElementsByClassName("esri-layer-list");
        var targetName = target[0];
        if (targetName.style.display == "block") {
          targetName.style.display = "none";
        } else {
          targetName.style.display = "block";
        }
      }
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
              "esri/geometry/Extent",
              "esri/widgets/LayerList"
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
                Extent,
                LayerList,
                dom,
                on
              ]) => {
                esriConfig.request.corsEnabledServers.push("192.168.1.102/");

                var activeWidget = null;
                // var layer = new MapImageLayer({
                //   url:
                //     "http://122.112.216.247:6080/arcgis/rest/services/Servers/Map/MapServer"
                // });
                var layer = new TileLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/Servers/Map/MapServer"
                });
                this.baseLayer = layer;
                var street = new TileLayer({
                  url:
                    "	https://localhost:6443/arcgis/rest/services/ChuZhou/ChuZhouYX/MapServer",

                  visible: false
                });

                // this.street = street;
                var USALayer = new MapImageLayer({
                  url:
                    "	https://localhost:6443/arcgis/rest/services/ChuZhou/XZQH/MapServer",
                  title: "行政规划",
                  visible: false
                });

                var censusLayer = new MapImageLayer({
                  url:
                    "https://localhost:6443/arcgis/rest/services/ChuZhou/yeWuData/MapServer",
                  title: "业务数据",
                  visible: false
                });
                var baseMap = new Basemap({
                  baseLayers: [layer]
                });
                var demographicGroupLayer = new GroupLayer({
                  title: "专题图层",
                  visible: true,
                  visibilityMode: "independent",
                  layers: [USALayer, censusLayer]
                  // opacity: 0.75
                });

                var map = new Map({
                  // basemap: baseMap,
                  layers: [layer]
                });
                var ext = String(this.defaultMapExtent).split(",");
                if (ext.length > 3) {
                  console.log("extent 配置有误");
                  return false;
                }
                var zoom = parseInt(ext[2]);
                var center = {
                  x: parseFloat(ext[0]),
                  y: parseFloat(ext[1]),
                  spatialReference: this.spatialReference
                };
                this.mapview = new MapView({
                  container: "viewDiv",
                  map: map,
                  zoom: zoom,
                  center: center
                });

                this.mapview.ui.remove(["attribution", "zoom"]);
                var view = this.mapview;
                view.when(function() {
                  var layerList = new LayerList({
                    view: view
                  });
                  view.ui.add(layerList, "top-right");
                });

                this.mapview.initExtent = {
                  center: center,
                  zoom: zoom
                };
                window.mapview = this.mapview;
                callback(this.mapview);
                this.IsMapToolsView = true;
              }
            );
        });
    },
    switchbasemap() {
      if (this.baseLayer.visible) {
        this.baseLayer.visible = false;
        this.street.visible = true;
      } else {
        this.baseLayer.visible = true;
        this.street.visible = false;
      }
    },
    watchLayer() {}
  },
  components: {
    measureArea,
    measureLength,
    MapToolsView
  }
};
</script>

<style >
.esri-component esri-layer-list esri-widget esri-widget--panel {
  display: none;
  margin-right: -20px;
  max-height: 240px;
  width: 210px;
  /* margin-left: px; */
  margin-top: 15px;
}
#viewDiv {
  padding: 0;
  position: absolute;
  height: 670px;
  width: 1300px;
  background: #fcf9f2;
}

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