<template>
<div>
  <!-- <Modal v-model="dialog2" :mask-closable="false" width="400" title="缓冲区查询" draggable> -->
    <Form :label-width="60">
      <FormItem label="半径：" prop="zoning" :width="80">
        <div style="width:260px ;display:inline-block">
          <Input v-model="distance" placeholder clearable></Input>
        </div>
        <span style="width:20px;margin-left:15px">千米</span>
      </FormItem>
      <FormItem label="选点：" prop="zoning">
        <Button shape="circle" title="自定义选点" @click="createPoint">
          <span>
            <Icon type="ios-pin-outline" size="17" />
          </span>
        </Button>
      </FormItem>
    </Form>
    <div slot="footer">
      <Button type="primary" size="large" long @click="getHouse">查询</Button>
    </div>
  <!-- </Modal> -->
</div>
</template>
 <script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
import GDrawSketch from "@/map/api/4+/GDrawSketch";
import GDrawbuffer from "@/map/api/4+/GDrawBuffer";
import GConvertGeometry from "@/map/api/js/convert/GConvertGeometry";
export default {
  created() {
    this.$root.Bus.$on("eventSelectBuffer", () => {
      this.dialog2 = true;
    });
  },
  data() {
    return {
      dialog2: false,
      house: "",
      isExtent: true,
      isPopup: true,
      isPan: true,
      list: "",
      distance: ""
    };
  },
  methods: {
    getHouse() {
      debugger;
      Server.post({
        url: services.getHouse,
        params: {
          housePolygon: this.house
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          this.list = rsp.data;
          this.showGraphics();
          this.$Message.success("查询成功");
          // sessionStorage.setItem("userInfo", JSON.stringify(this.user))
        } else {
          this.$Message.error(rsp.message);
        }
      });
    },
    createPoint() {
      new GDrawbuffer(window.mapview).then(gDraw => {
        this.gDraw = gDraw;
        this.gDraw.enableCreatePoint(this.distance, buffer => {
          this.house = window.mapApi.convert.toWKTByGeometry.ToWKT(buffer);
          console.log(buffer.centroid.latitude);
          console.log(buffer.centroid.longitude);
          console.log(buffer.centroid.x);
          console.log(buffer.centroid.y);
        });
        // console.log(shape1);
        // var buffer = this.gDraw.enableCreatePoint(this.distance);
        // console.log(buffer);
        // console.log(this.gDraw);
        // this.gDraw.on("draw-complete", e => {
        //   // let shape = mapApi.convert.toWKTByGeometry.ToWKT(e.geometry);
        //   // this.shape = shape;
        //   // console.log(this.shape);
        //   // parent.onemap.pubsub.publish("drawPolygon", shape);
        // });
      });
    },
    showGraphics() {
      //render graphic

      if (this.list === 0) return;
      onemap.pubsub.publish("drawHouseByList", {
        list: this.list,
        popup: this.isPopup,
        pan: this.isPan
      });
    }
  },
  beforeDestroy() {
    this.$root.Bus.$off("eventSelectBuffer");
  }
};
</script>
<style >
/* .ivu-input {
    display: inline-block;
    width: 80%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
} */
</style>

 