<template>
  <layout :style="{height:'100%'}">
    <Sider ref="side1" :width='180'>
      <sider-menu/>
    </Sider>
    <Content>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Breadcrumb>
          <Icon :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
          <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
        </Breadcrumb>
      </Header>
      <div style=" margin: 0 auto;margin-top: 5px;width:1300px;">
        <Button type="primary" @click="impor" style="margin-bottom:3px">导入数据</Button>
        <Table :columns="columns1" :data="data1" @on-select="handleChange"></Table>
        <!-- <Page :total="dataCount1" :page-size="pageSize1" show-total show-elevator/> -->
      </div>
      <div style=" margin: 0 auto;margin-top: 5px;width:1300px;height:670px">
        <gwRmap></gwRmap>
      </div>
      <router-view/>

    </Content>
    <Modal v-model="modal1" @on-ok="ok" :width="800" title="选择需要预测的小区数据">
      <Table stripe ref="selection" :columns="columns2" :data="data2" @on-select="handleChange"></Table>
    </Modal>
  </layout>

</template>
<script>
import SiderMenu from "@/views/main/siderMenu";
import axios from "axios";
import Server from "@/core/server";
import { services } from "@/core/config/services";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
import { constants } from "fs";
import gwr from "@/vuex/store";
import gwRmap from "@/map/components/gwRmap";
export default {
  data() {
    return {
      modal1: false,
      isPopup: true,
      housePoint: "",
      columns1: [
        {
          title: "预测小区",
          key: "name",
          align: "center",
          width: 100,
          fixed: "left"
        },
        {
          title: "相似小区",
          key: "foreName",
          align: "center",
          width: 100,
          fixed: "left"
        },
        {
          title: "地址",
          key: "address",
          align: "center",
          width: 200,
          fixed: "left"
        },
        {
          title: "房屋类型",
          key: "type",
          align: "center",
          width: 150,
          fixed: "left"
        },
        {
          title: "是否在售",
          key: "buildingCharact",
          align: "center",
          width: 150,
          fixed: "left"
        },
        {
          title: "GWR",
          align: "center",
          children: [
            {
              title: "地价",
              key: "houseDj",
              align: "center",
              width: 100
            },
            {
              title: "容积率",
              key: "houseRjl",
              align: "center",
              width: 100
            },
            {
              title: "绿化率",
              key: "houseLhl",
              align: "center",
              width: 100
            },
            {
              title: "学区",
              key: "schoolCut",
              align: "center",
              width: 100
            },
            {
              title: "商场",
              key: "market",
              align: "center",
              width: 100
            },
            {
              title: "公交站",
              key: "station",
              align: "center",
              width: 100
            },
            {
              title: "公园",
              key: "park",
              align: "center",
              width: 100
            }
          ]
        },
        {
          title: "预测价格",
          key: "price",
          align: "center",
          fixed: "right",
          width: 150
        }
      ],
      data1: [],
      columns2: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "小区",
          key: "name",
          align: "center"
        },
        {
          title: "地址",
          key: "address",
          align: "center"
        },
        {
          title: "房屋类型",
          key: "type",
          align: "center"
        },
        {
          title: "是否在售",
          key: "buildingCharact",
          align: "center"
        }
      ],
      data2: [],
      data3: [],
      newdata: "",
      newdata1: "",
      gwrPoint: ""
    };
  },
  created() {
    var optionss = localStorage.getItem("gwrPoint");
    var gwrPoint = JSON.parse(optionss);
    this.gwrPoint = gwrPoint;
  },
  methods: {
    impor() {
      this.modal1 = true;
      debugger;
      Server.get({
        url: services.houseSelect,
        params: {}
      }).then(rsp => {
        var _this = this;
        if (rsp.status === 1) {
          _this.data2 = rsp.data;
        }
      });
    },
    handleChange(selection, row) {
      var _this = this;
      _this.data3 = selection;
      var pushData = [];
      for (let i = 0; i < _this.data3.length; i++)
        pushData.push(_this.data3[i].name);
      _this.newdata = pushData.join(",");
      debugger;
    },
    ok() {
      debugger;
      var _this = this;
      //   Server.get({
      //     url: services.housePrice,
      //     params: {
      //       houseName: _this.newdata
      //     }
      //   }).then(rsp => {
      //     var _this = this;
      //     var arr1 = [];
      //     var gwrPoint = _this.gwrPoint;
      //     if (rsp.status === 1) {
      //       debugger;
      //       _this.housePoint = rsp.data;
      //       this.showGraphics();
      //       gwrPoint.forEach(itemData => {
      //         rsp.data.forEach((itemArr, index) => {
      //           if (itemArr.objectId === itemData.attributes.OBJECTID) {
      //             arr1.push(
      //               itemArr.name1,
      //               itemData.attributes.C1_DJ,
      //               itemData.attributes.C2_RJL,
      //               itemData.attributes.C3_LHL,
      //               itemData.attributes.C4_SCH,
      //               itemData.attributes.C5_SMAR,
      //               itemData.attributes.C6_BUS,
      //               itemData.attributes.C7_PARK
      //             );
      //             _this.newdata1 = arr1.join(",");
      //             console.log(_this.newdata1);
      //             debugger;
      //           }
      //         });
      //       });
      //     }
      //     Server.get({
      //       url: services.houseShow,
      //       params: {
      //         houseValue: _this.newdata1
      //       }
      //     }).then(rsp => {
      //       debugger;
      //       var _this = this;
      //       _this.data1 = rsp.data;
      //     });
      //   });
      // },
      Server.get({
        url: services.houseShow,
        params: {
          houseName: _this.newdata
        }
      }).then(rsp => {
        debugger;
        var _this = this;
        _this.data1 = rsp.data;
        _this.housePoint = rsp.data;
        _this.showGraphics();
      });
    },
    showGraphics() {
      console.log(this.housePoint);
      onemap.pubsub.publish("drawforeHouseWKT", {
        list: this.housePoint,
        popup: this.isPopup
      });
      onemap.pubsub.publish("drawHouseGWRByList", {
        list: this.housePoint,
        popup: this.isPopup
        // pan: this.isPan
      });
    }
  },
  components: {
    SiderMenu,
    gwRmap
  }
};
</script>
<style>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>

