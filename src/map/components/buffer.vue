<template>
  <div>
    <div id="area-button" class="esri-widget esri-widget--button esri-interactive" title="缓冲区分析">
        <span class="esri-icon-polygon"></span>
    </div>
  </div>
</template>

<script>
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/const";

export default {
  props: ["view"],
  data() {
    return {};
  },
  mounted() {
    this.tools();

  },
  methods: {
    tools() {
      esriLoader
        .loadScript({
          url: MapAPI.js,
          css: MapAPI.css
        })
        .then(r => {
          esriLoader
            .loadModules([
              "esri/views/2d/draw/Draw",
              "esri/Graphic",
              "esri/geometry/Polygon",
              "esri/geometry/geometryEngine",
              "dojo/dom",
              "dojo/on",
              "dojo/domReady!"
            ])
            .then(([Draw, Graphic, Polygon, geometryEngine, dom, on]) => {
              var _this = this;
              var activeWidget = null;
              _this.view.ui.add("area-button", "top-left"); //添加绘制面按钮，自定义UI
              _this.view.when(() => {
                var draw = new Draw({
                  view: this.view
                });
                //绑定线按钮绘制事件

                //绑定面按钮绘制事件
                var drawAreaButton = document.getElementById("area-button");
                drawAreaButton.onclick = () => {
                  _this.view.graphics.removeAll(); //清楚之前的绘制
                  enableCreateArea(draw, this.view);
                };
              });
              //开始监听画线

              //开始监听画面
              function enableCreateArea(draw, view) {
                var action = draw.create("polygon", {
                  mode: "click" //点击方式加点
                });
                // 获取焦点
                view.focus();

                // 顶点添加事件
                action.on("vertex-add", createPolygon);

                //顶点移除事件
                action.on("vertex-remove", createPolygon);

                // 鼠标移动事件
                action.on("cursor-update", createPolygon);

                // 绘制完成事件
                action.on("draw-complete", createPolygon);
              }

              function createPolygon(event) {
                //获取所有顶点
                var vertices = event.vertices;
                //清除之前绘制
                _this.view.graphics.removeAll();
                var polygon = newPolygon(vertices);
                var graphic = createGraphic(polygon);
                _this.view.graphics.add(graphic);
                var area = geometryEngine.planarArea(
                  polygon,
                  "square-kilometers"
                );
                if (area < 0) {
                  // simplify the polygon if needed and calculate the area again
                  var simplifiedPolygon = geometryEngine.simplify(polygon);
                  if (simplifiedPolygon) {
                    area = geometryEngine.planarArea(
                      simplifiedPolygon,
                      "square-kilometers"
                    );
                  }
                }
                // start displaying the area of the polygon
                labelAreas(polygon, area);
              }
              function newPolygon(vertices) {
                return new Polygon({
                  rings: vertices,
                  spatialReference: _this.view.spatialReference
                });
              }

              function createGraphic(polygon) {
                var graphic = new Graphic({
                  geometry: polygon,
                  symbol: {
                    type: "simple-fill", // autocasts as SimpleFillSymbol
                    color: [102, 0, 255, 0.15],
                    outline: {
                      // autocasts as SimpleLineSymbol
                      color: "red",
                      style: "dash",
                      width: 1
                    }
                  }
                });
                return graphic;
              }

              function labelAreas(geom, area) {
                var graphic = new Graphic({
                  geometry: geom.centroid,
                  symbol: {
                    type: "text",
                    color: "white",
                    haloColor: "black",
                    haloSize: "1px",
                    text: area.toFixed(2) + " 平方公里",
                    xoffset: 3,
                    yoffset: 3,
                    font: {
                      // autocast as Font
                      size: 14,
                      family: "sans-serif"
                    }
                  }
                });
                _this.view.graphics.add(graphic);
              }
            });
        });
    }
  }
};
</script>

<style lang="less" >
</style>
