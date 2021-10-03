<template>
  <div class="list-item" @click="onItemClick">
    <Row>
      <i-col :span="3" class="marker">
        <span class="marker-Icon" :class="['marker'+id]"></span>
      </i-col>
      <span class="title">{{data.name}}</span>
    </Row>
    <Row v-for="(v,k) in data.attribute" :key="k">
      <!-- 遍历属性列表 -->
      <i-col :offset="1" :span="7" class="label">{{k.split("$")[0]}}：</i-col>
      <i-col :span="14" class="attr">{{v}} {{(v !="" &&k.split("$").length===2)?k.split("$")[1]:""}}</i-col>
    </Row>
  </div>
</template>

<script>
import { Row, Col } from "iview";
export default {
  props: {
    data: {
      type: Object,
      default: {}
    },
    id: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      label: "",
      unit: ""
    };
  },
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
  .marker-Icon {
    margin-left: 7px;
  }
  .title {
    line-height: 30px;
    font-weight: bold;
    font-size: 14px;
    color: #19be6b;
    overflow: hidden;
    padding-left: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .attr {
    color: #666;
  }
  .label {
    text-align: right;
  }
  &:hover {
    background: #f6f6f6;
  }
}
</style>


