<template>
  <div class="layerManager" v-if="isLayerActive">
    <tabs v-model="tabName">
      <span class="icon layerClose" style="margin-top: 4px;" @click="closeAllLayer" title="关闭全部图层" slot="extra"></span>
      <tab-pane name="layer" label="图层">
        <section :style="{maxHeight:maxHeight}" v-if="visible" v-show="tabName==='layer'">
          <!-- <tree-view ref="tree" :mapView="mapView" :treeData="layerList" :flatState="flatState" @on-check-change="onCheckChange" @on-group-check-change="onGroupCheckChange" /> -->
        </section>
      </tab-pane>
      <section :style="{maxHeight:maxHeight}" v-if="visible" v-show="tabName==='favour'">
        <!-- <tree-view ref="treeFav" :mapView="mapView" :treeData="favLayerList" :flatState="flatState" @on-check-change="onCheckChange" /> -->
      </section>
      </tab-pane>
      <tab-pane name="recent" v-if="!isOut" label="最近">
        <section :style="{maxHeight:maxHeight}" v-if="visible" v-show="tabName==='recent'">
          <!-- <tree-view ref="treeRecent" :mapView="mapView" :treeData="recentLayerList" :flatState="flatState" @on-check-change="onCheckChange" /> -->
        </section>
      </tab-pane>
    </tabs>
  </div>
</template>

<script>
// import Server from "@/core/server";
// import GLayer from "../api/4+/GLayer";
// import TreeView from "./tree/tree";
import { Icon, Tabs, TabPane } from "iview";
// import TreeStore from "./tree/model/tree-store";
export default {
  props: {
    mapView: {
      type: Object,
      default: null
    },
    layerOpt: {
      type: Array,
      default: null
    },
    isOut: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      tabName: "layer",
      isLayerActive: false,
      maxHeight: "570px",
      layerList: [],
      flatState: [],
      favLayerList: [],
      recentLayerList: []
    };
  },
  watch: {
    // flatState: {
    //   deep: true,
    //   handler() {
    //     this.favLayerList = this.flatState
    //       .filter(obj => obj.node.isFavoriteLayer)
    //       .map(obj => obj.node);
    //     this.recentLayerList = this.flatState
    //       .filter(
    //         obj => obj.node.isRecentLayer && obj.node.isGroupChecked === false
    //       )
    //       .map(obj => obj.node);
    //   }
    // }
  },
  computed: {
    // userAccount() {
    //   return parent.parent.geone.getUserInfo().userAccount || "";
    // }
  },
  mounted() {
    //maplayerview
    this.$root.eventHub.$on("controlMapLayerView", isLayerActive => {
      this.maxHeight = window.innerHeight - 150 + "px";
      //服务获取
      // if (this.layerList.length === 0) {
      //   var mapLayer = parent.geone.getModuleByName("mapLayer");
      //   console.log(mapLayer);
      //   if (mapLayer !== null) {
      //     Server.get({
      //       url: mapLayer.serviceUrl
      //     }).then(rsp => {
      //       console.log(rsp);
      //       var treeStore = (this.treeStore = new TreeStore(
      //         rsp.data.mapLayers,
      //         this.userAccount
      //       ));
      //       this.layerList = treeStore.stateTree;
      //       console.log(this.layerList);
      //       this.flatState = treeStore.flatTree;
      //       console.log(this.flatState);
      //       this.visible = true;
      //       this.onInitLayer();
      //     });
      //   } else {
      //     console.log("can not find mapLayer module");
      //   }
      // }
      this.isLayerActive = isLayerActive;
    });
    //是否是外部传入数据
    // if (this.isOut && this.layerOpt !== null) {
    //   var treeStore = (this.treeStore = new TreeStore(
    //     this.layerOpt,
    //     this.userAccount
    //   ));
    //   this.layerList = treeStore.stateTree;
    //   this.flatState = treeStore.flatTree;
    //   this.visible = true;
    // }
    //layerids
    // this.userRecentLayerIds =
    localStorage.getItem(`${this.userAccount}-recent-layer`) || "";
  },
  methods: {
    // onInitLayer() {
    //   //显示初始化设定显示的图层
    //   setTimeout(e => {
    //     var checkNodes = this.flatState
    //      .filter(
    //         obj => obj.node.isChecked && obj.node.isGroupChecked === false
    //       )
    //       .map(obj => obj.node);
    //     console.log(checkNodes);
    //     checkNodes.forEach(node => {
    //       if (node.isGroupChecked === false) {
    //         this.onCheckChange({ checked: true, node });
    //       }
    //     });
    //   }, 200);
    // },
    // onCheckChange({ checked, node }) {
    //   debugger;
    //   //图层显示关闭
    //   this.$emit("node-checked", { isChecked: checked, node: node });
    //   if (checked) {
    //     GLayer.addLayer(this.mapView.map, node);
    //     if (node.isSupportIQuery) {
    //       this.mapView.IQueryLayerIds.push(node.id);
    //     }

    //     if (this.isOut === false) {
    //       //写入本地操作日志--10个图层 10*36+(10-1)
    //       var currentLayerIds = (this.userRecentLayerIds = `${node.id},${
    //         this.userRecentLayerIds
    //       }`.substring(0, 369));
    //       localStorage.setItem(
    //         `${this.userAccount}-recent-layer`,
    //         currentLayerIds
    //       );
    //     }
    //   } else {
    //     GLayer.removeLayer(this.mapView.map, node.id);
    //     if (node.isSupportIQuery) {
    //       this.removeLayerId(node.id);
    //     }
    //   }
    //   //控制图例显示
    //   if (node.legend && node.legend !== "") {
    //     this.$root.eventHub.$emit("showLegend", {
    //       show: checked,
    //       label: node.label,
    //       name: node.legend
    //     });
    //   }
    // },
    // onGroupCheckChange({ checked, nodes }) {
    //   debugger;
    //   nodes.forEach(node => {
    //     this.onCheckChange({ checked: checked, node });
    //   });
    // },
    // closeAllLayer() {
    //   this.mapView.IQueryLayerIds = [];
    //   var checkNodes = this.$refs.tree.getCheckedNodes();
    //   checkNodes.forEach(node => {
    //     if (node.isGroupChecked === false) {
    //       this.onCheckChange({ checked: false, node });
    //     }
    //     this.$set(node, "isChecked", false);
    //   });
    //   //刷新节点
    // },
    rebuildTree() {},
    showLayerView() {
      debugger;
      this.isLayerActive = !this.isLayerActive;
    }
    // removeLayerId(id) {
    //   var idx = Array.indexOf(this.mapView.IQueryLayerIds, id);
    //   this.mapView.IQueryLayerIds.splice(idx, 1);
    // }
  },
  computed:{
    
  },
  components: {
    // TreeView,
    Icon,
    Tabs,
    TabPane
  }
};
</script>

<style>
</style>
