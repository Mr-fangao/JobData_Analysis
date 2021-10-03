<template>
	<!-- 头部的下拉菜单 -->
	<div class="menu">
		<div id="nothing"></div>
		
		<router-link to="/recommendation">
			<div class="item-viewuser top3">
				<div class="itemuser bg2">
					<div class="icon-wrap">
						<Icon type="md-search" :size="75"/>
					</div>
					<div class="label">
						<span>职位搜索</span>
					</div>
				</div>
			</div>
		</router-link>
		
		<router-link to="/compareHouse">
			<div class="item-viewuser top3">
				<div class="itemuser bg0">
					<div class="icon-wrap">
						<icon type="md-speedometer" :size="75" />
					</div>
					<div class="label">
						<span>就业统计</span>
					</div>
				</div>
			</div>
		</router-link>
		
		<router-link to="/infoSearch">
			<div class="item-viewuser top3">
				<div class="itemuser bg1">
					<div class="icon-wrap">
						<icon type="md-pin" :size="75" />
					</div>
					<div class="label">
						<span>空间查询</span>
					</div>
				</div>
			</div>
		</router-link>
		
		<router-link to="/data">
			<div class="item-viewuser bot1">
				<div class="itemuser bg3">
					<div class="icon-wrap">
						<Icon type="md-calculator" :size="75"/>
					</div>
					<div class="label">
						<span>技能分析</span>
					</div>
				</div>
			</div>
		</router-link>
	 
		<router-link to="/userManager">
			<div class="item-viewuser bot2">
				<div class="itemuser bg5">
					<div class="icon-wrap">
						<icon type="md-globe" :size="75" />
					</div>
					<div class="label">
						<span>专题制图</span>
					</div>
				</div>
			</div>
		</router-link>
		
		<router-link to="/personalcenter">
			<div class="item-viewuser">
				<div class="itemuser bg4">
					<div class="icon-wrap">
						<icon type="md-globe" :size="75" />
					</div>
					<div class="label">
						<span>功能待定</span>
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
  methods: {}
};
</script>

<style scoped="scoped">
	#nothing{
		height: 35px;
		width: 100%;
	}
</style>