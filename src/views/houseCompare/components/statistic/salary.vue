<template>
	<div id="main" style="height: 1045px;">
		<Row style="width: 97.8%;float: right; height: 698px;">
			<Col span="25">
			<!-- 图表1 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0.2% 0.1% 0.1% 0.1%;">
				<p style="text-align: center;">区域城市薪资Top10</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart1()" placeholder="全国">
					<Option v-for="item in cityList[0]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart1" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表2 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0.2% 0.1% 0.1% 0;">
				<p style="text-align: center;">城市区县薪资柱状统计图</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart2()" placeholder="北京">
					<Option v-for="item in cityList[2]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart2" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表3 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0.1%;">
				<p style="text-align: center;">城市职位薪资Top15</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart3()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart3" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表4 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0;">
				<p style="text-align: center;">城市薪资区间词云展示</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart4()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart4" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表5 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0.1%;">
				<p style="text-align: center;">行业平均月薪雷达图</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart5()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart5" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表6 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0;">
				<p style="text-align: center;">城市职位薪资极差矩形树图</p>
				<div id="Chart6" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
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
	export default {
		data() {
			return {
				model: 0,
				cityList: [
					[{value: '0',label: '全国'}, {value: '1',label: '华北地区'}, {value: '2',label: '华东地区'}, {value: '3',label: '东北地区'}],
					[{value: '0',label: '全国'}, {value: '1',label: '北京'}, {value: '2',label: '上海'}, {value: '3',label: '广州'}],
					[{value: '0',label: '北京'}, {value: '1',label: '上海'}, {value: '2',label: '广州'}, {value: '3',label: '深圳'}]
				],
				ChartList: [
					{ChartX: ['深圳市', '北京市', '上海市', '苏州市', '南京市', '武汉市', '广州市', '杭州市', '合肥市', '西安市'],ChartY: [16.77, 14.685, 14.15, 13.56, 12.91, 12.79, 12.28, 11.74, 10.295, 10.005]},
					{ChartX: ['北京市', '天津市', '乌兰察布', '廊坊市', '呼和浩特', '石家庄', '太原市', '保定市', '晋中市', '沧州市'],ChartY: [14.685, 10.645, 10.5, 9.363, 8.25, 8.082, 7.879, 7.821, 7.00, 6.85]},
					{ChartX: ["3", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],ChartY: [5, 20, 36, 10, 10, 20]},
					{ChartX: ["1", "2", "3", "4", "5", "6"],ChartY: [5, 20, 36, 10, 10, 20].reverse()},
				],
				ChartList2: [
					{
						ChartX: ['昌平区', '朝阳区', '大兴区', '东城区', '丰台区', '海淀区', '门头沟区', '密云区', '石景山区', '顺义区', '通州区', '西城区','宣武区'],
						ChartY: [11.891, 15.037, 11.774, 14.830, 12.826, 15.379, 8.318, 16.329, 11.004, 10.875, 11.463,10.5, 9.85]
					},
					{
						ChartX: ['宝山区', '奉贤区', '虹口区', '黄浦区', '嘉定区', '静安区', '闵行区', '浦东新区', '普陀区', '青浦区', '松江区', '徐汇区','杨浦区', '闸北区', '长宁区'],
						ChartY: [14.429, 11.375, 11.427, 12.96, 29.56, 16.36, 15.741, 14.557, 12.326, 14.688, 12.19,15.096, 13.893, 13.75, 16.847]
					},
					{
						ChartX: ["白云区", "从化区", "番禺区", "海珠区", "花都区", "黄埔区", "荔湾区", "南沙区", "天河区", "越秀区", "增城区"],
						ChartY: [11.09, 3.25, 11.57, 13.32, 11.69, 12.35, 12.28, 9.42, 11.96, 11.49, 15]
					},
					{
						ChartX: ["深圳", "2", "3", "4", "5", "6"],
						ChartY: [5, 20, 36, 10, 10, 20].reverse()
					},
				],
				ChartList3: [
					{
						ChartX: ['测绘总工', '高级前端开发工程师', '技术研发总监', '三维GIS技术研发经理', '三维研发工程师(图形学、渲染)', '资深前端开发工程师','ReactNative开发工程师', '产品经理', 'Web开发工程师', '大数据讲师', '技术支持工程师', '测绘组长', '铁路行业销售总监','IT研发副总', '研发总监'],
						ChartY: [350, 300, 250, 250, 250, 225, 200, 175, 165, 125, 125, 110, 105, 75, 60]
					},
					{
						ChartX: ['Web开发工程师', '铁路行业销售总监', '数据处理研究员', '首席产品架构师', '高精地图众包算法高级工程师', '图形技术专家', '技术架构师','前端开发工程师(可视化)', '地图定位算法工程师', '地图规格专家', 'C++开发工程师', 'GIS产品经理', '三维GIS渲染引擎开发工程师','JAVA技术经理', 'GIS开发高级工程师'],
						ChartY: [165, 105, 58.33, 55, 45.83, 45, 40, 37.5, 37.5, 35, 35, 35, 35, 35, 35]
					},
					{
						ChartX: ['资深前端开发工程师', '产品经理', '铁路行业销售总监', '软件开发经理', '海纳售前行业架构师', '售前总监', '售前架构师-智慧园区','O2O产品经理', '点云算法工程师', '销售副总监', '高精地图工程师', '前端可视化专家', '土地规划(所长)', '资深架构师	','高级.net开发工程师(全栈)'],
						ChartY: [225.000, 175.000, 105.000, 45.000, 45.000, 45.000, 37.500, 35.000, 35.000, 31.500,30.000, 27.500, 27.500, 27.500, 25.000]
					},
					{ChartX: ["1", "2", "3", "4", "5", "6"], ChartY: [5, 20, 36, 10, 10, 20].reverse()},
				],
				ChartList4: [
					{
						myData: [
							{"name": "1-1.5万/月","value": 116}, {"name": "1.5-2万/月","value": 79}, {"name": "0.8-1.5万/月","value": 77}, {"name": "0.8-1万/月","value": 65}, {"name": "1.5-2.5万/月","value": 61}, {"name": "6-8千/月","value": 61}, {"name": "1-2万/月","value": 59}, {"name": "1.5-3万/月","value": 53}, {"name": "2-2.5万/月","value": 38}, {"name": "0.8-1.2万/月","value": 35},{"name": "0.6-1万/月","value": 31}, {"name": "2-3万/月","value": 27}, {"name": "1.2-3万/月","value": 17}, {"name": "20-30万/年","value": 17}, {"name": "2.5-3万/月","value": 16}, {"name": "0.5-1万/月","value": 15}, {"name": "3-4万/月","value": 13}, {"name": "2-4万/月","value": 13}, {"name": "0.7-1.5万/月","value": 13}, {"name": "0.7-1.2万/月","value": 13},
							{"name": "0.7-1万/月","value": 13}, {"name": "3-7千/月","value": 13}, {"name": "1.2-2.5万/月","value": 12}, {"name": "1.2-1.8万/月","value": 11}, {"name": "0.7-1.8万/月","value": 11}, {"name": "0.8-1.3万/月","value": 11}, {"name": "15-25万/年","value": 10}, {"name": "1.2-2万/月","value": 10}, {"name": "0.6-1.2万/月","value": 10}, {"name": "4.5-6千/月","value": 10},{"name": "6-9千/月","value": 9}, {"name": "4-8千/月","value": 9}, {"name": "2-3千/月","value": 9}, {"name": "0.4-2万/月","value": 8}, {"name": "5-6千/月","value": 8}, {"name": "3-4.5千/月","value": 8}, {"name": "0.8-2万/月","value": 7}, {"name": "0.8-1.8万/月","value": 7}, {"name": "1-1.2万/月","value": 7}, {"name": "0.6-1.5万/月","value": 7}, {"name": "10-15万/年","value": 7},
							{"name": "0.7-1.3万/月","value": 7}, {"name": "15-45万/年","value": 6}, {"name": "1-3万/月","value": 6}, {"name": "1-2.5万/月","value": 6}, {"name": "10-20万/年","value": 6}, {"name": "0.8-1.6万/月","value": 6}, {"name": "0.7-1.4万/月","value": 6}, {"name": "5-8千/月","value": 6}, {"name": "4-7千/月","value": 6}, {"name": "2-5万/月","value": 5}, {"name": "2-3.5万/月","value": 5},{"name": "1-1.8万/月","value": 5}, {"name": "1.2-1.5万/月","value": 5}, {"name": "12-18万/年","value": 5}, {"name": "0.9-1.2万/月","value": 5}, {"name": "8-10万/年","value": 5}, {"name": "0.3-1万/月","value": 5}, {"name": "5-7千/月","value": 5}, {"name": "1.5-2千/月","value": 5}, {"name": "1-5万/月","value": 4}, {"name": "25-35万/年","value": 4}, {"name": "1.8-2.5万/月","value": 4},
							{"name": "1.2-2.2万/月","value": 4}, {"name": "1.3-1.7万/月","value": 4}, {"name": "1.2-1.6万/月","value": 4}, {"name": "1-1.6万/月","value": 4}, {"name": "0.9-1.5万/月","value": 4}, {"name": "0.7-1.6万/月","value": 4}, {"name": "1-1.3万/月","value": 4}, {"name": "10-13万/年","value": 4}, {"name": "4-9千/月","value": 4}, {"name": "3.7-7千/月","value": 4}, {"name": "15-20万/月","value": 3},{"name": "4-5万/月","value": 3}, {"name": "2.5-5万/月","value": 3}, {"name": "2.5-3.5万/月","value": 3}, {"name": "1.8-3万/月","value": 3}, {"name": "1.5-2.8万/月","value": 3}, {"name": "1.3-1.8万/月","value": 3}, {"name": "1.1-2万/月","value": 3}, {"name": "15-20万/年","value": 3}, {"name": "1.1-1.8万/月","value": 3}, {"name": "1.2-1.7万/月","value": 3}, {"name": "1-1.7万/月","value": 3},
							{"name": "10.5-19.5万/年","value": 3}, {"name": "1-1.1万/月","value": 3}, {"name": "0.8-1.1万/月","value": 3}, {"name": "0.4-1.5万/月","value": 3}, {"name": "7-9千/月","value": 3}, {"name": "0.4-1万/月","value": 3}, {"name": "4.5-7千/月","value": 3}, {"name": "3.7-7.4千/月","value": 3}, {"name": "20-25万/月","value": 2}, {"name": "1.5-4万/月","value": 2}, {"name": "20-35万/年","value": 2},{"name": "1.5-2.9万/月","value": 2}, {"name": "15-30万/年","value": 2}, {"name": "20-25万/年","value": 2}, {"name": "1.6-2万/月","value": 2}, {"name": "0.8-2.5万/月","value": 2}, {"name": "1-1.9万/月","value": 2}, {"name": "0.9-1.8万/月","value": 2}, {"name": "0.5-2万/月","value": 2}, {"name": "1-1.4万/月","value": 2}, {"name": "10-18万/年","value": 2}, {"name": "0.5-1.2万/月","value": 2},
							{"name": "8-9千/月","value": 2}, {"name": "4.5-8千/月","value": 2}, {"name": "5.5-6.5千/月","value": 2}, {"name": "3.5-5千/月","value": 2}, {"name": "3-4千/月","value": 2}, {"name": "1-5千/月","value": 2}, {"name": "3-3千/月","value": 2}, {"name": "2.5-3千/月","value": 2}, {"name": "7.5-13.5万/月","value": 1}, {"name": "2.8-3.5万/月","value": 1}, {"name": "1.8-3.6万/月","value": 1},{"name": "1.8-3.5万/月","value": 1}, {"name": "20-40万/年","value": 1}, {"name": "1.6-2.5万/月","value": 1}, {"name": "1.5-2.2万/月","value": 1}, {"name": "1.4-2万/月","value": 1}, {"name": "1.3-2万/月","value": 1}, {"name": "1.2-2.1万/月","value": 1}, {"name": "1.5-1.7万/月","value": 1}, {"name": "1.3-1.6万/月","value": 1}, {"name": "13-20万/年","value": 1}, {"name": "0.6-2万/月","value": 1},
							{"name": "13-17万/年","value": 1}, {"name": "7-20万/年","value": 1}, {"name": "0.5-1.5万/月","value": 1}, {"name": "0.4-1.2万/月","value": 1}, {"name": "6.5-9千/月","value": 1}, {"name": "5-9千/月","value": 1}, {"name": "5.5-8千/月","value": 1}, {"name": "4.1-8.5千/月","value": 1}, {"name": "2.5-3.5千/月","value": 1}, {"name": "1-1.5千/月","value": 1}, {"name": "0.8-1.7万/月","value": 1},
						]
					},
					{
						myData: [
							{"name": "1-1.5万/月","value": 233}, {"name": "1.5-2万/月","value": 125}, {"name": "0.8-1万/月","value": 80}, {"name": "1-2万/月","value": 80}, {"name": "1.5-2.5万/月","value": 63}, {"name": "0.8-1.5万/月","value": 59}, {"name": "1.5-3万/月","value": 51}, {"name": "2-2.5万/月","value": 47}, {"name": "6-8千/月","value": 39}, {"name": "0.8-1.2万/月","value": 36}, {"name": "4.5-6千/月","value": 35}, {"name": "0.6-1万/月","value": 27}, {"name": "0.6-1.2万/月","value": 25}, {"name": "1.2-2万/月","value": 25}, {"name": "0.5-1万/月","value": 23}, {"name": "2.5-3万/月","value": 22}, {"name": "1-2.5万/月","value": 19}, {"name": "1-1.8万/月","value": 18}, {"name": "2-3万/月","value": 17}, {"name": "2-4万/月","value": 17}, {"name": "0.7-1万/月","value": 14}, {"name": "4-8千/月","value": 14}, 
							{"name": "0.8-1.6万/月","value": 13}, {"name": "0.8-2万/月","value": 13}, {"name": "4-6千/月","value": 12}, {"name": "0.5-1.5万/月","value": 12}, {"name": "2.5-3.5万/月","value": 10}, {"name": "0.7-1.5万/月","value": 10}, {"name": "0.6-1.5万/月","value": 10}, {"name": "3-4万/月","value": 9}, {"name": "2.5-4万/月","value": 9}, {"name": "1.5-2千/月","value": 9}, {"name": "0.7-1.4万/月","value": 8}, {"name": "1-1.2万/月","value": 8}, {"name": "1.5千以下/月","value": 7}, {"name": "1.3-2.5万/月","value": 7}, {"name": "1.3-2万/月","value": 7}, {"name": "1.7-2.5万/月","value": 7}, {"name": "5-9千/月","value": 7}, {"name": "0.8-1.8万/月","value": 7}, {"name": "1.8-3万/月","value": 7}, {"name": "0.5-1.2万/月","value": 7}, {"name": "2-5万/月","value": 6}, {"name": "6-9千/月","value": 6}, 
							{"name": "1.2-1.5万/月","value": 6}, {"name": "1.2-1.8万/月","value": 6}, {"name": "0.5-2万/月","value": 6}, {"name": "3-4.5千/月","value": 6},{"name": "20-30万/年","value": 6}, {"name": "0.9-1万/月","value": 6}, {"name": "0.7-1.8万/月","value": 6}, {"name": "0.7-1.2万/月","value": 5}, {"name": "1.4-2万/月","value": 5}, {"name": "4.5-9千/月","value": 5}, {"name": "2-3千/月","value": 5}, {"name": "3.5-6千/月","value": 5}, {"name": "10-15万/年","value": 5}, {"name": "0.8-2.5万/月","value": 5}, {"name": "5-7千/月","value": 4}, {"name": "7-8千/月","value": 4}, {"name": "8-9千/月","value": 4}, {"name": "1.5-2.4万/月","value": 4}, {"name": "8-10万/年","value": 4}, {"name": "3-4千/月","value": 4}, {"name": "0.6-1.8万/月","value": 4}, {"name": "0.4-1.2万/月","value": 4}, {"name": "4-5千/月","value": 4}, 
							{"name": "0.7-2.5万/月","value": 4}, {"name": "4.5-8千/月","value": 4}, {"name": "2-4千/月","value": 4}, {"name": "1.1-2.2万/月","value": 4}, {"name": "1-1.5千/月","value": 4}, {"name": "3-5千/月","value": 4}, {"name": "3-6万/月","value": 4}, {"name": "1.8-2.5万/月","value": 3}, {"name": "0.8-1.3万/月","value": 3}, {"name": "1.3-1.8万/月","value": 3}, {"name": "10-20万/年","value": 3}, {"name": "28-33万/年","value": 3}, {"name": "0.4-1万/月","value": 3}, {"name": "1.5-2.8万/月","value": 3}, {"name": "0.6-2万/月","value": 3}, {"name": "1-2.2万/月","value": 3}, {"name": "1.2-2.5万/月","value": 3}, {"name": "0.7-1.1万/月","value": 3}, {"name": "3-5万/月","value": 3}, {"name": "1-4千/月","value": 3}, {"name": "18-26万/年","value": 3}, {"name": "2.5-5万/月","value": 3}, {"name": "1-4万/月","value": 3}, 
							{"name": "1.2-1.7万/月","value": 3}, {"name": "1.2-2.4万/月","value": 3}, {"name": "5-6千/月","value": 2}, {"name": "6-7千/月","value": 2}, {"name": "1-1.3万/月","value": 2}, {"name": "1.5-1.8万/月","value": 2}, {"name": "15-40万/年","value": 2}, {"name": "5-8千/月","value": 2}, {"name": "1.3-1.5万/月","value": 2}, {"name": "1.3-2.6万/月","value": 2}
						]
					},
					{
						myData: [
							{"name": "1-1.5万/月","value": 116}, {"name": "1.5-2万/月","value": 79}, {"name": "0.8-1.5万/月","value": 77}, {"name": "0.8-1万/月","value": 65}, {"name": "1.5-2.5万/月","value": 61}, {"name": "6-8千/月","value": 61}, {"name": "1-2万/月","value": 59}, {"name": "1.5-3万/月","value": 53}, {"name": "2-2.5万/月","value": 38}, {"name": "0.8-1.2万/月","value": 35}, {"name": "0.6-1万/月","value": 31}, {"name": "2-3万/月","value": 27}, {"name": "1.2-3万/月","value": 17}, {"name": "20-30万/年","value": 17}, {"name": "2.5-3万/月","value": 16}, {"name": "0.5-1万/月","value": 15}, {"name": "3-4万/月","value": 13}, {"name": "2-4万/月","value": 13}, {"name": "0.7-1.5万/月","value": 13}, {"name": "0.7-1.2万/月","value": 13}, {"name": "0.7-1万/月","value": 13}, {"name": "3-7千/月","value": 13}, {"name": "1.2-2.5万/月","value": 12}, 
							{"name": "1.2-1.8万/月","value": 11}, {"name": "0.7-1.8万/月","value": 11}, {"name": "0.8-1.3万/月","value": 11}, {"name": "15-25万/年","value": 10}, {"name": "1.2-2万/月","value": 10}, {"name": "0.6-1.2万/月","value": 10}, {"name": "4.5-6千/月","value": 10}, {"name": "6-9千/月","value": 9}, {"name": "4-8千/月","value": 9}, {"name": "2-3千/月","value": 9}, {"name": "0.4-2万/月","value": 8}, {"name": "5-6千/月","value": 8}, {"name": "3-4.5千/月","value": 8}, {"name": "0.8-2万/月","value": 7}, {"name": "0.8-1.8万/月","value": 7}, {"name": "1-1.2万/月","value": 7}, {"name": "0.6-1.5万/月","value": 7}, {"name": "10-15万/年","value": 7}, {"name": "0.7-1.3万/月","value": 7}, {"name": "15-45万/年","value": 6}, {"name": "1-3万/月","value": 6}, {"name": "1-2.5万/月","value": 6}, {"name": "10-20万/年","value": 6}, {"name": "0.8-1.6万/月","value": 6}, 
							{"name": "0.7-1.4万/月","value": 6}, {"name": "5-8千/月","value": 6}, {"name": "4-7千/月","value": 6}, {"name": "2-5万/月","value": 5}, {"name": "2-3.5万/月","value": 5}, {"name": "1-1.8万/月","value": 5}, {"name": "1.2-1.5万/月","value": 5}, {"name": "12-18万/年","value": 5}, {"name": "0.9-1.2万/月","value": 5}, {"name": "8-10万/年","value": 5}, {"name": "0.3-1万/月","value": 5}, {"name": "5-7千/月","value": 5}, {"name": "1.5-2千/月","value": 5}, {"name": "1-5万/月","value": 4}, {"name": "25-35万/年","value": 4}, {"name": "1.8-2.5万/月","value": 4}, {"name": "1.2-2.2万/月","value": 4}, {"name": "1.3-1.7万/月","value": 4}, {"name": "1.2-1.6万/月","value": 4}, {"name": "1-1.6万/月","value": 4}, {"name": "0.9-1.5万/月","value": 4}, {"name": "0.7-1.6万/月","value": 4}, {"name": "1-1.3万/月","value": 4}, {"name": "10-13万/年","value": 4}, 
							{"name": "4-9千/月","value": 4}, {"name": "3.7-7千/月","value": 4}, {"name": "15-20万/月","value": 3}, {"name": "4-5万/月","value": 3}, {"name": "2.5-5万/月","value": 3}, {"name": "2.5-3.5万/月","value": 3}, {"name": "1.8-3万/月","value": 3}, {"name": "1.5-2.8万/月","value": 3}, {"name": "1.3-1.8万/月","value": 3}, {"name": "1.1-2万/月","value": 3}, {"name": "15-20万/年","value": 3}, {"name": "1.1-1.8万/月","value": 3}, {"name": "1.2-1.7万/月","value": 3}, {"name": "1-1.7万/月","value": 3}, {"name": "10.5-19.5万/年","value": 3}, {"name": "1-1.1万/月","value": 3}, {"name": "0.8-1.1万/月","value": 3}, {"name": "0.4-1.5万/月","value": 3}, {"name": "7-9千/月","value": 3}, {"name": "0.4-1万/月","value": 3}, {"name": "4.5-7千/月","value": 3}, {"name": "3.7-7.4千/月","value": 3}, {"name": "20-25万/月","value": 2}, {"name": "1.5-4万/月","value": 2}, 
							{"name": "20-35万/年","value": 2}, {"name": "1.5-2.9万/月","value": 2}, {"name": "15-30万/年","value": 2}, {"name": "20-25万/年","value": 2}, {"name": "1.6-2万/月","value": 2}
						].reverse()
					},
				],
				ChartList5: [
					{myData: [{value: [9.87, 14.59, 10.29, 10.01, 12.58, 11.43, 10.81, 13.53, 12.02, 12.26],name: '行业平均薪资(K/月)'}]},
					{myData: [{value: [9.87, 14.59, 10.29, 10.01, 12.58, 11.43, 10.81, 13.53, 12.02, 12.26],name: '行业平均薪资(K/月)'}]},
					{myData: [{value: [9.87, 10.59, 10.29, 10.01, 12.58, 14.43, 10.81, 13.53, 12.02, 12.26],name: '行业平均薪资(K/月)'}]},
					{myData: [{value: [9.87, 10.59, 10.29, 10.01, 12.58, 14.43, 10.81, 13.53, 12.02, 12.26],name: '行业平均薪资(K/月)'}].reverse()},
				]
			}
		},
		mounted() {
			this.initEChart1();this.initEChart2();this.initEChart3();
			this.initEChart4();this.initEChart5();this.initEChart6();
		},


		methods: {
			initEChart1: function() {
				var myChart = echarts.init(document.getElementById('Chart1'));
				var option = {
					tooltip: {trigger: 'axis',formatter: '{b}:{c}K/月',show: true,axisPointer: {type: 'shadow',}},
					dataZoom: [
						{type: 'inside',start: 0,end: 75},
						{
							height: 15,backgroundColor: 'rgba(0,0,0,0.5)',
							handleStyle: {color: "#ffffff",},
							start: 0,end: 20,bottom: '1%'
						}
					],
					grid: {right: '3%',left: '5%',bottom: '14%',top: "6%"},
					xAxis: {data: this.ChartList[this.model].ChartX},
					yAxis: {},
					series: [{
						name: '城市薪资',type: 'bar',
						data: this.ChartList[this.model].ChartY
					}]
				};
				myChart.setOption(option);
			},

			initEChart2: function() {
				var myChart2 = echarts.init(document.getElementById('Chart2'));
				var option2 = {
					tooltip: {trigger: 'axis',formatter: '{b}:{c}K/月',show: true,axisPointer: {type: 'shadow',}},
					dataZoom: [
						{type: 'inside',start: 0,end: 75},
						{
							height: 15,backgroundColor: 'rgba(0,0,0,0.5)',
							handleStyle: {color: "#ffffff",},
							start: 0,end: 20,bottom: '1%'
						}
					],
					grid: {right: '3%',left: '5%',bottom: '14%',top: "6%"},
					xAxis: {data: this.ChartList2[this.model].ChartX},
					yAxis: {},
					series: [{
						name: '平均月薪',type: 'bar',
						data: this.ChartList2[this.model].ChartY
					}]
				};
				myChart2.setOption(option2);
			},

			initEChart3: function() {
				var myChart3 = echarts.init(document.getElementById('Chart3'));
				var option3 = {
					tooltip: {trigger: 'axis',formatter: '{b}:{c}K/月',show: true,axisPointer: {type: 'shadow',}},
					dataZoom: [
						{type: 'inside',start: 0,end: 75},
						{
							height: 15,backgroundColor: 'rgba(0,0,0,0.5)',
							handleStyle: {color: "#ffffff",},
							start: 0,end: 20,bottom: '1%'
						}
					],
					grid: {right: '3%',left: '5%',bottom: '14%',top: "6%"},
					xAxis: {data: this.ChartList3[this.model].ChartX},
					yAxis: {},
					series: [{
						name: '销量',type: 'bar',
						data: this.ChartList3[this.model].ChartY
					}]
				};
				myChart3.setOption(option3);
			},

			initEChart4: function() {
				var myChart4 = echarts.init(document.getElementById('Chart4'));
				var option4 = {
					tooltip: {show: true},
					series: [{
						name: '薪资区间',type: 'wordCloud',sizeRange: [10, 66],
						rotationRange: [-45, 90],textPadding: 0,autoSize: {enable: true,minSize: 10},
						textStyle: {
							normal: {
								color: function() {
									return 'rgb(' + [
										Math.round(Math.random() * 160),Math.round(Math.random() * 160),Math.round(Math.random() * 160)
									].join(',') + ')';
								}
							},
							emphasis: {shadowBlur: 10,shadowColor: '#333'}
						},
						data: this.ChartList4[this.model].myData
					}]
				};
				myChart4.setOption(option4);
			},
			initEChart5: function() {
				var myChart5 = echarts.init(document.getElementById('Chart5'));
				var option5 = {
					tooltip: {},
					radar: {
						center: ['50%', '56%'],radius: 90,
						name: {
							textStyle: {color: '#fff',backgroundColor: '#999',borderRadius: 3,padding: [3, 5]}
						},
						indicator: [
							{name: '专业服务',max: 15}, {name: '政府/公共事业',max: 15},{name: '仪器仪表/工业自动化',max: 15}, {name: '环保/资源',max: 15},{name: '机械/设备/重工',max: 15}, {name: '计算机软硬件/服务',max: 15},{name: '建筑/建材/工程',max: 15}, {name: '交通/运输/物流',max: 15},{name: '石油/化工/矿产/地质',max: 15}, {name: '新能源',max: 15}
						]
					},
					series: [{
						name: '行业薪资',type: 'radar',areaStyle: {normal: {}},
						data: this.ChartList5[this.model].myData
					}]
				};
				myChart5.setOption(option5);
			},

			initEChart6: function() {
				var myChart6 = echarts.init(document.getElementById('Chart6'));
				var option6 = {
					tooltip: {trigger: 'item',formatter: "薪资极差: {c}K/月"},
					series: [{
						type: 'treemap',width: '100%',height: '85%',top: '8%',bottom: "3%",
						roam: false,nodeClick: false,breadcrumb: {show: false},
						label: {normal: {show: true,position: ['10%', '40%']}},
						itemStyle: {
							normal: {show: true,borderWidth: 1,borderColor: '#fff', textStyle: {color: '#fff',fontSize: 16,},},
							emphasis: {label: {show: true}}
						},
						data: [
							{"name": "武汉","value": 348.75}, {"name": "杭州","value": 297.5}, {"name": "重庆","value": 246.75}, {"name": "上海","value": 223.75}, {"name": "北京","value": 163.75}, {"name": "长沙","value": 123.54}, {"name": "深圳","value": 72.5}, {"name": "南京","value": 58.9}, {"name": "广州","value": 57.29}, 
							{"name": "西安","value": 36.25}, {"name": "东莞","value": 34.42}, {"name": "成都","value": 33.79}, {"name": "合肥","value": 31.25}, {"name": "佛山","value": 26.67}, {"name": "昆明","value": 25.75}, {"name": "苏州","value": 24.25}, {"name": "天津","value": 24}, {"name": "常州","value": 23.92}, 
							{"name": "嘉兴","value": 23}, {"name": "宁波","value": 22.5}, {"name": "郑州","value": 21.25}, {"name": "福州","value": 20.75}, {"name": "厦门","value": 20.75}, {"name": "中山","value": 20}, {"name": "南昌","value": 19.17}, {"name": "珠海","value": 43.75}, {"name": "青岛","value": 23.25}, 
							{"name": "济南","value": 18.75}, {"name": "沈阳","value": 18.75}, {"name": "贵阳","value": 18.5}, {"name": "无锡","value": 17.08}, {"name": "兰州","value": 11.25}, {"name": "石家庄","value": 10}, {"name": "哈尔滨","value": 9.5}, {"name": "长春","value": 9}, {"name": "大连","value": 8.75}, {"name": "太原","value": 7.75}
						]
					}],
				};
				myChart6.setOption(option6);
			},
		}
	}
</script>

<style scoped="scoped">
	#main {width: 100%;height: 100%;}
	p {color: #424242;font-weight: 600;font-size: 18px;}
	.slelectInput {position: absolute;text-align: center;width: 120px;top: 20px;right: 20px;float: right;border-color: rgba(0, 0, 0, 0.5);}
</style>
