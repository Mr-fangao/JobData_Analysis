<template>
	<div id="main" style="height: 698px;">
		<Row style="width: 97.8%;float: right; height: 698px;">
			<Col span="25">
			<!-- 图表1 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0.2% 0.1% 0.1% 0.1%;">
				<p style="text-align: center;">城市学历需求占比饼图</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart1()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart1" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表2 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0.2% 0.1% 0.1% 0;">
				<p style="text-align: center;">学历-薪资关系折线图</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart2()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart2" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表3 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0.1%;">
				<p style="text-align: center;">学历需求月变化折线图</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart3()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart3" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表4 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0;">
				<p style="text-align: center;">公司类型-薪资关系柱状图</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart4()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart4" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>
			</Col>
		</Row>
	</div>
</template>

<script>
	import echarts from "echarts";
	import 'echarts/theme/macarons.js';
	import 'echarts-wordcloud/dist/echarts-wordcloud.js';
	import 'echarts-wordcloud/dist/echarts-wordcloud.min.js';
	import 'jquery/dist/jquery.min.js';
	export default {
		data() {
			return {
				cityList: [
					[{value: '0',label: '全国'}, {value: '1',label: '华北地区'},{value: '2',label: '华东地区'}, {value: '3',label: '东北地区'},],
					[{value: '0',label: '全国'}, {value: '1',label: '北京'},{value: '2',label: '上海'}, {value: '3',label: '广州'},],
					[{value: '0',label: '北京'}, {value: '1',label: '上海'},{value: '2',label: '广州'}, {value: '3',label: '深圳'},]
				],
				model: 0,
				ChartList: [
					{myData: [{"name": "初中及以下","value": 3}, {"name": "高中","value": 10}, {"name": "中技","value": 10}, {"name": "中专","value": 103}, {"name": "大专","value": 4293}, {"name": "本科","value": 11337}, {"name": "硕士","value": 643}, {"name": "博士","value": 35}]},
					{myData: [{"name": "大专","value": 274}, {"name": "本科","value": 1143}, {"name": "硕士","value": 67}, {"name": "博士","value": 4}]},
					{myData: [{"name": "中专","value": 11}, {"name": "大专","value": 269}, {"name": "本科","value": 970}, {"name": "硕士","value": 38}, {"name": "博士","value": 10}]},
					{ChartX: ["1", "2", "3", "4", "5", "6"], ChartY: [5, 20, 36, 10, 10, 20].reverse()},
				],
				ChartList2: [
					{ChartX: ['大专以下', '大专', '本科', '硕士', '博士'], myData: [5.6, 6.73, 12.53, 14.16, 24.44]},
					{ChartX: ['大专以下', '大专', '本科', '硕士', '博士'], myData: [5.02, 6.53, 11.23, 12.56, 20.09]},
					{ChartX: ['大专以下', '大专', '本科', '硕士', '博士'], myData: [5.05, 6.43, 10.03, 11.16, 22.76]},
					{ChartX: ["深圳", "2", "3", "4", "5", "6"], ChartY: [5, 20, 36, 10, 10, 20].reverse()},
				],
				ChartList3: [{
						ChartX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
						myData: [[0, 0, 2, 9, 12, 1, 4, 21, 0, 0, 14, 63],[0, 0, 73, 715, 448, 38, 80, 790, 51, 87, 456, 1553],[0, 0, 400, 1896, 983, 166, 339, 2311, 186, 266, 734, 4056],[0, 0, 21, 109, 31, 8, 23, 162, 8, 18, 34, 229],[0, 0, 1, 6, 2, 2, 0, 11, 0, 0, 2, 11]]
					},
					{
						ChartX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
						myData: [[0, 0, 2, 9, 12, 0, 0, 0, 0, 0, 0, 0],[0, 0, 73, 715, 448, 0, 0, 0, 0, 0, 0, 0],[0, 0, 400, 1896, 983, 0, 0, 0, 0, 0, 0, 0],[0, 0, 21, 109, 31, 0, 0, 0, 0, 0, 0, 0],[0, 0, 1, 6, 2, 0, 0, 0, 0, 0, 0, 0]]
					},
					{
						ChartX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
						myData: [[0, 0, 2, 9, 12, 0, 0, 0, 0, 0, 0, 0],[0, 0, 73, 715, 448, 0, 0, 0, 0, 0, 0, 0],[0, 0, 400, 1896, 983, 0, 0, 0, 0, 0, 0, 0],[0, 0, 21, 109, 31, 0, 0, 0, 0, 0, 0, 0],[0, 0, 1, 6, 2, 0, 0, 0, 0, 0, 0, 0],]
					},
					{ChartX: ["1", "2", "3", "4", "5", "6"], ChartY: [5, 20, 36, 10, 10, 20].reverse()},
				]
			}
		},
		mounted() {
			this.initEChart1();this.initEChart2();this.initEChart3();this.initEChart4();
		},
		methods: {

			initEChart1: function() {
				var myChart = echarts.init(document.getElementById('Chart1'));
				var option = {
					color: ['#37a2da', '#ff6106', '#88e681', '#ffff00', '#ff9f7f', '#fb4d72', '#bb99c5','#5449ea'],
					tooltip: {trigger: 'item',formatter: "{a} <br/>{b} : {c} ({d}%)"},
					legend: {
						type: "scroll",orient: 'vertical',left: '8%',align: 'left',
						height: 185,top: 'middle',textStyle: {color: '#8C8C8C'},
					},
					series: [{
						name: '公司规模',type: 'pie',
						radius: [0, 112],center: ["51%", "56.5%"],
						data: this.ChartList[this.model].myData
					}]
				};
				myChart.setOption(option);
			},

			initEChart2: function() {
				var myChart2 = echarts.init(document.getElementById('Chart2'));
				var option2 = {
					tooltip: {formatter: '{b}:{c}K/月'},
					grid: {right: '3%',left: '5%',bottom: '14%',top: '6%',},
					xAxis: {type: 'category',data: this.ChartList2[this.model].ChartX},
					yAxis: {type: 'value'},
					series: [{
						data: this.ChartList2[this.model].myData,type: 'line',areaStyle: {color: '#1E90FF'},
						symbol: 'circle',symbolSize: 15,itemStyle: {color: "#1465b0",},
					}]
				};
				myChart2.setOption(option2);
			},

			initEChart3: function() {
				var myChart3 = echarts.init(document.getElementById('Chart3'));
				var option3 = {
					tooltip: {trigger: 'axis',show: true,axisPointer: {type: 'shadow',}},
					legend: {top: '3%'},
					grid: {right: '3%',left: '7%',bottom: '14%',top: '12%',},
					dataZoom: [
						{type: 'inside',start: 0,end: 75},
						{height: 15,backgroundColor: 'rgba(0,0,0,0.5)',handleStyle: {color: "#ffffff",},start: 0,end: 20,bottom: '1%'}
					],
					xAxis: [{type: 'category',axisPointer: {type: 'shadow'}, data: this.ChartList3[this.model].ChartX,}],
					yAxis: [{type: 'value',}],
					series: [
						{
							name: '大专以下',type: 'line',itemStyle: {color: '#3378bc'},
							data: this.ChartList3[this.model].myData[0]
						},
						{
							name: '大专',type: 'line',itemStyle: {color: '#ff7274'},
							data: this.ChartList3[this.model].myData[1]
						},
						{
							name: '本科',type: 'line',itemStyle: {color: '#2cd879'},
							data: this.ChartList3[this.model].myData[2]
						},
						{
							name: '硕士',type: 'line',itemStyle: {color: '#82d8e1'},
							data: this.ChartList3[this.model].myData[3]
						},
						{
							name: '博士',type: 'line',itemStyle: {color: '#ef4fef'},
							data: this.ChartList3[this.model].myData[4]
						}
					]
				};
				myChart3.setOption(option3);
			},

			initEChart4: function() {
				var myChart4 = echarts.init(document.getElementById('Chart4'));
				var city = ['广州', '武汉', '北京', '上海', '南京', '深圳', '成都', '长沙', '杭州', '西安', '苏州', '济南', '重庆', '合肥', '福州'];
				var type = ['中专', '大专', '本科', '硕士', '博士'];
				var data = [
					[0, 0, 2],[0, 1, 0],[0, 2, 0],[0, 3, 7],[0, 4, 2],[0, 5, 2],[0, 6, 2],[0, 7, 3],[0, 8, 1],[0, 9, 1],[0, 10, 0],[0, 11, 0],[0, 12, 1],[0, 13, 0],[0, 14, 0],
					[1, 0, 300],[1, 1, 206],[1, 2, 77],[1, 3, 115],[1, 4, 88],[1, 5, 96],[1, 6, 87],[1, 7, 150],[1, 8, 84],[1, 9, 53],[1, 10, 25],[1, 11, 36],[1, 12, 36],[1, 13, 25],[1, 14, 28],
					[2, 0, 712],[2, 1, 683],[2, 2, 512],[2, 3, 419],[2, 4, 390],[2, 5, 310],[2, 6, 272],[2, 7, 119],[2, 8, 182],[2, 9, 196],[2, 10, 117],[2, 11, 84],[2, 12, 83],[2, 13, 92],[2, 14, 68],
					[3, 0, 51],[3, 1, 33],[3, 2, 36],[3, 3, 15],[3, 4, 22],[3, 5, 45],[3, 6, 13],[3, 7, 9],[3, 8, 7],[3, 9, 11],[3, 10, 8],[3, 11, 9],[3, 12, 0],[3, 13, 0],[3, 14, 0],
					[4, 0, 4],[4, 1, 1],[4, 2, 2],[4, 3, 0],[4, 4, 2],[4, 5, 6],[4, 6, 0],[4, 7, 0],[4, 8, 1],[4, 9, 0],[4, 10, 1],[4, 11, 0],[4, 12, 0],[4, 13, 0],[4, 14, 2]
				];
				data = data.map(function(item) {
					return [item[1], item[0], item[2] || '-'];
				});
				var option4 = {
					tooltip: {axisPointer: {type: 'shadow',}},
					grid: {right: '3%',left: '5%',bottom: '7%'},
					xAxis: {
						type: 'category',data: city,
						splitArea: {show: true}
					},
					yAxis: {
						type: 'category',data: type,
						splitArea: {show: true},
					},
					visualMap: {min: 0,max: 450,calculable: true,orient: 'horizontal',left: 'center',top: '3.75%',left: '1%'},
					series: [{
						name: '数目',type: 'heatmap',data: data,
						label: {show: true},
						emphasis: {
							itemStyle: {shadowBlur: 10,shadowColor: 'rgba(0, 0, 0, 0.5)'}
						}
					}]
				};
				myChart4.setOption(option4);
			}
		}
	}
</script>

<style scoped="scoped">
	#main {width: 100%;height: 100%;}
	p {color: #424242;font-weight: 600;font-size: 18px;}
	.slelectInput {position: absolute;text-align: center;width: 120px;top: 20px;right: 20px;float: right;border-color: rgba(0, 0, 0, 0.5);}
</style>
