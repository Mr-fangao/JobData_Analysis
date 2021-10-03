<template>
  <Card style="margin: 10px;">
    <div title="数据详情">
      <div class="group-panel-box blue">
        <div class="panel-title">简单查询</div>
        <div class="panel-line"></div>
      </div>
    </div>
    <div style="overflow: hidden;">
      <div style="float: right">
        <Input v-model="value" placeholder="请输入岗位名称"
					style="width: 180px; border: white;margin: 10px;" />
        <Button
					type="success" class="submit" @click="getinfo"
					style="background: rgba(0, 0, 0, 0.65);border: rgba(0, 0, 0, 0.5); font-weight: 900;">查询
				</Button>
      </div>
    </div>
    <Table style="background-color: #0090FF;" height="1000" stripe border :columns="columns5" :data="data5"></Table>
  </Card>
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
import houseInfoId from "@/vuex/store";
import dataRap from "@/vuex/store";
import aroundInfo from "@/vuex/store";
import housePoint from "@/vuex/store";
export default {
  data() {
    return {
      form:{},
      distance: "1000",
      value: "",
			columns5: [
				{ title: "公司名称", width: 250, key: "CName", align: "center",},
				{ title: "岗位名称", width: 200, key: "JName", align: "center",},
				{
					title: "工作地区", key: "WPlace", align: "center",
					filters: [
						{label: '北京昌平区',value: '北京昌平区'},{label: '北京大兴区',value: '北京大兴区'},{label: '北京朝阳区',value: '北京朝阳区'},{label: '北京东城区',value: '北京东城区'},{label: '北京丰台区',value: '北京丰台区'},{label: '北京海淀区',value: '北京海淀区'},{label: '北京门头沟区',value: '北京门头沟区'},{label: '北京密云区',value: '北京密云区'},{label: '北京石景山区',value: '北京石景山区'},{label: '北京顺义区',value: '北京顺义区'},{label: '北京通州区',value: '北京通州区'},{label: '北京西城区',value: '北京西城区'},{label: '北京宣武区',value: '北京宣武区'}
					],
					filterMultiple: false,
					filterMethod: (value, row) => { return value === row.WPlace }
				},
				{ title: "薪资范围", width: 110, key: "Salary", align: "center", },
				{
					title: "学历要求", width: 120, key: "Educ", align: "center",
					filters: [
						{label: '初中及以下',value: '初中及以下'},{label: '高中',value: '高中'},{label: '中技',value: '中技'},{label: '中专',value: '中专'},
						{label: '大专',value: '大专'},{label: '本科',value: '本科'},{label: '硕士',value: '硕士'},{label: '博士',value: '博士'}
					],
					filterMultiple: false,
					filterMethod: (value, row) => { return value === row.Educ }
				},
				{
					title: "工作经验", width: 110, key: "Exper", align: "center",
					filters: [
						{label: '在校/应届',value: '在校/应届'},{label: '无需',value: '无需'},{label: '1年',value: '1年'},{label: '2年',value: '2年'},
						{label: '3-4年',value: '3-4年'},{label: '5-7年',value: '5-7年'},{label: '8-9年',value: '8-9年'},{label: '10年以上',value: '10年以上'}
					],
					filterMultiple: false,
					filterMethod: (value, row) => { return value === row.Exper }
				},
				{
					title: "公司类型", width: 110, key: "CType", align: "center",
					filters: [
						{label: '创业公司',value: '创业公司'},{label: '非营利组织',value: '非营利组织'},{label: '国企',value: '国企'},{label: '合资',value: '合资'},{label: '民营公司',value: '民营公司'},{label: '上市公司',value: '上市公司'},
					  {label: '事业单位',value: '事业单位'},{label: '外企代表处',value: '外企代表处'},{label: '外资(欧美)',value: '外资(欧美)'},{label: '外资(非欧美)',value: '外资(非欧美)'},{label: '政府机关',value: '政府机关'},
					],
					filterMultiple: false,
					filterMethod: (value, row) => { return value === row.CType }
				},
				{
					title: "公司规模", width: 110, key: "CSize", align: "center",
					filters: [
						{label: '1-50人',value: '1-50'},{label: '50-150人',value: '50-150'},{label: '150-500人',value: '150-500'},{label: '500-1000人',value: '500-1000'},
						{label: '1000-5000人',value: '1000-5000'},{label: '5000-10000人',value: '5000-10000'},{label: '10000人以上',value: '10000以上'}
					],
					filterMultiple: false,
					filterMethod: (value, row) => { return value === row.CSize }
				},
				{title: "发布日期", key: "PubTime", align: "center"},
				
				{
					title: "详细信息", key: "action", width: 150, align: "center",
					render: (h, params) => {
						return h("div", [
							h(
								"Button",
								{
									props: { type: "success", size: "small",},
									style: { marginRight: "5px", backgroundColor: "rgba(0, 0, 0, 0.6)", borderColor: "white", },
									on: {
										click: () => {
											this.$router.push("/houseinfo");
										},
									},
								},
								"详情"
							),
						]);
					},
				},
			],
			data5: [
				{"CName": "广州仓实信息科技有限公司", "JName": "GIS软件开发工程师", "WPlace": "广州越秀区", "Salary": "0.7-1万/月", "Educ": "大专", "Exper": "1年", "CType": "民营公司", "CSize": "1-50", "PubTime": "2020-05-02"},
				{"CName": "湖北双可科技有限公司", "JName": "GIS开发工程师", "WPlace": "武汉江夏区", "Salary": "0.8-1.4万/月", "Educ": "本科", "Exper": "5-7年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-05-02"},
				{"CName": "武汉珞珈德毅科技股份有限公司", "JName": "三维GIS开发工程师", "WPlace": "武汉洪山区", "Salary": "1-2万/月", "Educ": "大专", "Exper": "3-4年", "CType": "民营公司", "CSize": "150-500", "PubTime": "2020-05-02"},
				{"CName": "天维尔信息科技股份有限公司", "JName": "GIS中级开发工程师", "WPlace": "深圳南山区", "Salary": "0.7-1.5万/月", "Educ": "大专", "Exper": "3-4年", "CType": "民营公司", "CSize": "150-500", "PubTime": "2020-05-02"},
				{"CName": "泰豪科技股份有限公司", "JName": "GIS开发人员", "WPlace": "南昌高新开发区", "Salary": "1-1.5万/月", "Educ": "本科", "Exper": "3-4年", "CType": "合资", "CSize": "NULL", "PubTime": "2020-05-02"},
				{"CName": "南京益美沃电子科技有限公司", "JName": "GIS开发工程师", "WPlace": "南京雨花台区", "Salary": "0.8-1.2万/月", "Educ": "本科", "Exper": "3-4年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-05-02"},
				{"CName": "杭州飞时达软件有限公司", "JName": "GIS 开发工程师", "WPlace": "杭州西湖区", "Salary": "0.8-1.5万/月", "Educ": "本科", "Exper": "1年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-05-02"},
				{"CName": "苏州规划设计研究院股份有限公司昆山分公司", "JName": "GIS二次开发工程师", "WPlace": "苏州工业园区", "Salary": "0.9-2万/月", "Educ": "本科", "Exper": "2年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-05-02"},
				{"CName": "深圳震有科技股份有限公司", "JName": "GIS开发工程师", "WPlace": "深圳南山区", "Salary": "1-2万/月", "Educ": "本科", "Exper": "3-4年", "CType": "民营公司", "CSize": "500-1000", "PubTime": "2020-04-30"},
				{"CName": "江苏苏地仁合土地房地产资产评估测绘造价咨询有限公司", "JName": "GIS开发工程师", "WPlace": "南京鼓楼区", "Salary": "1-1.5万/月", "Educ": "本科", "Exper": "3-4年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-04-30"},
				{"CName": "成都国星宇航科技有限公司", "JName": "GIS开发工程师", "WPlace": "成都高新区", "Salary": "0.9-1.3万/月", "Educ": "本科", "Exper": "3-4年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-04-30"},
				{"CName": "重庆光大网络技术有限公司", "JName": "GIS开发工程师", "WPlace": "重庆北部新区", "Salary": "0.6-1.2万/月", "Educ": "本科", "Exper": "1年", "CType": "民营公司", "CSize": "150-500", "PubTime": "2020-04-30"},
				{"CName": "北京辰安科技股份有限公司", "JName": "GIS开发工程师", "WPlace": "北京海淀区", "Salary": "1-1.5万/月", "Educ": "本科", "Exper": "3-4年", "CType": "国企", "CSize": "1000-5000", "PubTime": "2020-04-30"},
				{"CName": "杭州汇志企业管理咨询有限公司", "JName": "GIS开发工程师", "WPlace": "杭州西湖区", "Salary": "1.6-2.3万/月", "Educ": "本科", "Exper": "1年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-04-28"},
				{"CName": "成都原子数据科技有限公司", "JName": "三维GIS开发工程师", "WPlace": "成都武侯区", "Salary": "1-2万/月", "Educ": "大专", "Exper": "3-4年", "CType": "民营公司", "CSize": "1-50", "PubTime": "2020-04-27"},
				{"CName": "广州长地空间信息技术有限公司", "JName": "GIS开发工程师", "WPlace": "广州天河区", "Salary": "0.8-1.5万/月", "Educ": "大专", "Exper": "2年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-04-30"},
				{"CName": "广东旭普空间信息技术产业发展有限公司", "JName": "GIS开发工程师", "WPlace": "广州天河区", "Salary": "0.8-1.2万/月", "Educ": "本科", "Exper": "3-4年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-04-30"},
				{"CName": "能拓能源股份有限公司", "JName": "GIS开发工程师", "WPlace": "南京鼓楼区", "Salary": "1.5-2万/月", "Educ": "本科", "Exper": "NULL", "CType": "上市公司", "CSize": "500-1000", "PubTime": "2020-03-31"},
				{"CName": "北京信普达系统工程有限公司", "JName": "GIS开发工程师", "WPlace": "北京海淀区", "Salary": "0.8-2万/月", "Educ": "本科", "Exper": "2年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-04-30"},
				{"CName": "浙江浙大中控信息技术有限公司", "JName": "GIS开发工程师", "WPlace": "杭州滨江区", "Salary": "1-1.5万/月", "Educ": "本科", "Exper": "2年", "CType": "民营公司", "CSize": "500-1000", "PubTime": "2020-04-30"},
				{"CName": "北京创时空科技发展有限公司", "JName": "GIS开发工程师", "WPlace": "北京海淀区", "Salary": "1-1.5万/月", "Educ": "本科", "Exper": "2年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-04-30"},
				{"CName": "浙江华是科技股份有限公司", "JName": "GIS开发工程师", "WPlace": "杭州余杭区", "Salary": "0.6-1.5万/月", "Educ": "本科", "Exper": "3-4年", "CType": "民营公司", "CSize": "150-500", "PubTime": "2020-04-30"},
				{"CName": "北京辰景科技有限责任公司", "JName": "三维GIS开发", "WPlace": "北京海淀区", "Salary": "1-1.5万/月", "Educ": "本科", "Exper": "NULL", "CType": "民营公司", "CSize": "1-50", "PubTime": "2020-03-15"},
				{"CName": "北京信普达系统工程有限公司", "JName": "GIS开发工程师", "WPlace": "北京海淀区", "Salary": "0.8-2万/月", "Educ": "本科", "Exper": "2年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-04-30"},
				{"CName": "浙江浙大中控信息技术有限公司", "JName": "GIS开发工程师", "WPlace": "杭州滨江区", "Salary": "1-1.5万/月", "Educ": "本科", "Exper": "2年", "CType": "民营公司", "CSize": "500-1000", "PubTime": "2020-04-30"},
				{"CName": "北京创时空科技发展有限公司", "JName": "GIS开发工程师", "WPlace": "北京海淀区", "Salary": "1-1.5万/月", "Educ": "本科", "Exper": "2年", "CType": "民营公司", "CSize": "50-150", "PubTime": "2020-04-30"},
				{"CName": "浙江华是科技股份有限公司", "JName": "GIS开发工程师", "WPlace": "杭州余杭区", "Salary": "0.6-1.5万/月", "Educ": "本科", "Exper": "3-4年", "CType": "民营公司", "CSize": "150-500", "PubTime": "2020-04-30"},
				{"CName": "速度时空信息科技股份有限公司", "JName": "GIS研发工程师", "WPlace": "南京玄武区", "Salary": "1.2-2万/月", "Educ": "硕士", "Exper": "3-4年", "CType": "民营公司", "CSize": "500-1000", "PubTime": "2020-03-20"},
				{"CName": "北京辰景科技有限责任公司", "JName": "三维GIS开发", "WPlace": "北京海淀区", "Salary": "1-1.5万/月", "Educ": "本科", "Exper": "NULL", "CType": "民营公司", "CSize": "1-50", "PubTime": "2020-03-15"},
			],
      // houseShape: [],
      // houseId: [],
    };
  },
  // created() {
  //   this.getinfo();
  // },
  methods: {
		getinfo() {
			var data = this.data5
		}
  },
};
</script>

<style lang="less" >
	.submit {
		margin: 10px;
		margin-right: 0;
	}
	.pageFoot {
		margin-top: 10px;
		float: right;
	}
	.group-panel-box {
		&.blue {
			.panel-title {
				background: rgba(0, 0, 0, 0.65);
			}
			.panel-line {
				background: rgba(0, 0, 0, 0.65);
			}
		}
		.panel-title {
			float: left;
			padding: 0 10px;
			height: 30px;
			line-height: 30px;
			color: white;
			font-size: 14px;
			margin-left: 10px;
			clear: both;
		}
		.panel-line {
			height: 2px;
			clear: both;
		}
	}
	.slelectInput {
		width: 200px;
		float: right;
	}

	.data-view {
		padding: 20px;
		height: 1450px;
		.group-header {
			height: 20px;
		}
		.ivu-row {
			.left {
				padding-right: 10px;
			}
			.right {
				padding-left: 10px;
			}
			.chart {
				height: 400px;
				width: 100%;
			}
		}
	}
	.demo-spin-icon-load {
		animation: ani-demo-spin 1s linear infinite;
	}
</style>
