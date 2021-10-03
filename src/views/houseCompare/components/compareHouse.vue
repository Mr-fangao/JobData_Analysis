<template>
	<div class="drag" style="width: 100%; height: 698px;" alt="整个页面">
		<!-- v-drag：拖动div -->
		<nav class="drag_box" alt="侧边功能导航条">
			<button id="navControl" @dblclick='change()'>
				<Tooltip content="双击控制功能导航显隐" placement="right"> <Icon type="md-add" :size="32" style="padding: 0 auto;"/> </Tooltip>
			</button>
			<div v-if='isShow'>
				<a class="a a1" :class="{bg:time == 1}" @click="toggleTabs(salary),changeBg(1);">
					<Tooltip content="薪资统计" placement="right"> <Icon class="myIcon" type="logo-yen" :size="30" style="width:100%;color: #ffffff;"/> </Tooltip>
				</a>
				<a class="a a2" :class="{bg:time == 2}" @click="toggleTabs(company),changeBg(2);">
					<Tooltip content="公司相关" placement="right"> <Icon class="myIcon" type="md-stats" :size="30" style="width:100%;color: #ffffff;"/> </Tooltip>
				</a>
				<a class="a a3" :class="{bg:time == 3}" @click="toggleTabs(education),changeBg(3);">
					<Tooltip content="学历统计" placement="right"> <Icon class="myIcon" type="ios-book" :size="30" style="width:100%;color: #ffffff;"/> </Tooltip>
				</a>
				<a class="a a4" :class="{bg:time == 4}" @click="toggleTabs(experience),changeBg(4);">
					<Tooltip content="工作经验" placement="right"> <Icon class="myIcon" type="logo-dropbox" :size="30" style="width:100%;color: #ffffff;"/> </Tooltip>
				</a>
			</div>
		</nav>
		<salary :is="currentView" keep-alive></salary>
	</div>
</template>


<script>
	import salary from './statistic/salary.vue';
	import company from './statistic/company.vue';
	import education from './statistic/education.vue';
	import experience from './statistic/experience.vue';
	export default {
		data() {
			return {
				time: 1,isShow: true,salary: "salary",company: "company",education:"education",experience:"experience",currentView: 'salary'
			};
		},
		components: {
			salary,company,education,experience
		},
		methods: {
			toggleTabs(tabText) {
				this.currentView = tabText;
			},
			change: function() {
				this.isShow = !this.isShow
			},
			changeBg(index) {
				if (index === 1 || index === 2 || index === 3 || index === 4) {
					this.time = index
				} else {
					this.sort = index
				}
			}
		}
	}
</script>

<style scoped>
	.drag_box {position: fixed;float: left;top: 8%;left: 0.1%;z-index: 9999;width: 2%;height: 685px;border-radius: 0 8px 0 0px;background-color: rgba(0, 0, 0, 0.8);}
	#navControl {cursor: pointer;width: 100%;height: 50px;border-style: none;outline: none;color: white;border-radius: 0 8px 0 0px;display: inline-block;font-family: "华文中宋";background-color: rgba(0,0,0,1);text-align: center;font-size: 17px;}
	.bg {background-color: rgba(255, 0, 0, 0.6);}
	.a {width: 100%;height: 158.75px;line-height: 156px;font-weight: 900;text-decoration: none;display: inline-block;vertical-align: middle;text-align: center;box-shadow: 0px 2px 2px rgba(255, 255, 255, 0.3);backface-visibility: hidden;}
	.myIcon:hover {
		-webkit-transition: all 1s linear;-moz-transition: all 1s linear;-ms-transition: all 1s linear;-o-transition: all 1s linear;transition: all 1s linear;
		-webkit-transform: rotateY(360deg);-moz-transform: rotateY(360deg);-ms-transform: rotateY(360deg);-o-transform: rotateY(360deg);transform: rotateY(360deg);
	}
</style>
