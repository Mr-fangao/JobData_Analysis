<template>
	<div id="mapContent">
		<iframe id="rythemMap" src="./CustomQuery.html" frameborder="0"></iframe>
		<div id="jobWanted">
			<p id="myTitle">招聘公告滚动栏<Icon type="md-megaphone" /></p>
			<vue-seamless-scroll :data="listData" class="seamless-warp">
				<ul class="item">
					<li v-for="item in listData">
						<span class="title">公司名称: </span><span class="CNAME Content" v-text="item.CNAME"></span><br>
						<span class="title">职位名称: </span><span class="JNAME Content" v-text="item.JNAME"></span><br>
						<span class="title">薪资范围: </span><span class="SALARY Content" v-text="item.SALARY"></span><br>
						<span class="title">学历要求: </span><span class="EDUC Content" v-text="item.EDUC"></span><br>
						<span class="title">工作经验: </span><span class="EXPER Content" v-text="item.EXPER"></span><br>
						<span class="title">公司规模: </span><span class="CSIZE Content" v-text="item.CSIZE"></span><br>
						<span class="title">公司类型: </span><span class="CTYPE Content" v-text="item.CTYPE"></span><br>
						<span class="title">行业领域: </span><span class="INDU Content" v-text="item.INDU"></span><br>
						<span class="title">上班地址: </span><span class="PLACE Content" v-text="item.PLACE"></span><br>
						<span class="title">福利待遇: </span><span class="WELF Content" v-text="item.WELF"></span><br>
						<span class="title">发布时间: </span><span class="TIME Content" v-text="item.TIME"></span><br>
						<span class="btmLine">************************************************************************************************</span>
					</li>
				</ul>
			</vue-seamless-scroll>
		</div>
	</div>
</template>

<script>
	import scroll from 'vue-seamless-scroll'
	export default {
		data () {
			return {
				listData: [
					{"CNAME": "四川星海系统集成工程有限公司","JNAME": "高级GIS研发工程师","SALARY": "1.5-2万/月","EDUC": "本科","EXPER": "5-7年","CSIZE": "50-150","CTYPE": "民营公司","INDU": "计算机服务(系统、数据服务、维修)","PLACE": "金科中路32号迪舒美领12栋","WELF": "周末双休节假日福利","TIME": "2021/4/27"},
					{"CNAME": "上海地听信息科技有限公司","JNAME": "GIS开发项目经理","SALARY": "1.2-2万/月","EDUC": "本科","EXPER": "3-4年","CSIZE": "50-150","CTYPE": "民营公司","INDU": "计算机软件","PLACE": "光复西路2899弄赢华国际广场","WELF": "五险一金绩效奖金员工旅游年终奖金做五休二节日福利交通补贴餐饮补贴通讯补贴定期体检","TIME": "2021/4/27"},
					{"CNAME": "合肥泽众城市智能科技有限公司","JNAME": "gis开发(002842) (职位编号：gsafety002842)","SALARY": "1.2-2.4万/月","EDUC": "NULL","EXPER": "5-7年","CSIZE": "150-500","CTYPE": "国企","INDU": "电子技术/半导体/集成电路","PLACE": "经开区习友路5999号清华大学合肥公共安全研究院","WELF": "五险一金补充医疗保险员工旅游弹性工作餐饮补贴年终奖金绩效奖金通讯补贴定期体检交通补贴","TIME": "2021/4/27"},
					{"CNAME": "湖南神州光大科技有限公司","JNAME": "GIS开发工程师","SALARY": "1.3-2.1万/月","EDUC": "大专","EXPER": "5-7年","CSIZE": "500-1000","CTYPE": "民营公司","INDU": "计算机软件","PLACE": "香樟东路16号","WELF": "五险一金周末双休节假日福利","TIME": "2021/4/27"},
					{"CNAME": "苏州城方信息技术有限公司","JNAME": "GIS数据质检工程师","SALARY": "0.7-1.2万/月","EDUC": "本科","EXPER": "1年","CSIZE": "50-150","CTYPE": "民营公司","INDU": "计算机软件","PLACE": "苏虹东路155号方正智谷1栋320-323室","WELF": "13薪500餐补园区五险一金通讯补贴员工体检生日福利员工旅游弹性工作绩效奖金带薪年假","TIME": "2021/4/27"},
					{"CNAME": "中电烽友信息技术（武汉）有限公司","JNAME": "三维GIS工程师（中级）","SALARY": "0.9-1.8万/月","EDUC": "本科","EXPER": "3-4年","CSIZE": "50-150","CTYPE": "国企","INDU": "计算机软件","PLACE": "未来科技城光谷八路中国联通数据中心7、8楼","WELF": "五险一金专业培训员工旅游弹性工作周末双休停车免费年终双薪交通补贴","TIME": "2021/4/27"},
					{"CNAME": "重庆博创宏图科技有限公司","JNAME": "GIS开发工程师","SALARY": "1-2万/月","EDUC": "本科","EXPER": "2年","CSIZE": "1-50","CTYPE": "民营公司","INDU": "计算机软件","PLACE": "汽博中心","WELF": "五险一金年终奖金员工旅游法定假日节日礼金周末双休绩效奖金","TIME": "2021/4/27"},
					{"CNAME": "苏州中科天启遥感科技有限公司","JNAME": "GIS开发工程师 (职位编号：0104)","SALARY": "1-1.5万/月","EDUC": "本科","EXPER": "2年","CSIZE": "50-150","CTYPE": "民营公司","INDU": "计算机软件","PLACE": "科技城","WELF": "五险一金餐饮补贴弹性工作定期体检专业培训绩效奖金年终奖金员工旅游","TIME": "2021/4/27"},
					{"CNAME": "杭州同济测绘有限公司","JNAME": "GIS高级开发工程师","SALARY": "1.4-1.8万/月","EDUC": "本科","EXPER": "3-4年","CSIZE": "50-150","CTYPE": "民营公司","INDU": "学术/科研","PLACE": "南苑街道迎宾路355号金鑫大厦19F","WELF": "NULL/未说明","TIME": "2021/4/27"},
					{"CNAME": "武汉蚁图时空科技有限公司","JNAME": "GIS研发工程师 (职位编号：02)","SALARY": "1-1.5万/月","EDUC": "本科","EXPER": "1年","CSIZE": "50-150","CTYPE": "民营公司","INDU": "计算机软件","PLACE": "花城大道9号武汉软件新城1.1期A2栋401","WELF": "五险一金交通补贴餐饮补贴通讯补贴年终奖金定期体检带薪年假节假日福利","TIME": "2021/4/27"},
					{"CNAME": "江苏北斗卫星应用产业研究院有限公司","JNAME": "GIS开发工程师","SALARY": "8-16万/年","EDUC": "本科","EXPER": "3-4年","CSIZE": "50-150","CTYPE": "国企","INDU": "计算机软件","PLACE": "江北新区星火路19号星智汇商务花园A4栋","WELF": "五险一金交通补贴通讯补贴餐饮补贴","TIME": "2021/4/27"},
					{"CNAME": "北京恒泰实达科技股份有限公司","JNAME": "Cesium三维GIS\\BIM开发","SALARY": "1.5-2万/月","EDUC": "本科","EXPER": "3-4年","CSIZE": "1000-5000","CTYPE": "上市公司","INDU": "计算机软件","PLACE": "北京市海淀区林风二路39号院1号楼","WELF": "五险一金定期体检绩效奖金","TIME": "2021/4/27"},
					{"CNAME": "泰瑞数创科技（北京）有限公司","JNAME": "GIS开发工程师","SALARY": "0.8-1.5万/月","EDUC": "本科","EXPER": "2年","CSIZE": "150-500","CTYPE": "民营公司","INDU": "计算机软件","PLACE": "中建锦绣广场6号楼1211室","WELF": "五险一金专业培训绩效奖金年终奖金弹性工作定期体检","TIME": "2021/4/27"},
					{"CNAME": "北京源通电力科技有限公司","JNAME": "GIS开发经理","SALARY": "1.5-2万/月","EDUC": "本科","EXPER": "5-7年","CSIZE": "150-500","CTYPE": "民营公司","INDU": "电气/电力/水利","PLACE": "深港产业园","WELF": "五险一金交通补贴定期体检生日福利加班补助周末双休","TIME": "2021/4/27"},
					{"CNAME": "深圳博沃智慧科技有限公司","JNAME": "GIS20100201-Java开发工程师（武汉）","SALARY": "0.6-1万/月","EDUC": "大专","EXPER": "2年","CSIZE": "150-500","CTYPE": "民营公司","INDU": "计算机软件","PLACE": "武珞路230号绿洲广场A座裕阳大厦7层706、703","WELF": "五险一金绩效奖金年终奖金","TIME": "2021/4/27"},
					{"CNAME": "西安三好软件技术股份有限公司","JNAME": "GIS开发工程师","SALARY": "1-1.5万/月","EDUC": "本科","EXPER": "3-4年","CSIZE": "50-150","CTYPE": "上市公司","INDU": "计算机软件","PLACE": "碑林区火炬路动漫产业平台4号楼5层E区","WELF": "通讯补贴绩效奖金年终奖金交通补贴法定假日节日福利生日祝福五险一金周末双休餐饮补贴","TIME": "2021/4/27"},
					{"CNAME": "华智生物技术有限公司","JNAME": "GIS数据处理工程师","SALARY": "0.7-1.2万/月","EDUC": "本科","EXPER": "1年","CSIZE": "150-500","CTYPE": "民营公司","INDU": "学术/科研","PLACE": "合平路618号","WELF": "五险一金交通补贴餐饮补贴通讯补贴绩效奖金年终奖金定期体检员工旅游","TIME": "2021/4/27"},
					{"CNAME": "北京煜邦电力技术股份有限公司","JNAME": "GIS开发工程师","SALARY": "1.5-3万/月","EDUC": "本科","EXPER": "3-4年","CSIZE": "500-1000","CTYPE": "民营公司","INDU": "电气/电力/水利","PLACE": "苏州街名商大厦9层","WELF": "五险一金年终奖金餐饮补贴交通补贴绩效奖金通讯补贴弹性工作","TIME": "2021/4/27"},
					{"CNAME": "青岛秀山移动测量有限公司","JNAME": "软件开发工程师（GIS开发方向）","SALARY": "4.5-6千/月","EDUC": "本科","EXPER": "1年","CSIZE": "50-150","CTYPE": "创业公司","INDU": "计算机软件","PLACE": "山东省青岛市黄岛区前湾港路579号山东科技大学科技产业园综合服务楼","WELF": "NULL/未说明","TIME": "2021/4/27"},
					{"CNAME": "上海智能交通有限公司","JNAME": "三维开发工程师（GIS/UE4）","SALARY": "1.5-2万/月","EDUC": "本科","EXPER": "2年","CSIZE": "50-150","CTYPE": "国企","INDU": "交通/运输/物流","PLACE": "周家嘴路1229号A座4楼","WELF": "五险一金员工旅游专业培训绩效奖金年终奖金定期体检福利优团队融洽","TIME": "2021/4/27"},
					{"CNAME": "四川智海联科技有限公司","JNAME": "GIS开发工程师","SALARY": "1-2万/月","EDUC": "本科","EXPER": "2年","CSIZE": "1-50","CTYPE": "民营公司","INDU": "计算机软件","PLACE": "天府大道北段1700号环球中心Ｅ5-1014","WELF": "五险一金年终奖金绩效奖金弹性工作","TIME": "2021/4/27"}
				]
			}
		}
	}
</script>



<style lang="less" scoped>
	#mapContent {
		width: 100%;
		height: 698px;
	}

	#rythemMap {
		width: 100%;
		height: 100%;
	}
	
	#jobWanted{
		position: absolute;
		right: 1%;
		bottom: 0.75%;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		background-color: rgba(0, 0, 0, 0.6);
	}
	
	#myTitle{
		font-size: 20px;
		font-weight: 600;
		margin: 2px 0 2px 0;
		text-align: center;
		color: #fff;
	}
	
	.seamless-warp {
		height: 555px;
		width: 332px;
		overflow: hidden;
	}
	.title{
		font-size: 14px;
		font-weight: 600;
		margin-left: 1em;
		color: #ffffff;
	}
	
	.Content{
		word-break: break-all;
		white-space: normal;
		font-size: 14px;
		color: #eaeaea;
	}
	.btmLine{
		color: white;
	}
	.SALARY{
		color: #ff8800;
		text-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
		font-weight: 700;
	}
</style>
