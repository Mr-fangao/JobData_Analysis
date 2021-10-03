<template>
  <div class="layout">
    <Layout :style="{height:'100%'}">
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
        <div style="width:100%;height:880px">
          <div id="viewDiv" style=" padding: 0; margin: 0; height: 860px;width: 100%;;background-color: #FCF9F2"></div>
        </div>
      </Content>
    </Layout>
  </div>

</template>
<script>
import SiderMenu from "@/views/main/siderMenu";
import axios from "axios";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
import { debug } from "util";

export default {
  data() {
    return {
      model1: "C1_DJ",
      cityList: [
        {
          value: "C1_DJ",
          label: "地价"
        },
        {
          value: "C2_RJL",
          label: "容积率"
        }
      ],
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
      social: []
    };
  },
  mounted() {
    this.addLayerL();
  },
  methods: {
    handleSpinCustom() {
      this.$Spin.show({
        render: h => {
          return h("div", [
            h("Icon", {
              class: "demo-spin-icon-load",
              props: {
                type: "ios-loading",
                size: 35
              }
            }),
            h("div", "正在对房价进行克里金插值，请等待")
          ]);
        }
      });
    },
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
                this.handleSpinCustom();
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
                // this.mapview.ui.remove(["attribution", "zoom"]);
              }
            );
        });
    },
    doGP(featureSet) {
      var gpUrl =
        "http://122.112.216.247:6080/arcgis/rest/services/Servers/KING/GPServer/Last";
      mapApi.esriApi.GetGeoprocessor().then(Geoprocessor => {
        var Kriging_GP = new Geoprocessor(gpUrl);
        this.krigingGP = Kriging_GP;
        var parms = {
          SDE_DJGWR: featureSet,
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
      if (jobinfo.jobStatus == "job-succeeded") {
        mapApi.esriApi.GetImageParameters().then(ImageParameters => {
          var imageParams = new ImageParameters({
            format: "png32",
            imageSpatialReference: 102100
          });
          var layer = this.krigingGP.getResultMapImageLayer(jobinfo.jobId);
          layer.opacity = 0.3;
          layer.title = "克里金插值";
          this.myMap.layers.add(layer);
          this.$Spin.hide();
        });
      } else {
        alert("任务失败");
      }
    }
  },
  components: {
    SiderMenu
  }
};
</script>
<style lang="less">
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
#viewDiv {
  padding: 0;
  margin: 0;
  height: 800px;
  width: 100%;
}
</style>

