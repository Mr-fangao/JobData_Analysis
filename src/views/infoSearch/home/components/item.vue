<template>
  <div class="list-item" @click="onItemClick"> </div>
</template>

<style lang="less" scoped>
	.list-item {
		padding: 5px;
		cursor: pointer;
		.title {line-height: 30px;font-weight: bold;font-size: 14px;color: #19be6b;overflow: hidden;padding-left: 15px;text-overflow: ellipsis;white-space: nowrap;}
		.aTitle {line-height: 10px;font-weight: bold;font-size: 12px;color: #19be6b;overflow: hidden;padding-left: 200px;text-overflow: ellipsis;white-space: nowrap;}
		.attr {color: #666;}
		.label {text-align: right;}
		&:hover {background: #f6f6f6;}
	}
</style>
