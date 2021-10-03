<template>
	<div id="main" style="height: 1392px;">
		<Row style="width: 97.8%;float: right; height: 698px;">
			<Col span="25">
			<!-- 图表1 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0.2% 0.1% 0.1% 0.1%;">
				<p style="text-align: center;">城市公司规模占比饼图</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart1()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart1" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表2 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0.2% 0.1% 0.1% 0;">
				<p style="text-align: center;">城市公司类型占比饼图</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart2()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart2" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表3 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0.1%;">
				<p style="text-align: center;">公司规模-薪资关系折线图</p>
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

			<!-- 图表5 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0.1%;">
				<p style="text-align: center;">热门公司词云展示</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart5()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart5" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表6 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0;">
				<p style="text-align: center;">热门地区词云展示</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart6()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart6" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表7 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.2% 0.1%;">
				<p style="text-align: center;">热门行业词云展示</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart7()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart7" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表8 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.2% 0;">
				<p style="text-align: center;">福利待遇词云展示</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart8()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart8" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
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
					[{value: '0',label: '全国'}, {value: '1',label: '华北地区'}, {value: '2',label: '华东地区'}, {value: '3',label: '东北地区'}, ],[{value: '0',label: '全国'}, {value: '1',label: '北京'}, {value: '2',label: '上海'}, {value: '3',label: '广州'}],
					[{value: '0',label: '北京'}, {value: '1',label: '上海'}, {value: '2',label: '广州'}, {value: '3',label: '深圳'}]
				],
				model: 0,
				ChartList: [
					{myData: [{value: 1257,name: '<50'}, {value: 96,name: '5000-10000'}, {value: 2161,name: '50-150'}, {value: 100,name: '>10000'}, {value: 2021,name: '150-500'}, {value: 977,name: '500-1000'}, {value: 902,name: '1000-5000'}]},
					{myData: [{name: '1-50',value: 344}, {name: '50-150',value: 328}, {name: '150-500',value: 274}, {name: '500-1000',value: 211}, {name: '1000-5000',value: 267}, {name: '5000-10000',value: 40}, {name: '10000以上',value: 59}]},
					{myData: [{name: '1-50',value: 219}, {name: '50-150',value: 495}, {name: '150-500',value: 350}, {name: '500-1000',value: 73}, {name: '1000-5000',value: 68}, {name: '5000-10000',value: 63}, {name: '10000以上',value: 17}]},
					{ChartX: ["1", "2", "3", "4", "5", "6"], ChartY: [5, 20, 36, 10, 10, 20].reverse()},
				],
				ChartList2: [
					{myData: [{name: '创业公司',value: 67}, {name: '非营利组织',value: 17}, {name: '合资',value: 171}, {name: '民营公司',value: 5250}, {name: '上市公司',value: 922}, {name: '国企',value: 766}, {name: '事业单位',value: 182}, {name: '外资外企',value: 153}, {name: '政府机关',value: 9}]},
					{myData: [{name: '民营公司',value: 1018}, {name: '非营利组织',value: 2}, {name: '上市公司',value: 211}, {name: '国企',value: 190}, {name: '合资',value: 32}, {name: '外资(欧美)',value: 29}, {name: '外资(非欧美)',value: 16}, {name: '事业单位',value: 15}, {name: '创业公司',value: 14}]},
					{myData: [{name: '创业公司',value: 12}, {name: '非营利组织',value: 2}, {name: '民营公司',value: 996}, {name: '合资',value: 34}, {name: '上市公司',value: 117}, {name: '事业单位',value: 12}, {name: '国企',value: 71}, {name: '外资(非欧美)',value: 14}, {name: '外资(欧美)',value: 44}]},
					{ChartX: ["深圳", "2", "3", "4", "5", "6"], ChartY: [5, 20, 36, 10, 10, 20].reverse()},
				],
				ChartList3: [
					{ChartX: ['1-50', '50-150', '150-500', '500-1000', '1000-5000', '5000-10000', '10000以上'], myData: [9.25, 10.86, 11.05, 12.32, 13.25, 14.67, 18.34]},
					{ChartX: ['1-50', '50-150', '150-500', '500-1000', '1000-5000', '5000-10000', '10000以上'], myData: [9.25, 10.86, 11.05, 12.32, 13.25, 14.67, 18.34]},
					{ChartX: ['1-50', '50-150', '150-500', '500-1000', '1000-5000', '5000-10000', '10000以上'],myData: [9.25, 10.86, 11.05, 12.32, 13.25, 14.67, 18.34]},
					{ChartX: ["1", "2", "3", "4", "5", "6"],ChartY: [5, 20, 36, 10, 10, 20].reverse()},
				],
				ChartList4: [
					{ChartX: ['创业公司', '非营利组织', '合资', '民营公司', '上市公司', '国企', '事业单位', '外资外企', '政府机关'],myData: [9.71, 11.19, 12.13, 11.1, 12.1, 12.57, 12.21, 15.05, 23.03]},
					{ChartX: ['创业公司', '非营利组织', '合资', '民营公司', '上市公司', '国企', '事业单位', '外资外企', '政府机关'],myData: [9.71, 11.19, 12.13, 11.1, 12.1, 12.57, 12.21, 15.05, 23.03]},
					{ChartX: ['创业公司', '非营利组织', '合资', '民营公司', '上市公司', '国企', '事业单位', '外资外企', '政府机关'],myData: [9.25, 10.86, 11.05, 12.32, 13.25, 14.67, 18.34]},
					{ChartX: ["1", "2", "3", "4", "5", "6"],ChartY: [9.71, 11.19, 12.13, 11.1, 12.1, 12.57, 12.21, 15.05, 23.03].reverse()},
				],
				ChartList5: [
					{
						myData: [
							{"name": "上海数慧系统技术有限公司","value": 296}, {"name": "武大吉奥信息技术有限公司","value": 202}, {"name": "北京超图软件股份有限公司","value": 188}, {"name": "广东南方数码科技股份有限公司","value": 184}, {"name": "广州城市信息研究所有限公司","value": 147}, {"name": "广州都市圈网络科技有限公司","value": 147}, {"name": "广东国地规划科技股份有限公司","value": 140}, {"name": "武汉中地数码科技有限公司","value": 134}, {"name": "武汉光谷信息技术股份有限公司","value": 133}, {"name": "南京国图信息产业有限公司","value": 122}, {"name": "北京中农信达信息技术有限公司","value": 113}, 
							{"name": "立得空间信息技术股份有限公司","value": 109}, {"name": "湖北金拓维信息技术有限公司","value": 106}, {"name": "广州中海达卫星导航技术股份有限公司","value": 102}, {"name": "上海飞未信息技术有限公司","value": 98}, {"name": "特力惠信息科技股份有限公司","value": 90}, {"name": "广东瑞图万方科技股份有限公司","value": 87}, {"name": "武汉地大信息工程股份有限公司","value": 81}, {"name": "北京吉威时代软件股份有限公司","value": 77}, {"name": "上海蓝色星球科技股份有限公司","value": 72}, {"name": "北京数字政通科技股份有限公司","value": 63}, {"name": "湖南山和勘测设计有限公司","value": 62}, 
							{"name": "北京广图软件科技有限公司","value": 60}, {"name": "北京数字政通科技股份有限公司武汉分公司","value": 58}, {"name": "深圳震有科技股份有限公司","value": 57}, {"name": "广东绘宇智能勘测科技有限公司","value": 57}, {"name": "江苏方寸图信息技术有限公司","value": 57}, {"name": "武汉微晶石科技股份有限公司","value": 56}, {"name": "北京星球时空科技有限公司","value": 54}, {"name": "武汉大势智慧科技有限公司","value": 53}, {"name": "武汉智博创享科技股份有限公司","value": 53}, {"name": "航天精一(广东)信息科技有限公司","value": 53}, {"name": "武汉光庭信息技术股份有限公司","value": 53}, 
							{"name": "广州奥格智能科技有限公司","value": 52}, {"name": "中讯志远(武汉)科技有限公司","value": 50}, {"name": "江苏中天吉奥信息技术股份有限公司","value": 49}, {"name": "凯普奇软件(北京)有限公司","value": 48}, {"name": "广州南方卫星导航仪器有限公司","value": 48}, {"name": "四川鱼鳞图信息技术股份有限公司","value": 47}, {"name": "浙江涵普电力科技有限公司","value": 46}, {"name": "广州南方智能技术有限公司","value": 46}, {"name": "苍穹数码技术股份有限公司武汉技术中心","value": 46}, {"name": "浙江臻善科技股份有限公司","value": 44}, {"name": "湖北永业行评估咨询有限公司","value": 43},
							{"name": "武汉慧擎科技有限公司","value": 42}, {"name": "北京合众思壮科技股份有限公司","value": 41}, {"name": "人瑞人才科技集团有限公司","value": 41}, {"name": "浙江臻善科技股份有限公司广东分公司","value": 39}, {"name": "武汉众智鸿图科技有限公司","value": 39}, {"name": "福建省招标采购集团有限公司","value": 38}, {"name": "北京易伟航科技有限公司","value": 37}, {"name": "苏州中科天启遥感科技有限公司","value": 36}, {"name": "广州市阿尔法软件信息技术有限公司","value": 35}, {"name": "湖北地信科技集团股份有限公司","value": 35}, {"name": "武汉珞珈德毅科技股份有限公司","value": 34},
							{"name": "陕西自然资源勘测规划设计院股份有限公司","value": 34}, {"name": "广东旭普空间信息技术产业发展有限公司","value": 33}, {"name": "上海思源高压开关有限公司","value": 33}, {"name": "正泰电气股份有限公司","value": 33}, {"name": "深圳市规划国土房产信息中心(深圳市空间地理信息中心)","value": 33}, {"name": "昆山数字城市信息技术有限公司","value": 33}, {"name": "中煤航测遥感集团有限公司","value": 33}, {"name": "上海翰鸟智能科技有限公司","value": 32}, {"name": "广东置信勘测规划信息工程有限公司","value": 32}, {"name": "上海三高计算机中心股份有限公司","value": 32},
							{"name": "武汉中仪物联技术股份有限公司","value": 32}, {"name": "杭州今奥信息科技股份有限公司","value": 31}, {"name": "上海瀚世信息技术有限公司","value": 31}, {"name": "北京晶众智慧交通科技股份有限公司","value": 30}, {"name": "成都国星宇航科技有限公司","value": 30}, {"name": "广东长天思源环保科技股份有限公司","value": 30}, {"name": "深圳市城市规划设计研究院有限公司","value": 30}, {"name": "长沙谱蓝网络科技有限公司","value": 30}, {"name": "深圳优立全息科技有限公司","value": 29}, {"name": "广东海启星海洋科技有限公司","value": 29}, {"name": "广东省珠江发展规划院","value": 29},
							{"name": "上海华测导航技术股份有限公司","value": 29}, {"name": "浙江中测新图地理信息技术有限公司","value": 29}, {"name": "北京瞭望神州科技有限公司","value": 29}, {"name": "苏州城方信息技术有限公司","value": 29}, {"name": "深圳市都市交通规划设计研究院有限公司","value": 28}, {"name": "四川金土地实业有限公司","value": 28}, {"name": "武汉中科智杰软件工程有限公司","value": 28}, {"name": "广州长地空间信息技术有限公司","value": 27}, {"name": "杭州领图信息科技有限公司","value": 27}, {"name": "江苏苏信房地产评估咨询有限公司","value": 27}, {"name": "浙江益壤环保科技有限公司","value": 27},
							{"name": "上海杰狮信息技术有限公司","value": 26}, {"name": "深圳奥雅设计股份有限公司","value": 26}, {"name": "浙江中海达空间信息技术有限公司","value": 26}, {"name": "南京众集思信息技术有限公司","value": 26}, {"name": "北京飞渡科技有限公司","value": 26}, {"name": "北京煜邦电力技术股份有限公司","value": 25}, {"name": "顺丰科技有限公司","value": 25}, {"name": "杭州经纬信息技术股份有限公司","value": 25}, {"name": "昆明安泰得软件股份有限公司","value": 25}, {"name": "上海寅客网络科技有限公司","value": 25}, {"name": "南京亚派科技股份有限公司","value": 25}, 
							{"name": "苏州云联智慧信息技术应用有限公司","value": 25}, {"name": "苍穹数码技术股份有限公司西安研究院","value": 25}, {"name": "方正国际软件(北京)有限公司","value": 24}, {"name": "四川格锐乾图科技有限公司","value": 24}, {"name": "昆明市土地开发整理中心","value": 24}, {"name": "广州市坤盛信息科技有限公司","value": 24}, {"name": "广州草木蕃环境科技有限公司","value": 24}, {"name": "北京腾信软创科技股份有限公司","value": 24}, {"name": "武汉天际航信息科技股份有限公司","value": 24}, {"name": "武汉天恒信息技术有限公司","value": 24}, {"name": "湖南优图信息技术有限公司","value": 24},
							{"name": "北京思拓海洋信息技术有限公司","value": 23}, {"name": "中电通途(北京)科技有限公司","value": 23}, {"name": "中国铁道科学研究院电子计算技术研究所","value": 23}, {"name": "广联达","value": 23}, {"name": "浙江和达科技股份有限公司","value": 23}, {"name": "杭州零重空间技术有限公司","value": 23}, {"name": "合肥泽众城市智能科技有限公司","value": 23}, {"name": "湖南星图空间信息技术有限公司","value": 23}, {"name": "深圳市宝能投资集团有限公司","value": 22}, {"name": "苍穹数码技术股份有限公司北京技术中心","value": 22}, {"name": "苏州中科图新网络科技有限公司","value": 22},
							{"name": "广州中科雅图信息技术有限公司","value": 22}, {"name": "广州升龙投资有限公司","value": 22}, {"name": "思源电气股份有限公司","value": 22}, {"name": "上海地信信息技术有限公司","value": 22}, {"name": "深圳市凯立德科技股份有限公司","value": 22}, {"name": "武汉科信云图信息技术有限公司","value": 22}, {"name": "武汉垒图信息科技有限公司","value": 22}, {"name": "湖南地理空间大数据产业发展有限公司","value": 22}, {"name": "济南迅捷万通科技发展有限公司","value": 21}, {"name": "北京久其软件股份有限公司","value": 21}, {"name": "南京大学城市规划设计研究院有限公司深圳分公司","value": 21}, 
							{"name": "长沙市中智信息技术开发有限公司","value": 21}, {"name": "武汉航天远景科技股份有限公司","value": 20}, {"name": "中电太极(集团)有限公司","value": 20}, {"name": "四川旭普信息产业发展有限公司","value": 20}, {"name": "广东邦鑫数据科技股份有限公司","value": 20}, {"name": "广东卓越土地房地产评估咨询有限公司","value": 20}, {"name": "康德曼(北京)互联网技术有限公司","value": 20}, {"name": "南京市测绘勘察研究院股份有限公司","value": 20}, {"name": "苏州工业园区测绘地理信息有限公司","value": 20}, {"name": "西安西北电器开关有限公司","value": 20},
							{"name": "北京国遥新天地信息技术有限公司","value": 19}, {"name": "北京威特空间科技有限公司","value": 19}, {"name": "北京龙软科技股份有限公司","value": 19}, {"name": "沈阳韩邦软件开发有限公司","value": 19}, {"name": "凯通科技股份有限公司","value": 19}, {"name": "福建康辰科技有限公司","value": 19}, {"name": "广州宝立科技有限公司","value": 19}, {"name": "广州优飞信息科技有限公司","value": 19}, {"name": "广州市城市更新规划研究院","value": 19}, {"name": "速度时空信息科技股份有限公司","value": 19}, {"name": "乐山市城乡规划设计院","value": 19},
							{"name": "上海同岩土木工程科技股份有限公司","value": 19}, {"name": "苏州智在云数据科技有限公司","value": 19}, {"name": "武汉环宇智行科技有限公司","value": 19}, {"name": "武汉市规划设计有限公司规创传媒分公司","value": 19}, {"name": "襄阳翠鸟视图科技有限公司","value": 19}, {"name": "长沙金图信息技术有限公司","value": 19}, {"name": "重庆深能信息技术有限公司","value": 19}, {"name": "重庆宝图科技发展有限公司","value": 19}, {"name": "中科宇图科技股份有限公司","value": 18}, {"name": "北京创时空科技发展有限公司","value": 18}, {"name": "广州市现代城市更新产业发展中心","value": 18},
							{"name": "广州兴地土地规划咨询有限公司","value": 18}, {"name": "广东龙泉科技有限公司","value": 18}, {"name": "深圳市志行正科技有限公司","value": 18}, {"name": "山东金田勘察设计有限公司","value": 18}, {"name": "沈阳金建数字城市软件有限公司","value": 18}, {"name": "新智道枢(上海)科技有限公司","value": 18}, {"name": "深圳高速工程顾问有限公司","value": 18}, {"name": "智汇城设计咨询集团有限公司","value": 18}, {"name": "陕西华地勘察设计咨询有限公司","value": 18}, {"name": "西安中遥信息技术有限公司","value": 18}, {"name": "辽宁烽火台科技有限公司","value": 17}, 
							{"name": "白云电气集团有限公司","value": 17}, {"name": "广州思拓力测绘科技有限公司","value": 17}, {"name": "广州仓实信息科技有限公司","value": 17}, {"name": "上海元卓信息科技有限公司","value": 17}, {"name": "湖北金拓维信息技术有限公司长沙分公司","value": 17}, {"name": "深圳国研建筑科技有限公司","value": 17}, {"name": "武汉蚁图时空科技有限公司","value": 17}, {"name": "长沙市规划信息服务中心","value": 17}, {"name": "长沙市海图科技有限公司","value": 17}, {"name": "珠海欧比特宇航科技股份有限公司","value": 17}, {"name": "北京冠华英才国际经济技术有限公司","value": 16},
							{"name": "长威信息科技发展股份有限公司","value": 16}, {"name": "北京辰安科技股份有限公司","value": 16}, {"name": "北京四维图新科技股份有限公司","value": 16}, {"name": "聚米画沙(北京)科技有限公司","value": 16}, {"name": "北京慕亚管理技术有限公司","value": 16}, {"name": "武汉珈和科技有限公司","value": 16}, {"name": "北京集展科技有限公司","value": 16}, {"name": "中农同辰空间信息技术有限公司","value": 16}, {"name": "上海熊猫机械(集团)有限公司成都分公司","value": 16}, {"name": "海云数据(广州)科技有限公司","value": 16}, {"name": "杭州泰珏科技有限公司","value": 16}, 
							{"name": "山东安能信息技术有限公司","value": 16}, {"name": "云南诺钦科技有限公司","value": 16}, {"name": "广东南方数码科技股份有限公司南京分公司","value": 16}, {"name": "维坤智能科技(上海)有限公司","value": 16},
						]
					},
					{
						myData: [
							{"name": "北京超图软件股份有限公司","value": 56}, {"name": "北京星球时空科技有限公司","value": 54}, {"name": "北京广图软件科技有限公司","value": 46}, {"name": "北京中农信达信息技术有限公司","value": 41}, {"name": "北京易伟航科技有限公司","value": 36}, {"name": "北京思拓海洋信息技术有限公司","value": 23}, {"name": "中国铁道科学研究院电子计算技术研究所","value": 23}, {"name": "苍穹数码技术股份有限公司北京技术中心","value": 22}, {"name": "北京吉威时代软件股份有限公司","value": 21}, {"name": "深圳市宝能投资集团有限公司","value": 20}, {"name": "广州城市信息研究所有限公司","value": 20},
							{"name": "上海翰鸟智能科技有限公司","value": 18}, {"name": "广联达","value": 17}, {"name": "北京冠华英才国际经济技术有限公司","value": 16}, {"name": "聚米画沙(北京)科技有限公司","value": 16}, {"name": "上海数慧系统技术有限公司","value": 15}, {"name": "北京煜邦电力技术股份有限公司","value": 14}, {"name": "北京辰安科技股份有限公司","value": 14}, {"name": "深圳市都市交通规划设计研究院有限公司","value": 13}, {"name": "方正国际软件(北京)有限公司","value": 13}, {"name": "北京旋极伏羲大数据技术有限公司","value": 13}, {"name": "北京国遥新天地信息技术有限公司","value": 12},
							{"name": "北京惠友旺科技有限公司","value": 12}, {"name": "中国恩菲工程技术有限公司","value": 12}, {"name": "北京集展科技有限公司","value": 12}, {"name": "北京中天博地科技有限公司","value": 11}, {"name": "北京晶众智慧交通科技股份有限公司","value": 11}, {"name": "北京国泰星云科技有限公司","value": 11}, {"name": "北京中遥智图科技有限公司","value": 11}, {"name": "北京九鼎图业科技有限公司","value": 11}, {"name": "字节跳动","value": 10}, {"name": "中电通途(北京)科技有限公司","value": 10}, {"name": "北京国翼恒达导航科技有限公司","value": 10}, {"name": "中设数字技术股份有限公司","value": 10}, 
							{"name": "北京欧比特控制工程研究院有限公司","value": 10}, {"name": "北京中油瑞飞信息技术有限责任公司","value": 9}, {"name": "武汉航天远景科技股份有限公司","value": 9}, {"name": "北京东方国信科技股份有限公司","value": 9}, {"name": "北京汉克时代科技有限公司","value": 9}, {"name": "成都国星宇航科技有限公司","value": 9}, {"name": "北京四维图新科技股份有限公司","value": 9}, {"name": "北京易华录信息技术股份有限公司","value": 9}, {"name": "ABB电网投资(中国)有限公司","value": 8}, {"name": "北京智环成科技发展有限公司","value": 8}, {"name": "北京久其软件股份有限公司","value": 8},
							{"name": "北京地林伟业科技股份有限公司","value": 8}, {"name": "北京林丰源生态环境规划设计院有限公司","value": 8}, {"name": "苏州中科图新网络科技有限公司","value": 8}, {"name": "北京华云星地通科技有限公司","value": 8}, {"name": "富盛科技股份有限公司","value": 7}, {"name": "中科宇图科技股份有限公司","value": 7}, {"name": "北京外企人力资源服务有限公司","value": 7}, {"name": "华风爱科气象科技(北京)有限公司","value": 7}, {"name": "文思海辉技术有限公司Pactera Technology International Limited","value": 7}, {"name": "凯普奇软件(北京)有限公司","value": 7}, {"name": "北京博阳世通信息技术有限公司","value": 7},
							{"name": "北京达美盛软件股份有限公司","value": 7}, {"name": "北京空间维特科技发展有限公司","value": 7}, {"name": "林之源(北京)林业工程咨询有限公司","value": 6}, {"name": "四川鱼鳞图信息技术股份有限公司","value": 6}, {"name": "北京陆衡科技有限公司","value": 6}, {"name": "武汉大势智慧科技有限公司","value": 6}, {"name": "北京华泽云防科技有限公司","value": 6}, {"name": "中国信息通信研究院","value": 6}, {"name": "北京创时空科技发展有限公司","value": 6}, {"name": "北京龙软科技股份有限公司","value": 6}, {"name": "北京数字政通科技股份有限公司","value": 6}, {"name": "北京慕亚管理技术有限公司","value": 6},
							{"name": "立得空间信息技术股份有限公司","value": 6}, {"name": "首安工业消防有限公司","value": 6}, {"name": "北京中电华创电力设备有限公司","value": 6}, {"name": "广州南方卫星导航仪器有限公司","value": 6}, {"name": "北京飞渡科技有限公司","value": 6}, {"name": "北京时代凌宇科技股份有限公司","value": 5}, {"name": "理想汽车","value": 5}, {"name": "北京新航城智慧生态技术研究院有限责任公司","value": 5}, {"name": "北京盛德信联科技有限公司","value": 5}, {"name": "北京华宇泰聚科技有限公司","value": 5}, {"name": "瞰景科技发展(上海)有限公司","value": 5}, {"name": "扬州万方电子技术有限责任公司","value": 5},
							{"name": "北京东来牧远咨询有限公司","value": 5}, {"name": "特力惠信息科技股份有限公司","value": 5}, {"name": "北京锐宇博图科技有限公司","value": 5}, {"name": "北京无界大观文化旅游规划设计发展有限公司","value": 5}, {"name": "广州奥格智能科技有限公司","value": 5}, {"name": "江苏润和软件股份有限公司","value": 5}, {"name": "北京金浩林勘探技术有限公司","value": 5}, {"name": "北京纵目安驰智能科技有限公司","value": 4}, {"name": "北京天恒昕业科技发展有限公司","value": 4}, {"name": "太极计算机股份有限公司","value": 4}, {"name": "荣联科技集团股份有限公司","value": 4},
							{"name": "北京易通宏达科技股份有限公司","value": 4}, {"name": "北京三六九数动科技有限公司","value": 4}, {"name": "北京京城捷信房地产评估有限公司","value": 4}, {"name": "中讯志远(武汉)科技有限公司","value": 4}, {"name": "北京威特空间科技有限公司","value": 4}, {"name": "广州南方测绘科技股份有限公司","value": 4}, {"name": "中邮信息科技(北京)有限公司","value": 4}, {"name": "航天四创科技有限责任公司","value": 4}
						]
					},
					{
						myData: [
							{"name": "上海飞未信息技术有限公司","value": 85}, {"name": "上海数慧系统技术有限公司","value": 77}, {"name": "上海蓝色星球科技股份有限公司","value": 39}, {"name": "正泰电气股份有限公司","value": 33}, {"name": "上海瀚世信息技术有限公司","value": 31}, {"name": "上海地信信息技术有限公司","value": 22}, {"name": "上海同岩土木工程科技股份有限公司","value": 19}, {"name": "上海寅客网络科技有限公司","value": 18}, {"name": "上海杰狮信息技术有限公司","value": 17}, {"name": "联合水务集团有限公司","value": 15}, {"name": "维坤智能科技(上海)有限公司","value": 14},
							{"name": "彼孚(上海)信息科技有限公司","value": 14}, {"name": "上海翰鸟智能科技有限公司","value": 14}, {"name": "上海三高计算机中心股份有限公司","value": 14}, {"name": "上海网波软件股份有限公司","value": 14}, {"name": "上海飞羽环保科技有限公司","value": 14}, {"name": "上海地听信息科技有限公司","value": 13}, {"name": "上海元易勘测设计有限公司","value": 12}, {"name": "上海华测导航技术股份有限公司","value": 12}, {"name": "上海赛图计算机科技股份有限公司","value": 12}, {"name": "上海思源高压开关有限公司","value": 12}, {"name": "上海孪数科技有限公司","value": 11}, 
							{"name": "上海联适导航技术有限公司","value": 11}, {"name": "人瑞人才科技集团有限公司","value": 11}, {"name": "思源电气股份有限公司","value": 11}, {"name": "上海城市房地产估价有限公司","value": 11}, {"name": "上海元卓信息科技有限公司","value": 11}, {"name": "上海新网程信息技术股份有限公司","value": 10}, {"name": "上海达华测绘有限公司","value": 10}, {"name": "上海积成慧集信息技术有限公司","value": 10}, {"name": "上海宝山规划设计研究院有限公司","value": 9}, {"name": "上海彩虹鱼海洋科技股份有限公司","value": 9}, {"name": "上海有为信息技术有限公司","value": 9}, 
							{"name": "上海勘测设计研究院有限公司","value": 8}, {"name": "上海吾创信息科技有限公司","value": 8}, {"name": "深圳市志行正科技有限公司","value": 8}, {"name": "上海安维尔信息科技股份有限公司","value": 8}, {"name": "上海熊猫机械(集团)有限公司","value": 8}, {"name": "宇寰环保科技(上海)有限公司","value": 8}, {"name": "亚施德邦建筑设计咨询(上海)有限公司","value": 8}, {"name": "华贤投资控股有限公司","value": 8}, {"name": "上海图聚智能科技股份有限公司","value": 7}, {"name": "上海图趣信息科技有限公司(Wayz.ai)","value": 7}, {"name": "上海威派格智慧水务股份有限公司","value": 7}, 
							{"name": "上海杰图天下网络科技有限公司","value": 7}, {"name": "上海鸿翼软件技术股份有限公司","value": 7}, {"name": "上海同测规划设计勘测有限公司","value": 7}, {"name": "上海易图数码测绘信息有限公司","value": 7}, {"name": "广联达","value": 6}, {"name": "江苏普旭软件信息技术有限公司","value": 6}, {"name": "上海刀奇智能科技有限公司","value": 6}, {"name": "浙江和达科技股份有限公司","value": 6}, {"name": "上海诺狮景观规划设计有限公司","value": 6}, {"name": "象无形(上海)信息科技有限公司","value": 6}, {"name": "北京长地万方科技有限公司","value": 6}, {"name": "上海凯泉泵业(集团)有限公司","value": 6}, 
							{"name": "上海几何伙伴智能驾驶有限公司","value": 6}, {"name": "上海兰桂骐技术发展股份有限公司","value": 6}, {"name": "上海江图信息科技有限公司","value": 6}, {"name": "上海知掘教育科技有限公司","value": 6}, {"name": "上海公用事业自动化工程有限公司","value": 6}, {"name": "深圳优立全息科技有限公司","value": 5}, {"name": "坤郡科技(上海)有限公司","value": 5}, {"name": "北京晶众智慧交通科技股份有限公司","value": 5}, {"name": "上海圣尧智能科技有限公司","value": 5}, {"name": "华建数创(上海)科技有限公司","value": 5}, {"name": "上海普适导航科技股份有限公司","value": 5}, {"name": "上海枢汇智能科技股份有限公司","value": 5}, 
							{"name": "上海司南卫星导航技术股份有限公司","value": 5}, {"name": "上海南康科技有限公司","value": 5}, {"name": "上海聚数信息科技有限公司","value": 5}, {"name": "上海佩凌信息科技有限公司","value": 5}, {"name": "上海如鼎信息科技有限公司","value": 5}, {"name": "上海盛世锦天网络科技有限公司","value": 4}, {"name": "新智道枢(上海)科技有限公司","value": 4}, {"name": "湖北亿咖通科技有限公司","value": 4}, {"name": "上海利正卫星应用技术有限公司","value": 4}, {"name": "上海索辰信息科技股份有限公司","value": 4}, {"name": "同济大学","value": 4}, {"name": "上海环钻环保科技股份有限公司","value": 4}, 
							{"name": "东方希望集团有限公司","value": 4}, {"name": "上海山南勘测设计有限公司","value": 4}, {"name": "上海昱章电气成套设备有限公司","value": 4}, {"name": "上海同豪土木工程咨询有限公司","value": 4}, {"name": "上海拓锦信息技术有限公司","value": 4}, {"name": "上海开图信息科技发展有限公司","value": 4}, {"name": "上海市信息技术研究中心","value": 4}, {"name": "上海普勒斯道路交通技术有限公司","value": 4}, {"name": "苍穹数码技术股份有限公司上海办事处","value": 4}, {"name": "上海城建信息科技有限公司","value": 4}, {"name": "上海新节检测技术有限公司","value": 4}, {"name": "上海展景信息技术有限公司","value": 4}, 
							{"name": "上海永天科技股份有限公司","value": 4}, {"name": "上海跃天电子科技有限公司","value": 4}, {"name": "深圳奥雅设计股份有限公司","value": 4}, {"name": "上海海积信息科技股份有限公司","value": 4}, {"name": "上海世脉信息科技有限公司","value": 4}, {"name": "上海锐测电子科技有限公司","value": 4}, {"name": "艾伏新能源科技(上海)股份有限公司","value": 4}, {"name": "上海宏信建设发展有限公司","value": 3}
						]
					},
					{
						myData: [
							{"name": "上海永天科技股份有限公司","value": 4}, {"name": "上海跃天电子科技有限公司","value": 4}, {"name": "深圳奥雅设计股份有限公司","value": 4}, {"name": "上海海积信息科技股份有限公司","value": 4}, {"name": "上海世脉信息科技有限公司","value": 4}, {"name": "上海锐测电子科技有限公司","value": 4}, {"name": "艾伏新能源科技(上海)股份有限公司","value": 4}, {"name": "上海宏信建设发展有限公司","value": 3}
						].reverse()
					},
				],
				ChartList6: [
					{
						myData: [
							{"name": "广州天河区","value": 1390}, {"name": "北京海淀区","value": 749}, {"name": "武汉","value": 716}, {"name": "武汉洪山区","value": 609}, {"name": "成都武侯区","value": 557}, {"name": "武汉江夏区","value": 552},{"name": "深圳南山区","value": 465}, {"name": "北京朝阳区","value": 373}, {"name": "西安雁塔区","value": 350}, {"name": "上海浦东新区","value": 284}, {"name": "南京建邺区","value": 277}, {"name": "深圳福田区","value": 270},
							{"name": "上海徐汇区","value": 255}, {"name": "长沙岳麓区","value": 254}, {"name": "杭州西湖区","value": 232}, {"name": "广州黄埔区","value": 229}, {"name": "合肥蜀山区","value": 215}, {"name": "广州越秀区","value": 203},{"name": "武汉武昌区","value": 190}, {"name": "广州海珠区","value": 182}, {"name": "苏州吴中区","value": 180}, {"name": "广州番禺区","value": 170}, {"name": "南京浦口区","value": 170}, {"name": "南京雨花台区","value": 155},
							{"name": "上海闵行区","value": 155}, {"name": "济南历下区","value": 149}, {"name": "重庆渝北区","value": 145}, {"name": "长沙天心区","value": 143}, {"name": "福州鼓楼区","value": 138}, {"name": "上海杨浦区","value": 136},{"name": "北京丰台区","value": 118}, {"name": "杭州滨江区","value": 118}, {"name": "南京江宁区","value": 115}, {"name": "成都金牛区","value": 108}, {"name": "南京玄武区","value": 106}, {"name": "南京鼓楼区","value": 102},
							{"name": "南京秦淮区","value": 100}, {"name": "武汉江岸区","value": 100}, {"name": "苏州虎丘区","value": 99}, {"name": "上海静安区","value": 89}, {"name": "杭州余杭区","value": 88}, {"name": "昆明五华区","value": 86},{"name": "长沙芙蓉区","value": 82}, {"name": "珠海香洲区","value": 77}, {"name": "北京石景山区","value": 76}, {"name": "西安长安区","value": 76}, {"name": "广州白云区","value": 74}, {"name": "北京西城区","value": 72},
							{"name": "上海青浦区","value": 72}, {"name": "中山","value": 70}, {"name": "深圳宝安区","value": 69}, {"name": "兰州城关区","value": 67}, {"name": "上海长宁区","value": 67}, {"name": "湖州德清县","value": 63},{"name": "南京栖霞区","value": 63}, {"name": "深圳龙华区","value": 63}, {"name": "西安碑林区","value": 62}, {"name": "郑州金水区","value": 61}, {"name": "佛山南海区","value": 60}, {"name": "昆明盘龙区","value": 60},
							{"name": "长沙雨花区","value": 60}, {"name": "上海松江区","value": 58}, {"name": "宁波鄞州区","value": 55}, {"name": "深圳龙岗区","value": 53}, {"name": "沈阳浑南区","value": 53}, {"name": "重庆九龙坡区","value": 53},{"name": "深圳罗湖区","value": 49}, {"name": "杭州萧山区","value": 48}, {"name": "厦门思明区","value": 48}, {"name": "西安未央区","value": 48}, {"name": "上海普陀区","value": 47}, {"name": "杭州下城区","value": 46},
							{"name": "昆明西山区","value": 46}, {"name": "无锡北塘区","value": 45}, {"name": "无锡新吴区","value": 45}, {"name": "成都青羊区","value": 44}, {"name": "上海黄浦区","value": 44}, {"name": "苏州昆山市","value": 44},{"name": "海口龙华区","value": 41}, {"name": "南昌青山湖区","value": 41}, {"name": "成都成华区","value": 40}, {"name": "北京大兴区","value": 39}, {"name": "杭州拱墅区","value": 38}, {"name": "济南历城区","value": 38},
							{"name": "哈尔滨南岗区","value": 37}, {"name": "贵阳观山湖区","value": 34}, {"name": "南昌红谷滩区","value": 34}, {"name": "南宁青秀区","value": 33}, {"name": "上海嘉定区","value": 33}, {"name": "无锡滨湖区","value": 33},{"name": "武汉汉阳区","value": 33}, {"name": "郑州二七区","value": 33}, {"name": "郑州管城回族区","value": 33}, {"name": "北京昌平区","value": 32}, {"name": "福州闽侯县","value": 32}, {"name": "昆明官渡区","value": 32},{"name": "青岛城阳区","value": 32}, {"name": "成都锦江区","value": 31}, {"name": "绍兴越城区","value": 31}
						]
					},
					{myData: [{"name": "北京海淀区","value": 749}, {"name": "北京朝阳区","value": 373}, {"name": "北京丰台区","value": 118}, {"name": "北京石景山区","value": 76}, {"name": "北京西城区","value": 72}, {"name": "北京大兴区","value": 39}, {"name": "北京昌平区","value": 32}, {"name": "北京东城区","value": 29}, {"name": "北京顺义区","value": 15}, {"name": "北京门头沟区","value": 11}, {"name": "北京通州区","value": 10}, {"name": "北京密云区","value": 2}, {"name": "北京宣武区","value": 1}]},
					{myData: [{"name": "上海浦东新区","value": 284}, {"name": "上海徐汇区","value": 255}, {"name": "上海闵行区","value": 155}, {"name": "上海杨浦区","value": 136}, {"name": "上海静安区","value": 89}, {"name": "上海青浦区","value": 72}, {"name": "上海长宁区","value": 67}, {"name": "上海松江区","value": 58}, {"name": "上海普陀区","value": 47}, {"name": "上海黄浦区","value": 44}, {"name": "上海嘉定区","value": 33}, {"name": "上海宝山区","value": 28}, {"name": "上海虹口区","value": 28}, {"name": "上海奉贤区","value": 4}, {"name": "上海闸北区","value": 2}]},
					{
						myData: [{"name": "上海浦东新区","value": 284}, {"name": "上海徐汇区","value": 255}, {"name": "上海闵行区","value": 155}, {"name": "上海杨浦区","value": 136}, {"name": "上海静安区","value": 89}, {"name": "上海青浦区","value": 72}, {"name": "上海长宁区","value": 67}, {"name": "上海松江区","value": 58}, {"name": "上海普陀区","value": 47}, {"name": "上海黄浦区","value": 44}, {"name": "上海嘉定区","value": 33}, {"name": "上海宝山区","value": 28}, {"name": "上海虹口区","value": 28}, {"name": "上海奉贤区","value": 4}, {"name": "上海闸北区","value": 2}].reverse()
					},
				],
				ChartList7: [
					{
						myData: [
							{"name": "计算机软件","value": 6944}, {"name": "建筑/建材/工程","value": 1284}, {"name": "计算机服务(系统、数据服务、维修)","value": 961}, {"name": "计算机软件,计算机服务(系统、数据服务、维修)","value": 484}, {"name": "电子技术/半导体/集成电路","value": 450}, {"name": "专业服务(咨询、人力资源、财会)","value": 393}, {"name": "互联网/电子商务","value": 387}, {"name": "电气/电力/水利","value": 384}, {"name": "环保","value": 344}, {"name": "仪器仪表/工业自动化","value": 308}, {"name": "通信/电信/网络设备","value": 292},
							{"name": "多元化业务集团公司","value": 266}, {"name": "计算机软件计算机服务(系统、数据服务、维修)","value": 215}, {"name": "计算机软件,互联网/电子商务","value": 202}, {"name": "政府/公共事业","value": 196}, {"name": "房地产","value": 181}, {"name": "学术/科研","value": 154}, {"name": "航天/航空","value": 145}, {"name": "计算机服务(系统、数据服务、维修),计算机软件","value": 134}, {"name": "农/林/牧/渔","value": 132}, {"name": "机械/设备/重工","value": 126}, {"name": "计算机软件互联网/电子商务","value": 86}, 
							{"name": "通信/电信运营、增值服务","value": 81}, {"name": "计算机服务(系统、数据服务、维修)计算机软件","value": 81}, {"name": "石油/化工/矿产/地质","value": 65}, {"name": "交通/运输/物流","value": 65}, {"name": "计算机软件,建筑/建材/工程","value": 60}, {"name": "互联网/电子商务,计算机软件","value": 56}, {"name": "影视/媒体/艺术/文化传播","value": 54}, {"name": "计算机软件,电子技术/半导体/集成电路","value": 52}, {"name": "建筑/建材/工程,计算机软件","value": 51}, {"name": "计算机软件,政府/公共事业","value": 50}, 
							{"name": "计算机硬件","value": 43}, {"name": "计算机软件,电气/电力/水利","value": 41}, {"name": "检测，认证","value": 41}, {"name": "计算机软件,计算机硬件","value": 40}, {"name": "新能源","value": 40}, {"name": "汽车","value": 39}, {"name": "电子技术/半导体/集成电路仪器仪表/工业自动化","value": 35}, {"name": "政府/公共事业,建筑/建材/工程","value": 33}, {"name": "中介服务","value": 33}, {"name": "计算机软件计算机硬件","value": 30}, {"name": "建筑/建材/工程,专业服务(咨询、人力资源、财会)","value": 27}, {"name": "计算机软件建筑/建材/工程","value": 27}, 
							{"name": "电子技术/半导体/集成电路,计算机软件","value": 25}, {"name": "金融/投资/证券","value": 23}, {"name": "建筑/建材/工程,房地产","value": 21}, {"name": "教育/培训/院校","value": 20}, {"name": "广告互联网/电子商务","value": 20}, {"name": "通信/电信/网络设备,计算机软件","value": 19}, {"name": "计算机软件,通信/电信运营、增值服务","value": 19}, {"name": "建筑/建材/工程,计算机服务(系统、数据服务、维修)","value": 19}, {"name": "餐饮业","value": 18}, {"name": "政府/公共事业,计算机软件","value": 18}, {"name": "计算机软件,通信/电信/网络设备","value": 17},
							{"name": "酒店/旅游","value": 16}, {"name": "电子技术/半导体/集成电路,仪器仪表/工业自动化","value": 16}, {"name": "计算机服务(系统、数据服务、维修),通信/电信/网络设备","value": 16}, {"name": "计算机软件,环保","value": 15}, {"name": "计算机软件政府/公共事业","value": 15}, {"name": "农/林/牧/渔,建筑/建材/工程","value": 14}, {"name": "建筑/建材/工程,学术/科研","value": 14}, {"name": "计算机软件家居/室内设计/装潢","value": 14}, {"name": "电气/电力/水利,仪器仪表/工业自动化","value": 13}, {"name": "电气/电力/水利仪器仪表/工业自动化","value": 13}, {"name": "环保,计算机软件","value": 13}, 
							{"name": "仪器仪表/工业自动化计算机软件","value": 13}, {"name": "电气/电力/水利,新能源","value": 13}, {"name": "计算机软件,石油/化工/矿产/地质","value": 13}, {"name": "航天/航空,电子技术/半导体/集成电路","value": 13}, {"name": "互联网/电子商务计算机软件","value": 13}, {"name": "电气/电力/水利,机械/设备/重工","value": 13}, {"name": "电气/电力/水利,计算机软件","value": 13}, {"name": "家居/室内设计/装潢","value": 13}, {"name": "航天/航空,计算机软件","value": 13}, {"name": "建筑/建材/工程计算机软件","value": 12}, {"name": "通信/电信/网络设备,电子技术/半导体/集成电路","value": 12}, 
							{"name": "建筑/建材/工程多元化业务集团公司","value": 12}, {"name": "广告","value": 11}, {"name": "通信/电信/网络设备计算机软件","value": 11}, {"name": "环保计算机软件","value": 11}, {"name": "计算机服务(系统、数据服务、维修)建筑/建材/工程","value": 11}, {"name": "计算机软件电子技术/半导体/集成电路","value": 11}, {"name": "仪器仪表/工业自动化,计算机软件","value": 10}, {"name": "学术/科研,建筑/建材/工程","value": 10}, {"name": "计算机软件多元化业务集团公司","value": 10}, {"name": "计算机软件,多元化业务集团公司","value": 10}, {"name": "多元化业务集团公司,建筑/建材/工程","value": 10}, 
							{"name": "计算机服务(系统、数据服务、维修),电气/电力/水利","value": 10}, {"name": "互联网/电子商务,电子技术/半导体/集成电路","value": 10}, {"name": "建筑/建材/工程,电气/电力/水利","value": 10}, {"name": "石油/化工/矿产/地质,计算机服务(系统、数据服务、维修)","value": 10}, {"name": "通信/电信/网络设备,通信/电信运营、增值服务","value": 9}, {"name": "互联网/电子商务,计算机服务(系统、数据服务、维修)","value": 9}, {"name": "农/林/牧/渔,政府/公共事业","value": 9}, {"name": "非营利组织","value": 9}, {"name": "物业管理/商业中心","value": 9}, {"name": "环保,电气/电力/水利","value": 8}, {"name": "房地产,专业服务(咨询、人力资源、财会)","value": 8}, {"name": "检测，认证,环保","value": 8}
					 ]
					},
					{
						myData: [
							{"name": "计算机软件","value": 791}, {"name": "互联网/电子商务","value": 68}, {"name": "计算机软件,计算机服务(系统、数据服务、维修)","value": 67}, {"name": "建筑/建材/工程","value": 52}, {"name": "计算机服务(系统、数据服务、维修)","value": 51}, {"name": "专业服务(咨询、人力资源、财会)","value": 29}, {"name": "计算机软件,互联网/电子商务","value": 26}, {"name": "计算机软件计算机服务(系统、数据服务、维修)","value": 25}, {"name": "电气/电力/水利","value": 23}, {"name": "仪器仪表/工业自动化","value": 21}, {"name": "通信/电信/网络设备","value": 20}, {"name": "电子技术/半导体/集成电路","value": 20}, {"name": "航天/航空","value": 19}, {"name": "房地产","value": 18}, {"name": "石油/化工/矿产/地质","value": 17},
							{"name": "通信/电信运营、增值服务","value": 15}, {"name": "计算机软件互联网/电子商务","value": 14}, {"name": "交通/运输/物流","value": 13}, {"name": "计算机服务(系统、数据服务、维修),计算机软件","value": 12}, {"name": "汽车","value": 10}, {"name": "多元化业务集团公司","value": 10}, {"name": "互联网/电子商务,计算机软件","value": 9}, {"name": "农/林/牧/渔","value": 9}, {"name": "建筑/建材/工程,房地产","value": 8}, {"name": "计算机软件,电子技术/半导体/集成电路","value": 8}, {"name": "航天/航空,电子技术/半导体/集成电路","value": 8}, {"name": "机械/设备/重工","value": 6}, {"name": "环保","value": 6}, {"name": "专业服务(咨询、人力资源、财会)外包服务","value": 6}, {"name": "计算机服务(系统、数据服务、维修)计算机软件","value": 5}, 
							{"name": "学术/科研","value": 5}, {"name": "计算机硬件","value": 5}, {"name": "电气/电力/水利,仪器仪表/工业自动化","value": 4}, {"name": "电气/电力/水利仪器仪表/工业自动化","value": 4}, {"name": "计算机软件,机械/设备/重工","value": 4}, {"name": "计算机软件,计算机硬件","value": 4}, {"name": "多元化业务集团公司互联网/电子商务","value": 4}, {"name": "通信/电信运营、增值服务电子技术/半导体/集成电路","value": 4}, {"name": "建筑/建材/工程,计算机软件","value": 4}, {"name": "环保,仪器仪表/工业自动化","value": 3}, {"name": "计算机软件,建筑/建材/工程","value": 3}, {"name": "建筑/建材/工程,专业服务(咨询、人力资源、财会)","value": 3}, {"name": "房地产,专业服务(咨询、人力资源、财会)","value": 3}, {"name": "电子技术/半导体/集成电路仪器仪表/工业自动化","value": 3},
							{"name": "建筑/建材/工程计算机软件","value": 3}, {"name": "检测，认证","value": 3}, {"name": "计算机软件计算机硬件","value": 3}, {"name": "计算机软件,石油/化工/矿产/地质","value": 3}, {"name": "交通/运输/物流,计算机软件","value": 3}, {"name": "环保,计算机软件","value": 2}, {"name": "通信/电信/网络设备,电气/电力/水利","value": 2}, {"name": "计算机软件,学术/科研","value": 2}, {"name": "仪器仪表/工业自动化,计算机软件","value": 2}, {"name": "餐饮业","value": 2}, {"name": "计算机软件外包服务","value": 2}, {"name": "计算机软件仪器仪表/工业自动化","value": 2}, {"name": "通信/电信/网络设备,通信/电信运营、增值服务","value": 2}, {"name": "石油/化工/矿产/地质,建筑/建材/工程","value": 2}, {"name": "建筑/建材/工程制药/生物工程","value": 2}, {"name": "通信/电信/网络设备通信/电信运营、增值服务","value": 2},
							{"name": "教育/培训/院校","value": 2}, {"name": "计算机软件,银行","value": 2}, {"name": "新能源","value": 2}, {"name": "文字媒体/出版","value": 2}, {"name": "政府/公共事业","value": 2}, {"name": "石油/化工/矿产/地质,制药/生物工程","value": 1}, {"name": "计算机软件,政府/公共事业","value": 1}, {"name": "环保,电气/电力/水利","value": 1}, {"name": "环保,机械/设备/重工","value": 1}, {"name": "计算机服务(系统、数据服务、维修),电子技术/半导体/集成电路","value": 1}, {"name": "教育/培训/院校,计算机软件","value": 1}, {"name": "多元化业务集团公司,互联网/电子商务","value": 1}, {"name": "房地产,中介服务","value": 1}, {"name": "学术/科研,建筑/建材/工程","value": 1}, {"name": "仪器仪表/工业自动化计算机软件","value": 1}, {"name": "计算机软件多元化业务集团公司","value": 1}, 
							{"name": "互联网/电子商务计算机服务(系统、数据服务、维修)","value": 1}, {"name": "电气/电力/水利,新能源","value": 1}, {"name": "汽车学术/科研","value": 1}, {"name": "多元化业务集团公司建筑/建材/工程","value": 1}, {"name": "电子技术/半导体/集成电路,计算机硬件","value": 1}, {"name": "计算机服务(系统、数据服务、维修),计算机硬件","value": 1}, {"name": "计算机服务(系统、数据服务、维修),房地产","value": 1}, {"name": "互联网/电子商务通信/电信运营、增值服务","value": 1}, {"name": "专业服务(咨询、人力资源、财会)建筑/建材/工程","value": 1}, {"name": "计算机服务(系统、数据服务、维修)电子技术/半导体/集成电路","value": 1}, {"name": "计算机服务(系统、数据服务、维修),互联网/电子商务","value": 1}, {"name": "计算机软件,通信/电信/网络设备","value": 1}, 
							{"name": "互联网/电子商务,计算机服务(系统、数据服务、维修)","value": 1}, {"name": "仪器仪表/工业自动化,电子技术/半导体/集成电路","value": 1}, {"name": "电子技术/半导体/集成电路,计算机软件","value": 1}, {"name": "计算机软件,电气/电力/水利","value": 1}, {"name": "建筑/建材/工程,机械/设备/重工","value": 1}, {"name": "石油/化工/矿产/地质,互联网/电子商务","value": 1}, {"name": "环保,建筑/建材/工程","value": 1}, {"name": "环保建筑/建材/工程","value": 1}, {"name": "电子技术/半导体/集成电路计算机硬件","value": 1}, {"name": "建筑/建材/工程环保","value": 1}, {"name": "计算机服务(系统、数据服务、维修)互联网/电子商务","value": 1}, {"name": "教育/培训/院校计算机软件","value": 1}
						]
					},
					{
						myData: [
							{"name": "计算机软件","value": 444}, {"name": "建筑/建材/工程","value": 96}, {"name": "计算机服务(系统、数据服务、维修)","value": 55}, {"name": "环保","value": 54}, {"name": "互联网/电子商务","value": 53}, {"name": "仪器仪表/工业自动化","value": 47}, {"name": "电气/电力/水利","value": 46}, {"name": "计算机软件,计算机服务(系统、数据服务、维修)","value": 41}, {"name": "电子技术/半导体/集成电路","value": 40}, {"name": "计算机软件,政府/公共事业","value": 40}, {"name": "专业服务(咨询、人力资源、财会)","value": 29}, {"name": "机械/设备/重工","value": 20}, {"name": "计算机软件,建筑/建材/工程","value": 15}, {"name": "学术/科研","value": 14}, {"name": "计算机软件计算机服务(系统、数据服务、维修)","value": 13}, {"name": "多元化业务集团公司","value": 13}, {"name": "广告互联网/电子商务","value": 12},
							{"name": "计算机软件政府/公共事业","value": 12}, {"name": "通信/电信/网络设备","value": 12}, {"name": "计算机软件,电气/电力/水利","value": 11}, {"name": "计算机软件,互联网/电子商务","value": 10}, {"name": "航天/航空","value": 10}, {"name": "计算机软件互联网/电子商务","value": 10}, {"name": "通信/电信运营、增值服务","value": 10}, {"name": "汽车","value": 8}, {"name": "新能源","value": 7}, {"name": "金融/投资/证券","value": 7}, {"name": "电子技术/半导体/集成电路,仪器仪表/工业自动化","value": 6}, {"name": "农/林/牧/渔","value": 6}, {"name": "计算机服务(系统、数据服务、维修),计算机软件","value": 5}, {"name": "互联网/电子商务,计算机软件","value": 5}, {"name": "建筑/建材/工程,计算机软件","value": 5}, {"name": "电气/电力/水利,机械/设备/重工","value": 5}, {"name": "互联网/电子商务,广告","value": 4},
							{"name": "计算机软件建筑/建材/工程","value": 4}, {"name": "交通/运输/物流","value": 4}, {"name": "餐饮业","value": 4}, {"name": "互联网/电子商务,网络游戏","value": 3}, {"name": "电子技术/半导体/集成电路,通信/电信/网络设备","value": 3}, {"name": "电子技术/半导体/集成电路仪器仪表/工业自动化","value": 3}, {"name": "房地产,物业管理/商业中心","value": 3}, {"name": "航天/航空,计算机软件","value": 3}, {"name": "计算机软件仪器仪表/工业自动化","value": 3}, {"name": "快速消费品(食品、饮料、化妆品)","value": 3}, {"name": "仪器仪表/工业自动化,计算机服务(系统、数据服务、维修)","value": 3}, {"name": "酒店/旅游","value": 3}, {"name": "计算机服务(系统、数据服务、维修)计算机软件","value": 3}, {"name": "电子技术/半导体/集成电路,互联网/电子商务","value": 3}, {"name": "环保,计算机软件","value": 3}, 
							{"name": "环保计算机软件","value": 3}, {"name": "医疗/护理/卫生","value": 2}, {"name": "建筑/建材/工程环保","value": 2}, {"name": "计算机软件电气/电力/水利","value": 2}, {"name": "建筑/建材/工程广告","value": 2}, {"name": "影视/媒体/艺术/文化传播","value": 2}, {"name": "互联网/电子商务,计算机服务(系统、数据服务、维修)","value": 2}, {"name": "电气/电力/水利,建筑/建材/工程","value": 2}, {"name": "电子技术/半导体/集成电路,计算机软件","value": 2}, {"name": "互联网/电子商务,教育/培训/院校","value": 2}, {"name": "农/林/牧/渔,学术/科研","value": 2}, {"name": "通信/电信/网络设备,通信/电信运营、增值服务","value": 2}, {"name": "娱乐/休闲/体育","value": 2}, {"name": "计算机软件,环保","value": 2}, {"name": "环保,电气/电力/水利","value": 2}, {"name": "建筑/建材/工程计算机软件","value": 2}, 
							{"name": "检测，认证","value": 2}, {"name": "物业管理/商业中心","value": 2}, {"name": "贸易/进出口","value": 2}, {"name": "通信/电信运营、增值服务,通信/电信/网络设备","value": 2}, {"name": "建筑/建材/工程机械/设备/重工","value": 1}, {"name": "互联网/电子商务,餐饮业","value": 1}, {"name": "石油/化工/矿产/地质,建筑/建材/工程","value": 1}, {"name": "仪器仪表/工业自动化计算机软件","value": 1}, {"name": "汽车,计算机软件","value": 1}, {"name": "建筑/建材/工程互联网/电子商务","value": 1}, {"name": "互联网/电子商务,计算机硬件","value": 1}, {"name": "电气/电力/水利,多元化业务集团公司","value": 1}, {"name": "新能源,汽车","value": 1}, {"name": "影视/媒体/艺术/文化传播建筑/建材/工程","value": 1}, {"name": "建筑/建材/工程专业服务(咨询、人力资源、财会)","value": 1}, 
							{"name": "计算机服务(系统、数据服务、维修),互联网/电子商务","value": 1}, {"name": "通信/电信运营、增值服务航天/航空","value": 1}, {"name": "医疗设备/器械,专业服务(咨询、人力资源、财会)","value": 1}, {"name": "计算机软件,计算机硬件","value": 1}, {"name": "电气/电力/水利建筑/建材/工程","value": 1}, {"name": "互联网/电子商务,汽车","value": 1}, {"name": "医疗设备/器械,贸易/进出口","value": 1}, {"name": "互联网/电子商务计算机软件","value": 1}, {"name": "多元化业务集团公司农/林/牧/渔","value": 1}, {"name": "广告","value": 1}, {"name": "计算机软件,通信/电信运营、增值服务","value": 1}, {"name": "机械/设备/重工,计算机软件","value": 1}, {"name": "建筑/建材/工程,环保","value": 1}, {"name": "专业服务(咨询、人力资源、财会)非营利组织","value": 1}, {"name": "交通/运输/物流,计算机软件","value": 1}, 
							{"name": "家居/室内设计/装潢,公关/市场推广/会展","value": 1}, {"name": "建筑/建材/工程,石油/化工/矿产/地质","value": 1}, {"name": "通信/电信运营、增值服务计算机软件","value": 1}, {"name": "服装/纺织/皮革","value": 1}, {"name": "房地产","value": 1}
						]
					},
					{
						myData: [{
							value: [9.87, 10.59, 10.29, 10.01, 12.58, 14.43, 10.81, 13.53, 12.02, 12.26],
							name: '行业平均薪资(K/月)'
						}].reverse()
					},
				],
				ChartList8: [
					{
						myData: [
							{name: " 五险一金",value: 3285,}, {name: " 餐饮补贴",value: 2027}, {name: " 专业培训",value: 1780}, {name: " 年终奖金",value: 2524}, {name: " 13薪",value: 9}, {name: " 免费班车",value: 321}, {name: " 通讯补贴",value: 1249}, {name: " 绩效奖金",value: 2272}, {name: " 员工旅游",value: 1490}, {name: " 周末双休",value: 862}, {name: " 节日福利",value: 702}, {name: " 团建",value: 28}, {name: " 包住宿",value: 48}, {name: " 保险",value: 553}, {name: " 体检",value: 2012}, {name: " 生日礼金",value: 24}, {name: " 晋升平台",value: 14}, {name: " 六险一金",value: 41}, {name: " 法定节假日",value: 22},
							{name: " 解决户口",value: 7}, {name: " 高温补贴",value: 119}, {name: " 交通补贴",value: 1215}, {name: " 弹性工作",value: 787}, {name: " 股票期权",value: 266}, {name: " 带薪年假",value: 676}, {name: " 节日礼金",value: 21}, {name: " 项目提成",value: 20}, {name: " 电脑补助",value: 6}, {name: " 全勤奖",value: 110},{name: " 公积金",value: 172}, {name: " 工作餐",value: 5}, {name: " 做五休二",value: 100}, {name: " 带薪培训",value: 2}, {name: " 单双休",value: 4}, {name: " 餐补",value: 26}, {name: " 团队聚餐",value: 20}, {name: " 娱乐",value: 11}, {name: " 住房补贴",value: 51}
						]
					},
					{
						myData: [
							{name: " 五险一金",value: 3285,}, {name: " 餐饮补贴",value: 2027}, {name: " 专业培训",value: 1780}, {name: " 年终奖金",value: 2524}, {name: " 13薪",value: 9}, {name: " 免费班车",value: 321}, {name: " 通讯补贴",value: 1249}, {name: " 绩效奖金",value: 2272}, {name: " 员工旅游",value: 1490}, {name: " 周末双休",value: 862}, {name: " 节日福利",value: 702}, {name: " 团建",value: 28}, {name: " 包住宿",value: 48}, {name: " 保险",value: 553}, {name: " 体检",value: 2012}, {name: " 生日礼金",value: 24}, {name: " 解决户口",value: 7}, {name: " 高温补贴",value: 119}, {name: " 交通补贴",value: 1215}, {name: " 弹性工作",value: 787},
							{name: " 股票期权",value: 266}, {name: " 带薪年假",value: 676}, {name: " 节日礼金",value: 21}, {name: " 项目提成",value: 20}, {name: " 电脑补助",value: 6}, {name: " 全勤奖",value: 110}, {name: " 公积金",value: 172}, {name: " 工作餐",value: 5}, {name: " 做五休二",value: 100}, {name: " 带薪培训",value: 2}, {name: " 单双休",value: 4}, {name: " 餐补",value: 26}, {name: " 团队聚餐",value: 20}, {name: " 娱乐",value: 11}, {name: " 住房补贴",value: 51}, {name: " 晋升平台",value: 14}, {name: " 六险一金",value: 41}, {name: " 法定节假日",value: 22}
						]
					},
					{
						myData: [
							{name: " 五险一金",value: 3285,}, {name: " 餐饮补贴",value: 2027}, {name: " 专业培训",value: 1780}, {name: " 年终奖金",value: 2524}, {name: " 13薪",value: 9}, {name: " 免费班车",value: 321}, {name: " 通讯补贴",value: 1249}, {name: " 绩效奖金",value: 2272}, {name: " 员工旅游",value: 1490}, {name: " 周末双休",value: 862}, {name: " 节日福利",value: 702}, {name: " 团建",value: 28}, {name: " 包住宿",value: 48}, {name: " 保险",value: 553}, {name: " 体检",value: 2012}, {name: " 生日礼金",value: 24}, {name: " 解决户口",value: 7}, {name: " 高温补贴",value: 119}, {name: " 交通补贴",value: 1215}, {name: " 弹性工作",value: 787}, 
							{name: " 股票期权",value: 266}, {name: " 带薪年假",value: 676}, {name: " 节日礼金",value: 21}, {name: " 项目提成",value: 20}, {name: " 电脑补助",value: 6}, {name: " 全勤奖",value: 110}, {name: " 公积金",value: 172}, {name: " 工作餐",value: 5}, {name: " 做五休二",value: 100}, {name: " 带薪培训",value: 2}, {name: " 单双休",value: 4}, {name: " 餐补",value: 26}, {name: " 团队聚餐",value: 20}, {name: " 娱乐",value: 11}, {name: " 住房补贴",value: 51}, {name: " 晋升平台",value: 14}, {name: " 六险一金",value: 41}, {name: " 法定节假日",value: 22}
						]
					},
					{
						myData: [
							{name: " 股票期权",value: 266}, {name: " 带薪年假",value: 676}, {name: " 节日礼金",value: 21}, {name: " 项目提成",value: 20}, {name: " 电脑补助",value: 6}, {name: " 全勤奖",value: 110}, {name: " 公积金",value: 172}, {name: " 工作餐",value: 5}, {name: " 做五休二",value: 100}, {name: " 带薪培训",value: 2}, {name: " 单双休",value: 4}, {name: " 餐补",value: 26}, {name: " 团队聚餐",value: 20}, {name: " 娱乐",value: 11}, {name: " 住房补贴",value: 51}, {name: " 晋升平台",value: 14}, {name: " 六险一金",value: 41}, {name: " 法定节假日",value: 22}
						].reverse()
					},
				]
			}
		},
		mounted() {
			this.initEChart1();this.initEChart2();this.initEChart3();this.initEChart4();
			this.initEChart5();this.initEChart6();this.initEChart7();this.initEChart8();
		},
		methods: {
			initEChart1: function() {
				var myChart = echarts.init(document.getElementById('Chart1'));
				var option = {
					color: ['#37a2da', '#ff6106', '#88e681', '#ffff00', '#ff9f7f', '#fb4d72', '#bb99c5','#5449ea'],
					tooltip: {trigger: 'item',formatter: "{a} <br/>{b} : {c} ({d}%)"},
					legend: {
						type: "scroll",orient: 'vertical',left: '8%',align: 'left',
						height: 180,top: 'middle',textStyle: {color: '#8C8C8C'},
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
					color: ['#3789b5', '#59ffff', '#98e68c', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3','#8378ea'],
					tooltip: {trigger: 'item',formatter: "{a} <br/>{b} : {c} ({d}%)"},
					legend: {
						type: "scroll",orient: 'vertical',left: '8%',align: 'left',
						top: 'middle',textStyle: {color: '#8C8C8C'},height: 182
					},
					series: [{
						name: '公司类型',type: 'pie',
						radius: [0, 110],center: ["51%", "57%"],
						data: this.ChartList2[this.model].myData
					}]
				};
				myChart2.setOption(option2);
			},

			initEChart3: function() {
				var myChart3 = echarts.init(document.getElementById('Chart3'));
				var xName = ['1-50', '50-150', '150-500', '500-1000', '1000-5000', '5000-10000', '10000以上']
				var option3 = {
					tooltip: {formatter: '{b}:{c}K/月'},
					grid: {right: '3%',left: '5%',bottom: '14%',top: '6%'},
					xAxis: {type: 'category',data: this.ChartList3[this.model].ChartX},
					yAxis: {type: 'value'},
					series: [{
						data: this.ChartList3[this.model].myData,
						type: 'line',
						areaStyle: {color: '#1E90FF'},
						symbol: 'circle',symbolSize: 15,
						itemStyle: {color: "#1465b0",},
					}]
				};
				myChart3.setOption(option3);
			},

			initEChart4: function() {
				var myChart4 = echarts.init(document.getElementById('Chart4'));
				var option4 = {
					tooltip: {formatter: '{b}:{c}K/月'},
					grid: {right: '3%',left: '5%',bottom: '14%',top: '6%'},
					xAxis: {type: 'category',data: this.ChartList4[this.model].ChartX},
					yAxis: {type: 'value'},
					series: [{
						data: this.ChartList4[this.model].myData,
						type: 'bar',
						itemStyle: {normal: {color: '#1E90FF',}},
					}]
				};
				myChart4.setOption(option4);
			},
			
			initEChart5: function() {
				var myChart5 = echarts.init(document.getElementById('Chart5'));
				var option5 = {
					tooltip: {show: true},
					series: [{
						name: '公司名称',type: 'wordCloud',sizeRange: [10, 66],rotationRange: [-45, 90],
						textPadding: 0,autoSize: {enable: true,minSize: 10},
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
						data: this.ChartList5[this.model].myData
					}]
				};
				myChart5.setOption(option5);
			},

			initEChart6: function() {
				var myChart6 = echarts.init(document.getElementById('Chart6'));
				var option6 = {
					tooltip: {show: true},
					series: [{
						name: '工作地区',type: 'wordCloud',sizeRange: [10, 66],rotationRange: [-45, 90],
						textPadding: 0,autoSize: {enable: true,minSize: 10},
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
						data: this.ChartList6[this.model].myData
					}]
				};
				myChart6.setOption(option6);
			},

			initEChart7: function() {
				var myChart7 = echarts.init(document.getElementById('Chart7'));
				var option7 = {
					tooltip: {show: true},
					series: [{
						name: '热门行业',type: 'wordCloud',sizeRange: [10, 66],rotationRange: [-45, 90],
						textPadding: 0,autoSize: {enable: true,minSize: 10},
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
						data: this.ChartList7[this.model].myData
					}]
				};
				myChart7.setOption(option7);
			},

			initEChart8: function() {
				var myChart8 = echarts.init(document.getElementById('Chart8'));
				var option8 = {
					tooltip: {show: true},
					series: [{
						name: '工作地区',type: 'wordCloud',sizeRange: [10, 66],rotationRange: [-45, 90],
						textPadding: 0,autoSize: {enable: true,minSize: 10},
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
						data: this.ChartList8[this.model].myData
					}]
				};
				myChart8.setOption(option8);
			},
		}
	}
</script>

<style scoped="scoped">
	#main {width: 100%;height: 100%;}
	p {color: #424242;font-weight: 600;font-size: 18px;}
	.slelectInput {position: absolute;text-align: center;width: 120px;top: 20px;right: 20px;float: right;border-color: rgba(0, 0, 0, 0.5);}
	#rythemMap {width: 100%;height: 100%;}
</style>
