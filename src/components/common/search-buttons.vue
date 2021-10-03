<template>
  <div class="search-btn-container">
    <Button class="search-btn-primay" type="success" icon="md-search" @click="onSearch" v-if="showSearch">{{searchText}}</Button>
    <Button class="search-btn-primay" type="success" icon="md-close" @click="onReset" v-if="showReset">{{resetText}}</Button>
    <Button class="search-btn-primay" type="success" icon="md-refresh" @click="onRefresh" v-if="showRefresh">{{refreshText}}</Button>
    <!-- <Button class="search-btn-primay" type="primary" icon="md-add" @click="onAdd" v-if="showAdd">{{addText}}</Button> -->
  </div>
</template>

<script>
import { Button } from "iview";
export default {
  props: {
    showSearch: {type: Boolean,default: true},
    showReset: {type: Boolean,default: false},
    showRefresh: {type: Boolean,default: true},
    showAdd: {type: Boolean,default: true},
    searchText: {type: String,default: "查询"},
    resetText: {type: String,default: "重置"},
    refreshText: {type: String,default: "刷新"},
    addText: {type: String,default: "新建"}
  },
  methods: {
    onSearch() {this.$emit("on-search");},
    onRefresh() {this.$emit("on-refresh");},
    onAdd() {this.$emit("on-add");}
  }
};
</script>

<style lang="less" scoped>
.search-btn-container {
  display: inline-block;
  .search-btn-primay {margin-right: 3px;}
}
</style>
