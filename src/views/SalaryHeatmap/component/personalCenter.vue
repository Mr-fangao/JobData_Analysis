<template>
  <div id="mapContent">
    <iframe id="rythemMap" src="./高德_薪资三维热力图.html" frameborder="0"></iframe>
		<div id="legend">
			<div style="color: #fff;width: 100%;height: 16%;text-align: center;line-height: 40px;font-size: 18px; font-weight: bold;">图&nbsp;&nbsp;&nbsp;&nbsp;例</div>
			<div style="color: #ffffff;width: 100%;height: 14%;background-color: rgba(255, 0, 0, 1);text-align: center;line-height: 35px;font-size: 16px; font-weight: 500;">高</div>
			<div style="width: 100%;height: 14%;background-color: rgba(255, 255, 0, 0.8);"></div>
			<div style="width: 100%;height: 14%;background-color: rgba(0, 255, 0, 0.7);"></div>
			<div style="width: 100%;height: 14%;background-color: rgba(78, 255, 66, 0.7);"></div>
			<div style="width: 100%;height: 14%;background-color: rgba(85, 170, 255, 0.65)"></div>
			<div style="color: #ffffff;width: 100%;height: 14%;background-color: rgba(54, 47, 255, 0.65);text-align: center;line-height: 35px;font-size: 16px; font-weight: 500;">低</div>
		</div>
		<div id="echartsContent">
			<div class="angle-border left-top-border"></div>
			<div class="angle-border right-top-border"></div>
			<div class="angle-border left-bottom-border"></div>
			<div class="angle-border right-bottom-border"></div>
			
			<div class="tabs">
				<div class="tab tab1" @click="toggleTab('cityRanking')">
					<a class="chartTab">按市级排行</a>
					<Icon type="md-trending-up" :size="25" style="color: #fff;"/>
				</div>
				<div class="tab tab2" @click="toggleTab('Regn')">
					<a class="chartTab">按区县排行</a>
					<Icon type="md-trending-up" :size="25" style="color: #fff;"/>
				</div>
			</div>
			<cityranking :is="currentTab" keep-alive></cityranking>
			
		</div>
		
		
		<!-- 底部图表 -->
		<div id="bottomChart">
			<div class="angle-border2 left-top-border2"></div>
			<div class="angle-border2 right-top-border2"></div>
			<div class="angle-border2 left-bottom-border2"></div>
			<div class="angle-border2 right-bottom-border2"></div>
			<div class="cities">
				<div class="city city0" @click="toggleTab2('all')">
					<a class="cityName allcitites">全国</a>
				</div>
				<!-- 一线城市 -->
				<div class="city city1 t0" @click="toggleTab2('beijing')">
					<a class="cityName beijing">北京</a>
				</div>
				<div class="city city2 t0" @click="toggleTab2('shanghai')">
					<a class="cityName shanghai">上海</a>
				</div>
				<div class="city city3 t0" @click="toggleTab2('guangzhou')">
					<a class="cityName guangzhou">广州</a>
				</div>
				<div class="city city4 t0" @click="toggleTab2('shenzhen')">
					<a class="cityName shenzhen">深圳</a>
				</div>
				&nbsp;&nbsp;&nbsp;
				
				<!-- 新一线城市 -->
				<div class="city city5 t1" @click="toggleTab2('chengdu')">
					<a class="cityName chengdu">成都</a>
				</div>
				<div class="city city6 t1" @click="toggleTab2('hangzhou')">
					<a class="cityName hangzhou">杭州</a>
				</div>
				<div class="city city7 t1" @click="toggleTab2('chongqing')">
					<a class="cityName chongqing">重庆</a>
				</div>
				<div class="city city8 t1" @click="toggleTab2('wuhan')">
					<a class="cityName wuhan">武汉</a>
				</div>
				<div class="city city9 t1" @click="toggleTab2('xian')">
					<a class="cityName xian">西安</a>
				</div>
				<div class="city city10 t1" @click="toggleTab2('suzhou')">
					<a class="cityName suzhou">苏州</a>
				</div>
				<div class="city city11 t1" @click="toggleTab2('tianjin')">
					<a class="cityName tianjin">天津</a>
				</div>
				<div class="city city12 t1" @click="toggleTab2('nanjing')">
					<a class="cityName nanjing">南京</a>
				</div>
				<div class="city city13 t1" @click="toggleTab2('changsha')">
					<a class="cityName changsha">长沙</a>
				</div>
				<div class="city city14 t1" @click="toggleTab2('zhengzhou')">
					<a class="cityName zhengzhou">郑州</a>
				</div>
				<div class="city city15 t1" @click="toggleTab2('dongguan')">
					<a class="cityName dongguan">东莞</a>
				</div>
				<div class="city city16 t1" @click="toggleTab2('qingdao')">
					<a class="cityName qingdao">青岛</a>
				</div>
				<div class="city city17 t1" @click="toggleTab2('shenyang')">
					<a class="cityName shenyang">沈阳</a>
				</div>
				<div class="city city18 t1" @click="toggleTab2('hefei')">
					<a class="cityName hefei">合肥</a>
				</div>
				<div class="city city19 t1" @click="toggleTab2('foshan')">
					<a class="cityName foshan">佛山</a>
				</div>
			</div>
			<all :is="currentTab2" keep-alive></all>
		</div>
		
		
		
  </div>
</template>
<script>
	import cityRanking from '../myCharts/cityRanking';
	import Regn from '../myCharts/Regn';
	
	import all from '../cityData/all.vue';
	import beijing from '../cityData/T0/beijing.vue';
	import shanghai from '../cityData/T0/shanghai.vue';
	import guangzhou from '../cityData/T0/guangzhou.vue';
	import shenzhen from '../cityData/T0/shenzhen.vue';
	import chengdu from '../cityData/T1/chengdu.vue';
	import hangzhou from '../cityData/T1/hangzhou.vue';
	import chongqing from '../cityData/T1/chongqing.vue';
	import wuhan from '../cityData/T1/wuhan.vue';
	import xian from '../cityData/T1/xian.vue';
	import suzhou from '../cityData/T1/suzhou.vue';
	import tianjin from '../cityData/T1/tianjin.vue';
	import nanjing from '../cityData/T1/nanjing.vue';
	import changsha from '../cityData/T1/changsha.vue';
	import zhengzhou from '../cityData/T1/zhengzhou.vue';
	import dongguan from '../cityData/T1/dongguan.vue';
	import qingdao from '../cityData/T1/qingdao.vue';
	import shenyang from '../cityData/T1/shenyang.vue';
	import hefei from '../cityData/T1/hefei.vue';
	import foshan from '../cityData/T1/foshan.vue';
	export default {
		data() {
			return {
				currentTab: 'cityRanking',
				currentTab2: 'all'
			};
		},
		components: { // 声明子组件
		  cityRanking,
		  Regn,
			all,
			beijing,
			shanghai,
			guangzhou,
			shenzhen,
			
			chengdu,
			hangzhou,
			chongqing,
			wuhan,
			xian,
			suzhou,
			tianjin,
			nanjing,
			changsha,
			zhengzhou,
			dongguan,
			qingdao,
			shenyang,
			hefei,
			foshan
			
			
		},
		methods: {
			toggleTab: function(tab) {
				this.currentTab = tab; // tab 为当前触发标签页的组件名
			},
			toggleTab2: function(cities) {
				this.currentTab2 = cities; // cities 为当前触发标签页的组件名
			}
		}
	}
	
</script>

<style lang="less" scoped>
	// 图例
	#legend{
		position: absolute;
		bottom:0.75%;
		right:0.35%;
		width: 86px;
		height: 250px;
		background-color: rgba(0, 0, 0, 0.4);
	}
	
	
	//左表样式
	// 拐角样式
	.angle-border{
		position: absolute;
		width: 20px;
		height: 20px;
	}
	.left-top-border{
		top: -2.5px;
		left: -2.5px;
		border-top-left-radius: 5px;
		border-left: 4px solid rgba(255,255,255,0.8);
		border-top: 4px solid rgba(255,255,255,0.8);
	}
	.right-top-border{
		top: -2.5px;
		right: -2.5px;
		border-top-right-radius: 5px;
		border-right: 4px solid rgba(255,255,255,0.8);
		border-top: 4px solid rgba(255,255,255,0.8);
	}
	.left-bottom-border{
		bottom: -2.5px;
		left: -2.5px;
		border-bottom-left-radius: 5px;
		border-bottom: 4px solid rgba(255,255,255,0.8);
		border-left: 4px solid rgba(255,255,255,0.8);
	}
	.right-bottom-border{
		bottom: -2.5px;
		right: -2.5px;
		border-bottom-right-radius: 5px;
		border-right: 4px solid rgba(255,255,255,0.8);
		border-bottom: 4px solid rgba(255,255,255,0.8);
	}
	
	#mapContent{
		width: 100%; height: 698px;
	}
	#rythemMap{
		width: 100%;
		height: 100%;
	}
	#echartsContent{
		position: absolute;
		bottom: 0.75%;
		left: 0.2%;
		width: 22%;
		height: 91.25%;
		border-width: 0.1px;
		border-color: rgba(255, 255, 255, 0.3);
		border-style: solid;
		background-color: rgba(0, 0, 0, 0.6);
	}
	#bottomChart{
		height: 268px;
		width: 70.95%;
		border-width: 0.1px;
		border-color: rgba(255, 255, 255, 0.3);
		border-style: solid;
		background-color: rgba(0, 0, 0, 0.6);
		position: absolute;
		bottom: 0.75%;
		right: 6.5%;
	}
	.tab {
		display: inline-block;
		text-align: center;
		font-size: 18px;
		width: 50%;
	}
	.chartTab{
		cursor:pointer;
		color: #fff;
	}
	.tab1{
		background-color: rgba(0,0,0,0.8);
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	.tab2{
		background-color: rgba(0,0,0,0.7);
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.tab1:hover,.tab2:hover {
		box-shadow: 0px 2px 5px #ffffff;
	}
	
	// 底部图表
	// 拐角样式
	.angle-border2{
		position: absolute;
		width: 20px;
		height: 20px;
	}
	.left-top-border2{
		top: -2.5px;
		left: -2.5px;
		border-top-left-radius: 5px;
		border-left: 4px solid rgba(255,255,255,0.8);
		border-top: 4px solid rgba(255,255,255,0.8);
	}
	.right-top-border2{
		top: -2.5px;
		right: -2.5px;
		border-top-right-radius: 5px;
		border-right: 4px solid rgba(255,255,255,0.8);
		border-top: 4px solid rgba(255,255,255,0.8);
	}
	.left-bottom-border2{
		bottom: -2.5px;
		left: -2.5px;
		border-bottom-left-radius: 5px;
		border-bottom: 4px solid rgba(255,255,255,0.8);
		border-left: 4px solid rgba(255,255,255,0.8);
	}
	.right-bottom-border2{
		bottom: -2.5px;
		right: -2.5px;
		border-bottom-right-radius: 5px;
		border-right: 4px solid rgba(255,255,255,0.8);
		border-bottom: 4px solid rgba(255,255,255,0.8);
	}
	.city {
		display: inline-block;
		text-align: center;
		line-height: 27px;
		font-size: 5px;
		width: 48px;
		height: 27px;
		border-radius: 3px;
		margin-right: 2px;
		margin-top: 1.5px;
	}
	.city:hover {
		box-shadow: 2px 2px 5px #ff5500;
	}
	.city0{
		width: 85px;
		margin-right: 27px;
		margin-left: 1.5px;
		border-top-left-radius: 0px;
		background-color: rgba(255, 93, 0, 0.5);
	}
	.city4{
		margin-right: 10px;
	}
	.city19{
		border-top-right-radius: 0px;
	}
	.t0{
		background-color: rgba(255, 0, 0, 0.8);
	}
	.t0:hover {
		box-shadow: 2px 2px 5px rgba(255, 0, 0, 0.8);
	}
	.t1{
		background-color: rgba(255, 32, 35, 0.6);
	}
	.t1:hover {
		box-shadow: 2px 2px 5px rgba(255, 39, 53, 0.6);
	}
	.cityName{
		cursor:pointer;
		color: #fff;
		font-weight: bold;
		font-size: 15px;
	}
</style>
