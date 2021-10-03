<template>
  <Layout :style="{height:'100%'}">
    <!--<Sider ref="side1" :width='180'>-->
      <!--<sider-menu/>-->
    <!--</Sider>-->
    <Content>
      <div style="margin:0 auto;width:90%;">
        <table id="customers" style="margin-top: 60px">
          <thead>
            <tr>
              <th>小区名称</th>
              <th @click="education" title="查看教育资源可达性计算数据">教育资源可达性
                <Icon type="ios-book" />
              </th>
              <th @click="Medical" title="查看医疗资源可达性计算数据">医疗资源可达性
                <Icon type="md-add-circle" />
              </th>
              <th @click="traffic" title="查看交通资源可达性计算数据">交通资源可达性
                <Icon type="ios-car" />
              </th>
              <th @click="entertainment" title="查看休闲娱乐可达性计算数据">休闲娱乐可达性
                <Icon type="md-cart" />
              </th>
              <th>综合值</th>
            </tr>
          </thead>
          <tbody id="customerss"></tbody>
        </table>
        <Row>
          <Col span="12">
          <div id="trend" style="height: 400px;margin-top: 5px;margin-right: 5px; border: 1px solid  #dcdee2">
          </div>
          </Col>
          <Col span="12">
          <div id="comprise" style="height:400px;margin-top: 5px; margin-left: 5px;border: 1px solid  #dcdee2">
          </div>
          </Col>
        </Row>
        <Row type="flex" justify="end" class="code-row-bg" style="margin-top:6px">
          <Col span="5">
          <ButtonGroup shape="circle">
            <Button type="success" @click="back()">
              <Icon type="ios-arrow-back"></Icon>
              重新推荐
            </Button>
            <Button type="success" @click="map()">
              地图查看
              <Icon type="ios-arrow-forward"></Icon>
            </Button>
          </ButtonGroup>
          </Col>
        </Row>

        <Modal v-model="modal1" title="教育资源的中间过程数据" :styles="{top: '55px'}" width="700">
          <table id="customers">
            <thead>
              <tr>
                <th>小区名称</th>
                <th>人口</th>
              </tr>
            </thead>
            <tbody id="population"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th>公服设施</th>
                <th>服务能力</th>
              </tr>
            </thead>
            <tbody id="service"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>距离</th>
              </tr>
            </thead>
            <tbody id="distance"></tbody>
          </table>
        </Modal>

        <Modal v-model="modal2" title="医疗资源的中间过程数据" :styles="{top: '55px'}" width="700">
          <table id="customers">
            <thead>
              <tr>
                <th>小区名称</th>
                <th>人口</th>
              </tr>
            </thead>
            <tbody id="population2"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>服务能力</th>
              </tr>
            </thead>
            <tbody id="service2"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>距离</th>
              </tr>
            </thead>
            <tbody id="distance2"></tbody>
          </table>
        </Modal>

        <Modal v-model="modal3" title="交通资源的中间过程数据" :styles="{top: '55px'}" width="700">
          <table id="customers">
            <thead>
              <tr>
                <th>小区名称</th>
                <th>人口</th>
              </tr>
            </thead>
            <tbody id="population3"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>服务能力</th>
              </tr>
            </thead>
            <tbody id="service3"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>距离</th>
              </tr>
            </thead>
            <tbody id="distance3"></tbody>
          </table>
        </Modal>
        <Modal v-model="modal4" title="休闲娱乐的中间过程数据" :styles="{top: '55px'}" width="700">
          <table id="customers">
            <thead>
              <tr>
                <th>小区名称</th>
                <th>人口</th>
              </tr>
            </thead>
            <tbody id="population4"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>服务能力</th>
              </tr>
            </thead>
            <tbody id="service4"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>距离</th>
              </tr>
            </thead>
            <tbody id="distance4"></tbody>
          </table>
        </Modal>

      </div>
    </Content>
  </Layout>
</template>
<script>
import $ from "jquery";
import Server from "@/core/server";
import { services } from "@/core/config/services";
import dataRap from "@/vuex/store";
import SiderMenu from "@/views/main/siderMenu";
import mapHouse from "@/vuex/store";
var echarts = require("echarts");

export default {
  data() {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      tableData: {},
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0
    };
  },
  mounted() {
    this.getData();
    this.trendMap();
    this.compriseMap();
    this.qq();
  },
  methods: {
    qq() {
      // var recommend = this.tableData.houseInfo.sort(this.compare("level"));
      // var t = recommend.reverse();
      // console.log(this.tableData);
      // dataRap.commit("mapHouse", this.tableData.data.houseInfo);
      var tab = document.getElementById("customerss");
      for (var i = 0; i < 5; i++) {
        tab.insertRow(i);
        for (var j = 0; j < 6; j++) {
          var tt = this.tableData.data[i];
          for (var k in tt) {
            tab.rows[i].insertCell(j).innerHTML = tt[k];
            continue;
          }
          break;
        }
      }
    },

    education() {
      debugger;
      this.count1++;
      this.modal1 = true;
      if (this.count1 <= 1) {
        var userId = JSON.parse(sessionStorage.getItem("userId"));
        Server.get({
          url: services.processData,
          params: {
            serviceType: "education",
            userId: userId
          }
        }).then(rsp => {
          if (rsp.status === 1) {
            var tab1 = document.getElementById("population");
            var tab2 = document.getElementById("service");
            var tab3 = document.getElementById("distance");
            for (var i = 0; i < 5; i++) {
              tab1.insertRow(i);
              for (var j = 0; j < 2; j++) {
                var tt = rsp.data.peopleNumList[i];
                for (var k in tt) {
                  tab1.rows[i].insertCell(j).innerHTML = tt[k];
                  continue;
                }
                break;
              }
            }
            for (var i = 0; i < 100; i++) {
              tab2.insertRow(i);
              for (var j = 0; j < 2; j++) {
                var tt = rsp.data.serviceList[i];
                for (var k in tt) {
                  tab2.rows[i].insertCell(j).innerHTML = tt[k];
                  continue;
                }
                break;
              }
            }
            for (var i = 0; i < 100; i++) {
              tab3.insertRow(i);
              for (var j = 0; j < 2; j++) {
                var tt = rsp.data.distanceList[i];
                for (var k in tt) {
                  tab3.rows[i].insertCell(j).innerHTML = tt[k];
                  continue;
                }
                break;
              }
            }
          } else {
          }
        });
      }
    },
    Medical() {
      this.count2++;
      this.modal2 = true;
      if (this.count2 <= 1) {
        var userId = JSON.parse(sessionStorage.getItem("userId"));
        Server.get({
          url: services.processData,
          params: {
            serviceType: "medical",
            userId: userId
          }
        }).then(rsp => {
          if (rsp.status === 1) {
            var tab1 = document.getElementById("population2");
            var tab2 = document.getElementById("service2");
            var tab3 = document.getElementById("distance2");
            for (var i = 0; i < 5; i++) {
              tab1.insertRow(i);
              for (var j = 0; j < 2; j++) {
                var tt = rsp.data.peopleNumList[i];
                for (var k in tt) {
                  tab1.rows[i].insertCell(j).innerHTML = tt[k];
                  continue;
                }
                break;
              }
            }
            for (var i = 0; i < 100; i++) {
              tab2.insertRow(i);
              for (var j = 0; j < 2; j++) {
                var tt = rsp.data.serviceList[i];
                for (var k in tt) {
                  tab2.rows[i].insertCell(j).innerHTML = tt[k];
                  continue;
                }
                break;
              }
            }
            for (var i = 0; i < 100; i++) {
              tab3.insertRow(i);
              for (var j = 0; j < 2; j++) {
                var tt = rsp.data.distanceList[i];
                for (var k in tt) {
                  tab3.rows[i].insertCell(j).innerHTML = tt[k];
                  continue;
                }
                break;
              }
            }
          } else {
          }
        });
      }
    },
    traffic() {
      this.count3++;
      this.modal3 = true;
      if (this.count3 <= 1) {
        var userId = JSON.parse(sessionStorage.getItem("userId"));
        Server.get({
          url: services.processData,
          params: {
            serviceType: "station",
            userId: userId
          }
        }).then(rsp => {
          if (rsp.status === 1) {
            var tab1 = document.getElementById("population3");
            var tab2 = document.getElementById("service3");
            var tab3 = document.getElementById("distance3");
            for (var i = 0; i < 5; i++) {
              tab1.insertRow(i);
              for (var j = 0; j < 2; j++) {
                var tt = rsp.data.peopleNumList[i];
                for (var k in tt) {
                  tab1.rows[i].insertCell(j).innerHTML = tt[k];
                  continue;
                }
                break;
              }
            }
            for (var i = 0; i < 100; i++) {
              tab2.insertRow(i);
              for (var j = 0; j < 2; j++) {
                var tt = rsp.data.serviceList[i];
                for (var k in tt) {
                  tab2.rows[i].insertCell(j).innerHTML = tt[k];
                  continue;
                }
                break;
              }
            }
            for (var i = 0; i < 100; i++) {
              tab3.insertRow(i);
              for (var j = 0; j < 2; j++) {
                var tt = rsp.data.distanceList[i];
                for (var k in tt) {
                  tab3.rows[i].insertCell(j).innerHTML = tt[k];
                  continue;
                }
                break;
              }
            }
          } else {
          }
        });
      }
    },
    entertainment() {
      this.count4++;
      this.modal4 = true;
      if (this.count4 <= 1) {
        var userId = JSON.parse(sessionStorage.getItem("userId"));
        Server.get({
          url: services.processData,
          params: {
            serviceType: "entertainment",
            userId: userId
          }
        }).then(rsp => {
          if (rsp.status === 1) {
            var tab1 = document.getElementById("population4");
            var tab2 = document.getElementById("service4");
            var tab3 = document.getElementById("distance4");
            for (var i = 0; i < 5; i++) {
              tab1.insertRow(i);
              for (var j = 0; j < 2; j++) {
                var tt = rsp.data.peopleNumList[i];
                for (var k in tt) {
                  tab1.rows[i].insertCell(j).innerHTML = tt[k];
                  continue;
                }
                break;
              }
            }
            for (var i = 0; i < 100; i++) {
              tab2.insertRow(i);
              for (var j = 0; j < 2; j++) {
                var tt = rsp.data.serviceList[i];
                for (var k in tt) {
                  tab2.rows[i].insertCell(j).innerHTML = tt[k];
                  continue;
                }
                break;
              }
            }
            for (var i = 0; i < 100; i++) {
              tab3.insertRow(i);
              for (var j = 0; j < 2; j++) {
                var tt = rsp.data.distanceList[i];
                for (var k in tt) {
                  tab3.rows[i].insertCell(j).innerHTML = tt[k];
                  continue;
                }
                break;
              }
            }
          } else {
          }
        });
      }
    },
    back() {
      this.$router.push("/recommendation/factor");
    },
    map() {
      this.$router.push("/mapMatching");
    },
    getData() {
      this.tableData = dataRap.state.dataDeatil;
      console.log(this.tableData);
    },
    trendMap() {
      if (!this.trend) {
        this.trend = echarts.init(document.getElementById("trend"));
      }
      this.trend.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          type: "scroll",
          top: 10,
          data: [
            "教育资源可达性",
            "医疗资源可达性",
            "交通资源可达性",
            "休闲娱乐可达性"
          ]
        },
        grid: {
          left: "3%",
          right: "14%",
          bottom: "3%",
          containLabel: true
        },
        yAxis: {
          type: "value"
        },
        xAxis: {
          type: "category",
          data: [
            this.tableData.data[0].name,
            this.tableData.data[1].name,
            this.tableData.data[2].name,
            this.tableData.data[3].name,
            this.tableData.data[4].name
          ]
        },
        series: [
          {
            name: "教育资源可达性",
            type: "bar",
            color:"#ffdb5c",
            stack: "总量",
            barMaxWidth: 50,
            label: {
              normal: {
                show: false,
                position: "top"
              }
            },
            data: [
              this.tableData.data[0].educationLevel,
              this.tableData.data[1].educationLevel,
              this.tableData.data[2].educationLevel,
              this.tableData.data[3].educationLevel,
              this.tableData.data[4].educationLevel
            ]
          },
          {
            name: "医疗资源可达性",
            type: "bar",
              color:"#71f6f9",
            stack: "总量",
            barMaxWidth: 50,
            label: {
              normal: {
                show: false,
                position: "top"
              }
            },
            data: [
              this.tableData.data[0].medicalLevel,
              this.tableData.data[1].medicalLevel,
              this.tableData.data[2].medicalLevel,
              this.tableData.data[3].medicalLevel,
              this.tableData.data[4].medicalLevel
            ]
          },
          {
            name: "交通资源可达性",
            type: "bar",
              color:"#37a2da",
            stack: "总量",
            barMaxWidth: 50,
            label: {
              normal: {
                show: false,
                position: "top"
              }
            },
            data: [
              this.tableData.data[0].trafficLevel,
              this.tableData.data[1].trafficLevel,
              this.tableData.data[2].trafficLevel,
              this.tableData.data[3].trafficLevel,
              this.tableData.data[4].trafficLevel
            ]
          },
          {
            name: "休闲娱乐可达性",
            type: "bar",
            stack: "总量",
              color:"#19be6b",
            barMaxWidth: 50,
            label: {
              normal: {
                show: false,
                position: "top"
              }
            },
            data: [
              this.tableData.data[0].entertainmentLevel,
              this.tableData.data[1].entertainmentLevel,
              this.tableData.data[2].entertainmentLevel,
              this.tableData.data[3].entertainmentLevel,
              this.tableData.data[4].entertainmentLevel
            ]
          }
        ]
      });
    },
    compriseMap() {
      if (!this.comprise) {
        this.comprise = echarts.init(document.getElementById("comprise"));
      }
      this.comprise.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
          color : [
              '#19be6b', '#37a2da', '#71f6f9', '#FF8C00', '#ffdb5c', '#FE8463',
          ],
        legend: {
          type: "scroll",
          top: 10,
          data: [
            this.tableData.data[0].name,
            this.tableData.data[1].name,
            this.tableData.data[2].name,
            this.tableData.data[3].name,
            this.tableData.data[4].name
          ]
        },
        series: [
          {
            name: "综合值对比",
            type: "pie",
            radius: "55%",
            center: ["45%", "55%"],
            data: [
              {
                value: this.tableData.data[0].level,
                name: this.tableData.data[0].name
              },
              {
                value: this.tableData.data[1].level,
                name: this.tableData.data[1].name
              },
              {
                value: this.tableData.data[2].level,
                name: this.tableData.data[2].name
              },
              {
                value: this.tableData.data[3].level,
                name: this.tableData.data[3].name
              },
              {
                value: this.tableData.data[4].level,
                name: this.tableData.data[4].name
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  },
    components: {
        SiderMenu
    }
};
</script>
<style lang="less">
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  width: 100%;
  border-collapse: collapse;
}
#customers td,
#customers th {
  font-size: 1.1em;
  border: 1px solid #19be6b;
  text-align: center;
  padding: 3px 7px 2px 7px;
  width: 350px;
}
#customers th {
  font-size: 1.2em;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 4px;
  background-color: #19be6b;
  color: #ffffff;
  cursor: pointer;
}
#customers tr.alt td {
  color: #000000;
  background-color: #eaf2d3;
}
</style>
