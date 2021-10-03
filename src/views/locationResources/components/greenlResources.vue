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
                <div style="width: 1300px; margin: 0 auto;margin-top: 30px;border: 1px solid #dcdee2">
                    <Tabs>
                        <TabPane label="绿地">
                            <div id="map1" style="width:100%;height: 100%;border: 1px solid #dcdee2; position: absolute;">
                                <smallMapView></smallMapView>
                            </div>
                        </TabPane>
                        <TabPane label="服务区">
                            <div id="map2" style="width:100%;height: 100%;position: absolute;background-color: #FCF9F2"></div>
                            <div style="position: relative;float: right; width: 250px;top: 420px;background-color: #FCF9F2;padding: 10px;opacity: 0.8">
                                <Col span="20">
                                <Slider v-model="break1" max="500" show-input input-size="small" @on-change="getArea"></Slider>
                                </Col>
                                <Col span="4">
                                <p style="margin: 7px">米</p>
                                </Col>
                                <Col span="20">
                                <Slider v-model="break2" max="1000" show-input input-size="small" @on-change="getArea"></Slider>
                                </Col>
                                <Col span="4">
                                <p style="margin: 7px">米</p>
                                </Col>
                                <Col span="20">
                                <Slider v-model="break3" max="1500" show-input input-size="small" @on-change="getArea"></Slider>
                                </Col>
                                <Col span="4">
                                <p style="margin: 7px">米</p>
                                </Col>
                            </div>
                        </TabPane>
                        <TabPane label="缓冲区">
                            <div id="map3" style="width:100%;height: 800px;position: absolute;background-color: #FCF9F2"></div>
                            <div style="position: relative;float: right; width: 250px;margin: 10px;padding-top: 500px;z-index: 9999">
                                <Col span="2">
                                <p style="margin: 7px">0</p>
                                </Col>
                                <Col span="18">
                                <Slider v-model="value1" max="1500" show-input input-size="small" @on-change="getDis"></Slider>
                                </Col>
                                <Col span="4">
                                <p style="margin: 7px">米</p>
                                </Col>
                            </div>
                        </TabPane>
                        <TabPane label="可达性">
                            <div class="map4">
                                <Table :columns="columns1" stripe :data="data1" height="550"></Table>
                            </div>
                            <div style="padding-top: 50px;position: relative;float: right; z-index: 9999;">
                                <CheckboxGroup>
                                    <Checkbox label="引力模型"></Checkbox>
                                    <br>
                                    <Checkbox label="引力模型"></Checkbox>
                                    <br>
                                    <Checkbox label="两步移动"></Checkbox>
                                    <br>
                                    <Checkbox label="两步移动"></Checkbox>
                                </CheckboxGroup>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    </div>
</template>

<script>
import SiderMenu from "@/views/main/siderMenu";
import smallMapView from "@/map/components/smallMapView";
import serverArea from "@/map/components/serverArea";
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
import GMapSymbol from "@/map/api/js/GMapSymbol";
import housePoint from "@/vuex/store";

export default {
  created() {
    Server.get({
      url: services.getEA,
      params: {}
    }).then(rsp => {
      var _this = this;
      debugger;
      if (rsp.status === 1) {
        _this.data1 = rsp.data;
      }
    });
  },
  data() {
    return {
      value1: 500,
      break1: 300,
      break2: 800,
      break3: 1200,
      columns1: [
        {
          title: "小区",
          key: "houseName",
          align: "center"
        },
        {
          title: "小区到教育资源可达性",
          key: "accessibilityLevel",
          align: "center"
        }
      ],
      data1: []
    };
  },
  mounted() {
    this.addLayer2();
    this.addLayer3();
  },

  methods: {
    addLayer2() {
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
              "esri/tasks/ServiceAreaTask",
              "esri/layers/FeatureLayer",
              "esri/tasks/support/DataLayer",
              "esri/tasks/support/ServiceAreaParameters",
              "esri/tasks/support/ServiceAreaSolveResult",
              "esri/symbols/SimpleLineSymbol",
              "esri/symbols/SimpleFillSymbol",
              "esri/Color",
              "esri/layers/GraphicsLayer",
              "esri/geometry/Extent",
              "esri/widgets/LayerList",
              "esri/Graphic",
              "esri/tasks/support/FeatureSet",
              "dojo/on"
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
                ServiceAreaTask,
                FeatureLayer,
                DataLayer,
                ServiceAreaParameters,
                ServiceAreaSolveResult,
                SimpleLineSymbol,
                SimpleFillSymbol,
                Color,
                GraphicsLayer,
                Extent,
                LayerList,
                Graphic,
                FeatureSet,
                dom,
                on
              ]) => {
                esriConfig.request.corsEnabledServers.push(
                  "http://122.112.216.247:6080"
                );
                var activeWidget = null;

                var tilelayer = new TileLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/Servers/Map/MapServer"
                });
                var layer = new FeatureLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/serverTest/MapServer/8"
                });
                this.baseLayer = tilelayer;

                var baseMap = new Basemap({
                  baseLayers: [tilelayer]
                });

                var map = new Map({
                  basemap: baseMap,
                  layers: [tilelayer, layer]
                });
                this.map = map;
                this.mapview = new MapView({
                  container: "map2",
                  map: map
                });

                this.mapview.ui.remove(["attribution", "zoom"]);
                var view = this.mapview;
                var stops = new DataLayer();
                stops.geometry = view.extent;
                stops.name = "Hospitals";
                console.log(map);
                // var houseSymbol = GMapSymbol.gethousePointSymbol({});
                // this.houseSymbol = houseSymbol;
                // var stopSymbol = {
                //   type: "simple-marker",
                //   style: "cross",
                //   size: 15,
                //   outline: {
                //     width: 4
                //   }
                // };
                // this.stopSymbol = stopSymbol;
                // var routeSymbol = {
                //   type: "simple-line",

                //   color: [82, 152, 255, 1],
                //   width: 5
                // };
                // this.routeSymbol = routeSymbol;
                var serverParams = new ServiceAreaParameters({
                  facilities: {
                    type: "layer",
                    layerName: "Hospitals"
                    // where: "BEDS > 100"
                  },
                  defaultBreaks: [this.break1, this.break2, this.break3]
                  // outSpatialReference: {
                  //   wkid: 3857
                  // }
                });

                var serviceAreaTask = new ServiceAreaTask({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/serverTest/NAServer/ServiceArea"
                });
                serviceAreaTask.solve(serverParams).then(
                  solveResult => {
                    // console.log(solveResult.serviceAreaPolygons);
                    var AreaPolygons = solveResult.serviceAreaPolygons;
                    console.log(AreaPolygons);
                    var polygonSymbol = new SimpleFillSymbol(
                      "solid",
                      new SimpleLineSymbol("solid", new Color([232, 104, 80])),
                      new Color([232, 104, 80, 0.25])
                    );
                    AreaPolygons.forEach((AreaPolygons, index) => {
                      // var symbol = GMapSymbol.getSymbol(geometry);
                      var graphics = [];
                      var graphic = new Graphic({
                        geometry: AreaPolygons.geometry,
                        symbol: polygonSymbol
                      });
                      graphics.push(graphic);
                      view.graphics.addMany(graphics);
                    });
                    // AreaPolygons.forEach(function(e) {
                    //   var polygonSymbol = new SimpleFillSymbol(
                    //     "solid",
                    //     new SimpleLineSymbol(
                    //       "solid",
                    //       new Color([232, 104, 80])
                    //     ),
                    //     new Color([232, 104, 80, 0.25])
                    //   );
                    //   e.setSymbol(polygonSymbol);
                    //   console.log(e);
                    //   debugger;
                    //   // var graphic = new Graphic({
                    //   //   geometry: e
                    //   // });
                    //   // graphic.setSymbol(polygonSymbol);
                    //   map.graphics.add(graphic);
                    //   console.log(map);
                    // });
                    // AreaPolygons.forEach(
                    //   solveResult.serviceAreaPolygons,
                    //   function(serviceArea) {
                    //     debugger;
                    //     serviceArea.setSymbol(polygonSymbol);
                    //     this.map.graphics.add(serviceArea);
                    //   }
                    // );
                  },
                  function(err) {
                    console.log(err.message);
                  }
                );

                // onemap.pubsub.publish("drawPolygonByGeoJson", {
                //   list: this.serverPolygon,
                //   extent: true
                // });
              }
            );

          // this.routeTask = routeTask;
          // var ext = String(this.defaultMapExtent).split(",");
          // if (ext.length > 3) {
          //   console.log("extent 配置有误");
          //   return false;
          // }
          // var zoom = parseInt(ext[2]);
          // var center = {
          //   x: parseFloat(ext[0]),
          //   y: parseFloat(ext[1]),
          //   spatialReference: this.spatialReference
          // };

          // view.when(function() {
          //   var layerList = new LayerList({
          //     view: view
          //   });
          //   view.ui.add(layerList, "top-right");
          // });
          // this.mapview.initExtent = {
          //   center: center,
          //   zoom: zoom
          // };
          window.mapview = this.mapview;
          // callback(this.mapview);
          this.IsMapToolsView = true;
        });
    },
    getArea() {
      this.addLayer2();
    },
    getDis() {
      this.addLayer3();
    },
    addLayer3() {
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
              "esri/tasks/support/LinearUnit",
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
                LinearUnit,
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
                var dis = new LinearUnit({
                  distance: this.value1,
                  units: "esriMeters"
                });
                this.distance = dis;
                var baseMap = new Basemap({
                  baseLayers: [street]
                });
                var map = new Map({
                  basemap: baseMap
                  // layers: [layer]
                });
                this.myMap = map;

                this.mapViewL = new MapView({
                  container: "map3",
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

                queryTask.execute(query).then(this.doGP);
              }
            );
        });
    },
    doGP(featureSet) {
      var gpUrl =
        "http://122.112.216.247:6080/arcgis/rest/services/Servers/buffer/GPServer/buffer";
      mapApi.esriApi.GetGeoprocessor().then(Geoprocessor => {
        var _this = this;
        var Kriging_GP = new Geoprocessor(gpUrl);
        var parms = {
          SDE_DJGWR: featureSet,
          Distance__value_or_field_: this.distance
        };
        Kriging_GP.submitJob(parms).then(jobinfo => {
          if (jobinfo.jobStatus == "job-succeeded") {
            Kriging_GP.getResultData(
              jobinfo.jobId,
              "Output_Feature_Class"
            ).then(function(results) {
              console.log("projected points: ", results.value);
              var GwrPoint = results.value.features;
              var polygonSymbol = {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [51, 51, 204, 0.3],
                style: "solid",
                outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: "blue",
                  width: 0.5
                }
              };
              GwrPoint.forEach((GwrPoint, index) => {
                mapApi.esriApi.GetGraphic().then(Graphic => {
                  let graphics = [];
                  let graphic = new Graphic({
                    geometry: GwrPoint.geometry,
                    symbol: polygonSymbol
                  });
                  graphics.push(graphic);
                  console.log(graphics);
                  _this.mapViewL.graphics.addMany(graphics);
                });
              });

              console.log(GwrPoints);
            });
          }
        });
      });

      //   Kriging_GP.submitJob(params).then(this.gpJobComplete);
    }
  },
  components: {
    SiderMenu,
    smallMapView,
    serverArea
  }
};
</script>

<style lang="less">
.ivu-tabs-tabpane {
  height: 550px;
}
.ivu-tabs-bar {
  margin-bottom: 0;
}
#tab {
  width: 80%;
  border: 1px solid #dcdee2;
  margin: 0 auto;
}
#tab h3 {
  margin: 0;
  padding: 0;
  font-size: 14px;
  float: left;
  right: 5px;
  width: 60px;
  height: 24px;
  line-height: 24px;
  text-align: center;
}
#tab div {
  clear: both;
  font-size: 14px;
  /*padding: 20px 0 0 20px;*/
  display: none;
}
#tab h3.active {
  /*background: #cccc00;*/
}
#tab div.content {
  display: block;
  /*background: #cccc00;*/
}

.layout {
  //   border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow-y: hidden;
  height: 1000px;
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
