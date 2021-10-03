<template>
  <div class="list-item" @click="onItemClick">
    <Row>
      <i-col :span="1" class="marker">
        <span class="marker-Icon" :class="['marker'+index]"></span>
      </i-col>
      <span class="title">{{data.name}}</span>
    </Row>
    <Row v-for="(v,k) in data.showlist" :key="k">
      <i-col :span="9" class="label">{{k.split("$")[0]}}：</i-col>
      <i-col :span="15" class="attr">{{v}} {{k.split("$").length===2 && v !==""?k.split("$")[1]:""}}</i-col>
    </Row>
    <Row>
      <span class="aTitle" @click="goHouseInfor(data.name,data.houseId)">查看小区详情➢</span>
    </Row>
  </div>
</template>

<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
import { Row, Col } from "iview";
import houseInfoId from "@/vuex/store";
import dataRap from "@/vuex/store";
import aroundInfo from "@/vuex/store";
import housePoint from "@/vuex/store";
export default {
  props: ["data", "index"],
  methods: {
    goHouseInfor(name, houseId) {
      debugger;
      console.log(this.data);
      Server.get({
        url: services.compareHouseDetails,
        params: {
          houseId: houseId
        }
      })
        .then(rsp => {
          if (rsp.status === 1) {
            houseInfoId.commit("houseInfoId", rsp);
          }
        })
        .then(
          Server.get({
            url: services.road,
            params: {
              name: name,
              tableName: "BUSSTATION",
                distance:this.distance
            }
          }).then(rsp => {
            debugger;
            if (rsp.status === 1) {
              aroundInfo.commit("aroundInfo", rsp);
              aroundInfo.commit("housueName", name);
              this.$router.push("/houseinfo");
            }
          })
        );
    },
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
  .aTitle {
    line-height: 10px;
    font-weight: bold;
    font-size: 12px;
    color: #19be6b;
    overflow: hidden;
    padding-left: 200px;
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

