<template>
  <layout :style="{height:'100%'}">
    <Sider ref="side1" :width='180'>
      <sider-menu/>
    </Sider>
    <Content>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Breadcrumb>
          <Icon :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
          <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
        </Breadcrumb>
      </Header>
      <div>
        <Card style="margin: 0 auto;width: 95%;">
          <Tabs type="card">
            <TabPane label="GWR回归结果">
              <Table :columns="columns1" :data="nowData"></Table>
              <Page :total="dataCount" :page-size="pageSize" @on-change="changepage" @on-page-size-change="_nowPageSize" show-total show-elevator/>
            </TabPane>
            <TabPane label="GWR回归因子">
              <div id="viewDiv">
                <Select v-model="model1" placeholder="地价" @on-change="changeAttributes" style="width:200px;position:absolute;top:2px;right:2px">
                  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}
                  </Option>
                </Select>
                <img style="width:115px;height:140px; position: absolute;top:445px;right:8px" src="../../assets/img/lenged.png">
              </div>
            </TabPane>
          </Tabs>
          <div style="overflow: hidden">
            <Button type="primary" @click="ongo" style="float:right;margin-left:10px;">房价预测
            </Button>
            <Button type="primary" @click="onSubmit" style="float:right;">保存</Button>
          </div>
        </Card>
      </div>
      <router-view/>
    </Content>
  </layout>

  <!-- overflow-x: auto;overflow-y: auto -->
</template>
<script>
import SiderMenu from "@/views/main/siderMenu";
import axios from "axios";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
import { constants } from "fs";

export default {
  data() {
    return {
      nowData: [],
      pageSize: 10, //每页显示多少条
      dataCount: 0, //总条数
      pageCurrent: 1, //当前页
      model1: "C1_DJ",
      cityList: [
        {
          value: "C1_DJ",
          label: "地价"
        },
        {
          value: "C2_RJL",
          label: "容积率"
        },
        {
          label: "绿化率",
          value: "C3_LHL"
        },
        {
          label: "学区",
          value: "C4_SCH"
        },
        {
          label: "商场",
          value: "C5_SMAR"
        },
        {
          label: "车站",
          value: "C6_BUS"
        },
        {
          label: "公园",
          value: "C7_PARK"
        }
      ],
      columns1: [
        {
          title: "回归系数",
          align: "center",
          children: [
            {
              title: "地价",
              key: "C1_DJ",
              align: "center"
            },
            {
              title: "容积率",
              key: "C2_RJL",
              align: "center"
            },
            {
              title: "绿化率",
              key: "C3_LHL",
              align: "center"
            },
            {
              title: "学区",
              key: "C4_SCH",
              align: "center"
            },
            {
              title: "商场",
              key: "C5_SMAR",
              align: "center"
            },
            {
              title: "车站",
              key: "C6_BUS",
              align: "center"
            },
            {
              title: "公园",
              key: "C7_PARK",
              align: "center"
            }
          ]
        },
        {
          title: "Cond",
          key: "Cond",
          align: "center"
        },
        {
          title: "Intercept",
          key: "Intercept",
          align: "center"
        },
        {
          title: "LocalR2",
          key: "LocalR2",
          align: "center"
        }
      ],
      social: [],

      data1: [],
      data2: [],
      mapTileLayerLayers: "",
      TileLayerStreets: "",
      MapImageLayer: "",
      view: null,
      IsMapToolsView: false,
      from: "",
      Mymap: "",
      myMapR: "",
      mapViewL: null,
      mapViewR: null,
      left: "-100px",
      top: "-100px",
      width: 0,
      feature: "",
      res: []
    };
  },
  components: {
    SiderMenu
  },
  mounted() {
    this.handleSpinCustom();
    this.changepage();
    this.addLayerL();
    this.addLayerL1();
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
            h("div", "正在进行地理加权回归分析")
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
              "esri/layers/MapImageLayer",
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
                MapImageLayer,
                TileLayer,
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
                queryTask.execute(query).then(this.doGWRGP);
              }
            );
        });
    },
    changeAttributes() {
      debugger;
      this.addLayerL();
      this.doGP();
    },
    changepage(index) {
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.nowData = this.data1.slice(_start, _end);
    },
    _nowPageSize(index) {
      //实时获取当前需要显示的条数
      this.pageSize = index;
    },
    doGWRGP(featureSet) {
      debugger;
      var _this = this;
      var gpUrl =
        "http://122.112.216.247:6080/arcgis/rest/services/Model9/GPServer/Model5";
      mapApi.esriApi.GetGeoprocessor().then(Geoprocessor => {
        var Kriging_GP = new Geoprocessor(gpUrl);
        var parms = {
          Export_Output_6: featureSet //传入的几何对象
        };
        Kriging_GP.submitJob(parms).then(jobinfo => {
          // ;
          if (jobinfo.jobStatus == "job-succeeded") {
            // ;
            Kriging_GP.getResultData(
              jobinfo.jobId,
              "GeographicallyWeightedRegression17"
            ).then(function(results) {
              // console.log("projected points: ", results.value.features.length);
              var GwrPoint = results.value.features;

              // this.gwrPointP = GwrPoint;
              function objSort(prop1, prop2) {
                return function(obj1, obj2) {
                  var val1 = obj1[prop1][prop2];
                  var val2 = obj2[prop1][prop2];
                  if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                    val1 = Number(val1);
                    val2 = Number(val2);
                  }
                  if (val1 < val2) {
                    return -1;
                  } else if (val1 > val2) {
                    return 1;
                  } else {
                    return 0;
                  }
                };
              }

              GwrPoint.sort(objSort("attributes", _this.model1));
              console.log(GwrPoint);

              for (let i = 0; i < GwrPoint.length; i++) {
                _this.data1.push(GwrPoint[i].attributes);
                _this.dataCount = GwrPoint.length;
              }
              for (let i = 0; i < _this.pageSize; i++) {
                _this.nowData.push(GwrPoint[i].attributes);
              }

              debugger;
              // for (let j = 0; j < 10; j++) {
              //   _this.nowData.push(results.value.features[j].attributes);
              // }

              var GwrPoint = results.value.features;
              var str = JSON.stringify(GwrPoint);
              console.log(str);
              localStorage.setItem("gwrPoint", str);
              var length = GwrPoint.length % 7;
              let length2 = (GwrPoint.length - length) / 7;
              let colors = [
                "#38a800",
                "#6fc400",
                "#b0e000",
                "#ffff00",
                "#ffaa00",
                "#ff5500",
                "#ff0000"
              ];
              for (let x = 0; x < 7; x++) {
                let start = x * length2;
                let end = start + length2;
                let GwrPoints = GwrPoint.slice(start, end);
                let Pointsymbol = {
                  type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                  style: "square",
                  color: colors[x],
                  size: "8px", // pixels
                  outline: {
                    // autocasts as new SimpleLineSymbol()
                    color: colors[x],
                    width: 3 // points
                  }
                };
                GwrPoints.forEach((GwrPoints, index) => {
                  mapApi.esriApi.GetGraphic().then(Graphic => {
                    let graphics = [];
                    let graphic = new Graphic({
                      geometry: GwrPoints.geometry,
                      symbol: Pointsymbol
                    });
                    graphics.push(graphic);
                    _this.mapViewL.graphics.addMany(graphics);
                  });
                });
              }
            });
          }
        });
        setTimeout(() => {
          this.$Spin.hide();
        }, 6000);
      });
    },

    addResult(results) {
      console.log(results);
    },
    onSubmit() {
      const title = "保存成功";
      const content = "<p>保存地理加权分析数据，可以进行预测。</p>";
      this.$Modal.success({
        title: title,
        content: content
      });
    },
    ongo() {
      this.$router.push("/priceForecast");
    },
    addLayerL1() {
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
                this.myMapR = map;

                this.mapViewr = new MapView({
                  container: "map2",
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
                queryTask.execute(query).then(this.doGP1);
              }
            );
        });
    },
    doGP1(featureSet) {
      debugger;
      var gpUrl =
        "http://122.112.216.247:6080/arcgis/rest/services/Servers/gwrlastresult/GPServer/GWRModel";
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
          this.myMapR.layers.add(layer);
        });
        // Kriging_GP.getResultImage(jobinfo.jobId, "fx", imageParam, getResultImaLayer);
      } else {
      }
    }
  }
};
</script>
<style>
#viewDiv {
  padding: 0;
  margin: 0;
  height: 600px;
  width: 100%;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>

