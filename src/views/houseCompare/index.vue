<template>
	<Layout :height="w_height-55">
		<Sider ref="side1" :width='180'>
			<sider-menu />
		</Sider>
		<Content>
			<Calculator></Calculator>
			<router-view />
		</Content>
	</Layout>
</template>
<script>
	import Calculator from "./components/Calculator";
	import SiderMenu from "@/views/main/siderMenu";
	import {computeh} from "@/core/computeh";
	import MapView from "@/map/components/MapView";
	export default {
		components: {SiderMenu},
		mixins: [computeh],
		methods: {
			openCompare() {this.$root.Bus.$emit("eventCompare");},
			openCalculator() {this.$root.Bus.$emit("eventCalculator");}
		},
		mounted() {},
		data() {
			return {
				map: true,Result: false
			};
		},
		components: {
			MapView,Calculator
		}
	};
</script>
<style lang="less" scoped>
	.ivu-layout {height: 100%;}
	.tabs {width: 380px;height: 400px;}
	.main .container-fluid {padding: 0 0px;}
	.breadcrumb {position: relative;margin-bottom: 0.01rem;border-bottom: 1px solid #cfd8dc;}
	#layerToggle {top: 20px;right: 20px;position: absolute;z-index: 99;background-color: white;border-radius: 8px;padding: 10px;opacity: 0.75;}
	.baidu {position: absolute;right: 0;top: 115px;}
	.tools {position: absolute;top: 60px;left: 80px;}
	.search {position: absolute;top: 58px;left: 120px;}
	.list-wrapper {padding: 10px;overflow-y: auto;}
	.esri-layer-list__item-title {margin-left: -5px;padding-left: -5px;}
	#switchbasemap {float: left;padding: 0 10px 0 4px;height: 30px;line-height: 30px;background: #ffffff;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);transition: all 0.2s;cursor: pointer;}
</style>
