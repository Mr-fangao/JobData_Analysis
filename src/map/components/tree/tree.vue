<template>
    <ul>
      <tree-node 
        v-for="(item,i) in treeData" 
        :key="i" 
        :data="item"
        :mapView="mapView"></tree-node>
    </ul>
</template>

<script>
import TreeNode from "./tree-node";
export default {
  name: "Tree",
  props: {
    flatState: {
      type: Array,
      default() {
        return [];
      }
    },
    treeData: {
      type: Array,
      default() {
        return [];
      }
    },
    mapView: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {
    this.$on("on-check", this.handleCheck);
    this.$on("on-group-check", this.handleGroupCheck);
    this.$on("on-favorite", this.handleFavorite);
  },
  methods: {
    handleCheck({ checked, nodeKey }) {
      const node = this.flatState[nodeKey].node;
      this.$set(node, "isChecked", checked);
      this.$set(node, "isRecentLayer", true);
      const change = {
        checked: checked,
        node: node
      };
      this.$emit("on-check-change", change);
    },
    handleGroupCheck({ checked, nodeKey }) {
      //更新下面节点
      const node = this.flatState[nodeKey].node;
      this.$set(node, "isChecked", checked);
      this.updateTreeDown(node, { isChecked: checked, isRecentLayer: true });
      this.$emit("on-group-check-change", {
        checked: checked,
        nodes: node.children
      });
    },
    handleFavorite({ checked, nodeKey }) {
      const node = this.flatState[nodeKey].node;
      this.$set(node, "isFavoriteLayer", checked);
    },
    getCheckedNodes() {
      return this.flatState
        .filter(obj => obj.node.isChecked)
        .map(obj => obj.node);
    },
    updateTreeDown(node, changes = {}) {
      for (let key in changes) {
        this.$set(node, key, changes[key]);
      }
      if (node.children) {
        node.children.forEach(child => {
          this.updateTreeDown(child, changes);
        });
      }
    }
  },
  components: {
    TreeNode
  }
};
</script>

<style>

</style>
