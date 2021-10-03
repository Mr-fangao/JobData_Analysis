<template>
  <div class="dock"> </div>
</template>

<style lang="less" scoped>
	.dock {
		position: absolute;background: white;z-index: 3;top: 75px;bottom: 0;width: 320px;transition: all 0.2s;
		border-right: 1px solid #d2d2d2;border-left: 1px solid #d2d2d2;-webkit-transition: all 0.2s;
		.dock-section {@cap: 37px;height: calc(~"100% - @{cap}");}
		.dock-header {
			padding: 0 15px;background: #f8f8f8;
			.wrapper {
				height: 37px;
				line-height: 37px;
				border-bottom: 1px solid #d2d2d2;
				.title {font-size: 14px;font-weight: 600;}
				.closebtn {float: right;font-size: 16px;cursor: pointer;&:hover {color: red;}}
			}
		}
	}
	header {padding: 10px 20px;background: #f8f8f8;height: 210px;}
	section {overflow: hidden;overflow-y: scroll;}
	nav {
		height: 30px;background: #f8f8f8;border-bottom: 1px solid #d2d2d2;
		ul {float: left;}
		li {width: 70px;padding: 5px 10px 6px;margin-left: 20px;text-align: center;background: #fff;border: 1px solid #d2d2d2;border-bottom: 0;}
		.result {float: right;margin: 4px 20px 0 0;.total {color: #19be6b;font-size: 16px;}}
	}
	.title {font-size: 14px;color: black;padding-left: 5px;}
	.closebtn {float: right;font-size: 16px;cursor: pointer;padding: 10px 0px 5px 5px;}
	.label {text-align: right;padding: 5px 8px 0 0;}
</style>
