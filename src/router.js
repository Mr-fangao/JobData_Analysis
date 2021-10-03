import Vue from 'vue'
import Router from 'vue-router'
import main from '@/views/main/index.vue'
import login from './views/login/index.vue'
import buffer from './views/test/buffer.vue'
import test from './views/test/index.vue'
import server from '@/map/components/serverArea'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			redirect: "/login"
		},
		{
			path: '/login',
			component: login,
			meta: {
				auth: false,
			}
		},
		{
			path: '/server',
			component: server,
		},
		{
			path: '/test',
			component: test,
		},
		{
			path: '/main',
			component: main,
			children: [{
					path: '/',
					redirect: "/recommendation",
					name: '首页',
				},

				{
					path: '/mapMatching',
					name: '地图匹配',
					component: () =>
						import('@/views/recommendation/mapMatching.vue'),
				},
				{
					name: "可达性数据",
					path: "/Details",
					component: () =>
						import('@/views/recommendation/components/Details.vue'),
				},
				{
					path: '/buffer',
					component: buffer,
				},

				{
					name: "个人中心",
					path: "/personal",
					component: () =>
						import('@/views/personal/component/personal.vue'),
					children: [{
						path: '/',
						name: '个人中心',
						meta: {
							auth: true
						},
						component: () =>
							import('@/views/personal/component/personal.vue'),
					}, ]
				},
				{
					name: "test1",
					path: "/personalcenter",
					component: () =>
						import('@/views/personalcenter/component/personalCenter.vue'),
					children: [{
						path: '/',
						name: "点聚合图",
						meta: {
							auth: true
						},
						component: () =>
							import('@/views/userManager/components/userIndex.vue'),
					}]
				},
				{
					name: "时间序列",
					path: "/collection",
					component: () =>
						import('@/views/collection/index.vue'),
				},
				
				{
					name: "热力地图",
					path: "/SalaryHeatmap",
					component: () =>
						import('@/views/SalaryHeatmap/index.vue'),
				},
				{
					name: "分级色彩",
					path: "/GradedColor",
					component: () =>
						import('@/views/GradedColor/index.vue'),
				},
				{
					name: "统计图表",
					path: "/ThemeGraph",
					component: () =>
						import('@/views/ThemeGraph/index.vue'),
				},
				
				{
					name: "条件查询",
					path: "/ConditionalQueryMap",
					component: () =>
						import('@/views/ConditionalQueryMap/index.vue'),
				},



				{
					path: '/menu',
					name: '首页',
					component: () =>
						import('@/views/menu/index.vue'),
				},
				{
					path: "/personal",
					component: () =>
						import('@/views/personal/component/personal.vue'),
				},
				{
					path: '/data',
					name: "就业分析",
					redirect: '/',
					component: () =>
						import('@/views/account/index.vue'),
					children: [{
						path: '/',
						name: '就业分析',
						meta: {
							auth: true
						},
						component: () =>
							import('@/views/account/components/account'),
					}, {
						path: '/data/dataDeatils',
						name: '职位详情',
						meta: {
							auth: true
						},
						component: () =>
							import('@/views/account/components/dataDetails.vue'),
					}]
				},
				{
					path: '/infoSearch',
					name: '空间查询',
					// redirect: '/',
					component: () =>
						import('@/views/infoSearch/index.vue'),
					children: [{
						path: '/',
						name: '空间查询',
						meta: {
							auth: true
						},
						component: () =>
							import('@/views/infoSearch/home/index.vue')
					}]
				},
				{
					name: '职位查询',
					path: '/spaceRecommendation',
					component: () =>
						import('@/views/spaceRecommendation/index.vue'),
					children: [{
						path: '/',
						name: '基于位置推荐',
						meta: {
							auth: true
						},
						component: () =>
							import('@/views/spaceRecommendation/home/index.vue')
					}]
				},
				{
					path: '/3dmap',
					name: '3维地图',
					component: () =>
						import('@/views/map/index.vue')
				},
				{
					path: '/houseCompare',
					name: '就业统计',
					component: () =>
						import('@/views/houseCompare/index.vue'),
					children: [{
						name: "统计",
						path: "/houseCompare/compare",
						component: () =>
							import('@/views/houseCompare/components/compare.vue'),
					}, ]
				},
				{
					path: '/recommendation',
					name: '职位查询',
					component: () =>
						import('@/views/recommendation/index.vue'),
					children: [{
							name: '简单搜索',
							path: '/recommendation/housingPreference',
							meta: {
								auth: true
							},
							component: () =>
								import('@/views/recommendation/components/housingPreference.vue'),
						},
						{
							name: '条件搜索',
							path: '/recommendation/housings',
							meta: {
								auth: true
							},
							component: () =>
								import('@/views/recommendation/components/housings.vue'),
						},

						{
							path: '/recommendation/factor',
							name: '购房选址',
							meta: {
								auth: true
							},
							component: () =>
								import('@/views/recommendation/components/factor.vue'),
						}
					]
				},
				
				{
					path: '/recommendHousing',
					redirect: '/',
					name: '推荐职位',
					component: () =>
						import('@/views/recommendation/recommendHousing.vue'),
					children: [{
						path: '/',
						name: '推荐职位',
						component: () =>
							import('@/views/recommendation/recommendHousing.vue'),
					}, ]
				},
				{
					path: '/GWR',
					name: 'GWR',
					component: () =>
						import('@/views/modelAnalysis/gwrModel.vue'),
				},

				{
					path: '/periphery',
					redirect: '/',
					name: '位置周边',
					component: () =>
						import('@/views/recommendation/periphery'),
					children: [{
						path: '/',
						name: '位置周边',
						component: () =>
							import('@/views/recommendation/periphery')
					}, ]
				},
				{
					path: '/auDecision',
					name: '辅助决策',
					component: () =>
						import('@/views/auDecision/index.vue'),
					children: [{
							path: '/auDecision/usersManual',
							name: '用户手册',
							meta: {
								auth: true
							},
							component: () =>
								import('@/views/auDecision/components/usersManual.vue'),
						},
						{
							path: '/auDecision/livablemodel',
							name: '宜居模型',
							meta: {
								auth: true
							},
							component: () =>
								import('@/views/auDecision/components/livablemodel.vue'),
						},
						{
							path: '/auDecision/model',
							name: '引力模型',
							meta: {
								auth: true
							},
							component: () =>
								import('@/views/auDecision/components/model.vue'),
						}
					]
				},
				{
					path: '/housingValuation',
					name: '住房估价',
					component: () =>
						import('@/views/housingValuation/index.vue'),
					children: [{
							path: '/',
							name: '技能分析',
							meta: {
								auth: true
							},
							component: () =>
								import('@/views/housingValuation/components/forecast.vue'),
						},
						{
							path: '/housingValuation/valuation',
							name: '热力图',
							meta: {
								auth: true
							},
							component: () =>
								import('@/views/housingValuation/components/valuation.vue'),
						}
					]
				},
				{
					path: '/userManager',
					name: '专题制图',
					component: () =>
						import('@/views/userManager/index.vue'),
					children: [{
						path: '/',
						name: '专题制图',
						meta: {
							auth: true
						},
						component: () =>
							import('@/views/userManager/components/userIndex.vue'),
					}, ]
				},

				{
					name: "价格分析",
					path: "/priceAnalysis",
					component: () =>
						import('@/views/priceAnalysis/index.vue'),
					// children: [{
					//   path: '/',
					//   name: "用户中心",
					//   meta: {
					//     auth: true
					//   },
					//   component: () =>
					//     import('@/views/userManager/components/userIndex.vue'),
					// }, ]
				},
				{
					name: "模型分析",
					path: "/modelAnalysis",
					component: () =>
						import('@/views/modelAnalysis/index.vue'),
					// children: [{z
					//   path: '/',
					//   name: "用户中心",
					//   meta: {
					//     auth: true
					//   },
					//   component: () =>
					//     import('@/views/userManager/components/userIndex.vue'),
					// }, ]
				},
				{
					name: "房价预测",
					path: "/priceForecast",
					component: () =>
						import('@/views/modelAnalysis/priceForecast.vue'),
				},
				{
					name: "热力图分析",
					path: "/heatMap",
					component: () =>
						import('@/views/heatMap/index.vue'),
				},
				{
					path: '/locationResources',
					name: '学区资源',
					component: () =>
						import('@/views/locationResources/components/locationResources.vue'),
				},
				{
					path: '/greenlResources',
					name: '绿地资源',
					component: () =>
						import('@/views/locationResources/components/greenlResources.vue'),
				},
				{
					path: '/medicalResources',
					name: '医疗资源',
					component: () =>
						import('@/views/locationResources/components/medicalResources.vue'),
				},
				{
					path: '/houseinfo',
					name: '职位详情',
					component: () =>
						import('@/views/houseCompare/components/houseinfo.vue'),
				},
				{
					path: '/compare',
					name: '房源对比',
					component: () =>
						import('@/views/houseCompare/components/compare.vue'),
				},
				{
					path: '/compareHouse',
					name: '就业统计',
					component: () =>
						import('@/views/houseCompare/components/compareHouse.vue'),
				},
				{
					path: '/businessResources',
					name: '商业资源',
					component: () =>
						import('@/views/locationResources/components/businessResources.vue'),
				},
				{
					path: '/Kriging',
					name: '克里金插值预测',
					component: () =>
						import('@/views/modelAnalysis/Kriging.vue'),
				},
				{
					name: "二维热力图",
					path: "/heatMap2d",
					component: () =>
						import('@/views/heatMap/2d.vue'),
				},
			]
		}
	]
})
