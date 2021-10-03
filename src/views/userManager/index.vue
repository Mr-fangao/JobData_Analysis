<template>
	<!-- 专题制图模块 -->
	<div class="drag">
		<nav class="drag_box" v-drag>
			<button id="txt" title="双击显示/隐藏功能" @dblclick='change()'>专题制图</button>
			<div v-if='isShow'>
				<a class="a a1" href="javascript:void(0);" @click="toggleTabs(scattermap);">职位分布散点图</a><br>
				<a class="a a2" href="javascript:void(0);" @click="toggleTabs(heatmap);">职位薪资热力图</a><br>
			</div>
		</nav>
		<scattermap :is="currentView" keep-alive></scattermap>
	</div>
</template>

<script>
import scattermap from './components/scattermap.vue';
import heatmap from './components/heatmap.vue';
export default {
	data () {
		return {
			isShow: false,
			scattermap: "scattermap", 
			heatmap: "heatmap", 
			currentView: 'scattermap',
		};
	},
	components: { 
		scattermap,
		heatmap,
	},
	methods: {
		toggleTabs (tabText) {
			this.currentView = tabText;
		},
		change:function() {
			this.isShow = !this.isShow
		}
	},
	
	// 功能区拖动
	directives: {
		drag: function(el) {
			let dragBox = el; //获取当前元素
			dragBox.onmousedown = e => {
				//算出鼠标相对元素的位置
				let disX = e.clientX - dragBox.offsetLeft;
				let disY = e.clientY - dragBox.offsetTop;
				document.onmousemove = e => {
					//用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
					let left = e.clientX - disX;
					let top = e.clientY - disY;
					//移动当前元素
					dragBox.style.left = left + "px";
					dragBox.style.top = top + "px";
				};
				document.onmouseup = e => {
						//鼠标弹起来的时候不再移动
					document.onmousemove = null;
					 //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）  
					document.onmouseup = null;
				};
			};
		}
	}
}
</script>

<style scoped>
	.drag_box {
		position: absolute;
		top: 8%;
		right: 0.5%;
		z-index: 9999;
		width: 145px;
		height: 335px;
	}
	#txt {
		cursor: pointer;
		border: none;
		border-radius: 5px;
		width: 100%;
		height: 40px;
		color: white;
		font-family: "华文中宋";
		background-color: rgba(0, 0, 0, 0.5);
		text-align: center;
		font-size: 17px;
		font-weight: 900;
		text-shadow: 1px 2px 3px #464646;
		box-shadow: 2px 2px 3px #757575;
	}
	
	.a {
		text-decoration: none;
		display: inline-block;
		width: 130px;
		height: 35px;
		color: #000000;
		text-align: center;
		line-height: 35px;
		font-size: 17px;
		font-family: "华文中宋";
		font-weight: 900;
		border-radius: 5px;
		box-shadow: 2px 4px 6px #000;
		margin: 8px 6px 8px 6px;
		transition:all 0.1s linear 0s;
	}
	a:hover {
		transform: translate(0,-3px);
	}
	.a1 {
		background-color: rgba(0, 255, 0, 0.2);
	}
	.a2 {
		background-color: rgba(0, 170, 255, 0.2);
	}
	.a3 {
		background-color: rgba(255, 170, 0, 0.2);
	}
	.a4 {
		background-color: rgba(255, 0, 0, 0.2);
	} 
	.a5, .a6 {
		background-color: rgba(255, 0, 127, 0.2);
	}
</style>