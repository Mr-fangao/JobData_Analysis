<template>
  <div id="viewDiv" region="center">
    <div class="tools">
      <MapToolsView :mapView="mapview" v-if="IsMapToolsView" :url="toolsUrl"></MapToolsView>
    </div>
  </div>
</template>
<script>
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
import Item from "./components/item";
import Register from "@/map/api/register";
import Server from "@/core/server";
import { services } from "@/core/config/services";
import measureArea from "@/map/components/measureArea";
import measureLength from "@/map/components/measureLength";
import MapToolsView from "@/map/components/MapToolsView";
import GDrawSketch from "@/map/api/4+/GDrawSketch";
import GConvertGeometry from "@/map/api/js/convert/GConvertGeometry";
import MapLayerView from "@/map/components/MapLayerView";
export default {
  data() {
    return {
      loading: false,
      visible: false,
      isShow: false,
      shape: "",
      txt_input: "",
      list: [],
      dialog: false,
      pageSize: 10,
      txt_select: "小区",
      data: [],
      baseLayer: "",
      street: "",
      isExtent: true,
      isPopup: true,
      isPan: true,
      cityList: [
        {
          value: "小区",
          label: "小区"
        }
        // {
        //   value: "单位区",
        //   label: "单位区"
        // }
      ],
      defaultMapExtent: "13391592.41591351,3404268.145961022,3",
      spatialReference: "",
      toolsUrl: "js/json/common_tools.json",
      mapTileLayerLayers: "",
      TileLayerStreets: "",
      MapImageLayer: "",
      mapview: null,
      IsMapToolsView: false,
      isLayerViewShow: false
    };
  },
  computed: {
    height() {
      return document.body.clientHeight - 500;
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
    onControlLayerView() {
      this.isLayerViewShow = !this.isLayerViewShow;
      debugger;
      this.$refs.layerView.showLayerView();
    },
    switch3d() {
      this.$router.push("/3dmap");
    },
    onClosePanel() {
      this.visible = false;
      this.txt_input = "";
      this.data = [];
      onemap.pubsub.publish("clear");
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
        // this.pa;
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
                // esriConfig.request.corsEnabledServers.push("122.112.216.247/");

                var activeWidget = null;

                var layer = new TileLayer({
                  url:
                    "http://localhost:6080/arcgis/rest/services/chouz/Map/MapServer"
                });
                this.baseLayer = layer;

                // var street = new TileLayer({
                //   url:
                //     "https://localhost:6443/arcgis/rest/services/ChuZhou/ChuZhouYX/MapServer",
                //   visible: false
                // });

                // this.street = street;
                // var USALayer = new MapImageLayer({
                //   url:
                //     "http://122.112.216.247:6080/arcgis/rest/services/CHUZHOU/odqllj/MapServer",
                //   title: "od成本",
                //   visible: false
                // });

                // var censusLayer = new MapImageLayer({
                //   url:
                //     "http://122.112.216.247:6080/arcgis/rest/services/CHUZHOU/zhonguexuequ/MapServer",
                //   title: "学区数据",
                //   opacity: 0.8,
                //   visible: false
                // });
                var baseMap = new Basemap({
                  baseLayers: [layer]
                });
                // var demographicGroupLayer = new GroupLayer({
                //   title: "专题图层",
                //   visible: true,
                //   visibilityMode: "independent",
                //   layers: [USALayer, censusLayer]
                //   //
                // });

                var map = new Map({
                  basemap: baseMap
                  // layers: [demographicGroupLayer]
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
                // view.when(function() {
                //   var layerList = new LayerList({
                //     view: view
                //   });
                //   view.ui.add(layerList, "top-right");
                // });

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
    onSearchClick() {
      Server.get({
        url: services.houseQuery,
        params: {
          name: this.txt_input
        }
      }).then(
        rsp => {
          var _this = this;
          if (rsp.status === 1) {
            _this.data = rsp.data;
            _this.list = rsp.data;
          } else {
            _this.data = [];
          }
          _this.visible = true;
        },
        error => {
          this.$Message.warning(error.message);
        }
      );
    },
    onPageChange(page) {
      let data = [];
      for (
        var i = (page - 1) * this.pageSize, len = this.data.length, item;
        i < len, (item = this.data[i]);
        i++
      ) {
        if (i < page * this.pageSize) {
          item.pIndex = "p" + i;
          data.push(item);
        } else {
          break;
        }
      }
      this.list = data;
      this.showGraphics();
    },
    onItemClick(data) {
      this.$emit("on-item-click", data);
      onemap.pubsub.publish("showQuickClick", data);
      //循环定位
      for (var i = 0, g; (g = this.mapview.graphics.items[i]); i++) {
        if (g.attributes.id === data.pIndex) {
          var geometry = null;
          if (g.geometry.type === "point") {
            geometry = g.geometry;
          } else {
            var extent = g.geometry.extent.clone();
            geometry = extent.expand(2);
          }
          this.mapview.goTo(geometry);
          var attributes = g.attributes;
          mapApi.popup.show({
            mapView: this.mapview,
            res: attributes.attr,
            centerPt: attributes.centerPt
          });
          break;
        }
      }
    },
    showGraphics() {
      this.mapview.graphics.removeAll();
      if (this.list === 0) return;
      onemap.pubsub.publish("drawPolygonByList", {
        list: this.list,
        extent: this.isExtent
      });
      onemap.pubsub.publish("drawMarkerByList", {
        list: this.list,
        popup: this.isPopup,
        pan: this.isPan
      });
    },
    watchLayer() {}
  },
  components: {
    measureArea,
    measureLength,
    MapToolsView,
    Item,
    MapLayerView
  }
};
</script>
<style lang="less">
#viewDiv {
  padding: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background: #fcf9f2;
}

.main .container-fluid {
  padding: 0 0px;
}
.search {
  position: absolute;
  top: 2px;
  left: 40px;
}
.wrapperBox {
  position: relative;
  top: 5px;
}
.list-wrapper {
  padding: 10px;
  overflow-y: auto;
}
.esri-layer-list__item-title {
  margin-left: 5px;
  padding-left: 5px;
  margin-top: 5px;
}

#switchbasemap {
  float: left;
  padding: 0 10px 0 4px;
  height: 30px;
  line-height: 30px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  cursor: pointer;
}
.ivu-input-group-prepend .ivu-select-selection {
  border-radius: 0;
  margin: -5px -1px;
  border-color: #19be6b;
}
.ivu-input {
  border-radius: 0;
  border-color: #19be6b;
  padding-right: 75px;
}
.ivu-input-wrapper > i {
  width: 40px;
  font-size: 16px;
  background: #19be6b;
  color: white;
  cursor: pointer;
}
.close-wrapper {
  z-index: 2;
  position: relative;
  float: right;
  top: -22px;
  right: 40px;
  width: 30px;
  text-align: center;
  border-left: 1px solid #eeeeee;
  cursor: pointer;
}
.ivu-input-icon {
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  text-align: center;
  color: #808695;
  position: absolute;
  right: 0;
  z-index: 3;
}
/* .esri-popup--is-docked-top-right .esri-popup__main-container {
  max-height: 80%;
  margin-top: 40px;
  margin-right: 45px;
} */
</style>