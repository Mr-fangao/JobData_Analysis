<template>
	<div class="drag" style="width: 100%; height: 698px;" alt="整个页面">
		<nav class="drag_box" alt="侧边功能导航条">
			<div v-if='isShow'>
				<a class="a a1" @click="toggleTabs(Educ);">职位学历统计专题图</a>
				<a class="a a2" @click="toggleTabs(Exper);">工作经验统计专题图</a><br>
				<a class="a a3" @click="toggleTabs(CType);">公司类型统计专题图</a>
				<a class="a a3" @click="toggleTabs(CSize);">公司规模统计专题图</a>
			</div>
		</nav>
		<Educ :is="currentView" keep-alive></Educ>
	</div>
</template>
<script>
	import Educ from './components/Educ.vue'
	import Exper from './components/Exper.vue'
	import CType from './components/CType.vue'
	import CSize from './components/CSize.vue'
	export default {
		data() {
			return {
				isShow: true,
				Educ: "Educ",
				Exper: "Exper",
				CType: "CType",
				CSize: "CSize",
				currentView: 'Educ',
			};
		},
		components: {
			Educ,
			Exper,
			CType,
			CSize
		},
		methods: {
			toggleTabs(tabText) {
				this.currentView = tabText;
			},
			change: function() {
				this.isShow = !this.isShow
			}
		}
	}
</script>

<style scoped>
	.drag_box {
		position: fixed;
		top: 10%;
		right: 1%;
		z-index: 1;
	}

	.a {
		background-color: #000000;
		border-radius: 5px;
		width: 200px;
		height: 40px;
		color: #fff;
		line-height: 40px;
		font-size: 15px;
		margin-bottom: 5px;
		margin-right: 5px;
		font-weight: 900;
		text-decoration: none;
		display: inline-block;
		vertical-align: middle;
		text-align: center;
		box-shadow: 0px 2px 2px rgba(255, 255, 255, 0.3);
		backface-visibility: hidden;
	}

	.a:hover {
		background-color: rgba(255, 0, 0, 0.6);
		box-shadow: 0px 2px 2px rgba(0, 255, 255, 0.3);
	}
</style>
