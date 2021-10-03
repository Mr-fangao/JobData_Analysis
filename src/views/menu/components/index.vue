<template>
  <div class="menu">
		<!-- 就业统计 -->
		<router-link to="/recommendation/factor">
		  <div class="item-view">
		    <div class="item bg3">
		      <div class="icon-wrap">
		        <i class="icon-fzjc"></i>
		      </div>
		      <div class="label">
		        <span>就业统计</span>
		      </div>
		    </div>
		  </div>
		</router-link>
		
		<!-- 技能分析 -->
    <router-link to="/data">
      <div class="item-view">
        <div class="item bg0">
          <div class="icon-wrap">
            <i class="icon-chart"></i>
          </div>
          <div class="label">
            <span>技能分析</span>
          </div>
        </div>
      </div>
    </router-link>
		
		<!-- 空间查询 -->
    <router-link to="/infoSearch">
      <div class="item-view">
        <div class="item bg1">
          <div class="icon-wrap">
            <i class="icon-cgzs"></i>
          </div>
          <div class="label">
            <span>空间查询</span>
          </div>
        </div>
      </div>
    </router-link>

		<!-- 技能分析 -->
    <router-link to="/recommendation/housingPreference">
    <div class="item-view">
      <div class="item bg2">
        <div class="icon-wrap">
        <i class="icon-ssjc"></i>
      </div>
        <div class="label">
          <span>技能分析</span>
        </div>
      </div>
    </div>
    </router-link>
		
		<!-- 用户管理 -->
    <div @click="jump1()" class="item-view">
      <div class="item bg6">
        <div class="icon-wrap">
          <i class="icon-pgkh"></i>
        </div>
        <div class="label">
          <span>用户管理</span>
        </div>
      </div>
    </div>
		
		<!-- 个人中心 -->
    <router-link to="/personalcenter">
      <div class="item-view">
        <div class="item bg4">
          <div class="icon-wrap">
            <i class="icon-ywgl"></i>
          </div>
          <div class="label">
            <span>个人中心</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
export default {
  data() {
    return {
      name: "personal",
      user: ""
    };
  },
  methods: {
    // tips() {
    //   this.$Message.info({
    //     content: "需完善个人信息，才可使用就业推荐功能",
    //     duration: 2
    //   });
    // },
    // jump() {
    //   this.$router.push("/recommendation");
    // },
    // jump1() {
    //   var _this = this;
    //   _this.user = JSON.parse(sessionStorage.getItem("userAccount"));
    //   if (_this.user === "superAdmin") {
    //     this.$router.push("/userManager");
    //   } else if (_this.user === "admin") {
    //     this.$router.push("/userManager");
    //   } else {
    //     this.$Message.warning("用户不是管理员，没有权限使用该功能");
    //   }
    // },
  }
};
</script>

