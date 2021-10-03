<style scoped>
.layout {
  /* border: 1px solid #d7dde4; */
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
          <Icon type="md-analytics" />
          <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
          <Icon type="ios-search"></Icon>
          <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
          <Icon type="ios-settings"></Icon>
          <span>Option 3</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          Content
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>
<template>
  <Row>
    <Col span="12">2
    <div id="viewDiv">
    </div>
    </Col>
    <Col span="12">1
    <div id="viewDiv1"> </div>
    </Col>
  </Row>
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
      mapViewL: null,
      mapViewR: null,
      left: "-100px",
      top: "-100px",
      width: 0
    };
  },
  mounted() {
    this.addLayerL();
    this.addLayerR();
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
              "esri/layers/TileLayer"
            ])
            .then(([Map, Basemap, MapView, TileLayer, dom, on]) => {
              var activeWidget = null;

              var street = new TileLayer({
                url:
                  "http://122.112.216.247:6080/arcgis/rest/services/CHUZHOU/chuzhouServer/MapServer"
              });

              var baseMap = new Basemap({
                baseLayers: [street]
              });
              var map = new Map({
                basemap: baseMap
                // layers: [layer]
              });

              this.mapViewL = new MapView({
                container: "viewDiv",
                map: map
              });
              setTimeout(() => {
                this.mapViewL.on("pointer-move", e => {
                  debugger;
                  this.from = "view1";
                  let width = document.body.clientWidth / 2;
                  this.left = width + e.x - 22 + "px";
                  this.top = e.y - 22 + "px";
                });
                this.mapViewL.watch("extent", extent => {
                  if (this.from === "view1") {
                    this.mapViewR.center = extent.center;
                    this.mapViewR.zoom = this.mapViewL.zoom;
                  }
                });
              }, 500);
            });
        });
    },
    addLayerR() {
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
              "esri/layers/TileLayer"
            ])
            .then(([Map, Basemap, MapView, TileLayer, dom, on]) => {
              var activeWidget = null;

              var street = new TileLayer({
                url:
                  "http://122.112.216.247:6080/arcgis/rest/services/CHUZHOU/chuzhouServer/MapServer"
              });

              var baseMap = new Basemap({
                baseLayers: [street]
              });
              var map = new Map({
                basemap: baseMap
                // layers: [layer]
              });

              this.mapViewR = new MapView({
                container: "viewDiv1",
                map: map
              });
              setTimeout(() => {
                this.mapViewR.on("pointer-move", e => {
                  this.from = "view2";
                  this.left = e.x - 22 + "px";
                  this.top = e.y - 22 + "px";
                });
                this.mapViewR.watch("extent", extent => {
                  if (this.from === "view2") {
                    this.mapViewL.center = extent.center;
                    this.mapViewL.zoom = this.mapViewR.zoom;
                  }
                });
              }, 500);
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
  height: 1000px;
  width: 100%;
}
#viewDiv1 {
  padding: 0;
  margin: 0;
  height: 1000px;
  width: 100%;
}
</style>

