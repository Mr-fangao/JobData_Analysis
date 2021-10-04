<template>
  <div id="mapContent">
    <iframe id="rythemMap" src="../../../../public/ThematicMaps/ThematicMaps/heatmap_test.html" frameborder="0"></iframe>
  </div>
</template>

<style lang="less" scoped>
	// 图例
	#legend{
		position: absolute;
		bottom:0.75%;
		right:0.35%;
		width: 86px;
		height: 250px;
		background-color: rgba(0, 0, 0, 0.4);
	}
	
	
	//左表样式
	// 拐角样式
	.angle-border{
		position: absolute;
		width: 20px;
		height: 20px;
	}
	.left-top-border{
		top: -2.5px;
		left: -2.5px;
		border-top-left-radius: 5px;
		border-left: 4px solid rgba(255,255,255,0.8);
		border-top: 4px solid rgba(255,255,255,0.8);
	}
	.right-top-border{
		top: -2.5px;
		right: -2.5px;
		border-top-right-radius: 5px;
		border-right: 4px solid rgba(255,255,255,0.8);
		border-top: 4px solid rgba(255,255,255,0.8);
	}
	.left-bottom-border{
		bottom: -2.5px;
		left: -2.5px;
		border-bottom-left-radius: 5px;
		border-bottom: 4px solid rgba(255,255,255,0.8);
		border-left: 4px solid rgba(255,255,255,0.8);
	}
	.right-bottom-border{
		bottom: -2.5px;
		right: -2.5px;
		border-bottom-right-radius: 5px;
		border-right: 4px solid rgba(255,255,255,0.8);
		border-bottom: 4px solid rgba(255,255,255,0.8);
	}
	
	#mapContent{
		width: 100%; height: 698px;
	}
	#rythemMap{
		width: 100%;
		height: 100%;
	}
	#echartsContent{
		position: absolute;
		bottom: 0.75%;
		left: 0.2%;
		width: 22%;
		height: 91.25%;
		border-width: 0.1px;
		border-color: rgba(255, 255, 255, 0.3);
		border-style: solid;
		background-color: rgba(0, 0, 0, 0.6);
	}
	#bottomChart{
		height: 268px;
		width: 70.95%;
		border-width: 0.1px;
		border-color: rgba(255, 255, 255, 0.3);
		border-style: solid;
		background-color: rgba(0, 0, 0, 0.6);
		position: absolute;
		bottom: 0.75%;
		right: 6.5%;
	}
	.tab {
		display: inline-block;
		text-align: center;
		font-size: 18px;
		width: 50%;
	}
	.chartTab{
		cursor:pointer;
		color: #fff;
	}
	.tab1{
		background-color: rgba(0,0,0,0.8);
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	.tab2{
		background-color: rgba(0,0,0,0.7);
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.tab1:hover,.tab2:hover {
		box-shadow: 0px 2px 5px #ffffff;
	}
	
	// 底部图表
	// 拐角样式
	.angle-border2{
		position: absolute;
		width: 20px;
		height: 20px;
	}
	.left-top-border2{
		top: -2.5px;
		left: -2.5px;
		border-top-left-radius: 5px;
		border-left: 4px solid rgba(255,255,255,0.8);
		border-top: 4px solid rgba(255,255,255,0.8);
	}
	.right-top-border2{
		top: -2.5px;
		right: -2.5px;
		border-top-right-radius: 5px;
		border-right: 4px solid rgba(255,255,255,0.8);
		border-top: 4px solid rgba(255,255,255,0.8);
	}
	.left-bottom-border2{
		bottom: -2.5px;
		left: -2.5px;
		border-bottom-left-radius: 5px;
		border-bottom: 4px solid rgba(255,255,255,0.8);
		border-left: 4px solid rgba(255,255,255,0.8);
	}
	.right-bottom-border2{
		bottom: -2.5px;
		right: -2.5px;
		border-bottom-right-radius: 5px;
		border-right: 4px solid rgba(255,255,255,0.8);
		border-bottom: 4px solid rgba(255,255,255,0.8);
	}
	.city {
		display: inline-block;
		text-align: center;
		line-height: 27px;
		font-size: 5px;
		width: 48px;
		height: 27px;
		border-radius: 3px;
		margin-right: 2px;
		margin-top: 1.5px;
	}
	.city:hover {
		box-shadow: 2px 2px 5px #ff5500;
	}
	.city0{
		width: 85px;
		margin-right: 27px;
		margin-left: 1.5px;
		border-top-left-radius: 0px;
		background-color: rgba(255, 93, 0, 0.5);
	}
	.city4{
		margin-right: 10px;
	}
	.city19{
		border-top-right-radius: 0px;
	}
	.t0{
		background-color: rgba(255, 0, 0, 0.8);
	}
	.t0:hover {
		box-shadow: 2px 2px 5px rgba(255, 0, 0, 0.8);
	}
	.t1{
		background-color: rgba(255, 32, 35, 0.6);
	}
	.t1:hover {
		box-shadow: 2px 2px 5px rgba(255, 39, 53, 0.6);
	}
	.cityName{
		cursor:pointer;
		color: #fff;
		font-weight: bold;
		font-size: 15px;
	}
</style>


