<template>
  <Card style="margin: 10px;">
    <div title="数据详情">
      <div class="group-panel-box blue">
        <div class="panel-title">简单查询</div> <div class="panel-line"></div>
      </div>
    </div>
    <div style="overflow: hidden;">
      <div style="float: right">
        <Input v-model="value" placeholder="请输入岗位名称" style="width: 180px; border: rgba(0, 0, 0, 0.5);margin: 10px;" />
        <Button type="success" @click="getOneinfo" class="submit" style="background: rgba(0, 0, 0, 0.5); border-color: rgba(0, 0, 0, 0.5); font-weight: 900;">查询 </Button>
      </div>
    </div>
    <Table height="520" stripe border :columns="columns5" :data="data5"></Table>
  </Card>
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
import houseInfoId from "@/vuex/store";
import dataRap from "@/vuex/store";
import aroundInfo from "@/vuex/store";
import housePoint from "@/vuex/store";
export default {
  data() {
    return {
      form:{},
      distance: "1000",
      value: "",
      columns5: [
        {type: "index",width: 150,align: "center",title: "ID",},
        {title: "公司名称",key: "公司名称",align: "center",},
        {title: "岗位名称",width: 240,key: "职位名称",align: "center",},
        {title: "工作地区",key: "工作地点",align: "center",},
				{title: "薪资范围",key: "薪金",align: "center",},
				{title: "学历要求",key: "学历要求",align: "center",},
        {title: "工作经验",key: "工作经验",align: "center",},
				{title: "发布日期",key: "工作经验",align: "center",},
        {
          title: "详细信息",key: "action",width: 150,align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {type: "success",size: "small",},
                  style: {marginRight: "5px",},
                  on: {
                    click: () => { this.getHouseInfo(params.row, params.index); },
                  },
                },
                "详情"
              ),
            ]);
          },
        },
      ],
      data5: [],
      houseShape: [],
      houseId: [],
    };
  },
  created() {
    this.getinfo();
  },
  methods: {
    getHouseInfo(currentRow, index) {
      currentRow.Index = index;
      this.selectedRow = currentRow;
      var row = this.selectedRow;
      this.houseName = row.neighborhood;
      this.houseId = row.id;
      housePoint.commit("housePoint", currentRow.Shape);
      Server.get({
        url: services.compareHouseDetails,
        params: {
          houseId: this.houseId,
        },
      }).then((rsp) => {
        if (rsp.code === 20000) {
          houseInfoId.commit("houseInfoId", rsp);
          // console.log(houseInfoId)
          aroundInfo.commit("aroundInfo", rsp);
          aroundInfo.commit("housueName", this.houseName);
          this.$router.push("/houseinfo");
        }
      });
    },
    getinfo() {
      var _this = this;
      Server.get({
        url: services.getallinfo,
        params: {
          name: _this.value,
        },
      }).then(function (res) {
        // console.log(res);
        _this.data5 = res.data;
        // console.log(_this.data5);
      });
    },
    getOneinfo() {
      var _this = this;
      Server.get({
        url: services.getOneinfo,
        params: {
          name: _this.value,
        },
      }).then(function (res) {
        _this.data5 = res.data;
        // console.log(_this.data5);
      });
    },
  },
};
</script>
<style lang="less" >
.submit {margin: 10px;margin-right: 0;}
.pageFoot {margin-top: 10px;float: right;}
.group-panel-box {
  &.blue {.panel-title {background: rgba(0, 0, 0, 0.5);}.panel-line {background: rgba(0, 0, 0, 0.5);}}
  .panel-title {float: left;padding: 0 10px;height: 30px;line-height: 30px;color: white;font-size: 14px;font-weight: 900;margin-left: 10px;clear: both;}
  .panel-line {height: 2px;clear: both;}
}

.slelectInput {width: 200px;float: right;}

.data-view {
  padding: 20px;height: 1450px;
  .group-header {height: 25px;}
  .ivu-row {.left {padding-right: 10px;}.right {padding-left: 10px;}}
}
.demo-spin-icon-load {animation: ani-demo-spin 1s linear infinite;}
</style>
