<template>
	<div></div>
</template>
<script>
	import SiderMenu from "@/views/main/siderMenu";
	import smallMapView from "@/map/components/smallMapView";
	import Register from "@/map/api/register";
	import { MapAPI } from "@/core/config/const";
	import Server from "@/core/server";
	import { services } from "@/core/config/services";
	import { Pricemap } from "@/core/config/services";

	export default {
		data() {
			return { data: [],list: [],show: true,isExtent: true,isPopup: true,isPan: true,visible: false };
		},
		components: {SiderMenu}
	};
</script>
<style lang="less" scoped>
	.layout-header-bar {background: #fff;box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);}
</style>
