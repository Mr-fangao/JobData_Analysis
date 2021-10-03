<template>
<div class="onemap-toolsBar" v-if="visible">
    <!-- <div id="line-button" class="esri-widget esri-widget--button esri-interactive" title="测量长度" @click="measureLength"></div>
    <div id="area-button" class="esri-widget esri-widget--button esri-interactive" title="测量面积" @click="measureArea"></div> -->
        <span class="icon expand"  :class="{active:!active}" @click="onExpand"></span>
        <div v-show="active">
            <ul v-for="(toolBar,index) in toolsBarList" :key="index">
                <li v-for="(tool,index1) in toolBar.children" :key="index1" @click="onToolEvent(tool)">
                    <span class="icon" :class="[tool.icon || tool.toolKey,{active:tool.toolKey===toolKey}]" :title="tool.name"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Server from "@/core/server";
import GMapTools from "../api/4+/GMapTools";
export default {
  props: ["mapView", "url"],
  data() {
    return {
      visible: false,
      active: false,
      toolKey: "",
      toolsBarList: []
    };
  },
  mounted() {
    Server.get({
      url: this.url
    }).then(rsp => {
      this.toolsBarList = rsp.data.toolbars;
      this.visible = true;
    });

    this.gMapTools = new GMapTools({
      mapView: this.mapView
    });
  },
  methods: {
    measureLength() {
      this.gMapTools.measureLength();
    },
    measureArea() {
      this.gMapTools.measureArea();
    },
    onExpand() {
      this.active = !this.active;
    },
    onToolEvent(tool) {
      this.toolKey = tool.toolKey;
      if (this.event && this.event.indexOf(this.toolKey) > -1) {
        this.$emit(this.toolKey);
        return false;
      }
      if (this.gMapTools[this.toolKey]) {
        this.gMapTools[this.toolKey]();
      } else {
        console.log(this.toolKey + "事件未定义");
      }
    }
  }
};
</script>

<style>
.onemap-toolsBar {
  width: 30px;
  background: transparent;
  opacity: 1;
}
</style>
