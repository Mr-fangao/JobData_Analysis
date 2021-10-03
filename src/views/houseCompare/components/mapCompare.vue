<template>
	<Row>
		<Col span="12">
			<div class="blockHeader">
				<Icon type="ios-ribbon-outline" size="20" /> <span style="padding-left: 3px;">安邦花园OD距离</span>
			</div>
			<div id="viewDiv"> </div>
		</Col>
		<Col span="12">
			<div class="blockHeader">
				<Icon type="ios-ribbon-outline" size="20" /> <span style="padding-left: 3px;">山水人家OD距离</span>
			</div>
			<div id="viewDiv1"> </div>
		</Col>
	</Row>
</template>
<script>
	import axios from "axios";
	import esriLoader from "esri-loader";
	import {
		MapAPI
	} from "@/core/config/const";
	export default {
		data() {
			return {
				mapTileLayerLayers: "",
				TileLayerStreets: "",
				MapImageLayer: "",
				view: null,
				IsMapToolsView: false,
				from: "",
				mapViewL: null,
				mapViewR: null,
				left: "-100px",
				top: "-100px",
				width: 0
			};
		},
		mounted() {
			this.addLayerL();
			this.addLayerR();
		},
		methods: {
			addLayerL() {
				esriLoader
					.loadScript({
						url: MapAPI.js,
						css: MapAPI.css
					})
					.then(r => {
						esriLoader
							.loadModules([
								"esri/Map",
								"esri/Basemap",
								"esri/views/MapView",
								"esri/layers/MapImageLayer"
							])
							.then(([Map, Basemap, MapView, MapImageLayer, dom, on]) => {
								var activeWidget = null;

								var street = new MapImageLayer({
									url: "http://122.112.216.247:6080/arcgis/rest/services/CHUZHOU/odqllj/MapServer"
								});

								var baseMap = new Basemap({
									baseLayers: [street]
								});
								var map = new Map({
									basemap: baseMap
								});

								this.mapViewL = new MapView({
									container: "viewDiv",
									map: map
								});
								setTimeout(() => {
									this.mapViewL.on("pointer-move", e => {
										this.from = "view1";
										let width = document.body.clientWidth / 2;
										this.left = width + e.x - 22 + "px";
										this.top = e.y - 22 + "px";
									});
									this.mapViewL.watch("extent", extent => {
										if (this.from === "view1") {
											this.mapViewR.center = extent.center;
											this.mapViewR.zoom = this.mapViewL.zoom;
										}
									});
								}, 500);
							});
					});
			},
			addLayerR() {
				esriLoader
					.loadScript({
						url: MapAPI.js,
						css: MapAPI.css
					})
					.then(r => {
						esriLoader
							.loadModules([
								"esri/Map",
								"esri/Basemap",
								"esri/views/MapView",
								"esri/layers/MapImageLayer"
							])
							.then(([Map, Basemap, MapView, MapImageLayer, dom, on]) => {
								var activeWidget = null;

								var street = new MapImageLayer({
									url: "http://122.112.216.247:6080/arcgis/rest/services/CHUZHOU/odjpsxmd/MapServer"
								});

								var baseMap = new Basemap({
									baseLayers: [street]
								});
								var map = new Map({
									basemap: baseMap
								});

								this.mapViewR = new MapView({
									container: "viewDiv1",
									map: map
								});
								setTimeout(() => {
									this.mapViewR.on("pointer-move", e => {
										this.from = "view2";
										this.left = e.x - 22 + "px";
										this.top = e.y - 22 + "px";
									});
									this.mapViewR.watch("extent", extent => {
										if (this.from === "view2") {
											this.mapViewL.center = extent.center;
											this.mapViewL.zoom = this.mapViewR.zoom;
										}
									});
								}, 500);
							});
					});
			}
		},
		components: {}
	};
</script>
<style>
	#viewDiv {padding: 0;margin: 0;height: 1000px;width: 100%;}
	#viewDiv1 {padding: 0;margin: 0;height: 1000px;width: 100%;}
	.ivu-modal-close {z-index: 1;font-size: 12px;position: absolute;right: 20px;top: 58px;overflow: hidden;cursor: pointe;}
	.blockHeader {background-color: #508bb0;font-size: 16px;height: 35px;margin-top: -10px;color: white;padding: 5px 2px;}
</style>
