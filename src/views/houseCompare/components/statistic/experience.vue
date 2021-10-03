<template>
	<div id="main" style="height: 698px;">
		<Row style="width: 97.8%;float: right; height: 698px;">
			<Col span="25">
			<!-- 图表1 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0.2% 0.1% 0.1% 0.1%;">
				<p style="text-align: center;">城市工作经验占比饼图</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart1()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart1" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表2 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0.2% 0.1% 0.1% 0;">
				<p style="text-align: center;">工作经验-薪资关系折线图</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart2()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart2" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表3 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0.1%;">
				<p style="text-align: center;">工作经验月变化折线图</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart3()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart3" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表4 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0;">
				<p style="text-align: center;">工作经验-薪资关系柱状图</p>
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
					{myData: [{"name": "无需","value": 995}, {"name": "在校/应届","value": 806}, {"name": "1年","value": 3478}, {"name": "2年","value": 3666}, {"name": "3-4年","value": 4838}, {"name": "5-7年","value": 1705}, {"name": "8-9年","value": 165}, {"name": "10年以上","value": 90}]},
					{myData: [{"name": "无需","value": 71}, {"name": "在校/应届","value": 73}, {"name": "1年","value": 235}, {"name": "2年","value": 311}, {"name": "3-4年","value": 534}, {"name": "5-7年","value": 176}, {"name": "8-9年","value": 21}, {"name": "10年以上","value": 8}]},
					{myData: [{"name": "无需","value": 81}, {"name": "在校/应届","value": 40}, {"name": "1年","value": 262}, {"name": "2年","value": 252}, {"name": "3-4年","value": 406}, {"name": "5-7年","value": 143}, {"name": "8-9年","value": 25}, {"name": "10年以上","value": 17}]},
					{ChartX: ["1", "2", "3", "4", "5", "6"], ChartLengend: ['销量'], ChartY: [5, 20, 36, 10, 10, 20].reverse()},
				],
				ChartList2: [
					{ChartX: ["无需", "在校/应届", "1年", "2年", "3-4年", "5-7年", "8-9年", "10年以上"],myData: [5.85, 6.67, 7.85, 8.12, 9.16, 13.99, 17.25, 23.8]},
					{ChartX: ["无需", "在校/应届", "1年", "2年", "3-4年", "5-7年", "8-9年", "10年以上"],myData: [5.1, 5.67, 6.85, 7.12, 8.16, 12.99, 16.25, 20.8]},
					{ChartX: ["无需", "在校/应届", "1年", "2年", "3-4年", "5-7年", "8-9年", "10年以上"],myData: [5.05, 5.27, 6.99, 8.55, 9.20, 12.13, 18.25, 22.8]},
					{ChartX: ["深圳", "2", "3", "4", "5", "6"],ChartLengend: ['销量'],ChartY: [5, 20, 36, 10, 10, 20].reverse()},
				],
				ChartList3: [
					{
						ChartX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
						myData: [[0, 0, 18, 183, 109, 6, 12, 216, 5, 13, 64, 370],[0, 0, 15, 83, 34, 6, 12, 64, 19, 26, 43, 508],[0, 0, 72, 520, 386, 42, 100, 734, 50, 88, 266, 1230],[0, 0, 110, 647, 341, 55, 125, 739, 75, 89, 264, 1229],[0, 0, 188, 819, 381, 70, 127, 945, 71, 108, 355, 1778],[0, 0, 60, 227, 127, 16, 56, 320, 22, 30, 133, 673],[0, 0, 13, 28, 5, 0, 3, 38, 1, 4, 9, 69],[0, 0, 2, 14, 9, 1, 1, 16, 0, 0, 7, 43]]
					},
					{
						ChartX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
						myData: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
					},
					{
						ChartX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
						myData: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
					},
					{
						ChartX: ["1", "2", "3", "4", "5", "6"], ChartLengend: ['销量'], ChartY: [5, 20, 36, 10, 10, 20].reverse()
					},
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
					grid: {right: '3%',left: '5%',bottom: '14%',top: '6%'},
					xAxis: {type: 'category',data: this.ChartList2[this.model].ChartX},
					yAxis: {type: 'value'},
					series: [{
						data: this.ChartList2[this.model].myData,
						type: 'line',areaStyle: {color: '#1E90FF'},
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
						{
							height: 15,backgroundColor: 'rgba(0,0,0,0.5)',
							handleStyle: {color: "#ffffff",},
							start: 0,end: 20,bottom: '1%'
						}
					],
					xAxis: [
						{
							type: 'category', axisPointer: {type: 'shadow'},
							data: this.ChartList3[this.model].ChartX,
						},
					],
					yAxis: [{type: 'value',}],
					series: [
						{
							name: '无需',type: 'line',itemStyle: {color: '#3378bc'},
							data: this.ChartList3[this.model].myData[0]
						},
						{
							name: '在校/应届',type: 'line',itemStyle: {color: '#ff7274'},
							data: this.ChartList3[this.model].myData[1]
						},
						{
							name: '1年',type: 'line',itemStyle: {color: '#2cd879'},
							data: this.ChartList3[this.model].myData[2]
						},
						{
							name: '2年',type: 'line',itemStyle: {color: '#82d8e1'},
							data: this.ChartList3[this.model].myData[3]
						},
						{
							name: '3-4年',type: 'line',itemStyle: {color: '#ef4fef'},
							data: this.ChartList3[this.model].myData[4]
						},
						{
							name: '5-7年',type: 'line',itemStyle: {color: '#ffaa00'},
							data: this.ChartList3[this.model].myData[5]
						},
						{
							name: '8-9年',type: 'line',itemStyle: {color: '#aaaa7f'},
							data: this.ChartList3[this.model].myData[6]
						},
						{
							name: '10年以上',type: 'line',itemStyle: {color: '#00557f'},
							data: this.ChartList3[this.model].myData[7]
						}
					]
				};
				myChart3.setOption(option3);
			},

			initEChart4: function() {
				var myChart4 = echarts.init(document.getElementById('Chart4'));
				var city = ['广州', '武汉', '北京', '上海', '南京', '深圳', '成都', '长沙', '杭州', '西安', '苏州', '济南', '重庆', '合肥', '福州'];
				var type = ['无需', '1-2年', '3-4年', '5-7年', '8年以上'];
				var data = [
					[0, 0, 61],[0, 1, 37],[0, 2, 22],[0, 3, 33],[0, 4, 8],[0, 5, 30],[0, 6, 21],[0, 7, 12],[0, 8, 19],[0, 9, 11],[0, 10, 13],[0, 11, 13],[0, 12, 5],[0, 13, 2],[0, 14, 16],
					[1, 0, 459],[1, 1, 425],[1, 2, 235],[1, 3, 252],[1, 4, 244],[1, 5, 152],[1, 6, 174],[1, 7, 106],[1, 8, 148],[1, 9, 123],[1, 10, 71],[1, 11, 60],[1, 12, 43],[1, 13, 46],[1, 14, 38],
					[2, 0, 305],[2, 1, 286],[2, 2, 227],[2, 3, 165],[2, 4, 148],[2, 5, 161],[2, 6, 125],[2, 7, 69],[2, 8, 69],[2, 9, 89],[2, 10, 38],[2, 11, 32],[2, 12, 49],[2, 13, 45],[2, 14, 26],
					[3, 0, 103],[3, 1, 95],[3, 2, 85],[3, 3, 50],[3, 4, 61],[3, 5, 62],[3, 6, 39],[3, 7, 41],[3, 8, 21],[3, 9, 23],[3, 10, 13],[3, 11, 11],[3, 12, 20],[3, 13, 17],[3, 14, 10],
					[4, 0, 21],[4, 1, 9],[4, 2, 15],[4, 3, 11],[4, 4, 4],[4, 5, 15],[4, 6, 4],[4, 7, 4],[4, 8, 4],[4, 9, 1],[4, 10, 2],[4, 11, 1],[4, 12, 0],[4, 13, 1],[4, 14, 0]
				];
				data = data.map(function(item) {
					return [item[1], item[0], item[2] || '-'];
				});
				var option4 = {
					tooltip: {axisPointer: {type: 'shadow',}},
					grid: {right: '3%',left: '8.5%',bottom: '7%'},
					xAxis: {type: 'category',data: city,splitArea: {show: true}},
					yAxis: {type: 'category',data: type,splitArea: {show: true},},
					visualMap: {min: 0,max: 450,calculable: true,orient: 'horizontal',top: '3.75%',left: '1%'},
					series: [{
						name: '数目',type: 'heatmap',label: {show: true},data: data,
						emphasis: {itemStyle: {shadowBlur: 10,shadowColor: 'rgba(0, 0, 0, 0.5)'}}
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
