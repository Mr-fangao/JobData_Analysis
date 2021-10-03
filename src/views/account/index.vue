<template>
  <div>
    <Layout :style="{height:'100%'}"> <Content> <router-view/> </Content> </Layout>
  </div>
</template>
<script>
import SiderMenu from "@/views/main/siderMenu";
export default {
  data() {
    return { show: true,isCollapsed: false,path: "" };
  },
  mounted() {
    var roleid = JSON.parse(sessionStorage.getItem("roleId"));
    if (roleid === "R0001" || roleid === "R0002") {
      this.show = true;
    } else {
      this.show = false;
    }
  },
  components: {SiderMenu},
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  watch: {$route: "getPath"},
  methods: {}
};
</script>

 <style lang="less" scoped>
.layout {background: #f5f7f9;position: relative;border-radius: 4px;overflow: hidden;}
.layout-header-bar {background: #fff;box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);}
.-logo-left {width: 90%;height: 30px;background: #5b6270;border-radius: 3px;margin: 15px auto;}
.menu-icon {transition: all 0.3s;}
.rotate-icon {transform: rotate(-90deg);}
.menu-item span {display: inline-block;overflow: hidden;width: 69px;text-overflow: ellipsis;white-space: nowrap;vertical-align: bottom;transition: width 0.2s ease 0.2s;}
.menu-item i {transform: translateX(0px);transition: font-size 0.2s ease, transform 0.2s ease;vertical-align: middle;font-size: 16px;}
.collapsed-menu span {width: 0px;transition: width 0.2s ease;}
.collapsed-menu i {transform: translateX(5px);transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;vertical-align: middle;font-size: 22px;}
.group-panel-box {
  &.blue {.panel-title {background: #19be6b;}.panel-line {background: #19be6b;}}
  .panel-title {float: left;padding: 0 10px;height: 30px;line-height: 30px;color: white;font-size: 14px;margin-left: 10px;clear: both;}
  .panel-line {height: 2px;clear: both;}
}
.chartImage {position: relative;left: 0;float: right;top: -51px;cursor: pointer;}
.slelectInput {width: 200px;float: right;}
.data-view {
  padding: 20px;
  height: 2000px;
  .group-header {height: 20px;}
  .ivu-row {
    .left {padding-right: 10px;}
    .right {padding-left: 10px;}
    .chart {height: 400px;width: 100%;}
    .card-box {
      .card-tools {
        span {float: left;}
        .ivu-select {
          float: left;margin: 4px 20px 4px 5px;width: 150px;
          .ivu-select-selection {border-radius: 0;}
        }
      }
    }
  }
}
</style>
