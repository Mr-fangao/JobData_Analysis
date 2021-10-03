<template>
  <div>
    
    <div id="line-button" class="esri-widget esri-widget--button esri-interactive" title="测量长度">
        <span class="esri-icon-polyline"></span>
    </div>
  </div>
</template>

<script>
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";

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
              "esri/geometry/Polyline",
              "esri/geometry/geometryEngine",
              "dojo/dom",
              "dojo/on",
              "dojo/domReady!"
            ])
            .then(([Draw, Graphic, polyline, geometryEngine, dom, on]) => {
              var _this = this;
              var activeWidget = null;
              _this.view.ui.add("line-button", "top-left"); //添加绘制面按钮，自定义UI
              _this.view.when(() => {
                var draw = new Draw({
                  view: this.view
                });
                //绑定线按钮绘制事件

                //绑定面按钮绘制事件
                var drawLineButton = document.getElementById("line-button");
                drawLineButton.onclick = function() {
                  _this.view.graphics.removeAll(); //清楚之前的绘制
                  enableCreateLine(draw, this.view);
                };
              });
              //开始监听画线

              //开始监听画面
              function enableCreateLine(draw, view) {
                var action = draw.create("polyline", {
                  mode: "click"
                });
                // 获取焦点
                _this.view.focus();

                // 顶点添加事件
                action.on("vertex-add", createPolyline);

                //顶点移除事件
                action.on("vertex-remove", createPolyline);

                // 鼠标移动事件
                action.on("cursor-update", createPolyline);

                // 绘制完成事件
                action.on("draw-complete", createPolyline);
              }

              function createPolyline(event) {
                //获取所有顶点
                var vertices = event.vertices;
                //清除之前绘制
                _this.view.graphics.removeAll();
                var polyline = newPolyline(vertices);
                var graphic = createGraphic(polyline);
                _this.view.graphics.add(graphic);
     

                var lineLength = geometryEngine.planarLength(
                  polyline,
                  "meters"
                );

                if (lineLength < 0) {
                  // simplify the polyline if needed and calculate the lineLength again
                  var simplifiedpolyline = geometryEngine.simplify(polyline);
                  if (simplifiedpolyline) {
                    lineLength = geometryEngine.planarLength(
                      polyline,
                      "meters"
                    );
                  }
                }
                // var point = {
                //   type: "point",
                //   x: vertices[vertices.length - 1][0],
                //   y: vertices[vertices.length - 1][1]
                // };
                // start displaying the lineLength of the polyline
                labellineLengths(polyline, lineLength);
              }
              function newPolyline(vertices) {
                return new polyline({
                  hasZ: false,
                  hasM: false,
                  paths: vertices,
                  spatialReference: _this.view.spatialReference
                });
              }

              function createGraphic(polyline) {
                var graphic = new Graphic({
                  geometry: polyline,
                  symbol: {
                    type: "simple-line", // autocasts as new SimpleFillSymbol
                    color: "red",
                    width: 1.5,
                    style: "dash",
                    cap: "round"
                  }
                });
                return graphic;
              }

              function labellineLengths(polyline, lineLength) {
         
                var graphic = new Graphic({
                  geometry: polyline.extent.center,
                  symbol: {
                    type: "text",
                    color: "black",
                    haloColor: "black",
                    haloSize: "1px",
                    text: lineLength.toFixed(2) + " 米",
                    xoffset: 6,
                    yoffset: 6,
                    font: {
                      // autocast as Font
                      size: 15,
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
