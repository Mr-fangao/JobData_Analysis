<template>
	<div id="main" style="height: 698px;">
		<Row style="width: 97.8%;float: right; height: 698px;">
			<Col span="25">
			<!-- 图表1 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0.2% 0.1% 0.1% 0.1%;">
				<p style="text-align: center;">热门职位词云展示</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart1()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart1" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表2 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0.2% 0.1% 0.1% 0;">
				<p style="text-align: center;">职位名称-热门技能词云</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart2()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart2" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表3 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0.1%;">
				<p style="text-align: center;">职位名称Top10</p>
				<Select class="slelectInput" v-model="model" @on-change="initEChart3()" placeholder="全国">
					<Option v-for="item in cityList[1]" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				<div id="Chart3" style="position: relative;width: 100%;height: 285px;bottom: 0px;"></div>
			</Card>

			<!-- 图表4 -->
			<Card
				style="border-width: 1px; border-color: rgba(0,0,0,0.2);border-radius: 8px;width: 49.85%;float: left;margin:0 0.1% 0.1% 0;">
				<p style="text-align: center;">关键技能Top10</p>
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
					[{value: '0',label: '全国'}, {value: '1',label: '华北地区'}, {value: '2',label: '华东地区'}, {value: '3',label: '东北地区'}, ],[{value: '0',label: '全国'}, {value: '1',label: '北京'}, {value: '2',label: '上海'}, {value: '3',label: '广州'}, ],
					[{value: '0',label: '北京'}, {value: '1',label: '上海'}, {value: '2',label: '广州'}, {value: '3',label: '深圳'}]
				],
				model: 0,
				ChartList: [{
						myData: [
							{"name": "GIS开发工程师","value": 1115}, {"name": "Web前端开发工程师","value": 356}, {"name": "Java开发工程师","value": 307}, {"name": "前端开发工程师","value": 234}, {"name": "项目经理","value": 214}, {"name": "webgis开发工程师","value": 188}, {"name": "销售经理","value": 170}, {"name": "技术支持工程师","value": 125}, {"name": "售前工程师","value": 122}, {"name": "C++开发工程师","value": 121}, {"name": "产品经理","value": 120}, {"name": "数据处理工程师","value": 120}, {"name": "GIS数据处理工程师","value": 116}, {"name": "实施工程师","value": 110}, {"name": ".NET开发工程师","value": 103}, {"name": "测绘工程师","value": 101}, {"name": "软件工程师","value": 99}, {"name": "Gis数据工程师","value": 95}, 
							{"name": "三维GIS开发工程师","value": 95}, {"name": "软件开发工程师","value": 92}, {"name": "gis研发工程师","value": 89}, {"name": "Android开发工程师","value": 83}, {"name": "GIS工程师","value": 79}, {"name": "规划设计师","value": 78}, {"name": "Java高级开发工程师","value": 77}, {"name": "软件实施工程师","value": 70}, {"name": "区域销售经理","value": 65}, {"name": "WebGL开发工程师","value": 62}, {"name": "GIS软件开发工程师","value": 56}, {"name": "售前技术支持工程师","value": 52}, {"name": "测量员","value": 45}, {"name": "GIS软件工程师","value": 44}, {"name": "项目实施工程师","value": 43}, {"name": "高级GIS开发工程师","value": 42}, {"name": "解决方案工程师","value": 41}, {"name": "数据工程师","value": 39}, 
							{"name": "gis实施工程师","value": 38}, {"name": "GIS高级开发工程师","value": 36}, {"name": "Web开发工程师","value": 34}, {"name": "国土空间规划师","value": 34}, {"name": "GIS项目经理","value": 33}, {"name": "GIS数据处理","value": 33}, {"name": "C++高级开发工程师","value": 32}, {"name": "JAVA软件工程师","value": 32}, {"name": "大数据开发工程师","value": 31}, {"name": "WebGIS工程师","value": 31}, 
							{"name": "测绘技术员","value": 30}, {"name": "销售总监","value": 30}, {"name": "软件测试工程师","value": 29}, {"name": "C#开发工程师","value": 28}, {"name": "高级前端开发工程师","value": 27}, {"name": "数据处理员","value": 27}, {"name": "土地规划师","value": 26}, 
							{"name": "GIS前端开发工程师","value": 25}, {"name": "算法工程师","value": 23}, {"name": "运维工程师","value": 23}, {"name": "城乡规划师","value": 23}, {"name": "测绘项目经理","value": 23}, {"name": "项目经理(GIS)","value": 23}, {"name": "IOS开发工程师","value": 23}, {"name": "Web前端工程师","value": 22}, {"name": "三维开发工程师","value": 22}, {"name": "测试工程师","value": 22}, {"name": "给排水工程师","value": 22}, {"name": "WebGIS开发","value": 22}, {"name": "产品经理(GIS方向)","value": 21}, {"name": "技术支持","value": 21}, {"name": "WebGIS研发工程师","value": 20}, {"name": "软件销售经理","value": 20}, {"name": "测绘内业","value": 20}, {"name": "技术总监","value": 20}, {"name": "三维研发工程师","value": 19}, 
							{"name": "系统架构师","value": 19}, {"name": "项目助理","value": 19}, {"name": "java软件开发工程师","value": 19}, {"name": "高级软件工程师","value": 18}, {"name": "Java中级开发工程师","value": 18}, {"name": "gis数据处理员","value": 18}, {"name": "省区销售总监","value": 18}, {"name": "研发经理","value": 18}, {"name": "高级销售经理","value": 18}, {"name": "规划设计经理","value": 18}, {"name": "高级项目经理","value": 18}, {"name": "BIM工程师","value": 18}, {"name": "后端开发工程师","value": 17}, {"name": "销售工程师","value": 17}, {"name": "售前方案工程师","value": 17}, {"name": "地理信息工程师","value": 17}, {"name": "无人机飞手","value": 17}, {"name": "数据项目经理","value": 17}, {"name": "城市规划师","value": 17}, 
							{"name": "GIS项目实施工程师","value": 17}, {"name": "WebGIS前端开发工程师","value": 16}, {"name": "土壤修复工程师","value": 16}, {"name": "三维建模师","value": 16}, {"name": "高级JAVA开发工程师","value": 16}, {"name": "cesium开发工程师","value": 16}, {"name": "互联网产品经理","value": 15}, {"name": "销售经理(政府方向)","value": 15}, {"name": "三维GIS研发工程师","value": 15}
						]
					},
					{
						myData: [
							{"name": "GIS开发工程师","value": 111}, {"name": "web前端开发工程师","value": 42}, {"name": "Java开发工程师","value": 42}, {"name": "C++开发工程师","value": 19}, {"name": "前端开发工程师","value": 15}, {"name": "技术支持工程师","value": 14}, {"name": "GIS工程师","value": 14}, {"name": "售前工程师","value": 14}, {"name": "webgis开发工程师","value": 13}, {"name": "三维GIS开发工程师","value": 11}, {"name": "gis数据工程师","value": 10}, {"name": "Java高级开发工程师","value": 10}, {"name": "数据处理工程师","value": 10}, {"name": "软件工程师","value": 9}, {"name": "gis研发工程师","value": 9}, {"name": "项目经理","value": 8}, {"name": "运维开发工程师","value": 8}, {"name": "GIS数据处理工程师","value": 7}, 
							{"name": "销售经理","value": 7}, {"name": "Java中级开发工程师","value": 7}, {"name": "WebGIS前端开发工程师","value": 6}, {"name": "产品经理","value": 6}, {"name": "林业助理工程师","value": 6}, {"name": "销售代表","value": 6}, {"name": "GIS项目经理","value": 6}, {"name": "土壤修复工程师","value": 6}, {"name": "软件开发工程师—应届硕士北京落户","value": 6}, {"name": "电力销售精英","value": 6}, {"name": "数据可视化高级工程师","value": 5}, {"name": "C++高级开发工程师","value": 5}, {"name": "区域销售经理","value": 5}, {"name": "系统开发工程师","value": 5}, {"name": "Web前端工程师","value": 5}, {"name": "java高级软件工程师","value": 5}, {"name": "中级Java软件工程师","value": 5}, {"name": "GIS销售代表","value": 5}, 
							{"name": "三维GIS渲染引擎开发工程师","value": 5}, {"name": "销售助理","value": 5}, {"name": "GIS销售工程师","value": 5}, {"name": "工程地质,环境地质高级工程师","value": 5}, {"name": "高级前端开发工程师","value": 5}, {"name": "Web开发工程师","value": 5}, {"name": "数据工程师","value": 5}, {"name": "市场商务","value": 5}, {"name": "三维GIS研发工程师","value": 5}, {"name": "C++算法工程师","value": 5}, {"name": "售前技术支持工程师","value": 5}, {"name": "FESCO代央企招聘风资源评估岗","value": 5}, {"name": "规划设计师","value": 5}, {"name": "软件研发工程师-海洋测绘保障","value": 5}, {"name": "OpenGL开发工程师","value": 4}, {"name": "C++软件工程师","value": 4}, {"name": "IoT产品经理-企业应用","value": 4}, 
							{"name": "gis技术支持(国防方向)","value": 4}, {"name": "Customer Support Engineer / Specialist(74152470)","value": 4}, {"name": "PTG-GIS大客户销售","value": 4}, {"name": "测绘工程师","value": 4}, {"name": "地图开发工程师","value": 4}, {"name": "三维GIS高级开发工程师","value": 4}, {"name": "地信(GIS)工程师","value": 4}, {"name": "售前支持工程师(安防行业)","value": 4}, {"name": "java中高级开发工程师","value": 4}, {"name": "研发项目经理(交通信息化)","value": 4}, {"name": "GIS软件工程师","value": 4}, {"name": "GIS高级研发工程师","value": 4}, {"name": "互联网产品经理","value": 4}, {"name": "WebGL开发工程师","value": 4}, {"name": "景观园林设计师","value": 4}, {"name": "图形引擎高级开发工程师/专家 (MJ001817)","value": 4}, 
							{"name": ".Net高级程序员","value": 4}, {"name": "售前支持经理","value": 4}, {"name": "行业销售经理","value": 4}, {"name": "运维工程师","value": 4}, {"name": "水影响评价设计师","value": 4}, {"name": "项目交付经理","value": 4}, {"name": "智慧楼宇产品经理-企业应用","value": 4}, {"name": "项目实施工程师","value": 4}, {"name": "项目运维经理","value": 4}, {"name": "软件工程实施","value": 4}, {"name": "三维gis引擎高级研发工程师","value": 4}, {"name": "1.项目经理(GIS方向)","value": 4}, {"name": "前端工程师","value": 4}, {"name": "服务端开发工程师","value": 4}, {"name": ".NET开发工程师","value": 4}, {"name": "高级售前工程师","value": 4}, {"name": "WEB前端可视化工程师","value": 4}, {"name": "CIM / 3D GIS 产品经理","value": 4}, 
							{"name": "CIM项目经理","value": 4}, {"name": "技术支持(GIS)","value": 4}, {"name": "数据处理","value": 4}, {"name": "图形技术专家 (MJ004747)","value": 4}, {"name": "省区总监","value": 4}, {"name": "PTG-GIS技术总监","value": 3}, {"name": "WebGIS引擎开发工程师","value": 3}, {"name": "GIS产品经理(三维GIS)","value": 3}, {"name": "PTG-GIS技术支持工程师","value": 3}, {"name": "软件开发工程师","value": 3}, {"name": "技术支持工程师-008","value": 3}, {"name": "项目经理(智慧-北京kk)","value": 3}, {"name": "国际技术支持工程师","value": 3},
						]
					},
					{
						myData: [
							{"name": "GIS开发工程师","value": 65}, {"name": "Web前端开发工程师","value": 34}, {"name": "项目经理","value": 26}, {"name": "前端开发工程师","value": 25}, {"name": "GIS数据工程师","value": 22}, {"name": "WebGis开发工程师","value": 15}, {"name": "Java开发工程师","value": 13}, {"name": "软件工程师","value": 13}, {"name": "数据处理工程师","value": 13}, {"name": "水利/水电工程师","value": 12}, {"name": ".NET开发工程师","value": 12}, {"name": "Web开发工程师","value": 10}, {"name": "给排水工程师","value": 10}, {"name": "产品经理","value": 9}, {"name": "GIS项目实施工程师","value": 9}, {"name": "测绘工程师","value": 9}, {"name": "GIS数据处理工程师","value": 8}, {"name": "大数据开发工程师","value": 8}, {"name": "三维WEBGIS开发工程师","value": 7}, 
							{"name": "算法工程师","value": 7}, {"name": "GIS软件开发工程师","value": 7}, {"name": "智慧水务GIS工程师","value": 6}, {"name": "规划设计师","value": 6}, {"name": "土地规划师","value": 6}, {"name": "数据分析师","value": 6}, {"name": "三维开发工程师","value": 6}, {"name": "GIS 大数据平台研发工程师","value": 6}, {"name": "Java软件开发工程师","value": 6}, {"name": "三维GIS开发经理","value": 6}, {"name": "C++开发工程师(J10581)","value": 6}, {"name": "销售经理","value": 5}, {"name": "估价业务部实习生","value": 5}, {"name": "产品经理(GIS方向)","value": 5}, {"name": "软件开发工程师","value": 5}, {"name": "产品测试工程师","value": 5}, {"name": ".NET开发工程师 ","value": 5}, {"name": "GIS软件销售工程师","value": 5}, {"name": "二三维地图开发","value": 5}, 
							{"name": "WEBGIS前端工程师","value": 5}, {"name": "GIS售前技术支持工程师","value": 5}, {"name": "GIS高级售前技术支持工程师","value": 5}, {"name": "环境工程师","value": 5}, {"name": "实施工程师","value": 5}, {"name": "生态设计工程师","value": 4}, {"name": "GIS软件工程师","value": 4}, {"name": "给排水数学模型工程师","value": 4}, {"name": "三维研发工程师","value": 4}, {"name": "前端GIS开发","value": 4}, {"name": "测量员","value": 4}, {"name": "WebGL开发工程师","value": 4}, {"name": "高级售前技术支持工程师","value": 4}, {"name": "销售经理(软件)","value": 4}, {"name": "产品经理 (MJ002081)","value": 4}, {"name": "GIS研发工程师","value": 4}, {"name": "GIS高级开发工程师","value": 4}, {"name": "土壤调查工程师","value": 4}, {"name": "环境影响评价技术人员","value": 4}, 
							{"name": "GIS数据分析师","value": 4}, {"name": "大客户销售经理/项目型政府销售","value": 4}, {"name": "场地调查管培生","value": 4}, {"name": "生产计划专员","value": 4}, {"name": "软件产品经理","value": 4}, {"name": "主创设计师","value": 4}, {"name": "WebGIS研发工程师","value": 4}, {"name": "数据采集工程师","value": 4}, {"name": "Java中级开发工程师","value": 4}, {"name": "GIS开发工程师 ","value": 4}, {"name": "项目需求分析/系统实施/系统配置工程师","value": 4}, {"name": "实施工程师 ","value": 4}, {"name": "环保咨询工程师","value": 4}, {"name": "售前总监","value": 4}, {"name": "研发总监","value": 4}, {"name": "销售副总监","value": 4}, {"name": "资深架构师","value": 4}, {"name": "3D数据工程师","value": 4}, {"name": "充气柜研发工程师(J10331)","value": 4}, {"name": "售前主管","value": 4}, 
							{"name": "技术美工 Technical Artist","value": 4}, {"name": "OSG三维软件研发工程师","value": 4}, {"name": "GIS中高级开发工程师","value": 4}, {"name": "专业模型工程师(中级)","value": 4}, {"name": "数据工程师","value": 4}, {"name": "BIM设计师","value": 4}, {"name": "方案架构师/智慧城市售前经理","value": 4}, {"name": "AM - 电力维护","value": 4}, {"name": "web图形开发工程师","value": 4}, {"name": "GIS开发经理","value": 3}, {"name": "GIS前端开发工程师","value": 3}, {"name": "城市规划师/规划师助理","value": 3}, {"name": "售前技术支持工程师","value": 3}, {"name": "项目工程师","value": 3}, {"name": "产品经理-嵌入式软件硬件方向","value": 3}, {"name": "解决方案经理","value": 3}, {"name": "渠道销售经理(BIM软件)","value": 3}, {"name": "net开发工程师(GIS)","value": 3}, {"name": "GIS分析师/分析师助理","value": 3}, 
							{"name": "大客户经理","value": 3}, {"name": "项目经理助理","value": 3}, {"name": "销售经理(中高级)-负责安徽、江苏市场区域","value": 3}, {"name": "数据应用分析工程师","value": 3}
						]
					},
					{
						ChartX: ["1", "2", "3", "4", "5", "6"],
						ChartY: [9.71, 11.19, 12.13, 11.1, 12.1, 12.57, 12.21, 15.05, 23.03].reverse()
					},
				],
				ChartList2: [
					{
						myData: [
							{name: '开发',value: 4103}, {name: 'GIS',value: 3654}, {name: '销售',value: 1076}, {name: '前端开发',value: 894}, {name: 'Java',value: 889}, {name: '软件',value: 772}, {name: '数据',value: 757}, {name: '研发',value: 696}, {name: '实施',value: 636}, {name: '数据处理',value: 615}, {name: '测绘',value: 612}, {name: 'Web',value: 562}, {name: '售前',value: 544}, {name: '技术支持',value: 512}, {name: '三维',value: 506}, {name: 'C',value: 500}, {name: '软件开发',value: 423}, {name: 'WebGIS',value: 404}, {name: '技术',value: 344}, {name: '3DGIS',value: 319}, {name: '规划',value: 287}, {name: '智慧',value: 279}, {name: 'NET',value: 270}, {name: '前端',value: 213}, {name: '地图',value: 182}, {name: '遥感',value: 177}, {name: '内业',value: 175}, {name: '区域',value: 160}, {name: 'Android',value: 151}, 
							{name: '算法',value: 151}, {name: '设计',value: 150}, {name: '土地',value: 140}, {name: '系统',value: 133}, {name: '运维',value: 132}, {name: 'BIM',value: 132}, {name: '国土',value: 128}, {name: '架构师',value: 126}, {name: '解决方案',value: 116}, {name: '测量',value: 113}, {name: '地理信息',value: 106}, {name: '人员',value: 104}, {name: '平台',value: 101}, {name: '环境',value: 100}, {name: 'web',value: 97}, {name: '后端',value: 90}, {name: '市场',value: 90}, {name: '咨询',value: 81}, {name: '电力',value: 81}, {name: '生态',value: 79}, {name: '规划设计',value: 76}, {name: 'WebGL',value: 76}, {name: '可视化',value: 75}, {name: '方案',value: 74}, {name: '客户经理',value: 74}, {name: '地理信息系统',value: 72}, {name: 'WEB',value: 68}, {name: '城市规划',value: 66}, {name: '工程',value: 64}, 
							{name: '调查',value: 63}, {name: '水务',value: 61}, {name: '空间',value: 61}, {name: '客户',value: 60}, {name: '水土保持',value: 59}, {name: '无人机',value: 58}, {name: '移动',value: 57}, {name: '土地规划',value: 57}, {name: '信息化',value: 57}, {name: '给排水',value: 57}, {name: '资源',value: 54}, {name: '建模',value: 54}, {name: '商务',value: 52}, {name: '实习',value: 51}, {name: '生产',value: 50}, {name: '测试',value: 50}, {name: '林业',value: 49}, {name: '模型',value: 49}, {name: '技术人员',value: 49}, {name: '顾问',value: 49}, {name: '武汉',value: 48}, {name: 'UE',value: 48}, {name: '航测',value: 47}, {name: '渠道',value: 45}, {name: '地信',value: 45}, {name: '环保',value: 44}, {name: '引擎',value: 44}, {name: 'QT',value: 44}, {name: 'UI',value: 43}, {name: '地理',value: 42}, {name: '服务',value: 42}, 
							{name: '图形',value: 42}, {name: '评估',value: 41}, {name: '售后',value: 40}, {name: '交通',value: 40}, {name: 'IT',value: 40}, {name: '管网',value: 40}, {name: '二次开发',value: 40}, {name: '整治',value: 39}, {name: 'Cesium',value: 39}, {name: '修复',value: 38}, {name: '后台',value: 36}, {name: '维护',value: 36}, {name: '管理',value: 35}, {name: '空间规划',value: 35}, {name: '水利',value: 35}, {name: 'ArcGIS',value: 34}
						]
					},
					{
						myData: [
							{"name": "开发","value": 426}, {"name": "GIS","value": 378}, {"name": "研发","value": 115}, {"name": "销售","value": 100}, {"name": "前端开发","value": 94}, {"name": "Java","value": 79}, {"name": "售前","value": 70}, {"name": "技术支持","value": 70}, {"name": "C++","value": 69}, {"name": "三维","value": 69}, {"name": "Web","value": 68}, {"name": "软件","value": 61}, {"name": "数据","value": 55}, {"name": "软件开发","value": 46}, {"name": "数据处理","value": 39}, {"name": "前端","value": 38}, {"name": "地图","value": 37}, {"name": "遥感","value": 32}, {"name": "智慧","value": 32}, {"name": "运维","value": 27}, {"name": "测绘","value": 26}, {"name": "WebGIS","value": 34}, {"name": "技术","value": 23}, {"name": "java","value": 23}, {"name": "JAVA","value": 19}, {"name": "助理","value": 18}, {"name": "算法","value": 18}, 
							{"name": "实施","value": 17}, {"name": "web","value": 17}, {"name": "可视化","value": 17}, {"name": "PTG","value": 15}, {"name": "系统","value": 15}, {"name": "规划","value": 15}, {"name": "BIM","value": 14}, {"name": "市场","value": 13}, {"name": "图形","value": 13}, {"name": "城市","value": 12}, {"name": "C#","value": 12}, {"name": "规划师","value": 11}, {"name": "WebGL","value": 10}, {"name": "3D","value": 10}, {"name": "应届生","value": 9}, {"name": "高精","value": 9}, {"name": "研究","value": 9}, {"name": "NET","value": 9}, {"name": "WEB","value": 9}, {"name": "土壤","value": 9}, {"name": "修复","value": 9}, {"name": "信息化","value": 8}, {"name": "QT","value": 8}, {"name": "CIM","value": 8}, {"name": "环保","value": 7}, {"name": "环境","value": 7}, {"name": "国防","value": 7}, {"name": "中高级","value": 7}, 
							{"name": "移动","value": 6}, {"name": "Engineer","value": 6}, {"name": "售后","value": 6}, {"name": "电力","value": 6}, {"name": "Support","value": 5}, {"name": "Specialist","value": 5}, {"name": "城市规划","value": 5}, {"name": "渲染","value": 5}, {"name": "地信","value": 5}, {"name": "工程地质","value": 5}, {"name": "地质","value": 5}, {"name": "测试","value": 5}, {"name": "FESCO","value": 5}, {"name": "海洋","value": 5}, {"name": "保障","value": 5}, {"name": "数据分析","value": 4}, {"name": "模型","value": 4}, {"name": "生态","value": 4}, {"name": "推广","value": 4}, {"name": "无人机","value": 4}, {"name": "软件产品","value": 4}, {"name": "应用软件","value": 4}, {"name": "咨询","value": 4}, {"name": "MFC","value": 4}, {"name": "互联网","value": 4}, {"name": "Net","value": 4}, {"name": "评价","value": 4}, {"name": "遥感技术","value": 4}, 
							{"name": "软件工程","value": 4}, {"name": "安卓","value": 4}, {"name": "服务端","value": 4}, {"name": "地理信息系统","value": 4}, {"name": "工技","value": 4}, {"name": "后端","value": 3}, {"name": "地质师","value": 3}, {"name": "Software","value": 3}, {"name": "Project","value": 3}, {"name": "分析","value": 3}, {"name": "石家庄","value": 3}, {"name": "方案设计","value": 3}, {"name": "管理","value": 3}, {"name": "网络","value": 3}, {"name": "解决方案","value": 3}, {"name": "CS1","value": 3}, {"name": "工具","value": 3}
						]
					},
					{
						myData: [
							{"name": "开发","value": 298}, {"name": "GIS","value": 271}, {"name": "销售","value": 85}, {"name": "前端开发","value": 85}, {"name": "数据","value": 84}, {"name": "软件","value": 73}, {"name": "售前","value": 57}, {"name": "产品","value": 57}, {"name": "Web","value": 50}, {"name": "三维","value": 47}, {"name": "研发","value": 44}, {"name": "Java","value": 38}, {"name": "数据处理","value": 35}, {"name": "地图","value": 34}, {"name": "技术支持","value": 32}, {"name": "软件开发","value": 29}, {"name": "实施","value": 27}, {"name": "助理","value": 24}, {"name": "智慧","value": 24}, {"name": "NET","value": 40}, {"name": "算法","value": 23}, {"name": "BIM","value": 22}, {"name": "WebGIS","value": 43}, {"name": "技术","value": 21}, {"name": "给排水","value": 20}, {"name": "前端","value": 18}, {"name": "规划","value": 18}, {"name": "测绘","value": 18}, 
							{"name": "C++","value": 16}, {"name": "平台","value": 15}, {"name": "渠道","value": 14}, {"name": "主管","value": 14}, {"name": "解决方案","value": 13}, {"name": "设计","value": 13}, {"name": "工程设计","value": 13}, {"name": "咨询","value": 12}, {"name": "水利","value": 12}, {"name": "水电","value": 12}, {"name": "区域","value": 12}, {"name": "后端","value": 11}, {"name": "水务","value": 11}, {"name": "遥感","value": 11}, {"name": "图形","value": 11}, {"name": "推广","value": 10}, {"name": "测试","value": 10}, {"name": "建模","value": 10}, {"name": "3D","value": 10}, {"name": "生态","value": 9}, {"name": "专业","value": 9}, {"name": "维护","value": 9}, {"name": "Android","value": 9}, {"name": "环境","value": 9}, {"name": "可视化","value": 8}, {"name": "系统","value": 8}, {"name": "C#","value": 8}, {"name": "代表","value": 8}, {"name": 15000,"value": 8}, 
							{"name": "双休","value": 8}, {"name": "客户经理","value": 8}, {"name": "应用","value": 8}, {"name": "建筑师","value": 8}, {"name": "顾问","value": 8}, {"name": "web","value": 8}, {"name": "海外","value": 8}, {"name": "J10581","value": 8}, {"name": "作业员","value": 8}, {"name": "开关","value": 8}, {"name": "AM","value": 8}, {"name": "电力","value": 8}, {"name": "测量员","value": 7}, {"name": "商家","value": 7}, {"name": "市场","value": 7}, {"name": "分析","value": 7}, {"name": "SJ","value": 7}, {"name": "模型","value": 7}, {"name": "网络","value": 6}, {"name": "业务","value": 6}, {"name": "IT","value": 6}, {"name": "环保","value": 6}, {"name": "调查","value": 6}, {"name": "评价","value": 6}, {"name": "计划","value": 6}, {"name": "点云","value": 6}, {"name": "土地规划","value": 6}, {"name": "服务","value": 6}, {"name": "监测","value": 6}, 
							{"name": "SLAM","value": 6}, {"name": "方案","value": 5}, {"name": "估价","value": 5}, {"name": "WebGL","value": 5}, {"name": "UI","value": 5}, {"name": "引擎","value": 5}, {"name": "管网","value": 5}, {"name": "全栈","value": 5}, {"name": "Engineer","value": 5}, {"name": "地信","value": 5}, {"name": "数学模型","value": 4}, {"name": "招投标","value": 4}, {"name": "管理","value": 4}, {"name": "土壤调查","value": 4}
						]
					},
					{
						ChartX: ["1", "2", "3", "4", "5", "6"],
						ChartY: [9.71, 11.19, 12.13, 11.1, 12.1, 12.57, 12.21, 15.05, 23.03].reverse()
					},
				],
				ChartList3: [
					{
						ChartX: ['GIS开发工程师', 'Web前端开发工程师', 'Java开发工程师', '前端开发工程师', '项目经理', 'webgis开发工程师', '销售经理','技术支持工程师', '售前工程师', 'C++开发工程师'],
						myData: [1115, 356, 307, 234, 214, 188, 170, 125, 122, 121]
					},
					{
						ChartX: ['1-50', '50-150', '150-500', '500-1000', '1000-5000', '5000-10000', '10000以上'],
						myData: [9.25, 10.86, 11.05, 12.32, 13.25, 14.67, 18.34]
					},
					{
						ChartX: ['1-50', '50-150', '150-500', '500-1000', '1000-5000', '5000-10000', '10000以上'],
						myData: [9.25, 10.86, 11.05, 12.32, 13.25, 14.67, 18.34]
					},
					{
						ChartX: ["1", "2", "3", "4", "5", "6"],
						ChartY: [5, 20, 36, 10, 10, 20].reverse()
					},
				],
				ChartList4: [
					{
						ChartX: ['开发', 'GIS', '销售', '前端开发', 'Java', '软件', '数据', '研发', '实施', '数据处理'],
						myData: [4103, 3654, 1076, 894, 889, 772, 757, 696, 636, 615]
					},
					{
						ChartX: ['创业公司', '非营利组织', '合资', '民营公司', '上市公司', '国企', '事业单位', '外资外企', '政府机关'],
						myData: [9.71, 11.19, 12.13, 11.1, 12.1, 12.57, 12.21, 15.05, 23.03]
					},
					{
						ChartX: ['创业公司', '非营利组织', '合资', '民营公司', '上市公司', '国企', '事业单位', '外资外企', '政府机关'],
						myData: [9.25, 10.86, 11.05, 12.32, 13.25, 14.67, 18.34]
					},
					{
						ChartX: ["1", "2", "3", "4", "5", "6"],
						ChartY: [9.71, 11.19, 12.13, 11.1, 12.1, 12.57, 12.21, 15.05, 23.03].reverse()
					},
				],
			}
		},

		mounted() {
			this.initEChart1();this.initEChart2();
			this.initEChart3();this.initEChart4();
		},
		methods: {
			initEChart1: function() {
				var myChart = echarts.init(document.getElementById('Chart1'));
				var option = {
					tooltip: {show: true},
					series: [{
						name: '热门职位',type: 'wordCloud',sizeRange: [10, 66],rotationRange: [-45, 90],textPadding: 0,autoSize: {enable: true,minSize: 10},
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
						data: this.ChartList[this.model].myData
					}]
				};
				myChart.setOption(option);
			},

			initEChart2: function() {
				var myChart2 = echarts.init(document.getElementById('Chart2'));
				var option2 = {
					tooltip: {show: true},
					series: [{
						name: '职位技能',type: 'wordCloud',sizeRange: [10, 66],rotationRange: [-45, 90],textPadding: 0,autoSize: {enable: true,minSize: 10},
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
						data: this.ChartList[this.model].myData
					}]
				};
				myChart2.setOption(option2);
			},

			initEChart3: function() {
				var myChart3 = echarts.init(document.getElementById('Chart3'));
				var option3 = {
					tooltip: {trigger: 'axis',formatter: '{b}：{c}个',show: true,axisPointer: {type: 'shadow',}},
					dataZoom: [
						{type: 'inside',start: 0,end: 75},{handleStyle: {color: "#ffffff",},height: 15,backgroundColor: 'rgba(0,0,0,0.5)',start: 0,end: 20,bottom: '1%'}
					],
					grid: {right: '3%',left: '7%',bottom: '14%',top: '6%',},
					legend: {},
					xAxis: [{type: 'category',data: this.ChartList3[this.model].ChartX,axisPointer: {type: 'shadow'}}],
					yAxis: [{type: 'value',}],
					series: [{name: '',type: 'bar',barWidth: 40,data: this.ChartList3[this.model].myData,}]
				};
				myChart3.setOption(option3);
			},

			initEChart4: function() {
				var myChart4 = echarts.init(document.getElementById('Chart4'));
				var option4 = {
					tooltip: {trigger: 'axis',formatter: '{b}：{c}个',show: true,axisPointer: {type: 'shadow',}},
					dataZoom: [
						{type: 'inside',start: 0,end: 75},{handleStyle: {color: "#ffffff",},height: 15,backgroundColor: 'rgba(0,0,0,0.5)',start: 0,end: 20,bottom: '1%'}
					],
					grid: {right: '3%',left: '7%',bottom: '14%',top: '6%',},
					legend: {},
					xAxis: [{type: 'category',data: this.ChartList4[this.model].ChartX,axisPointer: {type: 'shadow'}}],
					yAxis: [{type: 'value',}],
					series: [{name: '',type: 'bar',barWidth: 40,data: this.ChartList4[this.model].myData,}]
				};
				myChart4.setOption(option4);
			},
		}
	}
</script>

<style scoped="scoped">
	#main {width: 100%;height: 100%;}
	p {color: #424242;font-weight: 600;font-size: 18px;}
	.slelectInput {position: absolute;text-align: center;width: 120px;top: 20px;right: 20px;float: right;border-color: rgba(0, 0, 0, 0.5);}
</style>
