<template>
    <div>
    <Modal v-model="dialog1" footer-hide :mask-closable="false" width="380" draggable>
      <p slot="header" style="color:#19be6b;text-align:left">
      <Icon type="ios-stats"  color="#19be6b" size="23"/>
      <span>公共设施统计</span>
      </p>
      <Tabs size="small">
        <TabPane label="街道查询"> 
            <Form :label-width="75">
              <FormItem label="街道区域：" prop="zoning">
                <Select  v-model="Street" placeholder="选择街道区域">
                  <Option v-for="item in streetList" :key="item.value" :value="item.value">{{item.label}}</Option>
                </Select> 
              </FormItem>
              <FormItem style="text-align:right">
                  <Button type="primary" @click="getStreet">查询</Button>
              </FormItem>
            </Form>
        </TabPane>
        <TabPane label="自定义查询">
            <Form>
              <FormItem label="自定义查询：" prop="zoning">
                <Button shape="circle" title="自定义范围" @click="createPolygon">
                  <span class="icon-polygon" ></span>
                </Button>
              </FormItem>   
                <FormItem style="text-align:right">
                    <Button type="primary" @click="autoPolygon">查询</Button>
                </FormItem>
            </Form>
        </TabPane>
      </Tabs>
      </Modal>
      <Modal v-model="PublicFacility2" draggable scrollable :styles="{top: '50px'}" title="公共设施统计" width="600">
        <Table  size="small" stripe :columns="columns1" :data="data1"></Table>
        <div id="charts" style="width:600px;height:220px;"></div>
      </Modal> 
    </div>
 </template>
 <script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
import GDrawSketch from "@/map/api/4+/GDrawSketch";
import GDrawbuffer from "@/map/api/4+/GDrawBuffer";
import GConvertGeometry from "@/map/api/js/convert/GConvertGeometry";
var echarts = require("echarts");
export default {
  created() {
    this.$root.Bus.$on("eventSelectHouse", () => {
      this.dialog1 = true;
    });
  },
  data() {
    return {
      dialog1: false,
      autoshape: "",
      PublicFacility: false,
      PublicFacility2: false,
      streetList: [
        {
          value: "杨子街道",
          label: "杨子街道"
        },
        {
          value: "大王街道",
          label: "大王街道"
        },
        {
          value: "章广镇",
          label: "章广镇"
        },
        {
          value: "黄泥冈",
          label: "黄泥冈"
        },
        {
          value: "珠龙镇",
          label: "珠龙镇"
        },
        {
          value: "大柳镇",
          label: "大柳镇"
        },
        {
          value: "沙河镇",
          label: "沙河镇"
        },
        {
          value: "腰铺镇",
          label: "腰铺镇"
        },
        {
          value: "施集镇",
          label: "施集镇"
        },
        {
          value: "凤凰街",
          label: "凤凰街"
        },
        {
          value: "清流街",
          label: "清流街"
        },
        {
          value: "琅琊街",
          label: "琅琊街"
        },
        {
          value: "北门街",
          label: "北门街"
        },
        {
          value: "南门街",
          label: "南门街"
        },
        {
          value: "西门街",
          label: "西门街"
        },
        {
          value: "东门街",
          label: "东门街"
        },
        {
          value: "西涧街",
          label: "西涧街"
        },
        {
          value: "乌衣镇",
          label: "乌衣镇"
        },
        {
          value: "龙蟠街道",
          label: "龙蟠街道"
        }
      ],
      columns1: [
        {
          title: "设施名称",
          key: "name",
          align: "center"
        },
        {
          title: "设施数量",
          key: "number",
          align: "center"
        }
      ],
      data1: [
        {
          key: "medical",
          name: "医疗保健",
          number: ""
        },
        {
          key: "school",
          name: "学校",
          number: ""
        },
        {
          key: "govermentAgencies",
          name: "政府机构",
          number: ""
        },
        {
          key: "telecomHouse",
          name: "电讯营业厅",
          number: ""
        },
        {
          key: "ticket",
          name: "售票点",
          number: ""
        },
        {
          key: "publicFacilities",
          name: "公共设施",
          number: ""
        },
        {
          key: "station",
          name: "车站",
          number: ""
        }
      ],
      Street: "",
      myChart: null,
      automyChart: null
    };
  },
  methods: {
    createPolygon() {
      new GDrawSketch(window.mapview).then(gDraw => {
        this.gDraw = gDraw;
        this.gDraw.create("polygon");
        this.gDraw.on("create-complete", e => {
          let shape = mapApi.convert.toWKTByGeometry.ToWKT(e.geometry);
      
          this.autoshape = shape;
          parent.onemap.pubsub.publish("drawPolygon", shape);
        });
      });
    },
    autoPolygon() {
      this.PublicFacility2 = true;
      if (!this.automyChart) {
        this.automyChart = echarts.init(document.getElementById("charts"));
      }
      var _this = this;
      Server.post({
        url: services.autoStreet,
        params: {
          polygon: this.autoshape
        }
      }).then(function(res) {
        if (res.status === 1) {
          let xData = [];
          let yDate = [];
          _this.data1.forEach(element => {
            element.number = res.data[0][element.key]; //对应返回data数据对应的key值
       
            xData.push(element.name);
            yDate.push(res.data[0][element.key]);
          });
          _this.automyChart.setOption({
            color: ["#19be6b"],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            xAxis: [
              {
                type: "category",
                data: xData,
                axisTick: {
                  alignWithLabel: true
                },
                axisLabel: {
                  interval: 0
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    type: "dotted",
                    color: "#696969"
                  }
                }
              }
            ],
            yAxis: [
              {
                type: "value"
              }
            ],
            series: [
              {
                name: "数量",
                type: "bar",
                barWidth: "40%",
                data: yDate,
                label: {
                  normal: {
                    show: true,
                    position: "top"
                  }
                }
              }
            ]
          });
        } else {
          this.$Message.error(rsp.message);
        }
      });
    },
    getStreet() {
      this.PublicFacility2 = true;
      if (!this.myChart) {
        this.myChart = echarts.init(document.getElementById("charts"));
      }
      var _this = this;
      Server.get({
        url: services.streetquery,
        params: {
          name: _this.Street
        }
      }).then(function(res) {
        let xData = [];
        let yDate = [];
        _this.data1.forEach(element => {
          element.number = res.data[0][element.key]; //对应返回data数据对应的key值
      
          xData.push(element.name);
          yDate.push(res.data[0][element.key]);
        });
        _this.myChart.setOption({
          color: ["#19be6b"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: xData,
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                interval: 0
              },
              axisLine: {
                show: true,
                lineStyle: {
                  type: "dotted",
                  color: "#696969"
                }
              }
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          series: [
            {
              name: "数量",
              type: "bar",
              barWidth: "40%",
              data: yDate,
              label: {
                normal: {
                  show: true,
                  position: "top"
                }
              }
            }
          ]
        });
      });
    }
  },
  beforeDestroy() {
    this.$root.Bus.$off("eventSelectHouse");
  }
};
</script>
 