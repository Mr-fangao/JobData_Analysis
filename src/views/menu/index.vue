<template>
  <div class="home">
    <div class="home-body">
      <Menu v-if="IsMenu"></Menu>
      <Content>
        <router-view/>
      </Content>
    </div>
    <div class="home-body1">
      <Menu1 v-if="IsMenu1"></Menu1>
      <Content>
        <router-view/>
      </Content>
    </div>
  </div>

</template>
<script>
import Menu from "./components";
import Menu1 from "./components/userIndex";
export default {
  data() {
    return {
      IsMenu: false,
      IsMenu1: false
    };
  },

  mounted() {
    debugger;
    this.roleid = JSON.parse(sessionStorage.getItem("roleId"));
    var target = document.getElementsByClassName("home-body");
    if (this.roleid == "R0002") {
      this.IsMenu = true;
    } else {
      this.IsMenu1 = true;
      target[0].style.display = "none";
    }
    console.log(this.user);
  },
  components: {
    Menu,
    Menu1
  }
};
</script>

<style lang="less" scoped>
.home {
  height: 667px;
  background: url("../../assets/img/logo/home_bg.png");
}
</style>
