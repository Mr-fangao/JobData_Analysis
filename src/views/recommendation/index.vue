<template>
  <div class="layout">
    <Layout :style="{height:'100%'}">
      <!--<Sider ref="side1" :width='180'>-->
        <!--<sider-menu/>-->
      <!--</Sider>-->
      <Content>
        <!-- <Header :style="{padding: 0}" class="layout-header-bar">
          <Breadcrumb>
            <Icon :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
            <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
          </Breadcrumb>
        </Header> -->
        <router-view/>
      </Content>
    </Layout>
  </div>
</template>

<script>
import SiderMenu from "@/views/main/siderMenu";
import factor from "./components/factor.vue";

export default {
  mounted() {
    var roleid = JSON.parse(sessionStorage.getItem("roleId"));
    if (roleid === "R0001" || roleid === "R0002") {
      this.show = true;
    } else {
      this.show = false;
    }
    this.w_height = window.innerHeight;
    window.onresize = () => {
      this.w_height = window.innerHeight;
    };
  },
  data() {
    return { show: true };
  },
  components: {
    factor,
    SiderMenu
  }
};
</script>

<style lang="less" scoped>
// .ivu-layout {
//   height: 1024px;
// }
// .wripper {
//   height: 100%;
//   width: 100%;
//   padding-top: 20px;
//   /*background: url(../../assets/img/house.jpg)  no-repeat ;*/
// }
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow-y: hidden;
  height: 698px;
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
