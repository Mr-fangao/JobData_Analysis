<template>
	<div style="height: 1800px;width: 100%;"> <Button>Default</Button>
		<Card style="margin: 0 auto;width: 1250px;margin-top: 70px;">
			<div node-type="module" class="module-lpcompare">
				<table class="mtable" note-type="common-data" data-cityprefix="yt" data-domain="focus"
					data-photodomain="https://t.focus-img.cn">
					<colgroup>
						<col class="key">
						<col span="4" class="value" data-cur-column="0">
					</colgroup>
					<tbody>
						<tr>
							<td class="compare" colspan="5">
								<span class="label">楼盘对比</span>
								<input type="text" class="query" node-type="input-query" data-cityid="139">
								<a class="btn compare-btn" node-type="compare-btn" @click="showmapView">+对比</a>
								<ul class="suggest-list" node-type="suggest-list">
									<li class="suggest-item">国风美唐</li>
									<li class="suggest-item">国风美唐</li>
								</ul>
							</td>
						</tr>
						<tr class="normal loupan-info" node-type="loupan-info">
							<td class="key">楼盘名称</td>
							<td id="value-name-1">
								<div>
									<a @click="gethouseinfo" target="_blank" title=" 海上明珠"><img id="avatar-1"
											class="avatar"
											src="../../../assets/img/44b8812c-cb76-4ac6-aa53-5f3ab4db1100.png"
											alt=""></a>
								</div>
								<div id="name-1"> 海上明珠</div>
								<div class="ctrl-wrap">
									<span class="del" data-index="1" data-pid="110110771">╳</span>
								</div>
							</td>
							<td id="value-name-2">
								<div>
									<a @click="gethouseinfo" target="_blank" title="南山协信天骄城"><img id="avatar-2"
											class="avatar"
											src="../../../assets/img/83056b78-9f82-4b8b-ae23-2c3538e49fe0.png"
											alt=""></a>
								</div>
								<div id="name-2">南山协信天骄城</div>
								<div class="ctrl-wrap">
									<span class="del" data-index="2" data-pid="110099217">╳</span>
								</div>
							</td>
							<td id="value-name-3">
							</td>
							<td id="value-name-4">
							</td>
						</tr>
						<tr class="normal loupan-info" node-type="loupan-info">
							<td class="key">价格</td>
							<td id="value-price-1">平均价格：
								<span id="price-1" class="price">18000元/㎡</span>
							</td>
							<td id="value-price-2">平均价格：
								<span id="price-2" class="price">6500元/㎡</span>
							</td>
							<td id="value-price-3"></td>
							<td id="value-price-4"></td>
						</tr>
					</tbody>
				</table>
				<table class="mtable">
					<colgroup>
						<col class="key">
						<col span="4" class="value">
					</colgroup>
					<tbody>
						<tr class="headerd">
							<td colspan="5">
								<div class="title">基本信息</div>
							</td>
						</tr>
						<tr class="normal">
							<td class="key">项目位置</td>

							<td id="value-location-1">芝罘 北马路与西南河交汇处
								<a href="" class="maplink" target="_blank">查看地图</a>
							</td>
							<td id="value-location-2">龙口 齐鲁医院南山分院北侧
								<a href="" class="maplink" target="_blank">查看地图</a>
							</td>
							<td id="value-location-3"></td>
							<td id="value-location-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">物业类别</td>
							<td id="value-property-1">普通住宅,自住型商品房</td>
							<td id="value-property-2">普通住宅,自住型商品房</td>
							<td id="value-property-3"></td>
							<td id="value-property-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">装修状况</td>
							<td id="value-fitment-1">毛坯</td>
							<td id="value-fitment-2">毛坯</td>
							<td id="value-fitment-3"></td>
							<td id="value-fitment-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">产权年限</td>
							<td id="value-years-1">70年</td>
							<td id="value-years-2">70年</td>
							<td id="value-years-3"></td>
							<td id="value-years-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">开发商</td>
							<td id="value-devel-1"></td>
							<td id="value-devel-2"></td>
							<td id="value-devel-3"></td>
							<td id="value-devel-4"></td>
						</tr>
					</tbody>
				</table>

				<table class="mtable">
					<colgroup>
						<col class="key">
						<col span="4" class="value">
					</colgroup>
					<tbody>
						<tr class="headerd">
							<td colspan="5">
								<div class="title">销售信息</div>
							</td>
						</tr>
						<tr class="normal">
							<td class="key">销售状态</td>
							<td id="value-sale-1">在售</td>
							<td id="value-sale-2">在售</td>
							<td id="value-sale-3"></td>
							<td id="value-sale-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">开盘时间</td>
							<td id="value-opentime-1">预计2018年07月</td>
							<td id="value-opentime-2">预计2018年06月</td>
							<td id="value-opentime-3"></td>
							<td id="value-opentime-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">交房时间</td>
							<td id="value-givetime-1">预计2020年12月31日</td>
							<td id="value-givetime-2">2019年12月30日</td>
							<td id="value-givetime-3"></td>
							<td id="value-givetime-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">售楼地址</td>
							<td id="value-salelocation-1">西南河路与北马路交界处</td>
							<td id="value-salelocation-2">齐鲁医院南山分院东北侧</td>
							<td id="value-salelocation-3"></td>
							<td id="value-salelocation-4"></td>
						</tr>
					</tbody>
				</table>

				<table class="mtable">
					<colgroup>
						<col class="key">
						<col span="4" class="value">
					</colgroup>
					<tbody>
						<tr class="headerd">
							<td colspan="5">
								<div class="title">交通信息</div>
							</td>
						</tr>
						<tr class="normal">
							<td class="key">轨道交通</td>
							<td id="value-railway-1"></td>
							<td id="value-railway-2"></td>
							<td id="value-railway-3"></td>
							<td id="value-railway-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">公交线路</td>

							<td id="value-bus-1">
								<span class="bus-row"
									title="烟台市口腔医院站点，停靠：3路 3路刘家 6路 11路 17路 18路 18路竹林寺 28路 32路 37路 46路 47路 50路 50路杨家台子 高铁巴士1号线">烟台市口腔医院站点，停靠：3路
									3路刘家 6路 11路 17路 18路 18路竹林寺 28路 32路 37路 46路 47路 50路 50路杨家台子 高铁巴士1号线
									<span></span>
								</span>
							</td>
							<td id="value-bus-2">
								<span class="bus-row" title="乘9、101、5、10、13到协信天骄城下车即可">乘9、101、5、10、13到协信天骄城下车即可
									<span></span>
								</span>
							</td>
							<td id="value-bus-3"></td>
							<td id="value-bus-4"></td>
						</tr>
					</tbody>
				</table>

				<table class="mtable">
					<colgroup>
						<col class="key">
						<col span="4" class="value">
					</colgroup>
					<tbody>
						<tr class="headerd">
							<td colspan="5">
								<div class="title">规划信息</div>
							</td>
						</tr>
						<tr class="normal">
							<td class="key">占地面积</td>
							<td id="value-floorarea-1">16700平方米</td>
							<td id="value-floorarea-2">64305平方米</td>
							<td id="value-floorarea-3"></td>
							<td id="value-floorarea-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">建筑面积</td>
							<td id="value-buildarea-1">86376平方米</td>
							<td id="value-buildarea-2">136198.6平方米</td>
							<td id="value-buildarea-3"></td>
							<td id="value-buildarea-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">容积率</td>
							<td id="value-volume-1">4.91</td>
							<td id="value-volume-2">1.69</td>
							<td id="value-volume-3"></td>
							<td id="value-volume-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">绿化率</td>
							<td id="value-green-1">35%</td>
							<td id="value-green-2">35%</td>
							<td id="value-green-3"></td>
							<td id="value-green-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">楼栋总数</td>
							<td id="value-blockcount-1">3</td>
							<td id="value-blockcount-2">19</td>
							<td id="value-blockcount-3"></td>
							<td id="value-blockcount-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">户数</td>
							<td id="value-housecount-1">508</td>
							<td id="value-housecount-2">657</td>
							<td id="value-housecount-3"></td>
							<td id="value-housecount-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">停车位</td>
							<td id="value-parking-1">
								<span class="park-row" title="323个">323个</span>
							</td>
							<td id="value-parking-2">
								<span class="park-row" title="805个（地上80个，地下725个）">805个（地上80个，地下725个）</span>
							</td>
							<td id="value-parking-3"></td>
							<td id="value-parking-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">物业公司</td>
							<td id="value-propcompany-1">-</td>
							<td id="value-propcompany-2">天骄爱生活服务股份有限公司</td>
							<td id="value-propcompany-3"></td>
							<td id="value-propcompany-4"></td>
						</tr>
						<tr class="normal">
							<td class="key">物业费</td>
							<td id="value-proppay-1">-</td>
							<td id="value-proppay-2">-</td>
							<td id="value-proppay-3"></td>
							<td id="value-proppay-4"></td>
						</tr>
					</tbody>
				</table>
				<div class="lpcompare-tig" node-type="lpcompare-tig" style="display: none;">
					<p class="text">点评成功</p>
				</div>
			</div>
		</Card>
		<Modal v-model="mapModel" fullscreen title="Fullscreen Modal">
			<mapCompare />
		</Modal>
	</div>
</template>

<script>
	import Server from "@/core/server";
	import {services} from "@/core/config/services";
	import mapCompare from "./mapCompare";
	export default {
		data() {
			return {
				mapModel: false
			};
		},
		mounted() {},
		methods: {
			gethouseinfo() {
				this.$router.push("/houseinfo");
			},
			showmapView() {
				debugger;
				this.mapModel = true;
			}
		},
		components: {
			mapCompare
		}
	};
</script>
<style lang="less" scoped>
	body {overflow: auto;}
	.module-loupan-search .h-city i {position: absolute;display: none;width: 11px;height: 8px;left: 32px;top: 49px;background-position: 0 -52px;font-size: 0;z-index: 1002;}

	.module-loupan-search .cityArea_k .tt .h-close {display: block;position: absolute;right: 0;top: 0;width: 16px;height: 16px;background-position: 0 0;}

	.module-loupan-search .cityArea_k .tt .h-close:hover {background-position: 0 -29px;}

	.module-loupan-search .loupan-search-right {position: relative;float: right;width: 175px;height: 80px;cursor: pointer;margin-top: -5px;overflow: hidden;}

	.module-loupan-search .loupan-search-hover-show {width: 70px;height: 70px;float: left;margin-right: 8px;}

	.module-loupan-search .loupan-search-hover-show img {width: 70px;height: 70px;}

	.module-loupan-search .loupan-search-right .loupan-search-title1 {font-weight: 700;font-size: 12px;color: #e43;position: absolute;left: 78px;top: 14px;}

	.module-loupan-search .loupan-search-right .loupan-search-title2 {font-size: 12px;color: #999;position: absolute;left: 78px;top: 35px;}

	.module-lpcompare {margin-bottom: 30px;background: #f8f8f8;padding-bottom: 7px;}

	.module-lpcompare .mtable .compare {text-align: left;border: 0;padding: 15px 16px 16px;position: relative;overflow: visible !important;background: #f8f8f8;}

	.module-lpcompare .label {font-size: 16px;font-weight: 700;padding: 0 12px;}

	.module-lpcompare .query {height: 30px;border: 1px #d8d8d8 solid;width: 300px;margin: 0 6px 0 16px;outline: 0;padding: 7px 0;text-indent: 8px;font-size: 14px;}

	.module-lpcompare .suggest-list {position: absolute;list-style: none;min-width: 300px;border: 1px solid #d8d8d8;top: 73px;left: 119px;display: none;}

	.module-lpcompare .suggest-item {min-width: 292px;height: 30px;line-height: 30px;background-color: #fff;padding-left: 8px;}

	.module-lpcompare .suggest-item .left-text {display: inline-block;max-width: 196px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}

	.module-lpcompare .suggest-item .name2 {font-size: 12px;color: #999;margin-left: 5px;}

	.module-lpcompare .suggest-item .red {font-weight: 700;}

	.module-lpcompare .suggest-item .suggest-dist {float: right;height: 30px;color: #999;max-width: 70px;margin-right: 8px;margin-left: 10px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}

	.module-lpcompare .suggest-item:hover {background-color: #f5f5f5;}

	.module-lpcompare .avatar {width: 120px;height: 90px;}

	.module-lpcompare .price {color: #e43;}
	.module-lpcompare .btn {width: 65px;height: 30px;background-color: #e43;color: #fff;display: inline-block;line-height: 30px;text-align: center;cursor: pointer;border-radius: 2px;}

	.module-lpcompare .compare-btn {background-color: #19be6b;}
	.module-lpcompare .ctrl-wrap {padding-top: 20px;}

	.module-lpcompare .del {width: 11px;height: 11px;border: 1px #e43 solid;color: #e43;text-align: center;line-height: 11px;font-size: 11px;padding: 2px 3px 1px 2px;cursor: pointer;}
	.module-lpcompare .mtable {font-size: 14px;border-width: 1px;border-color: #eee;border-collapse: collapse;width: 1200px;table-layout: fixed;}

	.module-lpcompare .features td {font-size: 0;text-align: left !important;}
	.module-lpcompare .feature {padding: 4px;background-color: #fff;color: #999;border: 1px solid #e5e5e5;-webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;height: 12px;line-height: 12px;font-size: 12px;margin-right: 10px;margin-bottom: 10px;display: inline-block;}
	.module-lpcompare .mtable td {line-height: 22px;border-width: 1px;border-color: #eee;border-style: solid;background: #fff;text-align: center;padding: 15px 16px;word-wrap: break-word;word-break: break-all;overflow: hidden;}
	.module-lpcompare .mtable tr td:nth-child(2) {border-left: 0;}
	.module-lpcompare .mtable tr:nth-child(2) td {border-top: 0;}

	.module-lpcompare .mtable .key {width: 10%;background: #f8f8f8;border: 0;}

	.module-lpcompare .mtable .bus-row,.module-lpcompare .mtable .park-row {overflow: hidden;display: inline-block;}

	.module-lpcompare .mtable .value {width: 22.5%;}

	.module-lpcompare .mtable .headerd td {padding: 12px 0;background-color: #fff1ee;border: 0;}

	.module-lpcompare .mtable .title {text-align: left;background-color: #fff1ee;color: #e43;border-left: 4px #e43 solid;padding-left: 22px;height: 35px;line-height: 35px;font-size: 16px;}

	.module-lpcompare .maplink {color: #e43;text-decoration: underline;margin-left: 4px;cursor: pointer;}

	.module-lpcompare .lpcompare-tig {position: fixed;margin-left: -221px;margin-top: -55px;width: 440px;height: 110px;left: 50%;top: 50%;background: #fff;text-align: center;border: 1px #ccc solid;z-index: 100000;}

	.module-lpcompare .lpcompare-tig .text {display: inline-block;padding-top: 37px;font-size: 20px;color: #333;line-height: 30px;}

	.module-shopping-cart {position: fixed;top: 25%;right: 32px;margin-top: -45px;z-index: -1;background: #fff;border-radius: 2px;transition: all 0.2s;-moz-transition: all 0.2s;-webkit-transition: all 0.2s;-o-transition: all 0.2s;opacity: 0;display: none;filter: alpha(opacity=0);}

	.module-shopping-cart.show {visibility: visible;opacity: 1;right: 42px;z-index: 20;filter: alpha(opacity=100);}

	.module-shopping-cart .right-triangle {position: absolute;top: 63px;right: -8px;width: 9px;height: 12px;background: url(//t1.focus-res.cn/front-pc/module/shopping-cart/images/right-triangle.png?1547637206583);background-size: 100% 100%;}

	.module-shopping-cart .root {width: 248px;box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);border-radius: 2px;border: 1px solid #eee;}

	.module-shopping-cart .root .headerd {border-bottom: 1px solid #e43;height: 45px;}

	.module-shopping-cart .root .headerd .sub {text-indent: 15px;line-height: 45px;font-size: 14px;color: #e43;}
	.module-shopping-cart .root .headerd .sub-right {line-height: 45px;font-size: 14px;color: #999;float: right;cursor: pointer;margin-right: 15px;}

	.module-shopping-cart .root .headerd .sub-right .triangle {line-height: 45px;margin-left: 4px;font-family: focusued !important;font-size: 18px;font-style: normal;font-weight: 400;color: #e43;-webkit-font-smoothing: antialiased;-webkit-text-stroke-width: 0.2px;-moz-osx-font-smoothing: grayscale;}

	.module-shopping-cart .root .wrapper {text-align: center;background-color: #fff;}

	.module-shopping-cart .root .wrapper .blank {padding-top: 15px;}

	.module-shopping-cart .root .wrapper .blank .text-area {padding: 5px 14px 0;overflow: hidden;}
	.module-shopping-cart .root .wrapper .blank .line {float: left;width: 27px;height: 2px;background: #ededf0;border-radius: 1px;margin-top: 14px;}

	.module-shopping-cart .root .wrapper .blank .text-info {float: left;text-align: center;line-height: 14px;font-size: 10px;color: #999;width: 145px;margin: 0 10px;}

	.module-shopping-cart .root .wrapper .submit-wrapper {text-align: center;}
	.module-shopping-cart .root .wrapper .submit-wrapper .submit {color: #e43;margin: 0 auto;font-size: 14px;cursor: pointer;line-height: 18px;padding-top: 15px;padding-bottom: 13px;}

	.module-shopping-cart .root .wrapper .submit-wrapper .right-icon {margin-left: 5px;vertical-align: bottom;font-family: focusued !important;font-size: 18px;font-style: normal;font-weight: 400;color: #e43;-webkit-font-smoothing: antialiased;-webkit-text-stroke-width: 0.2px;-moz-osx-font-smoothing: grayscale;}

	.module-shopping-cart .root .wrapper .filled {display: none;}

	.module-shopping-cart .root .wrapper .filled li {padding: 0 5px;line-height: 20px;font-size: 14px;text-align: left;border-bottom: solid 1px #ededf0;overflow: hidden;width: 220px;margin: 0 auto;}

	.module-shopping-cart .root .wrapper .filled li .loupan-name {float: left;max-width: 190px;color: #666;line-height: 20px;margin-top: 10px;margin-bottom: 5px;}

	.module-shopping-cart .root .wrapper .filled li .delete {float: right;cursor: pointer;line-height: 35px;font-family: focusued !important;font-size: 14px;font-style: normal;font-weight: 400;color: #e43;-webkit-font-smoothing: antialiased;-webkit-text-stroke-width: 0.2px;-moz-osx-font-smoothing: grayscale;}

	.module-shopping-cart .root .wrapper .filled li:last-child {border: 0;}

	.module-shopping-cart .root .wrapper .filled .submit-wrapper {font-size: 0;}

	.module-shopping-cart .root .wrapper .filled .empty {width: 124px;height: 39px;color: #e43;font-size: 14px;line-height: 39px;text-align: center;display: inline-block;cursor: pointer;background: #eee;border-bottom-left-radius: 2px;}
	.module-shopping-cart .root .wrapper .filled .compare {width: 124px;height: 39px;color: #fff;font-size: 14px;line-height: 39px;text-align: center;display: inline-block;cursor: pointer;background: #e43;border-bottom-right-radius: 2px;}.module-right-toolbar {position: fixed;right: -36px;top: 0;width: 36px;height: 100%;background: #fff;box-shadow: -2px 0 3px 0 rgba(0, 0, 0, 0.06);z-index: 1000;}

	.module-right-toolbar.show {animation: tbshow 0.8s;animation-fill-mode: forwards;right: 0 \9 \0;}

	.module-right-toolbar.hide {animation: tbhide 0.8s;right: -36px;}

	.module-right-toolbar .rt-ctn {position: absolute;top: 25%;left: 0;height: 75%;}
	.module-right-toolbar .rt-ctn a {color: #6d6d73;}

	.module-right-toolbar .rt-ctn .rt-item {height: 42px;width: 36px;text-align: center;font-size: 0;padding: 6px 0 0;cursor: pointer;position: relative;}
	.module-right-toolbar .rt-ctn .rt-item em {display: block;font-size: 20px;color: #6d6d73;text-align: center;}

	.module-right-toolbar .rt-ctn .rt-item .red-circle {width: 15px;height: 15px;font-size: 12px;line-height: 16px;border-radius: 50%;color: #fff;background: #f22;position: absolute;z-index: 1;right: 0;top: 0;display: none;border: 1px solid #fff;}
	.module-right-toolbar .rt-ctn .rt-item .icon {font-family: focusued !important;font-size: 20px;font-style: normal;font-weight: 400;color: #6d6d73;-webkit-font-smoothing: antialiased;-webkit-text-stroke-width: 0.2px;-moz-osx-font-smoothing: grayscale;}

	.module-right-toolbar .rt-ctn .rt-item span {display: inline-block;font-size: 10px;line-height: 10px;margin-top: 5px;}

	.module-right-toolbar .rt-ctn .rt-item:hover {
		background-color: #6d6d73;
		color: #fff;
	}

	.module-right-toolbar .rt-ctn .rt-item:hover em {
		color: #fff;
	}

	.module-right-toolbar .rt-ctn .rt-item:hover .icon {
		font-family: focusued !important;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		color: #fff;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	.module-right-toolbar .rt-ctn .rt-item:hover .hover-tips {
		visibility: visible;
		opacity: 1;
		left: -97px;
		z-index: 1;
	}

	.module-right-toolbar .rt-ctn .rt-item:hover.active .hover-tips {
		visibility: hidden;
		opacity: 0;
		left: -85px;
		z-index: -2;
	}

	.module-right-toolbar .rt-ctn .rt-item .hover-tips {
		position: absolute;
		top: 0;
		left: -85px;
		opacity: 0;
		transition: all 0.2s;
		-moz-transition: all 0.2s;
		-webkit-transition: all 0.2s;
		-o-transition: all 0.2s;
		visibility: hidden;
		z-index: -2;
		width: 97px;
		height: 48px;
	}

	.module-right-toolbar .rt-ctn .rt-item .hover-tips img {
		width: 97px;
		height: 48px;
	}

	.module-right-toolbar .rt-ctn .rt-item .hover-tips .text {
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		width: 94px;
		height: 48px;
		font-size: 14px;
		line-height: 48px;
		color: #fff;
		margin-top: 0;
	}

	.module-right-toolbar .rt-ctn .split-bar {
		width: 20px;
		height: 1px;
		background: #f2f2f2;
		margin: 5px auto;
	}

	@keyframes tbshow {
		from {
			right: -36px;
		}

		to {
			right: 0;
		}
	}

	@keyframes tbhide {
		from {
			right: 0;
		}

		to {
			right: -36px;
		}
	}

	.module-auto-sem {
		display: none;
	}

	.module-common-float-dlg .cfdlg-panel {
		background-color: #fff;
	}

	.module-common-float-dlg .cfdlg-ruzhu {
		width: 523px;
		height: 459px;
		border: 1px solid #f8dcb0;
		background: #fff7ec;
		background: linear-gradient(to bottom, #fff7ec 0, #fff 60%);
	}

	.module-common-float-dlg .cfdlg-btnclose {
		position: absolute;
		display: block;
		width: 30px;
		height: 30px;
		cursor: pointer;
		background-image: url(//t1.focus-res.cn/front-pc/module/common-float-dlg/images/dlg-close.png?1547637206583);
	}

	.module-common-float-dlg .cfdlg-btnclose:hover {
		background-image: url(//t1.focus-res.cn/front-pc/module/common-float-dlg/images/dlg-close-hover.png?1547637206583);
	}

	.module-common-float-dlg .cfdlg-ruzhu .cfdlg-btnclose {
		top: 20px;
		right: 20px;
	}

	.module-common-float-dlg .cfdlg-ruzhu .title {
		width: 233px;
		height: 64px;
		background-image: url(//t1.focus-res.cn/front-pc/module/common-float-dlg/images/ruzhu-title.png?1547637206583);
		margin: 33px auto 0;
	}

	.module-common-float-dlg .cfdlg-ruzhu .body {
		position: relative;
		width: 405px;
		height: 108px;
		background-image: url(//t1.focus-res.cn/front-pc/module/common-float-dlg/images/ruzhu-body.png?1547637206583);
		margin: 35px auto 96px;
	}

	.module-common-float-dlg .cfdlg-ruzhu .body .body-item {
		position: absolute;
		text-align: center;
		width: 132px;
		color: #333;
	}

	.module-common-float-dlg .cfdlg-ruzhu .body-item-1 {
		top: 85px;
		left: -31px;
	}

	.module-common-float-dlg .cfdlg-ruzhu .body-item-2 {
		top: 112px;
		left: 155px;
	}

	.module-common-float-dlg .cfdlg-ruzhu .body-item-3 {
		top: 110px;
		right: -34px;
	}

	.module-common-float-dlg .cfdlg-ruzhu .body-item .item-t {
		font-size: 16px;
		font-weight: 700;
	}

	.module-common-float-dlg .cfdlg-ruzhu .body-item .item-des {
		font-size: 12px;
		line-height: 18px;
	}

	.module-common-float-dlg .cfdlg-ruzhu .bottom {
		width: 483px;
		height: 90px;
		margin: 0 auto;
		background-color: #fff8ef;
	}

	.module-common-float-dlg .cfdlg-ruzhu .bottom-l {
		padding-top: 26px;
		padding-left: 15px;
		font-size: 14px;
		float: left;
		text-align: left;
	}

	.module-common-float-dlg .cfdlg-ruzhu .bottom-l .bottom-l-txt {
		line-height: 21px;
	}

	.module-common-float-dlg .cfdlg-ruzhu .bottom-l .bottom-l-label {
		color: #666;
	}

	.module-common-float-dlg .cfdlg-ruzhu .bottom-l .bottom-l-val {
		color: #221815;
		font-weight: 700;
	}

	.module-common-float-dlg .cfdlg-ruzhu .bottom-r {
		float: right;
		text-align: center;
		width: 146px;
		height: 44px;
		line-height: 44px;
		border: 1px solid #e43;
		color: #e43;
		font-size: 16px;
		font-weight: 700;
		-webkit-border-radius: 22px;
		-moz-border-radius: 22px;
		border-radius: 22px;
		margin: 22px 15px 0 0;
	}

	.module-common-float-dlg .cfdlg-ruzhu .bottom-r:hover {
		text-decoration: none;
	}

	.module-common-float-dlg .cfdlg-error,
	.module-common-float-dlg .cfdlg-feedback {
		width: 398px;
		border: 1px solid #d8d8d8;
	}

	.module-common-float-dlg .cfdlg-error .cfdlg-btnclose,
	.module-common-float-dlg .cfdlg-feedback .cfdlg-btnclose {
		top: 11px;
		right: 11px;
		cursor: pointer;
	}

	.module-common-float-dlg .cfdlg-panel .panel-title {
		height: 49px;
		line-height: 49px;
		border-bottom: 1px solid #d8d8d8;
		padding-left: 20px;
		background-color: #f5f5f5;
	}

	.module-common-float-dlg .cfdlg-panel .panel-form {
		width: 340px;
		margin: 0 auto;
		padding-top: 20px;
		position: relative;
	}

	.module-common-float-dlg .cfdlg-panel .panel-form .panel-qq-txt {
		font-size: 12px;
		color: #666;
		line-height: 32px;
		height: 32px;
		text-align: left;
	}

	.module-common-float-dlg .cfdlg-panel .panel-form .panel-input-concat {
		display: block;
		width: 318px;
		height: 16px;
		line-height: 16px;
		border: 1px solid #d8d8d8;
		font-size: 12px;
		padding: 10px;
		margin-bottom: 20px;
		color: #333;
	}

	.module-common-float-dlg .cfdlg-panel .panel-form .panel-input-concat.grey {
		color: #999;
	}

	.module-common-float-dlg .cfdlg-panel .panel-form .panel-text {
		display: block;
		width: 318px;
		height: 128px;
		line-height: 16px;
		border: 1px solid #d8d8d8;
		color: #333;
		font-size: 12px;
		padding: 10px;
		resize: none;
	}

	.module-common-float-dlg .cfdlg-panel .panel-form .panel-text.grey {
		color: #999;
	}

	.module-common-float-dlg .cfdlg-panel .panel-form .error-txt {
		display: none;
		color: #e43;
		font-size: 12px;
		position: absolute;
		top: 58px;
		left: 0;
	}

	.module-common-float-dlg .cfdlg-panel .panel-form .panel-item {
		margin-bottom: 21px;
		height: 38px;
		font-size: 12px;
	}

	.module-common-float-dlg .cfdlg-panel .panel-form .panel-label {
		width: 67px;
		height: 38px;
		line-height: 38px;
		color: #999;
		float: left;
	}

	.module-common-float-dlg .cfdlg-panel .panel-form .panel-code {
		height: 16px;
		width: 83px;
		border: 1px solid #d8d8d8;
		padding: 10px;
		float: left;
		margin-right: 8px;
	}

	.module-common-float-dlg .cfdlg-panel .panel-form .panel-code-img {
		height: 36px;
		float: left;
		width: 78px;
		border: 1px solid #d8d8d8;
		margin-right: 8px;
	}

	.module-common-float-dlg .cfdlg-panel .panel-form .panel-code-new {
		height: 38px;
		line-height: 38px;
		color: #e43;
	}

	.module-common-float-dlg .cfdlg-panel .panel-submit {
		width: 127px;
		height: 40px;
		line-height: 40px;
		color: #fff;
		font-size: 16px;
		text-align: center;
		font-weight: 700;
		text-decoration: none;
		background-color: #ccc;
		display: block;
		margin: 0 auto 20px;
	}

	.module-common-float-dlg .cfdlg-panel .panel-submit.active {
		background-color: #e43;
	}

	.module-common-float-dlg .cfdlg-panel .panel-submit.active:hover {
		background-color: #db3f2f;
	}

	.module-common-float-dlg .cfdlg-panel .panel-result {
		display: none;
		text-align: center;
	}

	.module-common-float-dlg .cfdlg-panel .panel-result .panel-result-icon {
		margin: 54px auto 0;
		width: 61px;
		height: 61px;
		background-image: url(//t1.focus-res.cn/front-pc/module/common-float-dlg/images/panel-result-icon-suc.png?1547637206583);
	}

	.module-common-float-dlg .cfdlg-panel .panel-result .panel-result-txt {
		font-size: 28px;
		height: 28px;
		line-height: 28px;
		font-weight: 700;
		padding-bottom: 14px;
		padding-top: 17px;
	}

	.module-common-float-dlg .cfdlg-panel .panel-result .panel-result-des {
		line-height: 23px;
		font-size: 14px;
		padding-bottom: 39px;
	}

	.module-common-float-dlg .cfdlg-panel .panel-result .panel-result-close {
		width: 127px;
		height: 40px;
		line-height: 40px;
		color: #fff;
		font-size: 16px;
		text-align: center;
		font-weight: 700;
		text-decoration: none;
		background-color: #e43;
		display: block;
		margin: 0 auto 20px;
	}

	.module-common-float-dlg .cfdlg-panel .panel-result .panel-result-close:hover {
		background-color: #db3f2f;
	}
</style>
