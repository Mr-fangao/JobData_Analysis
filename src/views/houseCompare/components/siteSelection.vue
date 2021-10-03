<template>
  <div class="dock">
    <div class="dock-header">
      <div class="wrapper">
        <span class="icon-grid"></span>
        <span class="title">条件选房</span>
        <span class="icon-close closebtn" @click="select"></span>
      </div>
    </div>
    <header>
      <Row>
        <i-col :span="5" class="label">行政区划</i-col>
        <i-col :span="19">
          <i-select v-model="district" style="padding-bottom: 10px">
            <i-option value="琅琊区">琅琊区</i-option>
            <i-option value="南谯区">南谯区</i-option>
          </i-select>
        </i-col>
      </Row>
      <Row>
        <i-col :span="5" class="label">房源类型</i-col>
        <i-col :span="19">
          <i-select v-model="buildingType" style="padding-bottom: 10px">
            <i-option value="住宅">住宅</i-option>
            <i-option value="公寓式住宅">公寓式住宅</i-option>
            <i-option value="商铺">商铺</i-option>
            <i-option value="别墅">别墅</i-option>
          </i-select>
        </i-col>
      </Row>
      <Row>
        <i-col :span="5" class="label">价格</i-col>
        <i-col :span="19">
          <div style="padding-bottom:10px">
            <InputNumber :max="100000" :min="1" v-model="minPrice" style="padding-bottom: 10px"></InputNumber>
            <span style="margin-left: 5px">至</span>
            <InputNumber :max="100000" :min="1" v-model="maxPrice" style="padding-bottom: 10px; margin-left: 5px"></InputNumber>
            <span style="margin-left: 10px">元</span>
          </div>
        </i-col>
      </Row>
      <Row>
        <i-col :span="5" class="label">面积</i-col>
        <i-col :span="19">
          <div style="padding-bottom: 10px">
            <InputNumber :max="1000" :min="1" v-model="minArea " style="padding-bottom: 10px"></InputNumber>
            <span style="margin-left: 5px">至</span>
            <InputNumber :max="10000" :min="1" v-model="maxArea " style="padding-bottom: 10px; margin-left: 5px"></InputNumber>
            <span style="margin-left: 10px">m^2</span>
          </div>
        </i-col>
      </Row>
      <Button @click="onAnalysis" style="float: right" long type="primary">查询</Button>
    </header>
    <nav>
      <ul>
        <li>搜索结果</li>
      </ul>
      <span class="result">共
        <span class="total">{{total}}</span> 个</span>
    </nav>
    <section :style="{height:height+'px'}">
      <list-item v-for="(item,index) in list" :key="index" :data="item" :index="index+1" @on-item-click="onItemClick" />
    </section>
    <footer v-if="data.length>pageSize">
      <page :total="data.length" :page-size="pageSize" size="small" @on-change="onPageChange"></page>
    </footer>
    <div class="list-group" style="height: 0px;"></div>
  </div>
</template>
<script>
import Server from "@/core/server";
import ListItem from "./list-item";
import { services } from "@/core/config/services";
import Register from "@/map/api/register";
export default {
  props: ["site"],
  data() {
    return {
      data: [],
      list: [],
      height: 390,
      pageSize: 10,
      current: 1,
      district: "",
      buildingType: "",
      total: "",
      minPrice: 0,
      maxPrice: 100000,
      minArea: 0,
      maxArea: 100000
    };
  },
  watch: {
    data() {
      //计算高度
      this.onPageChange(1);
      this.current = 1;
    }
  },
  mounted() {
    this.mapLoaded();
  },
  methods: {
    mapLoaded() {
      new Register(window.mapview)
        .mapEvent()
        .mapAPI()
        .parentMapAPI();
      if (this.isIQuery) {
        new GIQuery({
          mapView: mapview,
          isPopup: this.isIPopup
        }).toggle();
      }
    },
    select() {
      this.$emit("change", false);
    },
    onAnalysis() {
      Server.get({
        url: services.selectHouse,
        params: {
          district: this.district,
          buildingType: this.buildingType,
          minPrice: this.minPrice,
          maxPrice: this.maxPrice,
          minArea: this.minArea,
          maxArea: this.maxArea
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          this.data = rsp.data;
          this.total = rsp.length;
          onemap.pubsub.publish("drawPolygonByList", {
            list: rsp.data,
            popup: true
          });
        } else {
          console.log(rsp.message);
        }
      });
    },
    onItemClick(item) {
      onemap.pubsub.publish("location", {
        pIndex: item.pIndex
      });
    },
    onPageChange(page) {
      var data = [];
      for (
        var i = (page - 1) * this.pageSize, len = this.data.length, item;
        i < len, (item = this.data[i]);
        i++
      ) {
        if (i < page * this.pageSize) {
          item.pIndex = "p" + i;
          data.push(item);
        } else {
          break;
        }
      }
      this.list = data;
      onemap.pubsub.publish("clear");
      setTimeout(() => {
        this.showGraphics();
      }, 100);
    },
    showGraphics() {
      //render graphic
      if (this.list === 0) return;
      onemap.pubsub.publish("drawPolygonByList", {
        list: this.list,
        extent: true
      });
      onemap.pubsub.publish("drawMarkerByList", {
        list: this.list,
        popup: true,
        pan: false
      });
    }
  },
  components: {
    ListItem
  }
};
</script>

<style lang="less" scoped>
	.dock {
		position: absolute;background: white;z-index: 1;top: 42px;bottom: 0;width: 320px;
		border-right: 1px solid #d2d2d2;border-left: 1px solid #d2d2d2;-webkit-transition: all 0.2s;transition: all 0.2s;
		.dock-section {@cap: 37px;height: calc(~"100% - @{cap}");}
		.dock-header {
			padding: 0 15px;background: #f8f8f8;
			.wrapper {
				height: 37px;line-height: 37px;border-bottom: 1px solid #d2d2d2;
				.title {font-size: 14px;font-weight: 600;}
				.closebtn {float: right;font-size: 16px;cursor: pointer;&:hover {color: red;}}
			}
		}
	}
	header {padding: 10px 20px;background: #f8f8f8;height: 210px;}
	section {overflow: hidden;overflow-y: scroll;}
	nav {
		height: 30px;background: #f8f8f8;border-bottom: 1px solid #d2d2d2;
		ul {float: left;}
		li {width: 70px;padding: 5px 10px 6px;margin-left: 20px;text-align: center;background: #fff;border: 1px solid #d2d2d2;border-bottom: 0;}
		.result {float: right;margin: 4px 20px 0 0;.total {color: #0593d3;font-size: 16px;}}
	}
	.title {font-size: 14px;color: black;padding-left: 5px;}
	.closebtn {float: right;font-size: 16px;cursor: pointer;padding: 10px 0px 5px 5px;}
	.label {text-align: right;padding: 5px 8px 0 0;}
</style>
