<template>
  <div class="list-item" @click="onItemClick">
    <Row>
      <i-col :span="1" class="marker"> <span class="marker-Icon" :class="['marker'+index]"></span> </i-col>
      <span class="title">{{data.name}}</span>
    </Row>
    <Row v-for="(v,k) in data.showlist" :key="k">
      <i-col :span="9" class="label">{{k.split("$")[0]}}：</i-col>
      <i-col :span="15" class="attr">{{v}} {{k.split("$").length===2 && v !==""?k.split("$")[1]:""}}</i-col>
    </Row>
  </div>
</template>

<script>
import { Row, Col } from "iview";
export default {
    props: ["data", "index"],
    methods: {
			onItemClick() {
				this.$emit("on-item-click", this.data);
			}
    },
    components: {
			iRow: Row,
			iCol: Col
    }
};
</script>
<style lang="less" scoped>
	.list-item {
		padding: 5px;
		cursor: pointer;
		.title {line-height: 30px;font-weight: bold;font-size: 14px;color: #19be6b;overflow: hidden;padding-left: 15px;text-overflow: ellipsis;white-space: nowrap;}
		.attr {color: #666;}
		.label {text-align: right;}
		&:hover {background: #f6f6f6;}
	}
</style>

