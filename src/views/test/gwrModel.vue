<template>
    <div id="viewDiv" style="overflow-x: auto;overflow-y: auto;position: fixed">
    </div>
</template>
<script>
    import axios from "axios";
    import esriLoader from "esri-loader";
    import {MapAPI} from "@/core/config/const";
    import {constants} from "fs";

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
                results: ""
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
                                    queryTask.execute(query).then(this.doGP);
                                }
                            );
                    });
            },
            doGP(featureSet) {
                debugger;
                console.log(this.mapViewL);
                var gpUrl =
                    "http://122.112.216.247:6080/arcgis/rest/services/Servers/GwrResulr/GPServer/Model";
                mapApi.esriApi.GetGeoprocessor().then(Geoprocessor => {
                    var _this = this;
                    console.log(_this.mapViewL);
                    var Kriging_GP = new Geoprocessor(gpUrl);
                    var parms = {
                        Export_Output_6_shp: featureSet //传入的几何对象
                    };
                    Kriging_GP.submitJob(parms).then(jobinfo => {
                        if (jobinfo.jobStatus == "job-succeeded") {
                            Kriging_GP.getResultData(
                                jobinfo.jobId,
                                "GeographicallyWeightedRegression10"
                            ).then(function (results) {
                                console.log("projected points: ", results.value);
                                let GwrPoint = results.value.features;
                                function sortNumber(a,b)
                                {
                                    return a - b
                                }
                                GwrPoint.sort(sortNumber);
                                console.log(GwrPoint);
                                var length = GwrPoint.length % 7;
                                console.log(length);
                                let length2 = (GwrPoint.length - length) / 7;
                                console.log(length2);
                                let colors = ['#38a800', '#6fc400', '#b0e000', '#ffff00', '#ffaa00', '#ff5500', '#ff0000'];
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
                                console.log(GwrPoints);
                                // this.results = results.value;
                                // for (
                                //   var i = 0, length = results.value.features.length;
                                //   i != length;
                                //   ++i
                                // ) {
                                //   debugger;
                                //   var feature = features[i];
                                //   mapApi.esriApi
                                //     .GetSimpleMarkerSymbol()
                                //     .then(SimpleMarkerSymbol => {
                                //       var symbol = {
                                //         type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                                //         style: "square",
                                //         color: "blue",
                                //         size: "8px", // pixels
                                //         outline: {
                                //           // autocasts as new SimpleLineSymbol()
                                //           color: [255, 255, 0],
                                //           width: 3 // points
                                //         }
                                //       };

                                //       feature.setSymbol(symbol);
                                //       this.myMap.graphics.add(feature);
                                //     });
                                // }
                            });
                        }
                    });
                });

                //   Kriging_GP.submitJob(params).then(this.gpJobComplete);
            },
            // gpJobComplete(jobinfo) {
            //   console.log(jobinfo);
            //   debugger;
            //   if (jobinfo.jobStatus == "job-succeeded") {
            //     Kriging_GP.getResultData(
            //       jobinfo.jobId,
            //       "GeographicallyWeightedRegression10",
            //       result
            //     );
            //   }
            // },
            addResult(results) {
                console.log(results);
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

