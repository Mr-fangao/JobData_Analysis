<template>
  <Layout :style="{height:'100%'}">
    <Content>
      <div style="margin: 0 auto;width:1200px;">
        <Row>
          <Col span="24">
          <Card style="height:700px">
            <div slot="title">
              <Icon type="md-aperture" size="20" />
              <strong>
                <span style="margin-left: 5px;font-size: 18px">影响因子权重调整</span>
              </strong>
            </div>
            <Form :model="formItem" :label-width="80">
              <p>小区特征</p>
              <Row>
                <Col span="12">
                <FormItem label="楼层：">
                  <CheckboxGroup v-model="social">
                    <Checkbox label="低层"></Checkbox>
                    <Checkbox label="多层"></Checkbox>
                    <Checkbox label="小高层"></Checkbox>
                    <Checkbox label="高层"></Checkbox>
                    <Checkbox label="超高层"></Checkbox>
                  </CheckboxGroup>
                </FormItem>
                </Col>
                <Col span="12">
                <FormItem label="绿化率：">
                  <CheckboxGroup v-model="social">
                    <Checkbox label="25%-30%"></Checkbox>
                    <Checkbox label="30%-40%"></Checkbox>
                    <Checkbox label="40%-45%"></Checkbox>
                    <Checkbox label="45%-50%"></Checkbox>
                  </CheckboxGroup>
                </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                <FormItem label="户型：">
                  <CheckboxGroup v-model="social">
                    <Checkbox label="平层户型"></Checkbox>
                    <Checkbox label="错层户型"></Checkbox>
                    <Checkbox label="跃层户型"></Checkbox>
                    <Checkbox label="复式户型"></Checkbox>
                  </CheckboxGroup>
                </FormItem>
                </Col>
                <Col span="12">
                <FormItem label="装修：">
                  <CheckboxGroup v-model="social">
                    <Checkbox label="精装修"></Checkbox>
                    <Checkbox label="普通装修"></Checkbox>
                    <Checkbox label="毛坯房"></Checkbox>
                  </CheckboxGroup>
                </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="13">
                <FormItem label="学区选择：">
                  <Select v-model="model1" multiple style="width:250px" placeholder="选择小学">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">
                      {{ item.label }}
                    </Option>
                  </Select>
                </FormItem>
                </Col>
                <Col span="11">
                <Select v-model="model2" multiple style="width:250px" placeholder="选择中学">
                  <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}
                  </Option>
                </Select>
                </Col>
              </Row>

              <Divider orientation="right">小区筛选</Divider>
              <p>周边设施</p>
              <Row>
                <Col span="10">
                <FormItem label="教育">
                  <Slider v-model="formItem.school" :step="10" show-stops @on-input="add()"></Slider>
                </FormItem>
                </Col>
                <Col span="1">
                <p style="margin: 7px">{{formItem.schools}}%</p>
                </Col>
                <Col span="13" style="padding: 7px;padding-left: 60px">
                <CheckboxGroup v-model="education1">
                  <Checkbox label="幼儿园"></Checkbox>
                </CheckboxGroup>
                <CheckboxGroup v-model="education2">
                  <Checkbox label="小学"></Checkbox>
                </CheckboxGroup>

                <Poptip trigger="hover" placement="bottom-start">
                  <Checkbox label="中学" :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">中学
                  </Checkbox>
                  <div class="api" slot="content">
                    <CheckboxGroup v-model="education3" @on-change="checkAllGroupChange">
                      <Checkbox label="一级中学"></Checkbox>
                    </CheckboxGroup>
                    <CheckboxGroup v-model="education4" @on-change="checkAllGroupChange">
                      <Checkbox label="二级中学"></Checkbox>
                    </CheckboxGroup>
                  </div>
                </Poptip>
                <CheckboxGroup v-model="education5">
                  <Checkbox label="一级大学">大学</Checkbox>
                </CheckboxGroup>
                </Col>
              </Row>
              <Row>
                <Col span="10">
                <FormItem label="医疗">
                  <Slider v-model="formItem.hosptial" :step="10" show-stops @on-input="add"></Slider>
                </FormItem>
                </Col>
                <Col span="1">
                <p style="margin: 7px">{{formItem.hosptials}}%</p>
                </Col>
                <Col span="13" style="padding: 7px;padding-left: 60px">
                <CheckboxGroup v-model="Medical1">
                  <Checkbox label="三甲医院"></Checkbox>
                </CheckboxGroup>
                <CheckboxGroup v-model="Medical2">
                  <Checkbox label="一级医疗设施"></Checkbox>
                </CheckboxGroup>
                <CheckboxGroup v-model="Medical3">
                  <Checkbox label="二级医疗设施"></Checkbox>
                </CheckboxGroup>
                </Col>
              </Row>
              <Row>
                <Col span="10">
                <FormItem label="交通">
                  <Slider v-model="formItem.station" :step="10" show-stops @on-input="add"></Slider>
                </FormItem>
                </Col>
                <Col span="1">
                <p style="margin: 7px">{{formItem.stations}}%</p>
                </Col>
                <Col span="13" style="padding: 7px;padding-left: 60px">
                <CheckboxGroup v-model="traffic1">
                  <Checkbox label="火车站"></Checkbox>
                </CheckboxGroup>
                <CheckboxGroup v-model="traffic2">
                  <Checkbox label="汽车站"></Checkbox>
                </CheckboxGroup>
                <CheckboxGroup v-model="traffic3">
                  <Checkbox label="高铁站"></Checkbox>
                </CheckboxGroup>
                <CheckboxGroup v-model="traffic4">
                  <Checkbox label="公交站"></Checkbox>
                </CheckboxGroup>
                </Col>
              </Row>
              <Row>
                <Col span="10">
                <FormItem label="休闲娱乐">
                  <Slider v-model="formItem.market" :step="10" show-stops @on-input="add"></Slider>
                </FormItem>
                </Col>
                <Col span="1">
                <p style="margin: 7px">{{formItem.markets}}%</p>
                </Col>
                <Col span="13" style="padding: 7px;padding-left: 60px">
                <CheckboxGroup v-model="entertainment1">
                  <Checkbox label="市场"></Checkbox>
                </CheckboxGroup>
                <CheckboxGroup v-model="entertainment2">
                  <Checkbox label="商场超市"></Checkbox>
                </CheckboxGroup>
                <CheckboxGroup v-model="entertainment3">
                  <Checkbox label="餐饮"></Checkbox>
                </CheckboxGroup>
                <CheckboxGroup v-model="entertainment4">
                  <Checkbox label="公园"></Checkbox>
                </CheckboxGroup>
                </Col>
              </Row>
            </Form>
            <div style="text-align: center;margin-top:5px">
              <Button style="margin-right: 20px" type="success" @click="showTable">确定</Button>
              <Button style="margin-right: 80px">重置</Button>
            </div>
          </Card>
          </Col>
          <!--<Col span="4">-->
          <!--<div style="  margin:0">-->
            <!--<img class="light" v-show="!downIcon" @click="change" src="../../../assets/img/lightbulb1.png">-->
            <!--<img class="light" v-show="downIcon" @click="change" src="../../../assets/img/lightbulb2.png">-->
            <!--<Alert type=success id="tip" style="width:200px;margin:0">-->
              <!--<h3 style="margin-left:6px">用户提示</h3>-->
              <!--<p style="font-weight: normal;font-size: 12px;margin-left:6px">-->
                <!--在使用房源推荐功能之前，需完善用户个人信息，以此确定您的购房类型在使用房源推荐功能之前以此确定您的购房类型。</p>-->
              <!--<ButtonGroup shape="circle">-->
                <!--<Button type="primary" size="small" @click="push" style="margin-left:4px">-->
                  <!--可达性模型-->
                  <!--<Icon type="ios-arrow-forward"></Icon>-->
                <!--</Button>-->
              <!--</ButtonGroup>-->
            <!--</Alert>-->

          <!--</div>-->
          <!--</Col>-->
        </Row>
      </div>
    </Content>
  </Layout>
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
import dataRap from "@/vuex/store";
export default {
  computed: {
    color() {
      let color = "#2db7f5";
      return color;
    }
  },
  data() {
    return {
        social:["多层"," 小高层","30%-40%","40%-45%","错层户型","复式户型","精装修","普通装修"],
      education1: [],
      education2: [],
      education3: [],
      education4: [],
      education5: [],
      Medical1: [],
      Medical2: [],
      Medical3: [],
      traffic1: [],
      traffic2: [],
      traffic3: [],
      traffic4: [],
      entertainment1: [],
      entertainment2: [],
      entertainment3: [],
      entertainment4: [],
      form: {
        educationGrade1: "",
        educationGrade2: "",
        educationGrade3: "",
        educationGrade4: "",
        educationGrade5: "",
        medicalGrade1: "",
        medicalGrade2: "",
        medicalGrade3: "",
        entertainmentGrade1: "",
        entertainmentGrade2: "",
        entertainmentGrade3: "",
        entertainmentGrade4: "",
        trafficGrade1: "",
        trafficGrade2: "",
        trafficGrade3: "",
        educationRate: "",
        medicalRate: "",
        entertainmentRate: "",
        trafficRate: "",
        userId: ""
      },
      cityList: [
        {
          value: "会峰小学",
          label: "会峰小学"
        },
        {
          value: "紫薇小学",
          label: "紫薇小学"
        },
        {
          value: "逸夫小学",
          label: "逸夫小学"
        },
        {
          value: "城南小学",
          label: "城南小学"
        },
        {
          value: "永乐小学",
          label: "永乐小学"
        },
        {
          value: "湘西路小学",
          label: "湘西路小学"
        },
        {
          value: "杨子路小学",
          label: "杨子路小学"
        },
        {
          value: "琅琊路小学",
          label: "琅琊路小学"
        },
        {
          value: "解放小学",
          label: "解放小学"
        },
        {
          value: "清流小学",
          label: "清流小学"
        },
        {
          value: "湖西路小学",
          label: "湖西路小学"
        },
        {
          value: "实验小学",
          label: "实验小学"
        },
        {
          value: "第二实验小学",
          label: "第二实验小学"
        }
      ],
      cityList2: [
        {
          value: "滁州二中",
          label: "滁州二中"
        },
        {
          value: "滁州三中",
          label: "滁州三中"
        },
        {
          value: "滁州五中",
          label: "滁州五中"
        },
        {
          value: "滁州六中",
          label: "滁州六中"
        },
        {
          value: "滁州七中",
          label: "滁州七中"
        },
        {
          value: "滁州八中",
          label: "滁州八中"
        },
        {
          value: "东坡中学",
          label: "东坡中学"
        }
      ],
      model1: [],
      model2: [],
      indeterminate: false,
      checkAll: false,
      checkAllGroup: [],
      downIcon: true,
      percent1: 30,
      percent2: 20,
      percent3: 50,
      formItem: {
        greeningRate: "25",
        parking: "25",
        floor: "25",
        plotRatio: "25",
        school: 20,
        schools: "",
        hosptials: "",
        stations: "",
        markets: "",
        hosptial: 20,
        station: 40,
        market: 20
      }
    };
  },
  mounted() {
    this.add();
  },
  methods: {
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.checkAllGroup = ["一级中学", "二级中学"];
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      if (data.length === 2) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    },
    add() {
      let sum =
        this.formItem.school +
        this.formItem.hosptial +
        this.formItem.station +
        this.formItem.market;
      this.formItem.schools = (this.formItem.school / sum * 100).toFixed(2);
      this.formItem.hosptials = (this.formItem.hosptial / sum * 100).toFixed(2);
      this.formItem.stations = (this.formItem.station / sum * 100).toFixed(2);
      this.formItem.markets = (this.formItem.market / sum * 100).toFixed(2);
    },
    showTable() {
      var userid = JSON.parse(sessionStorage.getItem("userId"));
      this.form.userId =userid;
      if (typeof this.education1[0] === "undefined") {
        this.education1[0] = "";
        this.form.educationGrade1 = this.education1[0];
      } else {
        this.form.educationGrade1 = this.education1[0];
      }

      if (typeof this.education2[0] === "undefined") {
        this.education2[0] = "";
        this.form.educationGrade2 = this.education2[0];
      } else {
        this.form.educationGrade2 = this.education2[0];
      }

      if (typeof this.education3[0] === "undefined") {
        this.education3[0] = "";
        this.form.educationGrade3 = this.education3[0];
      } else {
        this.form.educationGrade3 = this.education3[0];
      }

      if (typeof this.education4[0] === "undefined") {
        this.education4[0] = "";
        this.form.educationGrade4 = this.education4[0];
      } else {
        this.form.educationGrade4 = this.education4[0];
      }

      if (typeof this.education5[0] === "undefined") {
        this.education5[0] = "";
        this.form.educationGrade5 = this.education5[0];
      } else {
        this.form.educationGrade5 = this.education5[0];
      }

      if (typeof this.Medical1[0] === "undefined") {
        this.Medical1[0] = "";
        this.form.medicalGrade1 = this.Medical1[0];
      } else {
        this.form.medicalGrade1 = this.Medical1[0];
      }

      if (typeof this.Medical2[0] === "undefined") {
        this.Medical2[0] = "";
        this.form.medicalGrade2 = this.Medical2[0];
      } else {
        this.form.medicalGrade2 = this.Medical2[0];
      }

      if (typeof this.Medical3[0] === "undefined") {
        this.Medical3[0] = "";
        this.form.medicalGrade3 = this.Medical3[0];
      } else {
        this.form.medicalGrade3 = this.Medical3[0];
      }

      if (typeof this.traffic1[0] === "undefined") {
        this.traffic1[0] = "";
        this.form.trafficGrade1 = this.traffic1[0];
      } else {
        this.form.trafficGrade1 = this.traffic1[0];
      }

      if (typeof this.traffic2[0] === "undefined") {
        this.traffic2[0] = "";
        this.form.trafficGrade2 = this.traffic2[0];
      } else {
        this.form.trafficGrade2 = this.traffic2[0];
      }

      if (typeof this.traffic3[0] === "undefined") {
        this.traffic3[0] = "";
        this.form.trafficGrade3 = this.traffic3[0];
      } else {
        this.form.trafficGrade3 = this.traffic3[0];
      }

      if (typeof this.entertainment1[0] === "undefined") {
        this.entertainment1[0] = "";
        this.form.entertainmentGrade1 = this.entertainment1[0];
      } else {
        this.form.entertainmentGrade1 = this.entertainment1[0];
      }

      if (typeof this.entertainment2[0] === "undefined") {
        this.entertainment2[0] = "";
        this.form.entertainmentGrade2 = this.entertainment2[0];
      } else {
        this.form.entertainmentGrade2 = this.entertainment2[0];
      }

      if (typeof this.entertainment3[0] === "undefined") {
        this.entertainment3[0] = "";
        this.form.entertainmentGrade3 = this.entertainment3[0];
      } else {
        this.form.entertainmentGrade3 = this.entertainment3[0];
      }

      if (typeof this.entertainment4[0] === "undefined") {
        this.entertainment4[0] = "";
        this.form.entertainmentGrade4 = this.entertainment4[0];
      } else {
        this.form.entertainmentGrade4 = this.entertainment4[0];
      }
      this.form.educationRate = this.formItem.schools / 100;
      this.form.medicalRate = this.formItem.hosptials / 100;
      this.form.trafficRate = this.formItem.stations / 100;
      this.form.entertainmentRate = this.formItem.markets / 100;
      this.$Spin.show({
        render: h => {
          return h("div", [
            h("Icon", {
              class: "demo-spin-icon-load",
              props: {
                type: "ios-loading",
                size: 35
              }
            }),
            h(
              "div",
              {
                style: {
                  fontSize: "20px"
                }
              },
              "正在为您选择"
            )
          ]);
        }
      });
      Server.get({
        url: services.recommend,
        params: {
          grade: JSON.stringify(this.form)
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          var recommendHouse = rsp.data.sort(this.compare("level"));
          // for(var i=0)
          var t = recommendHouse.reverse();
          // var recommend = rsp.data.houseInfo.sort(this.compare("level"));
          // for(var i=0)
          // var s = recommend.reverse();
          dataRap.commit("dataRap", rsp);
          console.log(dataRap)
          this.$Spin.hide();
          this.$router.push("/recommendHousing");
        } else {
        }
      });
      // this.$Spin.show({
      //   render: h => {
      //     return h("div", [
      //       h("Icon", {
      //         class: "demo-spin-icon-load",
      //         props: {
      //           type: "ios-loading",
      //           size: 18
      //         }
      //       }),
      //       h("div", "Loading")
      //     ]);
      //   }
      // });
      // setTimeout(() => {
      //   this.$Spin.hide();
      // }, 25000);
    },
    push() {
      this.$router.push("/auDecision/model");
    },
    compare(property) {
      debugger;
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
      };
    },
    change() {
      this.downIcon = !this.downIcon;
      var obj = document.getElementById("tip");
      if (tip.style.display == "none") {
        tip.style.display = "block";
      } else {
        tip.style.display = "none";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.ivu-alert.ivu-alert-with-icon {
  padding: 8px 5px 8px 38px;
}

.ivu-alert {
  padding-right: 18px;
}

// .ivu-layout {
//   height: 1024px;
// }

.light {
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-top: 15px;
  display: inline-block;
}

.ivu-checkbox-group {
  display: inline;
}

p {
  font-size: 14px;
  font-weight: bold;
}
</style>
<style lang="less" >
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
// html,body{
// height: 100%;
// overflow: hidden;
// }
</style>