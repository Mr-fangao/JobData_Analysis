<template>
	<div class="main content">
		<div class="typer">
			<div class="typer-content">
				<p class="typer-static">I'm&nbsp;</p>
				<p class="typer-dynamic">
					<span class="cut">
						<span class="word" v-for="(letter,index) in words" :key="index">{{letter}}</span>
					</span>
					<span alt="模拟光标" class="typer-cursor"></span>
				</p>
			</div>
			<div class="login-btn">
				<Button id="btn" type="success" :loading="loading" long size="large" @click="checkLogin">点击进入系统<Icon type="md-paper-plane" size="25"/></Button>
			</div>
		</div>
		<br><br>
	</div>
</template>

<script>
	import {login} from "./js/login";
	import echarts from "echarts";
	import 'echarts/theme/macarons.js';
	import 'echarts-wordcloud/dist/echarts-wordcloud.js';
	import 'echarts-wordcloud/dist/echarts-wordcloud.min.js';
	export default {
		mixins: [login],
		data () {
			return {
				words:[], str:"网络招聘大数据分析与可视化系统", letters:[], order:1,
			}
		},
		watch:{
			order(old,newV){
				if(this.order%4 == 1){ this.str = "网络招聘大数据分析与可视化系统" }
				else if(this.order%4 == 2){ this.str = "网络招聘大数据分析与可视化系统" }
				else if(this.order%4 == 3){ this.str = "网络招聘大数据分析与可视化系统" }
				else{ this.str = "网络招聘大数据分析与可视化系统" }
			}
		},
		props: {
			delay: {type: Number,default: 0,},w: {type: Number,default: 0,},h: {type: Number,default: 0,},rotateDeg: {type: Number,default: 0,},
		},
		mounted() {
			this.begin();
		},
		methods:{
			begin(){            
				this.letters=this.str.split("")
				for(var i=0;i<this.letters.length;i++){
					setTimeout(this.write(i),i*100);
				}
			},
			back(){
				let L=this.letters.length;
				for(var i=0;i<L;i++){
					setTimeout(this.wipe(i),i*50);
				}
			},
			write(i){
				return ()=>{
					let L=this.letters.length;
					this.words.push(this.letters[i]);
					let that=this;
					if(i==L-1){ 
						setTimeout(function(){
							that.back();
						},2500);
					}
				}
			},
			wipe(i){
				return ()=>{
					this.words.pop(this.letters[i]);
					if(this.words.length==0){
						this.order++;
						let that=this;
						setTimeout(function(){
						 that.begin();
						},300);
					}
				}
			},
		}
	}
</script>


<style scoped lang="less">
	#btn{
		z-index:9999;
		font-size: 20px;
		font-weight: 600;
		width: 175px;height: 50px;line-height: 25px;
		border-color: rgba(0, 0, 0, 0.7);
		position: fixed;
		left: 45%;bottom: 15%;
		background-color: rgba(0, 0, 0, 0.7);}
	.main{
		margin: 0;
		padding: 0;
		position: absolute;
		width: 100%;
		height: 1700px;
		background: url(../../assets/img/lizi_cut.jpg) no-repeat;
		background-size:100% 100%;
		background-attachment:fixed;
		background-color: #000000;}
	.typer{margin-top: 2.75%;margin-left: 16%;display: inline-block;box-sizing: border-box;}
	.typer .typer-content{font-weight: bold;font-size: 60px;display: flex;flex-direction: row;letter-spacing: 2px}
	.typer-dynamic{position: relative;}
	.typer-static{
		color: #d5dfe0;
	}
	.cut{background: linear-gradient(to right, #d5dfe0, #3ae0ec);-webkit-background-clip: text;color: transparent;}
	.typer-cursor{position: absolute;height: 100%;width: 3px;top: 0;right: -10px;background-color: rgba(255, 0, 0, 0.5);animation: flash 1.5s linear infinite;}

	// 封面系统介绍
	.textDescription{cursor: pointer;color: #fff;float: left;font-size: 35px;width: 5%;height: 100%;writing-mode: vertical-rl;text-align: center;display:flex;flex-direction:column;justify-content:center;}
	.circle{width: 100%;height: 63px;border-radius: 50%;margin-bottom: 3px;background-color: rgba(221, 221, 221, 0.2);background-size: 100% 100%;cursor: pointer;}
</style>

