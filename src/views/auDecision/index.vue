<template>
  <Layout :style="{height:'100%'}">
    <Content>
      <houseCompare></houseCompare>
      <router-view/>
    </Content>
  </Layout>
</template>
<script>
	import houseCompare from "./components/houseCompare";
	export default {
		data() {
			return {show: true};
		},
		mounted() {
			var roleid = JSON.parse(sessionStorage.getItem("roleId"));
			if (roleid === "R0001" || roleid === "R0002") {
				this.show = true;
			} else {
				this.show = false;
			}
		},
		methods: {
			openCompare() {
				this.$root.Bus.$emit("eventCompare");
			}
		},
		components: {houseCompare}
	};
</script>
<style lang="less" scoped></style>



