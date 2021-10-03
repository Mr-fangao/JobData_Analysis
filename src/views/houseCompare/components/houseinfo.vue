<template>
	<Layout :style="{height:'100%'}">
		<Content>
			<div style="width: 100%; height: 7.5px;"></div>
			<Tabs type="card" style="margin: 0 auto;width: 95%;border: 1px solid #dcdee2; border-radius: 5px;">
				<TabPane label="基本信息">
					<div style="margin: 10px">
						<div>
							<Row :gutter="30">
								<Col span="12">
								<div style="border: 1px solid #dcdee2;">
									<Row>
										<Col span="12">
										<div style="padding: 5px;">
											<span style="font-size: 14px">
												<Icon type="ios-pricetag" :size="22" color="#000" />
												<strong style="font-size: 17.5px;font-weight: 900;color:#000;">
													公司名称: 广州仓实信息科技有限公司
												</strong>
												<img style="height: 235px;width: 350px;margin: 10px" src="../../../assets/img/company.jpg" />
											</span>
										</div>
										</Col>
										<Col span="12">
										<div style="margin-top:40px;margin-left: 10%">
											<div>
												<Form :label-width="70">
													<table style="margin-top: 10px;margin-left: 5%; font-size: 13.5px;">
														<tbody>
															<tr>
																<td class="label-l" style="font-weight: 900;">职位名称：</td>
																<td valign="top" class="text-l" style="font-weight: 900;">GIS软件开发工程师</td>
															</tr>
															<tr>
																<td class="label-l" style="font-weight: 900;">学历要求：</td>
																<td valign="top" class="text-l" style="font-weight: 900;">大专</td>
															</tr>
															<tr>
																<td class="label-l" style="font-weight: 900;">工作经验：</td>
																<td valign="top" class="text-l" style="font-weight: 900;">1年</td>
															</tr>
															<tr>
																<td class="label-l" style="font-weight: 900;">工作地点：</td>
																<td valign="top" class="text-l" style="font-weight: 900;">广州市越秀区豪贤路195-197</td>
															</tr>
															<tr>
																<td class="label-l" style="font-weight: 900;">地理坐标：</td>
																<td valign="top" class="text-l" style="font-weight: 900;">(113.28, 23.14)</td>
															</tr>
															<tr>
																<td class="label-l" style="font-weight: 900;">发布时间：</td>
																<td valign="top" class="text-l" style="font-weight: 900;">2020-05-02</td>
															</tr>
															<tr>
																<td class="label-l" style="font-weight: 900;">职位薪资：</td>
																<td valign="top" class="text-l" style="font-weight: 900;">
																	<Button type="primary" @click="price" size="small" style="background: rgba(0, 0, 0, 0.5);border: rgba(0, 0, 0, 0.5);">
																		点击查看
																	</Button>
																	<Modal v-model="modal1s">
																		<div id="trend" style="height: 200px;width: 500px"></div>
																	</Modal>
																</td>
															</tr>
														</tbody>
													</table>
												</Form>
											</div>
										</div>
										</Col>
									</Row>
								</div>
								</Col>
								<Col span="12">
								<div style="border: 1px solid #dcdee2;">
									<Row>
										<Col span="12">
										<div style="padding: 5px">
											<span style="font-size: 14px">
												<Icon type="ios-paper" :size="22" color="#000" />
												<strong style="font-size: 17.5px;font-weight: 900;color:#000;">
													公司信息:
												</strong>
											</span>
											<img style="height: 235px;width: 350px;margin: 10px" src="../../../assets/img/Cinfo.jpg" />
										</div>
										</Col>
										<Col span="12">
										<table style="margin-top: 50px;margin-left: 9%; font-size: 13.5px;">
											<tbody>
												<tr>
													<td class="label-l" style="font-weight: 900;">公司类型：</td>
													<td valign="top" class="text-l" style="font-weight: 900;">民营公司</td>
												</tr>
												<tr>
													<td class="label-l" style="font-weight: 900;">公司规模：</td>
													<td valign="top" class="text-l" style="font-weight: 900;">少于50人</td>
												</tr>
												<tr>
													<td class="label-l" style="font-weight: 900;">行业领域：</td>
													<td valign="top" class="text-l" style="font-weight: 900;">计算机软件</td>
												</tr>
												<tr>
													<td class="label-l" style="font-weight: 900;">工作地区：</td>
													<td valign="top" class="text-l" style="font-weight: 900;">广州越秀区</td>
												</tr>
												<tr>
													<td class="label-l" style="font-weight: 900;">公司福利：</td>
													<td valign="top" class="text-l" style="font-weight: 900;">
														<span style="background: rgba(255, 142, 49, 0.5); border-radius: 5px;">五险一金</span>&nbsp;&nbsp;
														<span style="background: rgba(255, 142, 49, 0.5); border-radius: 5px;">餐饮补贴</span>&nbsp;&nbsp;
														<span style="background: rgba(255, 142, 49, 0.5); border-radius: 5px;">专业培训</span>&nbsp;&nbsp;&nbsp;
														<span style="background: rgba(255, 142, 49, 0.5); border-radius: 5px;">年终奖金</span>&nbsp;&nbsp;
														<span style="background: rgba(255, 142, 49, 0.5); border-radius: 5px;">定期体检</span>&nbsp;&nbsp;
														<span style="background: rgba(255, 142, 49, 0.5); border-radius: 5px;">员工旅游</span>&nbsp;&nbsp;&nbsp;
														<span style="background: rgba(255, 142, 49, 0.5); border-radius: 5px;">周末双休</span>&nbsp;&nbsp;
														<span style="background: rgba(255, 142, 49, 0.5); border-radius: 5px;">通讯补贴</span>&nbsp;&nbsp;
														<span style="background: rgba(255, 142, 49, 0.5); border-radius: 5px;">免费班车</span>
													</td>
												</tr>
											</tbody>
										</table>
										</Col>
									</Row>
								</div>
								</Col>
							</Row>
							<br />
						</div>

						<Card>
							<div>
								<Row>
									<Col>
									<span style="font-size: 14px">
										<Icon type="md-bookmark" :size='22' color="#000" />
										<strong style="font-size: 17.5px;font-weight: 900;color:#000;">
											公司介绍:
										</strong>
									</span>
									<div class="map" style="height: 120px;width: 100%;line-height: 1.5;">
										<span style="font-size: 15px;">
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											广州仓实信息科技有限公司于2018年初成立，现办公于广州市越秀区，注册资金为201万，公司成立伊始立志成为最有价值的软件、数据技术服务提供商，先后为多个政府、企业提供地理信息软件开发及数据处理服务，多次获得用户好评，产品业务重点覆盖地理信息产业链，提供一站式的就近服务。
											公司倡导“专业、务实、高效、创新”的企业精神，具有良好的内部管理制度。优良的工作环境以及良好的激励机制，吸引了一批有学识的、具有实干精神的人才。高素质、高水平、高效率的人才是仓实信息在当下市场服务中立于领先的技术保障。
											<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											2019年在佛山合资成立新公司，开拓佛山市场，目标服务大湾区相关客户单位。核心项目有：房屋征收辅助决策分析系统建设项目不动产登记发证管理平台房屋安全鉴定信息化巡检系统合作单位有：时代中国凯德中国广州市城市规划勘测设研究院广州市国规委广州市住建委良好的福利待遇：1、每周四十小时工作制；2、按国家规定，为员工购买五险一金；3、定期公司聚餐或者活动；4、年底按照业绩颁发年终奖；5、和谐的团队工作氛围，扁平化管理；6、定期业务与技术培训。
										</span>
									</div>
									</Col>
								</Row>
							</div>
						</Card>
						<Card>
							<div>
								<Row>
									<Col>
									<Icon type="md-bookmark" :size='22' color="#000" />
									<strong style="font-size: 17.5px;font-weight: 900;color:#000">
										任职要求:
									</strong>
									<div class="map" style="height: 130px;width: 100%; float: left;">
										<div class="map" style="height: 100%;width: 50%;float: right; line-height: 1.5;">
											<span>
												<i style="display:inline-block;font-size:15px; 
													  font-weight:900;color:#000;">
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
													--工作职责：
												</i><br>
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.具有一年或以上GIS软件开发工作经验，辅助完成软件模块的需求调研、需求分析；<br>
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.基于ArcGISAPIforJavascript的Webgis项目开发；<br>
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.基于ArcEngine的CS客户端开发；<br>
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.基于开源GIS平台的Webgis项目开发；<br>
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.辅助编写系统功能模块相关的技术文档。<br>
											</span>
										</div>
										<div class="map" style="height: 100%;width: 50%;float: left; line-height: 1.5;">
											<span>
												<i style="display:inline-block;font-size:15px; 
													font-weight:900;color:#000;">
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
													--职位要求：
												</i><br>
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												1、熟识ArcGis、CAD等相关GIS平台或uDig、QGIS、OpenJUMP等开源GIS系统；<br>
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												2.有基于ArcGis平台进行BS或CS模式系统的开发经验或基于开源GIS平台进行WEBGIS开发经验；<br>
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												3.熟悉ArcGISAPIforJavascript、Openlayers、ArcEngine、HTML、CSS、JAVASCRIPT、JQuery；<br>
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												4.专科及以上学历，计算机等相关专业。
											</span>
										</div>
									</div>
									</Col>
								</Row>
							</div>
						</Card>
					</div>
				</TabPane>
			</Tabs>
		</Content>
	</Layout>
</template>
<script>
	import SiderMenu from "@/views/main/siderMenu";
	import routerView from "@/map/components/routerView";
	import Server from "@/core/server";
	import {services} from "@/core/config/services";
	import houseInfoId from "@/vuex/store";
	import Item from "./items/item";
	import aroundInfo from "@/vuex/store";
	import housueName from "@/vuex/store";
	import companyName from "@/vuex/store";
	import housePoint from "@/vuex/store";
	import {loadModules} from "esri-loader";
	var echarts = require("echarts");
	export default {
		name: "mapbox",
		mounted() {
			this.form.userId = JSON.parse(sessionStorage.getItem("userId"));
			setTimeout(() => {
				this.getData();
			}, 600);
			setTimeout(() => {
				this.getBaseOnHouseData();
			}, 800);
		},
		data() {
			return {
				center: {
					lng: 0,
					lat: 0
				},
				zoom: 3,

				modal1s: false,
				List1: {
					userId: "",
					houseName: "",
					houseScore: "",
					houseCommnets: "",
					commentsId: "",
					commentsTime: "",
				},
				modal1: false,
				form: {
					houseComments: "",
					houseScore: 0,
					houseName: "",
					userId: "",
				},
				value1: "",
				valueText2: 0,
				commentList: [],
				BaseOnHouse: [],
				detailList: [],
				formItem: "",
				Id: [],
				houseInfo: [],
				map: true,
				timeIndex: 0,
				pageSize: 10,
				listName: "公交",
				listData: [],
				list: [],
				total: "",
				housueName: "",
				isPopup: true,
				isPan: true,
				distance: "1000",
			};
		},
		watch: {
			data() {
				this.onPageChange(1);
			},
		},
		methods: {
			selectPoint(selrctItem) {
				this.selectIetm = selrctItem;
				console.log(this.selectIetm)
			},
			handler({
				BMap,
				map
			}) {
				var Item = this.selectIetm;
				console.log(Item);
				map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
				// console.log(BMap, map);
				this.center.lng = 118.342421;
				this.center.lat = 32.276276;
				this.zoom = 15;
				var marker = new BMap.Marker(new BMap.Point(118.342421, 32.276276));
				map.setMinZoom(15);
				map.setMaxZoom(16);
				map.addOverlay(marker);
				var label = new BMap.Label("都市名苑", {
					offset: new BMap.Size(20, -10),
				});
				marker.setLabel(label);
				var mPoint = new BMap.Point(118.342421, 32.276276);
				var circle = new BMap.Circle(mPoint, 1000, {
					fillColor: "blue",
					strokeWeight: 1,
					fillOpacity: 0.3,
					strokeOpacity: 0.3,
				});
				map.addOverlay(circle);
				var local = new BMap.LocalSearch(map, {
					renderOptions: {
						map: map,
						autoViewport: false
					},
				});
				local.searchNearby("公交车站", mPoint, 1000);
			},
			trendMap() {
				if (!this.trend) {
					this.trend = echarts.init(document.getElementById("trend"));
				}
				this.trend.setOption({
					title: {text: `职位薪资状况`,left: "center",top: 1,textStyle: {fontSize: 17.5,},},
					tooltip: {trigger: "axis",},
					xAxis: {type: "category",data: ["最低月薪", "最高月薪", "平均月薪"],},
					grid: {left: "1%",right: "3%",bottom: "1.5%",top: "25%",containLabel: true,},
					yAxis: {type: "value",axisLabel: {formatter: "{value} K/月",},},
					series: [{
						label: {normal: {show: true,position: "top",},},
						data: [7, 10, 8.5],type: "bar",
					}],
				});
			},
			price() {
				this.modal1s = true;
				this.trendMap();
			},
			onHouseclick(value, index) {
				this.$Spin.show({
					render: (h) => {
						return h("div", [
							h("Icon", {
								class: "demo-spin-icon-load",
								props: {type: "ios-loading",size: 35,},
							}),
							h(
								"div", {
									style: {fontSize: "20px",},
								},
								"正在为您查找"
							),
						]);
					},
				});
				this.getimg();
				var _this = this;
				var userId = JSON.parse(sessionStorage.getItem("userId"));
				this.houseId = value.houseId;
				this.houseName = value.name;
				Server.get({
					url: services.compareHouseDetails,
					params: {
						houseId: _this.houseId,
					},
				}).then(function(rsp) {
					if (rsp.status === 1) {
						console.log(rsp);
						_this.houseInfo = rsp.data;
						console.log(_this.houseInfo);
					}
				});
				Server.get({
					url: services.recommendedBaseOnHouse,
					params: {
						houseName: _this.houseName,
						userId: userId,
					},
				}).then(function(rsp) {
					if (rsp.status === 1) {
						console.log(rsp);
						_this.BaseOnHouse = rsp.data;
						console.log(_this.BaseOnHouse);
					}
				});
				Server.get({
					url: services.getcomments,
					params: {
						houseName: this.houseName,
					},
				}).then((rsp) => {
					if (rsp.status === 1) {
						_this.commentList = rsp.data;
					}
				});
				Server.get({
					url: services.road,
					params: {
						name: this.houseName,
						tableName: "BUSSTATION",
						distance: this.distance,
					},
				}).then((rsp) => {
					var _this = this;
					if (rsp.status === 1) {
						_this.list = rsp.data;
						_this.total = rsp.length;
						_this.onPageChange(1);
					}
				});
				setTimeout(() => {
					this.$Spin.hide();
				}, 1000);
			},
			onItemClick(data) {
				for (var i = 0, g;
					(g = window.mapview.graphics.items[i]); i++) {
					if (g.attributes.id === data.pIndex) {
						var geometry = null;
						if (g.geometry.type === "point") {
							geometry = g.geometry;
						} else {
							var extent = g.geometry.extent.clone();
							geometry = extent.expand(2);
						}
						window.mapview.goTo(geometry);
						var attributes = g.attributes;
						mapApi.popup.show({
							mapView: window.mapview,
							res: attributes.attr,
							centerPt: attributes.centerPt,
						});
						break;
					}
				}
				this.$refs.routerView.addStop(data);
			},
			getData() {
				var _this = this;
				this.Id = houseInfoId.state.houseInforA.data.id;
				// console.log(this.Id);
				//   housePoint.commit("housePoint", this.houseShape);
				Server.get({
					url: services.compareHouseDetails,
					params: {
						houseId: _this.Id,
					},
				}).then(function(rsp) {
					if (rsp.code === 20000) {
						// console.log(rsp);
						_this.houseInfo = rsp.data.data;
						// console.log(_this.houseInfo);
					}
				});
			},
			getBaseOnHouseData() {
				var _this = this;
				this.houseName = houseInfoId.state.houseInforA.data.id;
				// console.log(this.houseName)
				// var userId = JSON.parse(sessionStorage.getItem("userId"));
				Server.get({
					url: services.recommendedBaseOnHouse,
					params: {
						houseName: _this.houseName,
					},
				}).then(function(rsp) {
					if (rsp.code === 20000) {
						// console.log(rsp);
						_this.BaseOnHouse = rsp.data.data;
						// console.log(_this.BaseOnHouse);
					}
				});
			},
		},
		components: {
			Item,
			routerView,
			SiderMenu,
		},
	};
</script>
<style lang="less" scoped>
	.ivu-tabs-bar {margin-bottom: 0;}
	.layout-header-bar {background: #fff;box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);}
	#viewDiv {padding: 0;margin: 0;width: 100%;height: 100%;}
	.value {display: inline-block;zoom: 1;_zoom: 1;*display: inline;padding-left: 8px;}
	.price {color: #e43;font-size: 14px;font-weight: 700;vertical-align: baseline;margin-right: 5px;}
	.key {font-size: 14px;display: inline-block;white-space: nowrap;}
	.label-l {min-width: 70px;color: #666;text-align: right;vertical-align: top;white-space: nowrap;padding: 5px 0;line-height: 24px;}
	.label-r {width: 74px;text-align: right;color: #666;vertical-align: top;white-space: nowrap;padding: 5px 0;line-height: 24px;}
	.text-l {line-height: 24px;vertical-align: top;padding: 5px 40px 5px 4px;}
	.text-r {line-height: 24px;overflow: hidden;display: inline-block;}
	tr {display: table-row;vertical-align: inherit;border-color: inherit;}
	td {margin: 5px;}
	.ivu-form-item {margin-bottom: 1px;}
	.ivu-divider-horizontal {display: block;height: 1px;width: 100%;min-width: 100%;margin: 15px 0;clear: both;}
	.list {height: 600px;}
	.around {
		height: 600px;
		width: 1250px;
		margin: 0 auto;
		.title {font-size: 22px;margin-bottom: 5px;font-weight: 600;color: #101d37;}
		ul {
			margin-left: -8px;
			.select:after {content: "";position: absolute;bottom: -4px;left: 0;width: 100%;height: 2px;background: #3072f6;}
			li {cursor: pointer;display: inline-block;line-height: 28px;padding: 0 9px;margin-bottom: 5px;color: #555;font-size: 14px;}
			.default-active {color: #3072f6;}
			li:hover {color: #3072f6;}
		}
	}
	.around .list {
		height: 580px;background-color: #fff;box-shadow: 0 0 7px rgba(0, 0, 0, 0.45);
		.name {line-height: 39px;text-align: center;font-size: 14px;font-weight: 700;color: #fff;background: #3072f6 !important;}
		.ul-box {height: 550px;overflow-y: scroll;}
	}
	.page-footer {margin-left: 10px;}
</style>
<style>
	@charset "utf-8";
	body,h1,h2,h3,h4,h5,h6,dl,dt,dd,ul,ol,li,th,td,p,form,button,input,textarea,fieldset,blockquote,img,iframe,pre,code,hr,legend {padding: 0;margin: 0;}
	body {color: #333;font: 12px Arial, Helvetica, sans-serif, Simsun;}
	h1,h2,h3,h4,h5,h6 {font-size: 100%;font-weight: normal;}
	ol,ul {list-style: none;}
	img {border: none;vertical-align: top;}
	input,select,input,textarea {font-size: 12px;outline: none;}
	select,input {vertical-align: middle;}
	input[type="reset"]::-moz-focus-inner,
	input[type="button"]::-moz-focus-inner,
	input[type="submit"]::-moz-focus-inner,
	input[type="file"]>input[type="button"]::-moz-focus-inner {border: none;padding: 0;}
	textarea {resize: none;}
	fieldset {border: none;}
	table {border-collapse: collapse;border-spacing: 0;}
	caption,th {text-align: left;}
	address,cite,code,em,th,i,strong {font-style: normal;font-weight: normal;}
	a {text-decoration: none;outline: none;}
	a:hover {text-decoration: none;}
	body {font-family: "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", "Hiragino Sans GB",tahoma, arial, simhei;color: #333;}
	a {color: #666;}
	a:hover {color: #666;}
	.clearfix:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
	.triangle-down {width: 0;height: 0;overflow: hidden;display: inline-block;border-left: 4px solid #fff;border-right: 4px solid #fff;border-top: 4px solid #999;border-bottom: 4px solid #fff;}
	@font-face {
		font-family: "iconfont";
		src: url("//pages.anjukestatic.com/usersite/site/img/user/font20190108-01/iconfont.eot");
		src: url("//pages.anjukestatic.com/usersite/site/img/user/font20190108-01/iconfont.eot?#iefix") format("embedded-opentype"),
			url("//pages.anjukestatic.com/usersite/site/img/user/font20190108-01/iconfont.woff") format("woff"),
			url("//pages.anjukestatic.com/usersite/site/img/user/font20190108-01/iconfont.ttf") format("truetype"),
			url("//pages.anjukestatic.com/usersite/site/img/user/font20190108-01/iconfont.svg#iconfont") format("svg");
	}

	.iconfont,
	.iconfont-add {
		display: inline-block;
		color: #000;
		text-align: center;
		font-style: normal;
		font-family: "iconfont";
	}

	.icon {
		display: inline-block;
		width: 16px;
		height: 16px;
		overflow: hidden;
		background-image: url(//pages.anjukestatic.com/usersite/site/img/common/icons-2.0.png);
		background-repeat: no-repeat;
	}

	.icon-people {
		background-position: 0 0;
	}

	.icon-love {
		background-position: 0 -16px;
	}

	.icon-close {
		background-position: 0 -32px;
	}

	.icon-search {
		background-position: 0 -48px;
	}

	.icon-arrdown {
		background-position: 0 -64px;
	}

	.icon-arrup {
		background-position: 0 -80px;
	}

	.icon-arrdown-org {
		background-position: -16px -64px;
	}

	.icon-arrup-org {
		background-position: -16px -80px;
	}

	.icon-arrowdown {
		background-position: 0 -96px;
	}

	.icon-arrowdown-org {
		background-position: -16px -96px;
	}

	.icon-mark,
	.icon-salehouse,
	.icon-point,
	.icon-renthouse,
	.icon-house,
	.icon-house-hover,
	.icon-chat,
	.icon-chat-hover,
	.icon-suggest,
	.icon-suggest-hover,
	.icon-up,
	.icon-down,
	.icon-certificate,
	.icon-really,
	.icon-personal,
	.icon-free {
		width: 32px;
		height: 32px;
	}

	.icon-mark {
		background-position: -32px 0;
	}

	.icon-salehouse {
		background-position: -32px -32px;
	}

	.icon-point {
		background-position: -32px -64px;
	}

	.icon-renthouse {
		background-position: -32px -96px;
	}

	.icon-house {
		background-position: -64px 0;
	}

	.icon-house-hover {
		background-position: -96px 0;
	}

	.icon-chat {
		background-position: -64px -32px;
	}

	.icon-chat-hover {
		background-position: -96px -32px;
	}

	.icon-suggest {
		background-position: -64px -64px;
	}

	.icon-suggest-hover {
		background-position: -96px -64px;
	}

	.icon-up {
		background-position: -64px -96px;
	}

	.icon-down {
		background-position: -96px -96px;
	}

	.icon-certificate {
		background-position: -64px -128px;
	}

	.icon-really {
		background-position: -96px -128px;
	}

	.icon-personal {
		background-position: -64px -160px;
	}

	.icon-free {
		background-position: -96px -160px;
	}

	.icon-starbroker,
	.icon-chattalent {
		width: 70px;
		height: 17px;
	}

	.icon-starbroker {
		background-position: -132px -7px;
	}

	.icon-chattalent {
		background-position: -132px -39px;
	}

	.icon-personalhouse,
	.icon-realfree {
		width: 114px;
		height: 20px;
	}

	.icon-personalhouse {
		background-position: 100px 100px;
	}

	.icon-realfree {
		background-position: 100px 100px;
	}

	.icon-recommend {
		width: 38px;
		height: 38px;
		background-position: -133px -128px;
	}

	.icon-help {
		width: 14px;
		height: 14px;
		background-position: -16px -129px;
	}

	.icon-wedge {
		width: 107px;
		height: 43px;
		background-position: -128px -176px;
	}

	.icon-selup,
	.icon-seldown {
		width: 14px;
		height: 7px;
	}

	.icon-selup {
		background-position: 0 -192px;
	}

	.icon-seldown {
		background-position: -16px -192px;
	}

	.icon-user {
		width: 32px;
		height: 32px;
		background-position: -64px -192px;
	}

	.icon-favorite {
		width: 32px;
		height: 32px;
		background-position: -64px -224px;
	}

	.icon-apple {
		width: 20px;
		height: 20px;
		background-position: -96px -192px;
	}

	.icon-android {
		width: 20px;
		height: 20px;
		background-position: -96px -224px;
	}

	.icon-new {
		display: inline-block;
		width: 27px;
		height: 18px;
		background: url(//pages.anjukestatic.com/usersite/site/img/global/2/icon_new.gif) no-repeat;
		position: absolute;
		top: 2px;
		right: -4px;
	}

	.switch_warpper {
		margin-top: 15px;
		overflow: hidden;
		position: relative;
		border: 1px solid #e6e6e6;
		border-left: none;
	}

	.switch_warpper .switch_with_map {
		height: 450px;
		width: 790px;
		overflow: hidden;
		white-space: nowrap;
		margin-left: 110px;
	}

	.switch_warpper .switch_with_map .inner_switcher {
		position: relative;
		width: 100%;
		height: 450px;
		overflow: hidden;
		display: inline-block;
		vertical-align: top;
		*display: inline;
		*zoom: 1;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_mask {
		position: absolute;
		width: 95px;
		height: 450px;
		background: #ffffff;
		z-index: 10;
		-webkit-transition: display 0.2s;
		transition: display 0.2s;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_mask span {
		position: absolute;
		left: 0;
		top: 236px;
		font-size: 12px;
		color: #999;
		text-align: right;
		margin-left: 30px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_mask.switch_right_mask {
		right: 1px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap {
		position: absolute;
		left: 144px;
		top: 0;
		height: 450px;
		white-space: nowrap;
		font-size: 0;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list {
		display: inline-block;
		vertical-align: top;
		*display: inline;
		*zoom: 1;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap {
		position: relative;
		display: inline-block;
		width: 600px;
		height: 450px;
		overflow: hidden;
		vertical-align: top;
		text-align: center;
		*display: inline;
		*zoom: 1;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .video-player {
		position: absolute;
		display: inline-block;
		top: 180px;
		left: 255px;
		width: 90px;
		height: 90px;
		background-image: url(//pages.anjukestatic.com/usersite/site/img/global/2/video_arrow_1x.png);
		background-image: -webkit-image-set(url(//pages.anjukestatic.com/usersite/site/img/global/2/video_arrow_1x.png) 1x, url(//pages.anjukestatic.com/usersite/site/img/global/2/video_arrow_2x.png) 2x);
		background-position: -50px 0;
		background-repeat: no-repeat;
		margin-top: auto;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .VR_box {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .VR_box .VR_layer {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .VR_box .VR_layer .VR_icon {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -40px;
		margin-left: -40px;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .VR_box .VR_layer .VR_icon i {
		display: block;
		width: 70px;
		height: 70px;
		margin: 5px 0 0 5px;
		background-image: url(//pic4.58cdn.com.cn/nowater/fangfe/n_v270e3f58bda9d4a468d283804d566bf78.png);
		background-size: 70px auto;
		-webkit-animation: VRIcon 2s steps(20) infinite;
		animation: VRIcon 2s steps(20) infinite;
	}

	@-webkit-keyframes VRIcon {
		0% {
			background-position: 0 0;
		}

		50% {
			background-position: 0 -1400px;
		}

		100% {
			background-position: 0 -1400px;
		}
	}

	@keyframes VRIcon {
		0% {
			background-position: 0 0;
		}

		50% {
			background-position: 0 -1400px;
		}

		100% {
			background-position: 0 -1400px;
		}
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .VR_box .VR_container {
		width: 100%;
		height: 100%;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap img {
		max-width: 100%;
		*width: 100%;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap img,
	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap i {
		cursor: pointer;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-icon {
		background-color: transparent;
		background-image: url(//pages.anjukestatic.com/usersite/site/img/video/skin/video-icon-x1.png);
		background-image: -webkit-image-set(url(//pages.anjukestatic.com/usersite/site/img/video/skin/video-icon-x1.png) 1x, url(//pages.anjukestatic.com/usersite/site/img/video/skin/video-icon-x2.png) 2x);
		background-repeat: no-repeat;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video-270p {
		width: 480px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video-270p .jp-video-play {
		margin-top: -270px;
		height: 270px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video-play {
		width: 100%;
		overflow: hidden;
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0);
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video-play-icon {
		position: relative;
		display: block;
		width: 112px;
		height: 100px;
		margin-left: -56px;
		margin-top: -85px;
		left: 50%;
		top: 50%;
		*left: 25px;
		background: url(//pages.anjukestatic.com/usersite/site/img/video/skin/jplayer.blue.monday.video.play.png) 0 0 no-repeat;
		text-indent: -9999px;
		border: none;
		cursor: pointer;
		visibility: hidden;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-interface {
		position: relative;
		background-color: #000;
		width: 100%;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-interface .jp-controls {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-progress {
		top: 0px;
		left: 0px;
		width: 100%;
		height: 6px;
		overflow: hidden;
		background-color: #666;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-progress .jp-seek-bar {
		background: #666;
		width: 0px;
		height: 100%;
		cursor: pointer;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-progress .jp-seek-bar .jp-play-bar {
		background: #62ab00;
		width: 0px;
		height: 100%;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-controls-holder {
		clear: both;
		height: 43px;
		position: relative;
		overflow: hidden;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-type-single .jp-controls {
		padding: 11px 0 0 20px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-type-single .jp-times {
		float: left;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-type-single .jp-times span {
		display: inline-block;
		color: #ccc;
		height: 43px;
		line-height: 43px;
		font-size: 12px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-type-single .jp-times .jp-all-time {
		color: #666;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-no-solution {
		padding: 5px;
		font-size: 0.8em;
		background-color: #eee;
		border: 2px solid #009be3;
		color: #000;
		display: none;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-no-solution span {
		font-size: 1em;
		display: block;
		text-align: center;
		font-weight: bold;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-no-solution a {
		color: #000;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-current-time {
		margin-left: 20px;
		float: left;
		display: inline;
		cursor: default;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-current-time .jp-duration {
		font-size: 12px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-toggles {
		float: right;
		position: relative;
		top: 13px;
		right: 21px;
		padding: 0;
		margin: 0 auto;
		overflow: hidden;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-toggles a {
		display: block;
		float: left;
		text-indent: -9999px;
		line-height: 100%;
		border: none;
		cursor: pointer;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-toggles .jp-repeat {
		width: 19px;
		height: 19px;
		margin-right: 17px;
		background-position: -180px 0;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-toggles .jp-repeat.active {
		background-position: -180px -60px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-toggles .jp-full-screen {
		width: 17px;
		height: 17px;
		background-position: -150px 0;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-volume-controls {
		position: relative;
		float: right;
		top: 14px;
		width: 121px;
		height: 16px;
		margin-right: 79px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-volume-controls a,
	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-volume-controls button {
		display: block;
		position: absolute;
		overflow: hidden;
		text-indent: -9999px;
		border: none;
		cursor: pointer;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-volume-controls .jp-mute {
		background-position: -60px 0;
		width: 10px;
		left: 0;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-volume-controls .jp-mute .jp-volume-max {
		height: 16px;
		width: 16px;
		background-position: -120px 0;
		right: 0;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-volume-controls .jp-volume-bar {
		position: absolute;
		overflow: hidden;
		background: #666;
		top: 7px;
		left: 19px;
		width: 80px;
		height: 2px;
		cursor: pointer;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-volume-controls .jp-volume-bar .jp-volume-bar-value {
		background: #62ab00;
		width: 0px;
		height: 2px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-controls {
		float: left;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-controls a {
		display: block;
		float: left;
		overflow: hidden;
		text-indent: -9999px;
		border: none;
		cursor: pointer;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-controls .jp-play {
		background-position: 0 0;
		width: 16px;
		height: 20px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video .jp-controls .jp-play:hover {
		background-position: 0 -30px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .video-wrap {
		display: none;
		width: 100% !important;
		height: 100% !important;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .video-wrap.jp-state-playing .jp-play {
		background-position: -30px 0;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-audio,
	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-audio-stream,
	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-video {
		font-size: 16px;
		font-family: Verdana, Arial, sans-serif;
		line-height: 1.6;
		color: #666;
		background-color: #000;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-state-dialog {
		display: none;
		z-index: 9;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-state-dialog .jp-state-bg {
		opacity: 0.7;
		filter: alpha(opacity=70);
		background-color: #333;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-state-dialog .jp-state-text {
		color: #fff;
		font-size: 22px;
		text-align: center;
		margin-top: 25%;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-state-dialog .jp-button-bar {
		text-align: center;
		margin: 40px auto 0;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-state-dialog .jp-state-button {
		display: inline-block;
		padding: 0 10px;
		height: 32px;
		color: #ccc;
		font-size: 16px;
		line-height: 32px;
		border: 1px solid #ccc;
		border-radius: 3px;
		text-decoration: none;
		margin-left: 15px;
	}

	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-state-dialog,
	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-state-dialog .jp-state-bg,
	.switch_warpper .switch_with_map .inner_switcher .switch_wrap .switch_list .img_wrap .jp-state-dialog .jp-state-cont {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.switch_warpper .switch_tab_wrap {
		position: absolute;
		left: 0;
		top: 0;
		font-size: 0;
		text-align: center;
		width: 109px;
		height: 450px;
		background: #f1f1f1;
		border-right: 1px solid #d8d8d8;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.switch_warpper .switch_tab_wrap .switch_tag {
		display: block;
		width: 107px;
		height: 110px;
		background: #f1f1f1;
		font-size: 14px;
		color: #666;
		border: 1px solid #f1f1f1;
		border-top: 1px solid #d8d8d8;
		border-left: 1px solid #d8d8d8;
		-webkit-box-flex: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-box-pack: center;
	}

	.switch_warpper .switch_tab_wrap .switch_tag.switch_tag_now {
		color: #62ab00;
		font-weight: bold;
		background: #fff;
		border-right: 2px solid #fff;
		position: relative;
		z-index: 20;
	}

	.switch_warpper .switch_tab_wrap .switch_tag .switch-icon {
		color: #999;
		font-size: 23px;
		display: block;
		margin-top: 22px;
		-webkit-box-flex: 1;
		vertical-align: middle;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-box-pack: inherit;
	}

	.switch_warpper .switch_tab_wrap .switch_tag .title {
		-webkit-box-flex: 2;
		display: block;
	}

	.switch_warpper .switch_btn {
		height: 50px;
		position: absolute;
		top: 161px;
		z-index: 2;
		font-size: 50px;
		background-image: none;
		cursor: pointer;
	}

	.switch_warpper .switch_btn.switch_left_btn {
		left: 27px;
		color: #62ab00;
	}

	.switch_warpper .switch_btn.switch_left_btn:hover {
		padding-right: 4px;
		left: 23px;
		color: #508e00;
		background-position: -93px -6px;
	}

	.switch_warpper .switch_btn.switch_right_btn {
		right: 34px;
		color: #62ab00;
	}

	.switch_warpper .switch_btn.switch_right_btn:hover {
		padding-left: 4px;
		right: 30px;
		color: #508e00;
		background-position: -93px -60px;
	}

	.house-title {
		color: #333;
		font-size: 24px;
		font-weight: bold;
		letter-spacing: 1px;
		line-height: 51px;
		padding: 5px 0 10px 0;
		display: inline-block;
		vertical-align: top;
		position: relative;
	}

	.house-title .anxvan-ico {
		background: url(//pic4.58cdn.com.cn/nowater/fangfe/n_v232dbbc2491814f678efc1338295a80c4.png);
		height: 24px;
		width: 40px;
		display: inline-block;
		background-size: contain;
		background-repeat: no-repeat;
		filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='//pic4.58cdn.com.cn/nowater/fangfe/n_v232dbbc2491814f678efc1338295a80c4.png', sizingMethod='scale');
		-ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='//pic4.58cdn.com.cn/nowater/fangfe/n_v232dbbc2491814f678efc1338295a80c4.png',sizingMethod='scale')";
		position: absolute;
		top: 17px;
		right: -50px;
	}

	.title-basic-info {
		z-index: 4;
		height: 28px;
		font-size: 14px;
		margin-top: 7px;
		position: relative;
	}

	.title-basic-info .contract-download {
		position: absolute;
		right: 5px;
		bottom: 0;
		cursor: pointer;
	}

	.title-basic-info .contract-download i {
		position: absolute;
		top: -23px;
		right: 1px;
		width: 40px;
		height: 49px;
		background: url("https://pic4.58cdn.com.cn/nowater/fangfe/n_v256b0d441613c44adb5a83a365e4c8f35.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		background-position: 4px 0px;
	}

	.title-basic-info .contract-download-house {
		right: 85px;
	}

	.title-basic-info .contract-download:hover {
		color: #ff552e;
		text-decoration: underline;
	}

	.title-basic-info .light {
		color: #f60;
	}

	.title-basic-info .light em {
		font-weight: 700;
	}

	.title-basic-info .info-tag {
		float: left;
		padding-right: 18px;
		margin-right: 21px;
		line-height: 22px;
		border-right: 1px solid #e6e6e6;
		font-size: 14px;
	}

	.title-basic-info .info-tag em {
		font-size: 24px;
		font-family: "Tahoma";
	}

	.title-basic-info .no-line {
		border-right: none;
		margin-right: 0;
	}

	.title-basic-info .cf {
		zoom: 1;
	}

	.title-basic-info .title-label {
		padding: 3px 0 15px;
	}

	.title-basic-info .title-label .title-label-item {
		float: left;
		line-height: 22px;
		padding: 0 10px;
		font-size: 12px;
		margin-right: 10px;
		border-radius: 11px;
	}

	.title-basic-info .title-label .title-label-item.rent {
		color: #e88a78;
		background: #fbf4f1;
	}

	.title-basic-info .title-label .title-label-item.buy {
		color: #799374;
		background: #f2f6ed;
	}

	.title-basic-info .title-label .title-label-item.subway {
		color: #6682ae;
		background: #f0f4f8;
	}

	.title-basic-info .title-label .title-label-item.fy {
		color: #fff;
		background: #4d9fff;
		position: relative;
	}

	.title-basic-info .title-label .title-label-item.fy i.wrap {
		position: absolute;
		width: 300px;
		top: 25px;
		left: 25px;
		display: none;
		color: #6682ae;
	}

	.title-basic-info .title-label .title-label-item.fy i.text {
		border: 1px solid #999;
		background: #fff;
		padding: 3px;
		border-radius: 3px;
		display: inline-block;
		line-height: 16px;
		font-size: 12px;
	}

	.title-basic-info .title-label .title-label-item.fy:hover i.wrap {
		display: block;
	}

	.p_1180 {
		margin: 10px auto;
		width: 1180px;
		padding-left: 5px;
		margin-bottom: 15px;
	}

	.p_1180.p_crumbs {
		height: 20px;
		color: #666;
		font-size: 13px;
		line-height: 20px;
	}

	.p_1180.p_crumbs a:hover {
		color: #f60;
		text-decoration: underline;
	}

	.p_1180.p_crumbs a:link,
	.p_1180.p_crumbs a:visited {
		font-size: 13px;
	}

	.bottomed {
		border-bottom: 1px solid #e6e6e6;
	}

	.cf {
		zoom: 1;
	}

	.sub-cate-tile {
		font-size: 16px;
		margin-top: 28px;
	}

	.house-info-zufang {
		margin-bottom: -4px;
		font-size: 14px;
		color: #333;
		position: relative;
		height: 114px;
	}

	.house-info-zufang .full-line {
		display: block;
		margin-top: 9px;
		line-height: 30px;
	}

	.house-info-zufang .full-line .price {
		float: left;
		color: #e54b00;
		margin-right: 5px;
		line-height: 24px;
	}

	.house-info-zufang .full-line .price em {
		font-size: 22px;
		font-weight: 700;
	}

	.house-info-zufang .full-line .price.out-price {
		color: #333;
	}

	.house-info-zufang .full-line .full-link {
		margin-left: 8px;
	}

	.house-info-zufang .type {
		color: #a9a9a9;
		font-size: 14px;
	}

	.house-info-zufang .commission {
		color: #a9a9a9;
		font-size: 14px;
	}

	.house-info-zufang a {
		color: #2666b2;
		cursor: pointer;
	}

	.house-info-zufang a:visited {
		color: #1f64b2;
	}

	.house-info-zufang .link:hover {
		color: #f60;
		text-decoration: underline;
	}

	.house-info-zufang .house-info-item {
		float: left;
		width: 235px;
		line-height: 28px;
	}

	.house-info-zufang .house-info-item.l-width {
		width: 410px;
	}

	.house-info-zufang li:nth-of-type(3n + 2) {
		width: 350px;
	}

	.house-info-peitao {
		margin-bottom: -10px;
		font-size: 14px;
		color: #bbb;
		display: inline-block;
	}

	.house-info-peitao .peitao-item {
		float: left;
		text-align: center;
		width: 100px;
		padding: 0;
	}

	.house-info-peitao .peitao-item .iconfont,
	.house-info-peitao .peitao-item .iconfont-add {
		font-size: 50px;
		color: #ccc;
		padding-top: 25px;
		height: 50px;
	}

	.house-info-peitao .peitao-item .peitao-info {
		color: #999;
	}

	.house-info-peitao .has {
		color: #666;
	}

	.house-info-peitao .has .iconfont,
	.house-info-peitao .has .iconfont-add {
		color: #666;
		font-size: 50px;
		padding-top: 25px;
	}

	.house-info-peitao .has .peitao-info {
		color: #666;
	}

	.house-info-peitao .peitao-info {
		line-height: 34px;
	}

	.house-info-peitao .peitao-item-more {
		color: #61ab02;
		cursor: pointer;
	}

	.house-info-peitao .peitao-item-more .peitao-icon {
		font-size: 36px;
		padding-top: 25px;
		height: 50px;
		width: 50px;
		display: inline-block;
	}

	.house-info-peitao .none {
		display: none;
	}

	.auto-general {
		overflow: hidden;
		padding-top: 12px;
		max-width: 900px;
	}

	.auto-general p {
		font-size: 14px;
		line-height: 22px;
	}

	.houseInfo-desc {
		overflow: hidden;
		margin-top: 20px;
	}

	.houseInfo-desc .houseInfo-item {
		margin-bottom: 10px;
	}

	.houseInfo-desc .houseInfo-item .js-house-explain {
		overflow: hidden;
	}

	.houseInfo-desc .houseInfo-item .houseInfo-item-desc {
		font-size: 14px;
		line-height: 32px;
		padding-right: 50px;
	}

	.houseInfo-desc .houseInfo-item .houseInfo-item-desc .wh-title {
		color: #333;
		font-family: "PingFangSC-Medium";
		line-height: 18px;
	}

	.houseInfo-desc .houseInfo-item .houseInfo-item-desc .wh-tips {
		color: #43474d;
		font-family: PingFangSC-Regular;
		line-height: 18px;
		margin-top: 6px;
	}

	.houseInfo-desc .houseInfo-item .houseInfo-item-title {
		position: relative;
		font-size: 16px;
		line-height: 37px;
		color: #62ab00;
		border-bottom: 1px dotted #e6e6e6;
		margin-bottom: 11px;
	}

	.houseInfo-desc .houseInfo-item .houseInfo-item-title .icon-code {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.mapCon {
		width: 900px;
		height: 360px;
	}

	.mapCon .traffic_map_wrap {
		position: absolute;
		white-space: nowrap;
		font-size: 0;
	}

	.mapCon .traffic_map_wrap .scale_btn_wrap {
		position: absolute;
		left: 24px;
		top: 25px;
		width: 35px;
		z-index: 3;
		white-space: normal;
	}

	.mapCon .traffic_map_wrap .scale_btn_wrap a.zoom_btn {
		display: inline-block;
		width: 30px;
		height: 30px;
		line-height: 30px;
		margin-top: 10px;
		background: #fff;
		border: 1px solid #888;
		font-size: 30px;
		color: #333;
		font-weight: 100;
		text-align: center;
		text-decoration: none;
	}

	.mapCon .traffic_map_wrap .scale_btn_wrap a.zoom_btn:hover {
		color: #999;
	}

	.mapCon .traffic_map_wrap .scale_btn_wrap a.minus-btn {
		line-height: 26px;
	}

	.mapCon .traffic_map_wrap .bmap_wrap {
		position: relative;
		width: 900px;
		height: 360px;
		vertical-align: top;
		overflow: hidden;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .bmap {
		width: 900px;
		height: 360px;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap {
		position: absolute;
		right: 0;
		bottom: 60px;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap a {
		display: block;
		width: 110px;
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		color: #fff;
		margin-top: 5px;
		position: relative;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap a .map_tag_ico {
		position: absolute;
		left: 0;
		background-color: #555a64;
		opacity: 1;
		display: inline-block;
		width: 30px;
		height: 30px;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap a .map_tag_ico i {
		display: inline-block;
		background: url(//pages.anjukestatic.com/usersite/site/img/map/icon-sp-map.png) no-repeat;
		margin-top: 7px;
		margin-left: 7px;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap a span {
		display: inline-block;
		width: 80px;
		line-height: 30px;
		text-align: center;
		background-color: #555a64;
		opacity: 0.9;
		position: absolute;
		right: 0;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap a .business_icon i {
		background-position: -160px -78px;
		width: 16px;
		height: 13px;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap a .school_icon i {
		background-position: -160px -65px;
		width: 17px;
		height: 13px;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap a .medical_icon i {
		background-position: -160px -36px;
		width: 15px;
		height: 15px;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap a .traffic_icon i {
		background-position: -160px -20px;
		width: 16px;
		height: 16px;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap .map_action .traffic_icon {
		background-color: #00b39c;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap .map_action .traffic_icon i {
		background-position: -160px -20px;
		width: 16px;
		height: 16px;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap .map_action span {
		color: #333;
		background-color: #fff;
		opacity: 0.8;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap .map_action .business_icon {
		background-color: #dd0e49;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap .map_action .school_icon {
		background-color: #c4651a;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap .map_action .medical_icon {
		background-color: #e94a47;
	}

	.mapCon .traffic_map_wrap .bmap_wrap .map_tag_wrap .map_action:hover .map_tag_ico {
		opacity: 1;
	}

	.comm-qa .comm-qa-list li {
		width: 100%;
		position: relative;
		margin-top: 20px;
	}

	.comm-qa .comm-qa-list li a {
		display: block;
		width: 730px;
		color: #333;
	}

	.comm-qa .comm-qa-list dl {
		margin-left: 55px;
	}

	.comm-qa .comm-qa-list dl dt {
		float: left;
		margin-left: -54px;
		width: 40px;
		height: 100%;
	}

	.comm-qa .comm-qa-list dl dt span {
		display: inline-block;
		color: #fff;
		width: 40px;
		height: 18px;
		line-height: 18px;
		text-align: center;
	}

	.comm-qa .comm-qa-list .qa-item-q {
		height: 24px;
	}

	.comm-qa .comm-qa-list .qa-item-q dt {
		margin-top: 3px;
	}

	.comm-qa .comm-qa-list .qa-item-q dt span {
		background-color: #f60;
	}

	.comm-qa .comm-qa-list .qa-item-q dd {
		line-height: 24px;
		font-size: 16px;
		font-weight: 700;
	}

	.comm-qa .comm-qa-list .qa-item-q .qa-item-txt {
		float: left;
		max-width: 595px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.comm-qa .comm-qa-list .qa-item-q .qa-time {
		margin-left: 10px;
		font-size: 12px;
		color: #666;
		float: left;
		font-weight: 400;
	}

	.comm-qa .comm-qa-list .qa-item-a {
		margin-top: 10px;
	}

	.comm-qa .comm-qa-list .qa-item-a dd {
		line-height: 32px;
		font-size: 14px;
		max-height: 64px;
		overflow: hidden;
		color: #666;
	}

	.comm-qa .comm-qa-list .qa-item-a dd .qa-brokername {
		color: #1f64b2;
	}

	.comm-qa .comm-qa-list .qa-item-a dd.qa-item-linkto {
		position: absolute;
		right: 0;
		bottom: 3px;
		font-size: 14px;
		color: #999;
	}

	.comm-qa .comm-qa-list .qa-item-txt:hover,
	.comm-qa .comm-qa-list .qa-brokername:hover,
	.comm-qa .comm-qa-list .qa-item-linkto:hover {
		text-decoration: underline;
		color: #f60 !important;
	}

	.comm-qa .comm-qa-title2 {
		line-height: 30px;
		font-size: 16px;
		color: #62ab00;
		border-bottom: 1px solid #e6e6e6;
		padding-bottom: 8px;
		margin-top: 15px;
	}

	.comm-qa .comm-qa-title2 i {
		color: #62ab00;
		margin-right: 5px;
	}

	.comm-qa .comm-qa-unanswer {
		padding-top: 15px;
	}

	.comm-qa .comm-qa-unanswer li {
		line-height: 32px;
		font-size: 14px;
		height: 32px;
	}

	.comm-qa .comm-qa-unanswer a {
		display: block;
		color: #333;
	}

	.comm-qa .comm-qa-unanswer a p {
		float: left;
		max-width: 645px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.comm-qa .comm-qa-unanswer a em {
		float: left;
		margin-left: 5px;
	}

	.comm-qa .comm-qa-unanswer a span {
		float: right;
		color: #1f64b2;
	}

	.comm-qa .comm-qa-unanswer a p:hover,
	.comm-qa .comm-qa-unanswer a span:hover {
		text-decoration: underline;
		color: #f60;
	}

	.comm-qa .comm-btn-group {
		margin-top: 20px;
	}

	.comm-qa .comm-btn-group a {
		float: left;
		width: 110px;
		height: 36px;
		text-align: center;
		font-size: 14px;
		color: #fff;
		line-height: 36px;
		border-radius: 4px;
		background: #62ab00;
		margin-right: 10px;
	}

	.mod-title {
		padding-top: 37px;
		line-height: 46px;
		font-size: 20px;
		color: #333;
		width: 100%;
	}

	.ajax_prop .box {
		margin-bottom: -3px;
		margin-left: -20px;
	}

	.ajax_prop .box .rec_common_con {
		float: left;
		width: 210px;
		display: block;
		font-size: 12px;
		line-height: 12px;
		position: relative;
		margin-left: 20px;
	}

	.ajax_prop .box .rec_common_con .iconfont {
		top: 10px;
		left: 5px;
		z-index: 2;
		color: #62ab00;
		font-size: 39px;
		position: absolute;
	}

	.ajax_prop .box .rec_common_con .icon-bg {
		position: absolute;
		width: 25px;
		height: 32px;
		background-color: #fff;
		left: 15px;
		top: -2px;
		z-index: 1;
	}

	.ajax_prop .box .rec_common_con .rec_common_img {
		width: 210px;
		height: 162px;
		display: block;
		margin-bottom: 5px;
		overflow: hidden;
		border: none;
	}

	.ajax_prop .box .rec_common_con .rec_common_img:hover {
		opacity: 0.9;
		cursor: pointer;
	}

	.ajax_prop .box .rec_common_con .rec_common_title {
		color: #333;
		width: 210px;
		overflow: hidden;
		display: block;
		height: 24px;
		line-height: 24px;
		font-size: 14px;
		margin-top: 4px;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.ajax_prop .box .rec_common_con .rec_common_title:hover {
		color: #f60;
		text-decoration: underline;
	}

	.ajax_prop .box .rec_common_con .rec_common_price {
		color: #e54b00;
		float: left;
		height: 22px;
		font-size: 14px;
		line-height: 22px;
	}

	.ajax_prop .box .rec_common_con .rec_common_info {
		float: right;
		color: #737373;
		line-height: 22px;
	}

	.ajax_prop .box .rec_common_con .rec_common_name {
		z-index: 1;
		top: 132px;
		left: 0;
		height: 30px;
		color: #fff;
		width: 100%;
		display: block;
		font-size: 14px;
		overflow: hidden;
		position: absolute;
		line-height: 30px;
		text-indent: 6px;
		white-space: nowrap;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
		background: rgba(51, 51, 51, 0.5);
		font-weight: 700;
	}

	.ajax_prop .box .rec_common_con:hover {
		cursor: pointer;
	}

	.aside-recomm-border {
		margin-top: 22px;
		border: 1px solid #e6e6e6;
		padding: 0 25px 0;
	}

	.aside-recomm-border .aside-title {
		padding: 20px 0;
		line-height: 21px;
		font-size: 18px;
		color: #333;
	}

	.aside-recomm-border .rec_common_con {
		margin-bottom: 22px;
	}

	.mod-toggle-title {
		line-height: 38px;
		border-bottom: 1px solid #e6e6e6;
		padding-top: 80px;
	}

	.mod-toggle-title .mod-title {
		color: #333;
		font-size: 20px;
		display: inline-block;
		width: auto;
		line-height: 26px;
		padding-top: 0;
		padding-bottom: 12px;
	}

	.mod-toggle-title .mod-toggle-nav {
		float: right;
		border-left: 1px solid #e6e6e6;
	}

	.mod-toggle-title .mod-toggle-nav .nav-item {
		float: left;
		border-width: 1px 1px 1px 0;
		border-color: #e6e6e6;
		border-style: solid;
		background: #f6f6f6;
		padding: 0 14px;
		font-size: 14px;
		color: #333;
		cursor: pointer;
	}

	.mod-toggle-title .mod-toggle-nav .hover {
		border-width: 1px 1px 0 0;
		background: #fff;
	}

	.trend-content {
		border: 1px solid #e6e6e6;
		border-top: none;
		padding-top: 3px;
	}

	.trend-content .compare-info {
		border-bottom: 1px solid #e6e6e6;
		overflow: hidden;
	}

	.trend-content .compare-info .compare-item {
		width: 277px;
		padding: 22px 0 22px 22px;
		float: left;
	}

	.trend-content .compare-info .compare-item .compare-title {
		line-height: 17px;
		font-size: 14px;
		color: #666;
	}

	.trend-content .compare-info .compare-item .compare-title .green {
		background: #61ab22;
	}

	.trend-content .compare-info .compare-item .compare-title .red {
		background: #e4715e;
	}

	.trend-content .compare-info .compare-item .compare-title .blue {
		background: #6b87c7;
	}

	.trend-content .compare-info .compare-item .compare-title .compare-icon {
		display: inline-block;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		margin-right: 6px;
	}

	.trend-content .compare-info .compare-item .compare-price {
		margin-top: 7px;
		padding-bottom: 4px;
		height: 20px;
	}

	.trend-content .compare-info .compare-item .compare-price .price {
		font-size: 18px;
		color: #333;
		display: inline-block;
	}

	.trend-content .compare-info .compare-item .compare-price .price .last {
		display: inline-block;
		font-size: 12px;
		color: #999;
	}

	.trend-content .compare-info .compare-item .compare-price .price .up {
		color: #f60;
	}

	.trend-content .compare-info .compare-item .compare-price .price .down {
		color: #62ab00;
	}

	.trend-content .compare-info .compare-item .compare-price .no-price {
		color: #999;
	}

	.trend-content .b-content {
		min-height: 200px;
		padding: 12px 20px 0;
	}

	.trend-content .b-content .chart-desc {
		margin: 20px 0;
	}

	.trend-content .b-content #chartOverLay {
		display: none;
	}

	.trend-content .echartTip {
		background: #fff;
		width: 170px;
		height: 92px;
		border: 1px solid #eee;
		padding: 10px;
		color: #000;
	}

	.trend-content .echartTip .month {
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #333;
		font-weight: 600;
		margin-bottom: 6px;
	}

	.trend-content .echartTip .echartItem {
		overflow: hidden;
	}

	.trend-content .echartTip .echartItem div {
		float: left;
		overflow: hidden;
	}

	.trend-content .echartTip .echartItem .icon {
		width: 12px;
		height: 12px;
		background: #62ab00;
		margin-top: 5px;
	}

	.trend-content .echartTip .echartItem .cellName {
		width: 40%;
		color: #666;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-left: 5%;
	}

	.trend-content .echartTip .echartItem .cellPrice {
		margin-left: 8%;
		color: #f60;
		font-size: 14px;
		margin-top: 2px;
	}

	.trend-content .echartTip .echartItem1 .icon {
		background: #f60;
	}

	.trend-content .echartTip .echartItem2 .icon {
		background: #6b87c7;
	}

	.mod-title {
		padding-top: 37px;
		line-height: 46px;
		font-size: 20px;
		color: #333;
		width: 100%;
	}

	.mod-title .title {
		display: inline-block;
		vertical-align: middle;
		color: #333;
	}

	.mod-title .mod-title-link {
		font-size: 12px;
		color: #999;
		padding: 7px 12px 0 0;
		display: inline-block;
		line-height: 16px;
		vertical-align: middle;
	}

	.mod-title .mod-title-link .iconfont {
		color: #999;
		font-size: 12px;
		margin-right: 3px;
		vertical-align: -2px;
	}

	.mod-title .mod-title-link:hover {
		color: #f60;
		text-decoration: underline;
	}

	.experts-list {
		border-top: 1px solid #e6e6e6;
		overflow: hidden;
	}

	.experts-list li {
		margin-top: 19px;
	}

	.experts-list li .comment-info {
		float: left;
		width: 730px;
		padding: 0 60px 0 0;
		border-right: 1px solid #f1f1f1;
	}

	.experts-list li .comment-info dt {
		float: left;
		width: 40px;
		height: 100%;
		margin-top: 6px;
	}

	.experts-list li .comment-info dt span {
		display: inline-block;
		color: #fff;
		width: 40px;
		height: 18px;
		line-height: 18px;
		text-align: center;
		background-color: #62ab00;
	}

	.experts-list li .comment-info dd {
		font-size: 14px;
		line-height: 30px;
		margin-left: 58px;
		color: #666;
	}

	.experts-list li .comment-info .good-character dd {
		margin-left: 132px;
	}

	.experts-list li .comment-info .good-character dd label {
		margin-left: -83px;
	}

	.experts-list li .comment-info dl.bad-character dt span {
		background-color: #aaa;
	}

	.experts-list li .expert-info {
		float: right;
		width: 100px;
		text-align: center;
	}

	.experts-list li .expert-info img {
		width: 54px;
		height: 72px;
	}

	.experts-list li .expert-info .info-brokername {
		color: #333;
		font-size: 16px;
		margin-top: 7px;
		font-weight: 700;
	}

	#footer-bottom-tip {
		margin-top: 30px !important;
	}

	#seo-box {
		width: 1180px;
		font-size: 12px;
		margin: 0 auto 30px;
		font-family: Microsoft YaHei, "\5FAE\8F6F\96C5\9ED1";
	}

	#seo-box li {
		margin: 0;
		padding: 0;
	}

	#seo-box .tab-1 {
		display: inline-block;
		margin-right: 0;
		margin-bottom: 0;
		vertical-align: top;
	}

	#seo-box .tab-1 .but-border {
		display: inline-block;
		border-top: 1px solid #e6e6e6;
		border-right: 1px solid #e6e6e6;
		padding: 10px 20px;
		background-color: #f5f5f5;
	}

	#seo-box .tab-1 .first-border {
		border-left: 1px solid #e6e6e6;
	}

	#seo-box .tab-1 .cur {
		background-color: #fff;
		z-index: 2;
		position: relative;
		font-weight: bold;
	}

	#seo-box .border {
		border: 1px solid #e6e6e6;
		margin-top: -2px;
		position: relative;
		width: 100%;
	}

	#seo-box .border .parent-2 {
		display: none;
		padding-top: 10px;
		padding-left: 20px;
	}

	#seo-box .border .btn-show {
		display: block;
	}

	#seo-box .border .tab-2 {
		display: inline-block;
		vertical-align: top;
		margin-right: 20px;
		margin-bottom: 10px;
		font-size: 12px;
	}

	#seo-box .border .tab-2 a:hover {
		text-decoration: underline;
	}

	.broker-card {
		border: 1px solid #e6e6e6;
	}

	.broker-card .broker-border {
		padding: 20px 20px 20px;
	}

	.broker-card .broker-border .broker-photo {
		width: 110px;
		height: 141px;
		border-radius: 2px;
		margin: 0 auto;
		display: block;
	}

	.broker-card .broker-border .broker-photo-main {
		width: 110px;
		height: 141px;
		border-radius: 2px;
		margin: 0 auto;
		display: block;
	}

	.broker-card .broker-border .broker-name {
		line-height: 17px;
		padding: 18px 0 30px 0;
		color: #333;
		font-size: 15px;
		text-align: center;
	}

	.broker-card .broker-border .broker-name .active-tag {
		width: 68px;
		height: 18px;
		background: #ffeeea;
		color: #ff552e;
		border-radius: 2px;
		display: inline-block;
		text-align: center;
		line-height: 20px;
		font-size: 12px;
		margin-left: 3px;
	}

	.broker-card .broker-border .broker-level {
		height: 26px;
		line-height: 26px;
		position: relative;
		font-size: 14px;
	}

	.broker-card .broker-border .broker-level:hover .tip-box {
		display: block;
	}

	.broker-card .broker-border .broker-level .stars-title {
		margin-top: 0;
		float: left;
		font-size: 12px;
		color: #999;
	}

	.broker-card .broker-border .broker-level .stars-wrap-bk {
		height: 26px;
		width: 63px;
		float: left;
		cursor: pointer;
		position: relative;
		display: inline-block;
	}

	.broker-card .broker-border .broker-level .stars-wrap-bk .stars-bg {
		position: absolute;
		white-space: nowrap;
		left: 0;
		top: 0;
		z-index: 1;
		overflow: hidden;
		width: 72px;
	}

	.broker-card .broker-border .broker-level .stars-wrap-bk .stars-bg i {
		color: #e6e6e6;
	}

	.broker-card .broker-border .broker-level .stars-wrap-bk .stars-solid {
		width: 63px;
		height: 39px;
		position: absolute;
		white-space: nowrap;
		left: 0;
		top: 0;
		z-index: 2;
		overflow: hidden;
	}

	.broker-card .broker-border .broker-level .stars-wrap-bk .stars-solid i {
		color: #62ab00;
	}

	.broker-card .broker-border .broker-level .stars-wrap-bk i {
		font-size: 13px;
		margin: 0 2px;
		vertical-align: 1px;
	}

	.broker-card .broker-border .broker-level .tip-box {
		display: none;
		position: absolute;
		bottom: 36px;
		left: 7px;
		padding: 0 10px;
		border: 1px solid #e6e6e6;
		background-color: #fff;
		white-space: nowrap;
		font-size: 12px;
		border-radius: 4px;
	}

	.broker-card .broker-border .broker-level .tip-box p {
		color: #666;
		height: 32px;
		line-height: 32px;
	}

	.broker-card .broker-border .broker-level .tip-box .icon-arrow {
		display: block;
		position: absolute;
		width: 0;
		height: 0;
		left: 35px;
		top: 47px;
		margin-top: -14px;
		border-top: 6px solid #e6e6e6;
		border-left: 6px dashed transparent;
		border-right: 6px dashed transparent;
	}

	.broker-card .broker-border .broker-level .tip-box .icon-arrow span {
		display: block;
		overflow: hidden;
		position: absolute;
		height: 0;
		width: 0;
		left: -6px;
		top: -8px;
		border-top: 6px solid #fff;
		border-left: 6px dashed transparent;
		border-right: 6px dashed transparent;
	}

	.broker-card .broker-border .broker-line {
		line-height: 26px;
		color: #999;
		font-size: 12px;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.broker-card .broker-border .broker-line a {
		display: inline-block;
		color: #257ac0;
	}

	.broker-card .broker-border .broker-line a:hover {
		color: #f60;
		text-decoration: underline;
	}

	.broker-card .broker-border .broker-line .jjr-medal {
		display: inline-block;
		*display: inline;
		_zoom: 1;
		vertical-align: -7px;
	}

	.broker-card .broker-border .broker-line .jjr-medal .jjr-icn-broker {
		color: #3cb950;
	}

	.broker-card .broker-border .broker-line .jjr-medal .jjr-icn-commu {
		color: #3cb950;
	}

	.broker-card .broker-border .broker-line .jjr-medal .jjr-icn-ans {
		color: #3cb950;
	}

	.broker-card .broker-border .broker-line .jjr-medal .jjr-icn-lijian {
		color: #3cb950;
	}

	.broker-card .broker-border .broker-line .jjr-medal .jjr-icn-daren {
		color: #3cb950;
	}

	.broker-card .broker-border .broker-line .jjr-medal .jjr-icn-shikan {
		color: #3cb950;
	}

	.broker-card .broker-border .broker-line .jjr-medal .jjr-icn-job {
		color: #fa4600;
	}

	.broker-card .broker-border .broker-line .jjr-medal .jjr-icn-comf {
		color: #fa4600;
	}

	.broker-card .broker-border .broker-line .jjr-medal i {
		font-size: 18px;
		margin-right: 7px;
		cursor: pointer;
	}

	.broker-card .broker-border .brokercard-scorewrap {
		display: inline-block;
		*zoom: 1;
		height: 40px;
		overflow: hidden;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoretitle {
		float: left;
		font-size: 12px;
		color: #999;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail {
		margin: 6px 0 8px;
		display: inline-block;
		position: relative;
		float: left;
		*zoom: 1;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail:hover .brokercard-sd-tip {
		display: inline-block;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-cont span {
		float: left;
		padding: 0 12px;
		color: #999;
		border-right: 1px solid;
		height: 30px;
		width: 39px;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-cont span:last-child {
		border-right: 0;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-cont .no-pd-left {
		padding-left: 0 !important;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-cont .score-nochange .score-num {
		color: #333;
		font-size: 12px;
		float: left;
		line-height: 22px;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-cont em {
		float: left;
		line-height: 20px;
		font-size: 12px;
		width: 100%;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip {
		display: none;
		position: absolute;
		padding: 7px 14px;
		font-size: 12px;
		line-height: 26px;
		border: 1px solid #e6e6e6;
		border-radius: 4px;
		background: #fff;
		z-index: 11;
		bottom: 35px;
		left: -53px;
		color: #666;
		width: 140%;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip .arr-down {
		top: 93px;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .mg-r .score-tag {
		display: inline-block;
		position: absolute;
		right: 12px;
		vertical-align: top;
		font-style: normal;
		margin: 5px 0 0 3px;
		width: 14px;
		height: 14px;
		font-size: 12px;
		color: #fff;
		line-height: 14px;
		text-align: center;
		border-radius: 2px;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .score-nochange .score-tag {
		background-image: url(//pages.anjukestatic.com/usersite/site/img/broker/zhong1_2x.png);
		background-size: 14px 14px;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .score-nochange .score-num {
		color: #62ab00;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .score-up .score-num {
		color: #e54b00;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .score-up .score-tag {
		background-image: url(//pages.anjukestatic.com/usersite/site/img/broker/gao1_2x.png);
		background-size: 14px 14px;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .score-down .score-num {
		color: #62ab00;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .score-down .score-tag {
		background-image: url(//pages.anjukestatic.com/usersite/site/img/broker/di1_2x.png);
		background-size: 14px 14px;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip .arr-down i,
	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip1 .arr-down i {
		top: -12px;
		left: -10px;
		border-top: 10px solid #fff;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip div,
	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip1 div {
		white-space: nowrap;
	}

	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip .mg-r,
	.broker-card .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip1 .mg-r {
		padding-right: 20px;
		display: inline-block;
		width: 93px;
		position: relative;
	}

	.broker-card .broker-border .complaints-phone {
		color: #999;
		font-size: 12px;
		line-height: 23px;
	}

	.broker-card .broker-border .complaints-record {
		color: #257ac0;
		font-size: 12px;
		line-height: 21px;
		margin-bottom: 18px;
		display: block;
		cursor: pointer;
	}

	.broker-card .broker-border .complaints-record:hover {
		color: #f60;
		text-decoration: underline;
	}

	.broker-card .broker-border .employment-record-num {
		margin-top: 5px;
		font-size: 12px;
		cursor: pointer;
		margin-right: 5px;
		position: relative;
		background: none \9;
		line-height: 16px;
		display: inline-block;
		color: #999 !important;
		margin-bottom: 10px;
	}

	.broker-card .broker-border .employment-record-num .name {
		font-size: 12px !important;
		color: #999 !important;
	}

	.broker-card .broker-border .employment-record-num .name span {
		color: #999;
	}

	.broker-card .broker-border .employment-record-num .name span.active {
		color: #257ac0;
	}

	.broker-card .broker-border .employment-record-num .qr-code-wrap {
		display: none;
		z-index: 11;
		width: 120px;
		position: absolute;
		top: 18px;
		right: -15px;
		padding: 10px;
		background: #fff;
		border: 1px solid #d2d2d2;
	}

	.broker-card .broker-border .employment-record-num .qr-code-wrap .code {
		width: 100px;
		height: 100px;
		display: inline-block;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin-left: 10px;
	}

	.broker-card .broker-border .employment-record-num .qr-code-wrap .word {
		font-size: 12px;
		color: #9b9b9b;
		text-align: center;
	}

	.broker-card .broker-border .employment-record-num .qr-code-wrap .jianjiao {
		width: 22px;
		height: 17px;
		top: -7px;
		position: absolute;
		right: 57px;
		background-position: -1680px 0;
		overflow: hidden;
		background-image: url(//img.58cdn.com.cn/ui8/house/detail/images/zufang-detail-icon.png);
		background-repeat: no-repeat;
	}

	.broker-card .broker-border .employment-record-num:hover .qr-code-wrap {
		display: block;
	}

	.broker-card .broker-border .card-info {
		position: relative;
		cursor: pointer;
	}

	.broker-card .broker-border .card-info:hover .card-wrap {
		display: -moz-flex;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.broker-card .broker-border .card-info .card-text {
		line-height: 22px;
		color: #999;
		font-size: 12px;
	}

	.broker-card .broker-border .card-info .card-wrap {
		position: absolute;
		border: 1px solid #e6e6e6;
		padding: 5px;
		border-radius: 4px;
		left: 24px;
		background: #fff;
		z-index: 100;
		display: none;
		-moz-align-items: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-moz-justify-content: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		bottom: 22px;
		line-height: 0;
		cursor: pointer;
	}

	.broker-card .broker-border .card-info .card-wrap::before {
		content: "";
		position: absolute;
		bottom: -11px;
		left: 35px;
		width: 0;
		height: 0;
		border-width: 6px;
		border-style: solid dashed dashed;
		border-color: #fff transparent transparent;
		z-index: 2;
	}

	.broker-card .broker-border .card-info .card-wrap::after {
		content: "";
		position: absolute;
		bottom: -12px;
		left: 35px;
		width: 0;
		height: 0;
		border-width: 6px;
		border-style: solid dashed dashed;
		border-color: #e6e6e6 transparent transparent;
		z-index: 1;
	}

	.broker-card .broker-border .card-info .card-wrap.self-card {
		width: 200px;
		height: 300px;
	}

	.broker-card .broker-border .card-info .card-wrap.company-card {
		width: 270px;
		height: 400px;
	}

	.broker-card .broker-border .card-info .card-wrap img {
		width: 100%;
		max-height: 100%;
		max-width: 100%;
	}

	.broker-card .broker-border .allscreen-wrap {
		display: none;
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.7);
		overflow: auto;
	}

	.broker-card .broker-border .allscreen-wrap .close {
		position: absolute;
		right: 60px;
		top: 40px;
		font-size: 33px;
		color: #fff;
	}

	.broker-card .broker-border .allscreen-wrap .allscreen-image {
		width: 82%;
		margin: 3% auto;
		display: block;
	}

	.broker-card .broker-border .score-up,
	.broker-card .broker-border .score-down,
	.broker-card .broker-border .score-nochange {
		width: 35px\9;
	}

	.broker-card .card-phone-click {
		width: 222px;
		height: 58px;
		line-height: 58px;
		background: #62ab00;
		color: #fff;
		font-size: 16px;
		text-align: center;
		margin: 0 auto 18px;
		cursor: pointer;
		font-weight: 400;
	}

	.broker-card .card-phone-click i {
		color: #fff;
		font-size: 24px;
		margin: 1px 10px 0 0;
		vertical-align: middle;
	}

	.broker-card .card-phone-click:hover {
		background: #4a8200;
	}

	.personal-card {
		border: 1px solid #e6e6e6;
		padding: 20px 19px 24px;
		text-align: center;
	}

	.personal-card .personal-photo {
		width: 110px;
		height: 141px;
		border-radius: 2px;
		margin: 0 auto;
		display: block;
	}

	.personal-card .personal-name {
		line-height: 20px;
		padding: 15px 0 10px;
		color: #333;
		font-size: 15px;
		text-align: center;
		font-weight: 700;
	}

	.personal-card .personal-mobile {
		z-index: 10;
		position: relative;
		font-size: 15px;
		color: #62ab00;
		text-align: center;
		width: 220px;
		border: 1px solid #62ab00;
		line-height: 40px;
	}

	.personal-card .personal-mobile:hover {
		background: #62ab00;
		color: #fff;
	}

	.personal-card .personal-mobile .personal-tel-dialog {
		z-index: 100;
		display: none;
		position: absolute;
		left: 0;
		top: 62px;
		text-align: center;
		width: 100%;
		padding: 25px 0 22px;
		border: 1px solid #e6e6e6;
		background: #fff;
		border-radius: 4px;
	}

	.personal-card .personal-mobile .personal-tel-dialog .link {
		background: url("https://pages.anjukestatic.com/usersite/site/img/seo/ajk-app-code.png") no-repeat;
		height: 140px;
		width: 140px;
	}

	.personal-card .personal-mobile .personal-tel-dialog .arrow_box {
		position: absolute;
		top: -1px;
		left: 111px;
		background: #fff;
		border: 1px solid #e6e6e6;
	}

	.personal-card .personal-mobile .personal-tel-dialog .arrow_box i,
	.personal-card .personal-mobile .personal-tel-dialog .arrow_box em {
		bottom: 100%;
		left: 50%;
		border: solid transparent;
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}

	.personal-card .personal-mobile .personal-tel-dialog .arrow_box i {
		border-color: rgba(230, 230, 230, 0);
		border-bottom-color: #e6e6e6;
		border-width: 11px;
		margin-left: -11px;
	}

	.personal-card .personal-mobile .personal-tel-dialog .arrow_box em {
		border-color: rgba(255, 255, 255, 0);
		border-bottom-color: #fff;
		border-width: 10px;
		margin-left: -10px;
	}

	.personal-card .personal-mobile .personal-tel-dialog .link {
		display: block;
		margin: 0 auto;
	}

	.personal-card .personal-mobile .personal-tel-dialog .tip-l {
		margin-top: 15px;
		font-size: 15px;
		color: #333;
		line-height: 1;
		font-weight: normal;
	}

	.personal-card .personal-mobile .personal-tel-dialog .tip-m {
		color: #666;
		font-size: 12px;
		line-height: 18px;
	}

	.personal-card .personal-mobile .personal-tel-dialog .tip-s {
		color: #999;
		font-size: 12px;
		line-height: 18px;
	}

	.personal-card .personal-expired {
		color: #fff;
		background: #9b9da3;
		font-size: 15px;
		text-align: center;
		width: 220px;
		border: 1px solid #9b9da3;
		line-height: 40px;
	}

	.aside-mod {
		width: 214px;
		padding: 20px 22px;
		border: 1px solid #e6e6e6;
	}

	.aside-mod .aside-title {
		padding: 20px 0;
		line-height: 44px;
		font-size: 16px;
		color: #000;
	}

	.aside-mod .flowover {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.aside-mod .aside-list {
		padding-bottom: 17px;
	}

	.aside-mod .aside-list .aside-item {
		float: left;
		margin-right: 28px;
		line-height: 28px;
		height: 28px;
	}

	.aside-mod .aside-list .aside-item:nth-child(even) {
		margin-right: 0;
	}

	.aside-mod .aside-list .aside-link {
		display: inline-block;
		width: 93px;
		font-size: 12px;
		color: #666;
	}

	.aside-mod .aside-list .aside-link:hover {
		color: #f60;
		text-decoration: underline;
	}

	.chat-card {
		width: 258px;
		height: 240px;
		border: 1px solid #e6e6e6;
		text-align: center;
		margin-top: 22px;
		display: none;
	}

	.chat-card.show {
		display: block;
	}

	.chat-card .chat-word {
		line-height: 20px;
		padding-top: 28px;
		font-size: 18px;
		color: #333;
	}

	.chat-card .chat-img {
		width: 120px;
		padding-top: 32px;
	}

	.chat-card .chat-intro {
		line-height: 14px;
		margin-top: 20px;
		font-size: 12px;
		color: #999;
	}

	.toolbar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 44px;
		background: #62ab00;
		z-index: 10000;
	}

	.toolbar .wrapper {
		width: 1180px;
		margin: 0 auto;
	}

	.toolbar .wrapper .toolMenu {
		float: left;
		zoom: 1;
	}

	.toolbar .wrapper .toolMenu li {
		float: left;
		width: 120px;
		height: 44px;
		line-height: 44px;
	}

	.toolbar .wrapper .toolMenu li a {
		display: block;
		color: #fff;
		text-align: center;
		font: 16px/44px "Hiragino Sans GB", "Microsoft YaHei", tahoma, arial, simhei;
	}

	.toolbar .wrapper .toolMenu li a:hover {
		background: #599700;
	}

	.toolbar .wrapper .toolMenu li .now {
		background: #599700;
	}

	.toolbar .wrapper .toolMenu .ctr-show {
		display: list-item;
	}

	.toolbar .wrapper .toolRight {
		float: right;
	}

	.toolbar .wrapper .toolRight .toollinks {
		float: right;
	}

	.toolbar .wrapper .toolRight .brokerInfo {
		position: relative;
		float: right;
		width: 240px;
	}

	.toolbar .wrapper .toolRight .brokerInfo .bInfo {
		font: 16px/44px "Hiragino Sans GB", "Microsoft YaHei", tahoma, arial, simhei;
	}

	.toolbar .wrapper .toolRight .brokerInfo .click-hover {
		font-size: 16px;
		cursor: pointer;
	}

	.toolbar .wrapper .toolRight .brokerInfo .click-hover i {
		color: #fff;
		font-size: 24px;
		margin-right: 10px;
		vertical-align: top;
	}

	.toolbar .wrapper .toolRight .brokerInfo .bInfo2 {
		width: 248px;
		height: 44px;
		color: #fff;
		text-align: center;
		font-family: "Tahoma";
		background-color: #4a8200;
	}

	.jjr-mobile {
		z-index: 10;
		position: relative;
		font-size: 15px;
		color: #62ab00;
		text-align: center;
		width: 220px;
		border: 1px solid #62ab00;
		line-height: 40px;
	}

	.jjr-mobile:hover {
		background: #62ab00;
		color: #fff;
	}

	.jjr-mobile:hover .jjr-tel-dialog {
		display: block;
	}

	.jjr-mobile .jjr-tel-dialog {
		z-index: 100;
		display: none;
		position: absolute;
		left: 0;
		top: 62px;
		text-align: center;
		width: 100%;
		padding: 25px 0 22px;
		border: 1px solid #e6e6e6;
		background: #fff;
		border-radius: 4px;
	}

	.jjr-mobile .jjr-tel-dialog .arrow_box {
		position: absolute;
		top: -1px;
		left: 111px;
		background: #fff;
		border: 1px solid #e6e6e6;
	}

	.jjr-mobile .jjr-tel-dialog .arrow_box i,
	.jjr-mobile .jjr-tel-dialog .arrow_box em {
		bottom: 100%;
		left: 50%;
		border: solid transparent;
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}

	.jjr-mobile .jjr-tel-dialog .arrow_box i {
		border-color: rgba(230, 230, 230, 0);
		border-bottom-color: #e6e6e6;
		border-width: 11px;
		margin-left: -11px;
	}

	.jjr-mobile .jjr-tel-dialog .arrow_box em {
		border-color: rgba(255, 255, 255, 0);
		border-bottom-color: #fff;
		border-width: 10px;
		margin-left: -10px;
	}

	.jjr-mobile .jjr-tel-dialog .link {
		display: block;
		margin: 0 auto;
	}

	.jjr-mobile .jjr-tel-dialog .jjr-phone-qr-code {
		display: inline-block;
		vertical-align: middle;
		margin: 0 auto;
		width: 170px;
		height: 170px;
	}

	.jjr-mobile .jjr-tel-dialog .tip-l {
		margin-top: 15px;
		font-size: 15px;
		color: #333;
		line-height: 1;
		font-weight: normal;
	}

	.jjr-mobile .jjr-tel-dialog .tip-m {
		color: #666;
		font-size: 12px;
		line-height: 18px;
	}

	.jjr-mobile .jjr-tel-dialog .tip-s {
		color: #999;
		font-size: 12px;
		line-height: 18px;
	}

	.correlation-broker-wrap {
		margin-top: 30px;
	}

	.correlation-broker-wrap .title {
		font-size: 20px;
		color: #333;
		font-weight: 500;
	}

	.correlation-broker-wrap .title .more {
		float: right;
		color: #257ac0;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
	}

	.correlation-broker-wrap .broker-list {
		width: 100%;
		height: 350px;
	}

	.correlation-broker-wrap .broker-list li {
		float: left;
		width: 159px;
		height: 350px;
		margin-right: 34px;
		border: 1px solid #f6f6f6;
		padding: 15px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-photo {
		width: 80px;
		height: 104px;
		border-radius: 2px;
		margin: 0 auto;
		display: block;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-name {
		line-height: 17px;
		padding: 18px 0 10px 0;
		color: #000;
		font-size: 12px;
		text-align: center;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-name .active-tag {
		width: 68px;
		height: 18px;
		background: #ffeeea;
		color: #ff552e;
		border-radius: 2px;
		display: inline-block;
		text-align: center;
		line-height: 20px;
		font-size: 12px;
		margin-left: 3px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-level {
		height: 26px;
		line-height: 26px;
		position: relative;
		font-size: 14px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-level .stars-title {
		margin-top: 0;
		float: left;
		font-size: 10px;
		color: #999;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-level .stars-wrap-bk {
		height: 26px;
		width: 63px;
		float: left;
		cursor: pointer;
		position: relative;
		display: inline-block;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-level .stars-wrap-bk .stars-bg {
		position: absolute;
		white-space: nowrap;
		left: 0;
		top: 0;
		z-index: 1;
		overflow: hidden;
		width: 72px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-level .stars-wrap-bk .stars-bg i {
		color: #e6e6e6;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-level .stars-wrap-bk .stars-solid {
		width: 63px;
		height: 39px;
		position: absolute;
		white-space: nowrap;
		left: 0;
		top: 0;
		z-index: 2;
		overflow: hidden;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-level .stars-wrap-bk .stars-solid i {
		color: #62ab00;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-level .stars-wrap-bk i {
		font-size: 13px;
		margin: 0 2px;
		vertical-align: 1px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line {
		line-height: 26px;
		color: #999;
		font-size: 12px;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line a {
		display: inline-block;
		color: #257ac0;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line a:hover {
		color: #f60;
		text-decoration: underline;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line .jjr-medal {
		display: inline-block;
		*display: inline;
		_zoom: 1;
		vertical-align: -7px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line .jjr-medal .jjr-icn-broker {
		color: #3cb950;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line .jjr-medal .jjr-icn-commu {
		color: #3cb950;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line .jjr-medal .jjr-icn-ans {
		color: #3cb950;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line .jjr-medal .jjr-icn-lijian {
		color: #3cb950;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line .jjr-medal .jjr-icn-daren {
		color: #3cb950;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line .jjr-medal .jjr-icn-shikan {
		color: #3cb950;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line .jjr-medal .jjr-icn-job {
		color: #fa4600;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line .jjr-medal .jjr-icn-comf {
		color: #fa4600;
	}

	.correlation-broker-wrap .broker-list li .broker-border .broker-line .jjr-medal i {
		font-size: 18px;
		margin-right: 7px;
		cursor: pointer;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap {
		display: inline-block;
		*zoom: 1;
		height: 40px;
		overflow: hidden;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoretitle {
		float: left;
		font-size: 12px;
		color: #999;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail {
		margin: 6px 0 8px;
		display: inline-block;
		position: relative;
		float: left;
		*zoom: 1;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail:hover .brokercard-sd-tip {
		display: inline-block;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-cont span {
		float: left;
		padding: 0 7px;
		color: #999;
		border-right: 1px solid;
		height: 30px;
		width: 28px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-cont span:last-child {
		border-right: 0;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-cont .no-pd-left {
		padding-left: 0 !important;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-cont .score-nochange .score-num {
		color: #333;
		font-size: 12px;
		float: left;
		line-height: 22px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-cont em {
		float: left;
		line-height: 20px;
		font-size: 12px;
		width: 100%;
		text-align: center;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip {
		display: none;
		position: absolute;
		padding: 7px 14px;
		font-size: 12px;
		line-height: 26px;
		border: 1px solid #e6e6e6;
		border-radius: 4px;
		background: #fff;
		z-index: 11;
		bottom: 35px;
		left: -53px;
		color: #666;
		width: 140%;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip .arr-down {
		top: 93px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .mg-r .score-tag {
		display: inline-block;
		position: absolute;
		right: 12px;
		vertical-align: top;
		font-style: normal;
		margin: 5px 0 0 3px;
		width: 14px;
		height: 14px;
		font-size: 12px;
		color: #fff;
		line-height: 14px;
		text-align: center;
		border-radius: 2px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .score-nochange .score-tag {
		background-image: url(//pages.anjukestatic.com/usersite/site/img/broker/zhong1_2x.png);
		background-size: 14px 14px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .score-nochange .score-num {
		color: #62ab00;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .score-up .score-num {
		color: #e54b00;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .score-up .score-tag {
		background-image: url(//pages.anjukestatic.com/usersite/site/img/broker/gao1_2x.png);
		background-size: 14px 14px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .score-down .score-num {
		color: #62ab00;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .score-down .score-tag {
		background-image: url(//pages.anjukestatic.com/usersite/site/img/broker/di1_2x.png);
		background-size: 14px 14px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip .arr-down i,
	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip1 .arr-down i {
		top: -12px;
		left: -10px;
		border-top: 10px solid #fff;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip div,
	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip1 div {
		white-space: nowrap;
	}

	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip .mg-r,
	.correlation-broker-wrap .broker-list li .broker-border .brokercard-scorewrap .brokercard-scoredetail .brokercard-sd-tip1 .mg-r {
		padding-right: 20px;
		display: inline-block;
		width: 93px;
		position: relative;
	}

	.correlation-broker-wrap .broker-list li .broker-border .employment-record-num {
		font-size: 12px;
		margin-top: 5px;
		cursor: pointer;
		margin-right: 5px;
		position: relative;
		background: none \9;
		line-height: 16px;
		display: inline-block;
		color: #999 !important;
		margin-bottom: 2px;
		width: 100%;
	}

	.correlation-broker-wrap .broker-list li .broker-border .employment-record-num .name {
		width: 100%;
		font-size: 12px !important;
		color: #999 !important;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-all;
		display: block;
	}

	.correlation-broker-wrap .broker-list li .broker-border .employment-record-num .name span {
		color: #999;
	}

	.correlation-broker-wrap .broker-list li .broker-border .employment-record-num .name span.active {
		color: #257ac0;
	}

	.correlation-broker-wrap .broker-list li .broker-border .employment-record-num .qr-code-wrap {
		display: none;
		z-index: 11;
		width: 120px;
		position: absolute;
		top: 18px;
		right: -15px;
		padding: 10px;
		background: #fff;
		border: 1px solid #d2d2d2;
	}

	.correlation-broker-wrap .broker-list li .broker-border .employment-record-num .qr-code-wrap .code {
		width: 100px;
		height: 100px;
		display: inline-block;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin-left: 10px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .employment-record-num .qr-code-wrap .word {
		font-size: 12px;
		color: #9b9b9b;
		text-align: center;
	}

	.correlation-broker-wrap .broker-list li .broker-border .employment-record-num .qr-code-wrap .jianjiao {
		width: 22px;
		height: 17px;
		top: -7px;
		position: absolute;
		right: 57px;
		background-position: -1680px 0;
		overflow: hidden;
		background-image: url(//img.58cdn.com.cn/ui8/house/detail/images/zufang-detail-icon.png);
		background-repeat: no-repeat;
	}

	.correlation-broker-wrap .broker-list li .broker-border .employment-record-num:hover .qr-code-wrap {
		display: block;
	}

	.correlation-broker-wrap .broker-list li .broker-border .card-info {
		position: relative;
		cursor: pointer;
	}

	.correlation-broker-wrap .broker-list li .broker-border .card-info:hover .card-wrap {
		display: -moz-flex;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.correlation-broker-wrap .broker-list li .broker-border .card-info .card-text {
		line-height: 22px;
		color: #999;
		font-size: 12px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .card-info .card-wrap {
		position: absolute;
		border: 1px solid #e6e6e6;
		padding: 5px;
		border-radius: 4px;
		left: 24px;
		background: #fff;
		z-index: 100;
		display: none;
		-moz-align-items: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-moz-justify-content: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		bottom: 22px;
		line-height: 0;
		cursor: pointer;
	}

	.correlation-broker-wrap .broker-list li .broker-border .card-info .card-wrap::before {
		content: "";
		position: absolute;
		bottom: -11px;
		left: 35px;
		width: 0;
		height: 0;
		border-width: 6px;
		border-style: solid dashed dashed;
		border-color: #fff transparent transparent;
		z-index: 2;
	}

	.correlation-broker-wrap .broker-list li .broker-border .card-info .card-wrap::after {
		content: "";
		position: absolute;
		bottom: -12px;
		left: 35px;
		width: 0;
		height: 0;
		border-width: 6px;
		border-style: solid dashed dashed;
		border-color: #e6e6e6 transparent transparent;
		z-index: 1;
	}

	.correlation-broker-wrap .broker-list li .broker-border .card-info .card-wrap.self-card {
		width: 200px;
		height: 300px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .card-info .card-wrap.company-card {
		width: 270px;
		height: 400px;
	}

	.correlation-broker-wrap .broker-list li .broker-border .card-info .card-wrap img {
		width: 100%;
		max-height: 100%;
		max-width: 100%;
	}

	.correlation-broker-wrap .broker-list li .broker-border .card-phone-click-other {
		width: 153px;
		height: 38px;
		line-height: 38px;
		background: #62ab00;
		color: #fff;
		font-size: 16px;
		text-align: center;
		margin: 0 auto 18px;
		margin-top: 10px;
		cursor: pointer;
		font-weight: 400;
	}

	.correlation-broker-wrap .broker-list li .broker-border .card-phone-click-other i {
		color: #fff;
		font-size: 24px;
		margin: 1px 10px 0 0;
		vertical-align: middle;
	}

	.correlation-broker-wrap .broker-list li .broker-border .card-phone-click-other:hover {
		background: #4a8200;
	}

	body {
		font-family: "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", "Hiragino Sans GB",
			tahoma, arial, simhei;
		color: #333;
		font: 12px Arial, Helvetica, sans-serif, Simsun;
	}

	.wrapper {
		width: 1180px;
		margin: 0 auto 47px;
		clear: both;
	}

	.wrapper .lbox {
		float: left;
		width: 900px;
	}

	.wrapper .rbox {
		float: right;
		width: 260px;
		padding: 15px 0 10px;
	}

	.cf:after {
		content: ".";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	.card-info .cd-official-check,
	.mod-title .right-info .cd-official-check {
		position: relative;
	}

	.card-info .cd-official-check .qrcode-popover,
	.mod-title .right-info .cd-official-check .qrcode-popover {
		display: none;
		z-index: 12;
		width: -webkit-fit-content;
		width: -moz-fit-content;
		width: fit-content;
		position: absolute;
		right: 0;
		top: 28px;
		border: 1px solid #d2d2d2;
		background-color: #fff;
		text-align: center;
		padding: 20px;
		padding-bottom: 12px;
	}

	.card-info .cd-official-check .qrcode-popover img,
	.mod-title .right-info .cd-official-check .qrcode-popover img {
		width: 100px;
		height: 100px;
	}

	.card-info .cd-official-check .qrcode-popover p,
	.mod-title .right-info .cd-official-check .qrcode-popover p {
		height: 20px;
		line-height: 17px;
		margin-top: 10px;
		font-size: 12px;
		color: #666;
	}

	.card-info .cd-official-check .qrcode-popover .r_jiao,
	.mod-title .right-info .cd-official-check .qrcode-popover .r_jiao {
		width: 21px;
		height: 17px;
		top: -7px;
		margin-left: -10px;
		left: 50%;
		background-position: -1680px 0;
		background-image: url(//img.58cdn.com.cn/ui8/house/detail/images/zufang-detail-icon@2x.png);
		background-size: auto 80px;
		position: absolute;
		display: inline-block;
	}

	.card-info .cd-official-check .card-text {
		position: relative;
		margin-top: -6px;
		margin-bottom: 6px;
	}

	.card-info .cd-official-check .card-text .qrcode-popover {
		left: 50%;
		margin-left: -65px;
		top: 24px;
	}

	.mod-title {
		padding-top: 37px;
		line-height: 46px;
		font-size: 20px;
		color: #333;
		width: 100%;
	}

	.mod-title .title {
		display: inline-block;
		vertical-align: middle;
		color: #333;
	}

	.mod-title .right-info {
		font-size: 13px;
		line-height: 53px;
		color: #999;
		float: right;
	}

	.mod-title .mod-title-link {
		font-size: 12px;
		color: #999;
		padding: 7px 12px 0 0;
		display: inline-block;
		line-height: 16px;
		vertical-align: middle;
	}

	.mod-title .mod-title-link .iconfont {
		color: #999;
		font-size: 12px;
		margin-right: 3px;
		vertical-align: -2px;
	}

	.mod-title .mod-title-right {
		float: right;
	}

	@font-face {
		font-family: "icon";
		src: url("https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/9b9551488f4b426146b4f29ac8bfbb01_icon.eot");
		src: url("https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/9b9551488f4b426146b4f29ac8bfbb01_icon.eot#iefix") format("embedded-opentype"),
			url("https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/48ee88ffcf1e11b70d7bcd6775f61b3b_icon.woff2") format("woff2"),
			url("https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/ebafe08fe0386906a8da1bd5af63169f_icon.woff") format("woff"),
			url("https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/be51e04cb9d6b6555851a633dd9abed4_icon.ttf") format("truetype"),
			url("https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/922b7eaf5aa8110c4e107bbdd0d0853c_icon.svg") format("svg");
	}

	.iconfont-add {
		font-family: "icon" !important;
		font-size: 26px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	a {
		color: #666;
		text-decoration: none;
		outline: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: 100%;
		font-weight: normal;
	}

	.iframe-layer-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 1px;
		height: 1px;
		overflow: hidden;
		display: none;
	}

	.iframe-layer-mask .iframe-layer-bg {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #000;
		filter: alpha(opacity=60);
		background: rgba(0, 0, 0, 0.6);
		z-index: 1002;
	}

	.iframe-layer-mask .iframe-login-wrap {
		margin: -260px 0 0 -250px;
		padding: 0 20px 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 460px;
		height: 345px;
		background: #fff;
		-webkit-box-shadow: 0 0 8px #888;
		box-shadow: 0 0 8px #888;
		border-radius: 5px;
		z-index: 1003;
		overflow: hidden;
	}

	.iframe-layer-mask .iframe-login-wrap .iframe-login-ifm {
		display: block;
		width: 460px;
		height: 100%;
	}

	.iframe-layer-mask .forms-single.no-thirds.no-others .iframe-login-wrap {
		margin-top: -165px;
		height: 345px;
	}

	.hf-code-wrap {
		padding-top: 20px;
		font-size: 12px;
		color: #333;
		width: 100%;
	}

	.hf-code-wrap .icon-code {
		float: left;
		width: 72px;
	}

	.hf-code-wrap .item-desc {
		padding-left: 94px;
		font-family: "PingFangSC-Medium";
		color: #24292c;
		line-height: 24px;
	}

	.hrb-code-wrap {
		padding-top: 20px;
		font-size: 12px;
		color: #333;
		width: 100%;
	}

	.hrb-code-wrap .icon-code {
		float: left;
	}

	.hrb-code-wrap .item-desc {
		padding-left: 94px;
		font-family: "PingFangSC-Medium";
		color: #24292c;
		line-height: 24px;
	}

	.hrb-code-wrap .item-desc div {
		margin-top: -4px;
	}

	.hrb-code-wrap .item-desc div .code-num {
		color: #2869b4;
	}

	.hrb-code-wrap .item-desc .code-wrap {
		position: relative;
		display: inline-block;
		cursor: pointer;
	}

	.hrb-code-wrap .item-desc .code-wrap .qrcode-popover {
		display: none;
		position: absolute;
		right: -155px;
		bottom: -70px;
		border: 1px solid #d2d2d2;
		background-color: #fff;
		text-align: center;
		padding: 18px;
	}

	.hrb-code-wrap .item-desc .code-wrap .qrcode-popover img {
		width: 100px;
		height: 100px;
	}

	.hrb-code-wrap .item-desc .code-wrap .qrcode-popover p {
		height: 20px;
		line-height: 20px;
		margin-top: 18px;
		font-size: 12px;
		color: #666;
	}

	.hrb-code-wrap .item-desc .code-wrap .qrcode-popover .r_jiao {
		width: 21px;
		height: 17px;
		top: 80px;
		left: -9px;
		background-position: -1680px 0;
		background-image: url(//img.58cdn.com.cn/ui8/house/detail/images/zufang-detail-icon@2x.png);
		background-size: auto 80px;
		position: absolute;
		display: inline-block;
		-webkit-transform: rotate(-90deg);
		-ms-transform: rotate(-90deg);
		transform: rotate(-90deg);
	}

	.hrb-code-wrap .item-desc .code-wrap:hover .qrcode-popover {
		display: block;
	}

	.hrb-code-wrap .item-desc div.time {
		margin-top: 0px;
	}

	.zhujianwei-code {
		margin-top: 20px;
	}

	.zhujianwei-code .platform-check-pass {
		padding: 20px 0;
		font-size: 14px;
		color: #333;
		width: 100%;
		overflow: hidden;
	}

	.zhujianwei-code .platform-check-pass .official-icon {
		float: left;
	}

	.zhujianwei-code .platform-check-pass .official-icon .icon-code {
		width: 77px;
		height: 18px;
	}

	.zhujianwei-code .platform-check-pass .item-desc {
		float: left;
		margin-left: 20px;
	}

	.zhujianwei-code .official-check {
		padding-top: 20px;
		font-size: 14px;
		color: #333;
		width: 100%;
	}

	.zhujianwei-code .official-check .pass .official-icon .icon-code,
	.zhujianwei-code .official-check .no-pass .official-icon .icon-code {
		float: left;
		margin-top: 3px;
	}

	.zhujianwei-code .official-check .pass .item-desc,
	.zhujianwei-code .official-check .no-pass .item-desc {
		padding-left: 94px;
		font-family: "PingFangSC-Medium";
		color: #24292c;
		line-height: 24px;
	}

	.zhujianwei-code .official-check .pass .item-desc div,
	.zhujianwei-code .official-check .no-pass .item-desc div {
		margin-top: -4px;
	}

	.zhujianwei-code .official-check .pass .item-desc div .code-num,
	.zhujianwei-code .official-check .no-pass .item-desc div .code-num {
		color: #2869b4;
	}

	.zhujianwei-code .official-check .pass .item-desc .code-wrap,
	.zhujianwei-code .official-check .no-pass .item-desc .code-wrap {
		position: relative;
		display: inline-block;
		cursor: pointer;
	}

	.zhujianwei-code .official-check .pass .item-desc .code-wrap .qrcode-popover,
	.zhujianwei-code .official-check .no-pass .item-desc .code-wrap .qrcode-popover {
		display: none;
		position: absolute;
		right: -155px;
		bottom: -70px;
		border: 1px solid #d2d2d2;
		background-color: #fff;
		text-align: center;
		padding: 18px;
	}

	.zhujianwei-code .official-check .pass .item-desc .code-wrap .qrcode-popover img,
	.zhujianwei-code .official-check .no-pass .item-desc .code-wrap .qrcode-popover img {
		width: 100px;
		height: 100px;
	}

	.zhujianwei-code .official-check .pass .item-desc .code-wrap .qrcode-popover p,
	.zhujianwei-code .official-check .no-pass .item-desc .code-wrap .qrcode-popover p {
		height: 20px;
		line-height: 20px;
		margin-top: 18px;
		font-size: 12px;
		color: #666;
	}

	.zhujianwei-code .official-check .pass .item-desc .code-wrap .qrcode-popover .r_jiao,
	.zhujianwei-code .official-check .no-pass .item-desc .code-wrap .qrcode-popover .r_jiao {
		width: 21px;
		height: 17px;
		top: 80px;
		left: -9px;
		background-position: -1680px 0;
		background-image: url(//img.58cdn.com.cn/ui8/house/detail/images/zufang-detail-icon@2x.png);
		background-size: auto 80px;
		position: absolute;
		display: inline-block;
		-webkit-transform: rotate(-90deg);
		-ms-transform: rotate(-90deg);
		transform: rotate(-90deg);
	}

	.zhujianwei-code .official-check .pass .item-desc .code-wrap:hover .qrcode-popover,
	.zhujianwei-code .official-check .no-pass .item-desc .code-wrap:hover .qrcode-popover {
		display: block;
	}

	.zhujianwei-code .official-check-personal {
		padding-top: 20px;
		font-size: 14px;
		color: #333;
		width: 100%;
	}

	.zhujianwei-code .official-check-personal .pass .official-icon,
	.zhujianwei-code .official-check-personal .no-pass .official-icon {
		position: relative;
		font-size: 16px;
		line-height: 37px;
		color: #62ab00;
		border-bottom: 1px dotted #e6e6e6;
		margin-bottom: 11px;
	}

	.zhujianwei-code .official-check-personal .pass .official-icon .icon-code,
	.zhujianwei-code .official-check-personal .no-pass .official-icon .icon-code {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.zhujianwei-code .official-check-personal .pass .item-desc,
	.zhujianwei-code .official-check-personal .no-pass .item-desc {
		font-size: 14px;
		line-height: 32px;
		padding-right: 50px;
	}

	.zhujianwei-code .official-check-personal .pass .item-desc div,
	.zhujianwei-code .official-check-personal .no-pass .item-desc div {
		color: #333;
		font-family: "PingFangSC-Medium";
		line-height: 18px;
	}

	.zhujianwei-code .official-check-personal .pass .item-desc .code-wrap,
	.zhujianwei-code .official-check-personal .no-pass .item-desc .code-wrap {
		color: #43474d;
		font-family: PingFangSC-Regular;
		line-height: 18px;
		margin-top: 6px;
		position: relative;
	}

	.zhujianwei-code .official-check-personal .pass .item-desc .code-wrap .qrcode-popover,
	.zhujianwei-code .official-check-personal .no-pass .item-desc .code-wrap .qrcode-popover {
		display: none;
		position: absolute;
		right: 545px;
		bottom: -70px;
		border: 1px solid #d2d2d2;
		background-color: #fff;
		text-align: center;
		padding: 18px;
	}

	.zhujianwei-code .official-check-personal .pass .item-desc .code-wrap .qrcode-popover img,
	.zhujianwei-code .official-check-personal .no-pass .item-desc .code-wrap .qrcode-popover img {
		width: 100px;
		height: 100px;
	}

	.zhujianwei-code .official-check-personal .pass .item-desc .code-wrap .qrcode-popover p,
	.zhujianwei-code .official-check-personal .no-pass .item-desc .code-wrap .qrcode-popover p {
		height: 20px;
		line-height: 20px;
		margin-top: 18px;
		font-size: 12px;
		color: #666;
	}

	.zhujianwei-code .official-check-personal .pass .item-desc .code-wrap .qrcode-popover .r_jiao,
	.zhujianwei-code .official-check-personal .no-pass .item-desc .code-wrap .qrcode-popover .r_jiao {
		width: 21px;
		height: 17px;
		top: 80px;
		left: -9px;
		background-position: -1680px 0;
		background-image: url(//img.58cdn.com.cn/ui8/house/detail/images/zufang-detail-icon@2x.png);
		background-size: auto 80px;
		position: absolute;
		display: inline-block;
		-webkit-transform: rotate(-90deg);
		-ms-transform: rotate(-90deg);
		transform: rotate(-90deg);
	}

	.zhujianwei-code .official-check-personal .pass .item-desc .code-wrap:hover .qrcode-popover,
	.zhujianwei-code .official-check-personal .no-pass .item-desc .code-wrap:hover .qrcode-popover {
		display: block;
	}

	.zhujianwei-code .record-wrap .pass,
	.zhujianwei-code .record-wrap .no-pass {
		margin-bottom: 10px;
	}

	.zhujianwei-code .record-wrap .pass .code-item,
	.zhujianwei-code .record-wrap .no-pass .code-item {
		width: 100%;
		margin-bottom: 16px;
	}

	.zhujianwei-code .record-wrap .pass .code-item:last-child,
	.zhujianwei-code .record-wrap .no-pass .code-item:last-child {
		margin-bottom: 0;
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-pic,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-pic,
	.zhujianwei-code .record-wrap .pass .code-item .code-label,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-label {
		display: inline-block;
		vertical-align: top;
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-pic,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-pic {
		width: 72px;
		height: 18px;
		margin-right: 21px;
		background-size: contain;
		background-repeat: no-repeat;
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-pic.jigou,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-pic.jigou {
		background-image: url(//pic1.58cdn.com.cn/nowater/fangfe/n_v2ad1355debf5f4267aaf1612cff6d22ea.png);
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-pic.jigou.no,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-pic.jigou.no {
		background-image: url(//pic4.58cdn.com.cn/nowater/fangfe/n_v2831b4535ae594735be9d8a0fcda80955.png);
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-pic.congye,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-pic.congye {
		background-image: url(//pic5.58cdn.com.cn/nowater/fangfe/n_v2dd0ae7503aba44dc86a3bfa781144025.png);
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-pic.congye.no,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-pic.congye.no {
		background-image: url(//pic4.58cdn.com.cn/nowater/fangfe/n_v242675c21064d4594972cebcaf931bdf8.png);
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-pic.house,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-pic.house {
		background-image: url(//pic3.58cdn.com.cn/nowater/fangfe/n_v2d38ecdb87acd4000bdd5fc4cf35b4872.png);
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-pic.house.no,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-pic.house.no {
		background-image: url(//pic1.58cdn.com.cn/nowater/fangfe/n_v2216f787efcd04b41af5b444c91308911.png);
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-pic.enable,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-pic.enable {
		background-image: url(//pic6.58cdn.com.cn/nowater/fangfe/n_v24a366bd1f0854fc1a4c5e0619c352359.png);
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-label,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-label {
		font-size: 14px;
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-label .title,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-label .title {
		color: #333;
		font-family: "PingFangSC-Medium";
		line-height: 18px;
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-label .tips,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-label .tips {
		color: #43474d;
		font-family: PingFangSC-Regular;
		line-height: 18px;
		margin-top: 6px;
		position: relative;
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-label .tips .qrcode-popover,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-label .tips .qrcode-popover {
		display: none;
		position: absolute;
		right: -151px;
		bottom: -75px;
		border: 1px solid #d2d2d2;
		background-color: #fff;
		text-align: center;
		padding: 18px 18px 12px;
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-label .tips .qrcode-popover img,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-label .tips .qrcode-popover img {
		width: 100px;
		height: 100px;
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-label .tips .qrcode-popover p,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-label .tips .qrcode-popover p {
		height: 20px;
		line-height: 20px;
		margin-top: 10px;
		font-size: 12px;
		color: #666;
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-label .tips .qrcode-popover .r_jiao,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-label .tips .qrcode-popover .r_jiao {
		width: 21px;
		height: 17px;
		top: 65px;
		left: -9px;
		background-position: -1680px 0;
		background-image: url(//img.58cdn.com.cn/ui8/house/detail/images/zufang-detail-icon@2x.png);
		background-size: auto 80px;
		position: absolute;
		display: inline-block;
		-webkit-transform: rotate(-90deg);
		-ms-transform: rotate(-90deg);
		transform: rotate(-90deg);
		margin-right: 30px;
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-label .tips span.active,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-label .tips span.active {
		color: #517a99;
	}

	.zhujianwei-code .record-wrap .pass .code-item .code-label .tips:hover .qrcode-popover,
	.zhujianwei-code .record-wrap .no-pass .code-item .code-label .tips:hover .qrcode-popover {
		display: block;
	}

	.tel-verify {
		display: none;
		z-index: 1000;
		position: fixed;
		left: 50%;
		top: 50%;
		padding-bottom: 25px;
		width: 460px;
		margin: -120px 0 0 -250px;
		background: #fff;
		padding: 10px 20px 25px;
		-webkit-box-shadow: 0 0 8px #888;
		box-shadow: 0 0 8px #888;
		border: 1px solid #ccc;
		border-radius: 2px;
	}

	.tel-verify h3 {
		position: relative;
		padding: 0 7px;
		font-size: 22px;
		line-height: 48px;
		color: #62ab00;
		border-bottom: 2px solid #62ab00;
	}

	.tel-verify .verify-icon-img {
		float: left;
		display: inline;
		margin: 10px 0 0 16px;
		font-size: 20px;
		color: #ccc;
		cursor: pointer;
	}

	.tel-verify .verify-line {
		float: left;
		display: inline;
		height: 30px;
		width: 1px;
		background: #ccc;
		margin: 9px 0 0 12px;
	}

	.tel-verify .verify-captcha {
		float: left;
		display: inline;
		width: 177px;
		font-size: 14px;
		padding: 15px 0 15px 15px;
		line-height: 18px;
		height: 18px;
		color: #666;
		border: 0;
	}

	.tel-verify .verify-captcha-code {
		float: left;
		margin: 2px 5px 0 0;
		display: inline;
		width: 120px;
		height: 45px;
	}

	.tel-verify .verify-icon-refresh {
		float: left;
		display: inline;
		margin-top: 9px;
		font-size: 20px;
		cursor: pointer;
	}

	.tel-verify .verify-submit {
		margin-top: 25px;
		display: block;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: #62ab00;
		font-size: 16px;
		color: #fff;
		text-decoration: none;
		cursor: pointer;
	}

	.tel-verify .verify-content {
		display: inline-block;
	}

	.tel-verify-close {
		position: absolute;
		right: 7px;
		font-size: 20px;
		color: #ccc;
		cursor: pointer;
	}

	.verify-error {
		position: absolute;
		left: 0;
		top: 0;
		margin-top: -20px;
		font-size: 12px;
		line-height: 20px;
		color: #df3f3f;
	}

	.tel-verify-wrap {
		position: relative;
		margin: 25px 30px 0;
	}

	.tel-verify-info {
		float: left;
		background: #fff;
		border: 1px solid #ccc;
		height: 48px;
		width: 248px;
	}

	.commonMapC {
		position: relative;
		display: inline-block;
		height: 30px;
		*display: inline;
		z-index: 9;
		*zoom: 1;
	}

	.commonMapC .common_name {
		position: relative;
		left: -40%;
		background: #ff4000;
		color: #fff;
		text-align: center;
		padding: 0 19px;
		font-size: 14px;
		line-height: 30px;
		z-index: 9;
		*zoom: 1;
	}

	.commonMapC .common_arrow_ico {
		margin-left: 4px;
		display: block;
		width: 10px;
		height: 5px;
		background: url(//pages.anjukestatic.com/usersite/site/img/map/icon-sp-map.png) center center no-repeat;
		background-position: -160px -130px;
	}

	.commonMapC .common_pos_ico {
		margin-top: 1px;
		display: block;
		width: 20px;
		height: 20px;
		background: url(//pages.anjukestatic.com/usersite/site/img/map/icon-sp-map.png) center center no-repeat;
		background-position: -160px 0;
	}

	.layout_wrap {
		position: absolute;
		width: 32px;
		height: 38px;
		background: url(//pages.anjukestatic.com/usersite/site/img/map/icon-sp-map.png) center center no-repeat;
	}

	.layout_wrap.ftr_restaurant {
		background-position: -128px -38px;
	}

	.layout_wrap.ftr_restaurant:hover {
		background-position: 0 -114px;
	}

	.layout_wrap.ftr_bus {
		background-position: 0px 0px;
	}

	.layout_wrap.ftr_bus:hover {
		background-position: -64px -114px;
	}

	.layout_wrap.ftr_subway {
		background-position: -128px -76px;
	}

	.layout_wrap.ftr_subway:hover {
		background-position: -32px -114px;
	}

	.layout_wrap.ftr_bank,
	.layout_wrap.ftr_ATM {
		background-position: 0 -38px;
	}

	.layout_wrap.ftr_bank:hover,
	.layout_wrap.ftr_ATM:hover {
		background-position: -96px -76px;
	}

	.layout_wrap.ftr_mall,
	.layout_wrap.ftr_supermarkert {
		background-position: -64px 0;
	}

	.layout_wrap.ftr_mall:hover,
	.layout_wrap.ftr_supermarkert:hover {
		background-position: -128px 0;
	}

	.layout_wrap.ftr_school {
		background-position: -32px -38px;
	}

	.layout_wrap.ftr_school:hover {
		background-position: -64px -76px;
	}

	.layout_wrap.ftr_hospital {
		background-position: -64px -38px;
	}

	.layout_wrap.ftr_hospital:hover {
		background-position: 0 -76px;
	}

	.layout_wrap:hover .layout_detail {
		display: block;
	}

	.layout_wrap .layout_detail {
		display: none;
		position: absolute;
		bottom: 48px;
		left: -12px;
		font-size: 12px;
		color: #333;
		background: #fff;
		border: 1px solid #f0f0f0;
		border-radius: 4px;
		padding: 10px 15px 10px;
		width: 230px;
		z-index: 10;
		-webkit-box-shadow: 4px 4px 4px #999;
		box-shadow: 4px 4px 4px #999;
	}

	.layout_wrap .layout_detail .layout_title {
		font-size: 14px;
		color: #f60;
		width: 175px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.layout_wrap .layout_detail .distance_address {
		font-size: 12px;
		color: #333;
		width: 230px;
		line-height: 20px;
		margin-top: 5px;
		white-space: normal;
	}

	.layout_wrap .layout_detail .distance_tag {
		position: absolute;
		right: 15px;
		top: 12px;
		height: 15px;
	}

	.layout_wrap .layout_detail .distance_tag i {
		margin-right: 4px;
		display: inline-block;
		vertical-align: -1px;
		width: 12px;
		height: 12px;
		background: url(//pages.anjukestatic.com/usersite/site/img/map/icon-sp-map.png) center center no-repeat;
		background-position: -160px -118px;
	}

	.layout_wrap .layout_detail .layout_detail_down {
		position: absolute;
		bottom: -11px;
		left: 19px;
		width: 15px;
		height: 11px;
		background: url(//pages.anjukestatic.com/usersite/site/img/map/icon-sp-map.png) center center no-repeat;
		background-position: -160px -107px;
	}

	.map_tab_sel {
		display: block;
	}

	.map_tab_sel .zbpz-title {
		display: block;
	}

	.map_tab_sel .zbpz-title .icon {
		position: relative;
		background-position: -1345px 4px;
		height: 18px;
		margin-bottom: -2px;
		width: 22px;
	}

	.map_tab_sel dl {
		cursor: pointer;
		height: 28px;
	}

	.map_tab {
		right: 20px;
		position: absolute;
		top: 20px;
		width: 90px;
		border: 1px solid #d2d2d2;
		font-size: 12px;
		background: #fff;
		padding-bottom: 8px;
	}

	.map_tab dt.on {
		background: #f8f8f8;
	}

	.map_tab dt.item-dt {
		height: 15px;
		padding: 7px 0 7px 10px;
		position: relative;
	}

	.map_tab dt.item-dt label {
		display: block;
		overflow: hidden;
	}

	.map_tab dt.item-dt input {
		width: 15px;
		height: 15px;
		margin: 0;
	}

	.map_tab dt.item-dt span {
		visibility: hidden;
	}

	.map_tab .dticon0,
	.map_tab .dticon1,
	.map_tab .dticon2,
	.map_tab .dticon3,
	.map_tab .dticon4,
	.map_tab .dticon5,
	.map_tab .dticon6 {
		background: url(//img.58cdn.com.cn/ui7/fang/detail/img/dtspri.gif) no-repeat 0 0;
		width: 11px;
		height: 15px;
	}

	.map_tab dt.item-dt div.dt {
		font-size: 12px;
		height: 15px;
		line-height: 15px;
	}

	.topbar {
		font-size: 14px;
		height: 44px;
		border-bottom: 1px solid #ddd;
	}

	.topbar a {
		color: #666;
	}

	.topbar a:hover {
		color: #f60;
	}

	.topbar .header-center {
		width: 1180px;
		margin: 0 auto;
		font-family: "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", "Hiragino Sans GB",
			tahoma, arial, simhei;
	}

	.topbar .header-center .nav-site {
		float: left;
		padding-top: 17px;
		line-height: 14px;
	}

	.topbar .header-center .nav-site li {
		float: left;
		padding: 0 10px;
		border-left: 1px solid #ddd;
	}

	.topbar .header-center .nav-site li.first {
		padding-left: 0;
		border-left: none;
	}

	.topbar .user {
		float: right;
		text-align: right;
		padding-top: 12px;
		margin-right: -10px;
	}

	.topbar .user .userlogin .icon-people {
		vertical-align: top;
		margin: 0px 4px 0 0;
		width: 18px;
		height: 18px;
	}

	.topbar .user .userlogin .link {
		position: relative;
		display: inline-block;
		line-height: 16px;
		margin-right: 5px;
		*zoom: 1;
		outline: none;
	}

	.topbar .user .userblock {
		display: inline-block;
		position: relative;
		height: 16px;
		padding: 2px 10px;
		font-size: 13px;
		zoom: 1;
	}

	.topbar .user .userblock ul {
		position: absolute;
		display: none;
		z-index: 1000;
		right: -4px;
		top: 33px;
		width: 115px;
		border: 1px solid #d6d6d6;
		background-color: #f7f7f7;
		border-radius: 0 0 4px 4px;
		padding: 10px;
		border-top: 0;
		text-align: left;
	}

	.topbar .user .userblock ul li {
		padding: 5px 0 10px 8px;
	}

	.topbar .user .userblock ul li.hr {
		height: 0;
		border-top: 1px solid #ddd;
		margin: 3px 0 5px;
		padding: 0;
	}

	.topbar .user .userblock ul li a {
		color: #666;
	}

	.topbar .user .userblock ul li a:hover {
		color: #f60;
	}

	.topbar .user .userblockfirst {
		border-left: none;
	}

	.navhead {
		position: relative;
		z-index: 9998;
		background: #62ab00;
		height: 40px;
		width: 100%;
		font-family: "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", "Hiragino Sans GB",
			tahoma, arial, simhei;
	}

	.navhead .header-center {
		width: 1180px;
		margin: 0 auto;
		font-family: "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", "Hiragino Sans GB",
			tahoma, arial, simhei;
	}

	.navhead .header-center .logo {
		text-indent: -999em;
		width: 90px;
		height: 30px;
		float: left;
		margin: 4px 0 0;
		background: url(//pages.anjukestatic.com/usersite/site/img/global/2/header/CommLogoV3.png) no-repeat;
	}

	.navhead .header-center .cityselect {
		display: inline-block;
		position: relative;
		z-index: 99;
		float: left;
		_width: 70px;
		margin: 15px 3px 0 1px;
		font-size: 12px;
		color: #fff;
	}

	.navhead .header-center .cityselect .city-view {
		position: relative;
		display: inline-block;
		cursor: pointer;
	}

	.navhead .header-center .cityselect .city-view .triangle-down {
		border-color: #62ab00;
		border-top: 4px solid #fff;
		position: relative;
		top: 2px;
		margin-left: 5px;
	}

	.navhead .header-center .cityselect .city-list {
		display: none;
		position: absolute;
		z-index: 99;
		left: 0;
		top: 22px;
		font-size: 12px;
		border: 1px solid #d8d8d8;
		background: #f9f9f9;
		width: 350px;
		padding: 7px 0 0;
		border-radius: 0 0 4px 4px;
	}

	.navhead .header-center .cityselect .city-list dl {
		margin: 0 13px;
		padding: 7px 0 6px;
		line-height: 23px;
	}

	.navhead .header-center .cityselect .city-list dl dt {
		float: left;
		width: 72px;
		color: #666;
	}

	.navhead .header-center .cityselect .city-list dl dd {
		zoom: 1;
		overflow: hidden;
		margin-left: 72px;
	}

	.navhead .header-center .cityselect .city-list dl dd a {
		float: left;
		color: #1a519f;
		padding-right: 11px;
		white-space: nowrap;
	}

	.navhead .header-center .cityselect .city-list dl dd a:hover {
		color: #f60;
		text-decoration: underline;
	}

	.navhead .header-center .cityselect .city-list .morecity {
		height: 25px;
		text-align: right;
	}

	.navhead .header-center .cityselect .city-list .morecity a {
		color: #1a519f;
		padding-right: 11px;
		white-space: nowrap;
	}

	.navhead .header-center .navigation {
		float: left;
	}

	.navhead .header-center .navigation li {
		position: relative;
		width: auto;
		float: left;
		z-index: 9999;
	}

	.navhead .header-center .navigation li.current .nav-lv1,
	.navhead .header-center .navigation li .nav-lv1:hover {
		background: #528e01;
	}

	.navhead .header-center .navigation li>a {
		display: inline-block;
		height: 40px;
		line-height: 40px;
		padding: 0 9px;
		color: #fff;
		font-size: 16px;
	}

	.navhead .header-center .navigation li:hover ul {
		display: block;
	}

	.navhead .header-center .navigation li ul {
		display: none;
		background: #f9f9f9;
		border: 1px solid #d8d8d8;
		color: #666;
		padding: 8px 0;
		position: absolute;
		left: 0;
		top: 40px;
		z-index: 999;
		border-radius: 0 0 4px 4px;
	}

	.navhead .header-center .navigation li ul li {
		float: none;
	}

	.navhead .header-center .navigation li ul li.nav-triangle {
		position: absolute;
		left: 23px;
		top: -12px;
		width: 0;
		height: 0;
		padding: 0;
		margin: 0;
		border: 6px solid transparent;
		border-bottom: 6px solid #d8d8d8;
	}

	.navhead .header-center .navigation li ul li.nav-triangle span {
		position: absolute;
		left: -6px;
		top: -4px;
		width: 0;
		height: 0;
		padding: 0;
		margin: 0;
		border: 6px solid transparent;
		border-bottom: 6px solid #f9f9f9;
	}

	.navhead .header-center .navigation li ul li.hr {
		height: 0;
		padding: 0;
		margin: 5px 10px;
		border-top: 1px solid #ccc;
	}

	.navhead .header-center .navigation li ul li a {
		display: block;
		color: #666;
		padding: 0 25px 0 20px;
		line-height: 33px;
		height: 33px;
		font-size: 14px;
		white-space: nowrap;
	}

	.navhead .header-center .navigation li ul li a:hover {
		color: #528e01;
	}

	.navhead .header-center .nav-right {
		float: right;
		font-size: 14px;
	}

	.navhead .header-center .nav-right .userbox {
		float: left;
		position: relative;
		margin-right: 20px;
		display: inline-block;
		height: 40px;
		line-height: 40px;
		width: 100px;
		padding: 0 10px 0 32px;
	}

	.navhead .header-center .nav-right .userbox:hover {
		background: #528e01;
	}

	.navhead .header-center .nav-right .userbox .icon-user {
		position: absolute;
		top: 4px;
		left: 0;
	}

	.navhead .header-center .nav-right .userbox a {
		margin-left: 2px;
		color: #fff;
	}

	.navhead .header-center .nav-right .userbox .triangle-down {
		border: 3px solid #62ab00;
		border-top: 3px solid #fff;
		position: absolute;
		top: 18px;
		margin-left: 10px;
	}

	.navhead .header-center .nav-right .userbox .userblock ul {
		display: none;
		position: absolute;
		z-index: 999;
		right: 0px;
		width: 140px;
		border: 1px solid #d8d8d8;
		background-color: #f9f9f9;
		border-radius: 0 0 4px 4px;
		padding: 8px 0;
	}

	.navhead .header-center .nav-right .userbox .userblock ul li {
		padding: 0 0 0 28px;
	}

	.navhead .header-center .nav-right .userbox .userblock ul li.hr {
		height: 0;
		margin: 8px 20px;
		border-top: 1px solid #ccc;
		padding: 0;
	}

	.navhead .header-center .nav-right .userbox .userblock ul li a {
		font-size: 12px;
		margin: 0;
		display: block;
		width: 100%;
		line-height: 33px;
		height: 33px;
		overflow: hidden;
		color: #666;
		cursor: pointer;
	}

	.navhead .header-center .nav-right .userbox .userblock ul li a:hover {
		color: #528e01;
	}

	.navhead .header-center .nav-right .userbox .userlogin .icon-people {
		width: 18px;
		height: 18px;
	}

	.navhead .header-center .nav-right .userbox .userlogin .link {
		position: relative;
		outline: 0;
		width: 50px;
		line-height: 16px;
		overflow: hidden;
		display: inline-block;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.navhead .header-center .nav-right .download-app {
		float: left;
		display: inline-block;
		position: relative;
		width: 70px;
		padding-left: 50px;
		height: 27px;
		line-height: 27px;
		border-radius: 2px;
		margin-top: 6px;
		background: #dce8cc;
		color: #666;
	}

	.navhead .header-center .nav-right .download-app .icon-apple,
	.navhead .header-center .nav-right .download-app .icon-android {
		position: absolute;
		top: 3px;
	}

	.navhead .header-center .nav-right .download-app .icon-apple {
		left: 5px;
	}

	.navhead .header-center .nav-right .download-app .icon-android {
		left: 25px;
	}

	.sidebar {
		position: fixed;
		top: 0;
		right: 0;
		width: 38px;
		height: 100%;
		background-color: #f7f7f7;
		-webkit-box-shadow: 0 0 2px #999;
		box-shadow: 0 0 2px #999;
		z-index: 1000;
		font-family: "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1",
			tahoma, Arial, simhei;
	}

	.sidebar .sidebar-nav {
		position: absolute;
		right: 0;
		top: 50%;
		margin-top: -98px;
	}

	.sidebar-top {
		position: fixed;
		display: none;
		bottom: 30px;
		right: 0;
		z-index: 1000;
	}

	.sidebar-top .iconfont {
		margin-top: 10px !important;
	}

	.sidebar-top.sd-top-sig {
		background-color: #62ab00;
		color: #fff;
		text-decoration: none;
	}

	.sidebar-top.sd-top-sig .sid-nav {
		margin-bottom: 0;
	}

	.sidebar-top.sd-top-sig .sid-nav .iconfont {
		color: #fff;
	}

	.sidebar-mod .sid-nav {
		position: relative;
		display: block;
		width: 38px;
		height: 40px;
		margin-bottom: 12px;
		text-align: center;
		color: #333;
		font-size: 12px;
	}

	.sidebar-mod .sid-nav:hover {
		background-color: #62ab00;
		color: #fff;
		text-decoration: none;
	}

	.sidebar-mod .sid-nav:hover .iconfont {
		color: #fff;
	}

	.sidebar-mod .sid-nav:hover .nav-arrow {
		display: block;
	}

	.sidebar-mod .sid-nav .iconfont {
		height: 20px;
		line-height: 20px;
		font-size: 20px;
		margin-top: 2px;
	}

	.sidebar-mod .sid-nav .iconfont22 {
		font-size: 20px;
		margin-top: 2px;
	}

	.sidebar-mod .sid-nav p {
		height: 13px;
		line-height: 13px;
		margin-top: 4px;
	}

	.sidebar-mod .sid-nav .nav-arrow {
		content: "";
		width: 0;
		height: 0;
		overflow: hidden;
		border-left: 4px solid #666;
		border-right: 4px solid transparent;
		border-top: 4px solid transparent;
		border-bottom: 4px solid transparent;
		position: absolute;
		top: 16px;
		left: 0;
		display: none;
	}

	.sidebar-mod .sid-nav .nav-sao {
		border-left: 4px solid #fff;
	}

	.sidebar-mod .sid-nav .sidebar-nav-hover {
		position: absolute;
		right: 38px;
		top: 0;
		width: 0;
		height: 40px;
		line-height: 40px;
		background-color: #666;
		text-align: center;
		color: #fff;
		font-size: 14px;
		overflow: hidden;
	}

	.sidebar-mod .sid-nav .sidebar-sao {
		top: -55px;
		width: 0;
		height: 36px;
		padding-top: 114px;
		background-image: url(//pages.anjukestatic.com/usersite/site/img/global/2/pc-sidebar.png);
		background-size: cover;
		filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='//pages.anjukestatic.com/usersite/site/img/global/2/pc-sidebar.png ', sizingMethod='scale');
		color: #333;
	}

	.footer {
		clear: both;
		border-top: 1px solid #e6e6e6;
		padding: 15px 0 30px;
		font-size: 12px;
		color: #333;
	}

	.footer a {
		display: inline-block;
		font-size: 12px;
		color: #333;
	}

	.footer a:hover {
		color: #f60;
		text-decoration: underline;
	}

	.footer .links {
		padding-bottom: 5px;
		font-size: 0;
		text-align: center;
	}

	.footer .links li {
		display: inline-block;
		*display: inline;
		*zoom: 1;
		height: 20px;
		line-height: 20px;
	}

	.footer .links li .spe-lines {
		display: inline-block;
		width: 1px;
		height: 10px;
		background: #ccc;
		margin: 0 10px;
		font-size: 0;
		text-indent: -9999px;
		overflow: hidden;
		vertical-align: -1px;
	}

	.footer .show-mod {
		display: none;
		border: 1px solid #e6e6e6;
		border-radius: 4px;
		width: 730px;
		padding: 3px 10px;
		margin: 0 auto 5px;
		overflow: hidden;
	}

	.footer .show-mod ul {
		*zoom: 1;
	}

	.footer .show-mod ul li {
		float: left;
		_display: inline;
		margin-right: 22px;
		line-height: 24px;
	}

	.footer .cp-mod {
		text-align: center;
		line-height: 20px;
	}
</style>
