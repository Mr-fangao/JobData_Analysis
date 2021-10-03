<template>
	<div>
		<br>
		<div class="btnTitle">
			<div class="btn-bg" :class="{bg:time == 1}" @click="changeBg(1)">15天</div>
			<div class="btn-bg" :class="{bg:time == 2}" @click="changeBg(2)">30天</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				time: 1
			}
		},
		methods: {
			changeBg(index) {
				if (index === 1 || index === 2) {
					this.time = index
				} else {
					this.sort = index
				}
			}
		}
	}
</script>

<style>
	.bg {
		background-color: rgb(12, 197, 89);
	}

	.btnTitle {
		display: flex;
		width: 400px;
		border: 1px solid #ccc;
		background-color: #fff;
		margin-left: 10px;
		border-radius: 5px;

		.btn-bg {
			width: 50%;
			height: 40px;
			text-align: center;
			line-height: 40px;
			border-radius: 5px;
		}
	}
</style>
