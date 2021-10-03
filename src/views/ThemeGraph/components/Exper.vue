<template>
  <div id="mapContent">
    <iframe id="rythemMap" src="./ThematicMaps/GraphExper.html" frameborder="0"></iframe>
		
		<div id="myChart" style="width: 400px;height: 560px;background-color: rgba(0,0,0,0.5);position: absolute;top: 25%;right: 1.5%;border-radius: 5px;">
			<div id="main" style="width: 100%;height:389px;"></div>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<span v-for="(option,index) in a" v-bind:key="(option,index)">
				<input type="checkbox" :checked="option.checked" class="chartRadio" name="chartRadio" style="width: 16px;height: 16px;cursor: pointer;"/>
				<label style="color: white;margin-right: 17px;font-size: 15px;">{{option.value}}</label>
			</span> <br>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<span v-for="(option,index) in b" v-bind:key="(option,index)">
				<input type="checkbox" :checked="option.checked" class="chartRadio" name="chartRadio" style="width: 16px;height: 16px;cursor: pointer;"/>
				<label style="color: white;margin-right: 17px;font-size: 15px;">{{option.value}}</label>
			</span> <br>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<span v-for="(option,index) in c" v-bind:key="(option,index)">
				<input type="checkbox" :checked="option.checked" class="chartRadio" name="chartRadio" style="width: 16px;height: 16px;cursor: pointer;"/>
				<label style="color: white;margin-right: 17px;font-size: 15px;">{{option.value}}</label>
			</span> <br>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<span v-for="(option,index) in d" v-bind:key="(option,index)">
				<input type="checkbox" :checked="option.checked" class="chartRadio" name="chartRadio" style="width: 16px;height: 16px;cursor: pointer;"/>
				<label style="color: white;margin-right: 17px;font-size: 15px;">{{option.value}}</label>
			</span>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<span v-for="(option,index) in e" v-bind:key="(option,index)">
				<input type="checkbox" :checked="option.checked" class="chartRadio" name="chartRadio" style="width: 16px;height: 16px;cursor: pointer;"/>
				<label style="color: white;margin-right: 17px;font-size: 15px;">{{option.value}}</label>
			</span> <br>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<span v-for="(option,index) in f" v-bind:key="(option,index)">
				<input type="checkbox" :checked="option.checked" class="chartRadio" name="chartRadio" style="width: 16px;height: 16px;cursor: pointer;"/>
				<label style="color: white;margin-right: 17px;font-size: 15px;">{{option.value}}</label>
			</span> <br>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<span v-for="(option,index) in g" v-bind:key="(option,index)">
				<input type="checkbox" :checked="option.checked" class="chartRadio" name="chartRadio" style="width: 16px;height: 16px;cursor: pointer;"/>
				<label style="color: white;margin-right: 17px;font-size: 15px;">{{option.value}}</label>
			</span> <br>
		</div>
  </div>
</template>
<script>
	import echarts from "echarts";
	import 'echarts/theme/macarons.js';
	import 'jquery/dist/jquery.min.js';
	export default{
		data(){
			return{
				a:[{ value:'北京',checked:true  },{ value:'上海',checked:true  },{ value:'广州',checked:true  },{ value:'深圳',checked:true  },{ value:'南京',checked:true },{ value:'重庆',checked:false }],
				b:[{ value:'苏州',checked:false },{ value:'杭州',checked:false },{ value:'成都',checked:false },{ value:'合肥',checked:false },{ value:'福州',checked:false },{ value:'长沙',checked:false }],
				c:[{ value:'西安',checked:false },{ value:'天津',checked:false },{ value:'青岛',checked:false },{ value:'芜湖',checked:false },{ value:'东莞',checked:false },{ value:'常州',checked:false }],
				d:[{ value:'滁州',checked:false },{ value:'武汉',checked:false },{ value:'扬州',checked:false },{ value:'厦门',checked:false },{ value:'珠海',checked:false },{ value:'江门',checked:false }],
				e:[{ value:'中山',checked:false },{ value:'嘉兴',checked:false },{ value:'宁波',checked:false },{ value:'南昌',checked:false },{ value:'佛山',checked:false },{ value:'南宁',checked:false }],
				f:[{ value:'昆明',checked:false },{ value:'沈阳',checked:false },{ value:'大连',checked:false },{ value:'烟台',checked:false },{ value:'贵阳',checked:false },{ value:'太原',checked:false }],
				g:[{ value:'兰州',checked:false },{ value:'汉中',checked:false },{ value:'银川',checked:false },{ value:'烟台',checked:false },{ value:'盐城',checked:false },{ value:'湖州',checked:false }],
				h:[{ value:'淮安',checked:false },{ value:'徐州',checked:false },{ value:'蚌埠',checked:false },{ value:'三明',checked:false },{ value:'惠州',checked:false },{ value:'汕头',checked:false }],
			}
		},
		mounted() {
			var myChart = echarts.init(document.getElementById('main'));
			
				// 指定图表的配置项和数据
				var option = {
					title:{
						text: '工作经验统计堆叠柱状图',
						left: 'center',
						top: 10,
						textStyle:{
							color:'#fff'
						}
					},
					tooltip: {
						trigger: 'axis',
						backgroundColor: '#000',
						axisPointer: {
							type: 'shadow',
							crossStyle: {
								color: '#999'
							}
						},
					},
					grid: { //边框
						x:50,
						x2: 10
						//y:50
						//height:350
					},
					legend: {
						data: ['北京', '上海', '广州', '深圳', '南京', '重庆'],
						orient: 'vertical',
						right: 0,
						top: 100,
						bottom: 20,
						show: false
						//selected:{'邮件营销':true,'联盟广告':false,'视频广告':true,'直接访问':true,'搜索引擎':true}
					},
			
					calculable: true,
					xAxis: [{
						type: 'category',
						boundaryGap: true,
						data: ['无需', '应届', '1年', '2年', '3-4年', '5-7年', '8-9年', '>=10年'],
						axisLine:{
							lineStyle:{
								color:'#ffffff',
								width:1,
							}
						},
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						}
					}],
					yAxis: [{
						type: 'value',
						splitLine: {
							show: false,
						},
						axisLine:{
							lineStyle:{
								color:'#ffffff',
								width:1,
							}
						},
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						}
					}],
					series: [{
							name: '北京',
							type: 'bar',
							stack: '总量',
							data: [73, 65, 307, 368, 594, 194, 19, 8],
							selected: false
						},
						{
							name: '上海',
							type: 'bar',
							stack: '总量',
							data: [85, 40, 292, 271, 448, 164, 25, 17],
						},
						{
							name: '广州',
							type: 'bar',
							stack: '总量',
							data: [131, 135, 425, 498, 607, 228, 25, 19],
						},
						{
							name: '深圳',
							type: 'bar',
							stack: '总量',
							data: [73, 21, 178, 201, 336, 136, 22, 6],
						},
						{
							name: '南京',
							type: 'bar',
							stack: '总量',
							data: [29, 59, 222, 244, 278, 93, 4, 4],
						}
					]
				};
				myChart.setOption(option);
				// 使用刚指定的选择项数据显示图表。
				var selectArr = myChart.getOption().legend[0].data; //legend所有值
				var checkboxs = document.getElementsByName('chartRadio');
				$(".chartRadio").click(function() {
					var obj = {};
					for (var i = 0; i < checkboxs.length; i++) {
						if (checkboxs[i].checked) {
							obj[selectArr[i]] = true;
						} else {
							obj[selectArr[i]] = false;
						}
					}
					option.legend.selected = obj;
					myChart.setOption(option);
				}
			);
		}
	}
</script>

<style lang="less" scoped>
	#mapContent{
		width: 100%; height: 698px;
	}
	#rythemMap{
		width: 100%;
		height: 100%;
	}
</style>
