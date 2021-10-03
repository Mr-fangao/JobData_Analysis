  <template>
  <Layout :style="{height:'100%'}">
    <Sider ref="side1" :width='180'>
      <sider-menu/>>
    </Sider>
    <Content>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Breadcrumb>
          <Icon :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
          <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
        </Breadcrumb>
      </Header>
      <div class="around">
        <div class="title">
          <p>{{houseName}}</p>
        </div>
        <ul>
          <li v-for="(value,index) in orderList" :key="index" @click="selectTimer(index,value)" :class="timeIndex === index ? 'default-active' : 'default' ">{{ value.name }}</li>
        </ul>
        <Row>
          <Col span="17">
          <div class="map" style="height: 605px;width: 100%;">
            <routerView ref="routerView" v-if="map"></routerView>
          </div>
          </Col>
          <Col span="7">
          <div class="list">
            <div class="name">{{listName}}</div>
            <div class="ul-box">
              <div class="around-no-info">
                <ul>
                  <item v-for="(item,id) in listData" :key="item.id" :data="item" :id="id+1" @on-item-click="onItemClick" />
                </ul>
              </div>
            </div>
            <div class="page-footer" v-show="list.length>10">
              <Page :total="list.length" :page-size="pageSize" size="small" @on-change="onPageChange"></Page>
            </div>
          </div>
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>

</template>
<script>
import SiderMenu from "@/views/main/siderMenu";
import routerView from "@/map/components/routerView";
import Server from "@/core/server";
import { MapAPI } from "@/core/config/const";
import { services } from "@/core/config/services";
import Item from "./components/item";
import aroundInfo from "@/vuex/store";
import housueName from "@/vuex/store";
import companyName from "@/vuex/store";
export default {
  mounted() {
    setTimeout(() => {
      this.getdata();
    }, 600);
  },
  data() {
    return {
      distance: "1000",
      map: true,
      timeIndex: 0,
      pageSize: 10,
      listName: "公交",
      listData: [],
      list: [],
      total: "",
      housueName: "",
      isPopup: true,
      isPan: true,
      orderList: [
        { name: "公交", type: "BUSSTATION " },
        { name: "车站" },
        { name: "医疗设施", type: "MEDICALDATA " },
        { name: "学校", type: "SCHOOLDATA " },
        { name: "休闲娱乐", type: "ENTERTAINMENT " },
        { name: "公园", type: "PARKDATA " }
      ]
    };
  },
  watch: {
    data() {
      this.onPageChange(1);
    }
  },
  methods: {
    onItemClick(data) {
      for (var i = 0, g; (g = window.mapview.graphics.items[i]); i++) {
        if (g.attributes.id === data.pIndex) {
          var geometry = null;
          if (g.geometry.type === "point") {
            geometry = g.geometry;
          } else {
            var extent = g.geometry.extent.clone();
            geometry = extent.expand(2);
          }
          window.mapview.goTo(geometry);
          var attributes = g.attributes;
          mapApi.popup.show({
            mapView: window.mapview,
            res: attributes.attr,
            centerPt: attributes.centerPt
          });
          break;
        }
      }
      this.$refs.routerView.addStop(data);
    },
    getdata() {
      debugger;
      this.houseName = housueName.state.housueName;
      this.list = aroundInfo.state.list;
      this.total = aroundInfo.state.length;
      this.onPageChange(1);
      // for (
      //   var i = 0, len = this.total, item;
      //   i < len, (item = this.listData[i]);
      //   i++
      // ) {
      //   if (i < this.total) {
      //     item.pIndex = "p" + i;
      //     this.listData.push(item);
      //   } else {
      //     break;
      //   }
      // }
    },
    selectTimer(index, value) {
      debugger;
      this.timeIndex = index;
      this.listName = value.name;
      companyName.commit("companyName", this.listName);
      this.houseName = housueName.state.housueName;
      console.log(this.houseName);
      Server.get({
        url: services.road,
        params: {
          name: this.houseName,
          tableName: value.type,
          distance: this.distance
        }
      }).then(rsp => {
        var _this = this;
        if (rsp.status === 1) {
          _this.list = rsp.data;
          _this.total = rsp.length;
          _this.onPageChange(1);
        }
      });
    },
    onPageChange(page) {
      debugger;
      let data = [];
      for (
        var i = (page - 1) * this.pageSize, len = this.total, item;
        i < len, (item = this.list[i]);
        i++
      ) {
        if (i < page * this.pageSize) {
          item.pIndex = "p" + i;
          data.push(item);
        } else {
          break;
        }
      }
      this.listData = data;
      this.showGraphics();
    },
    showGraphics() {
      window.mapview.graphics.removeAll();
      if (this.list === 0) return;
      onemap.pubsub.publish("drawMarkerByList", {
        list: this.listData
      });
    }
  },
  components: {
    Item,
    routerView,
    SiderMenu
  }
};
</script>
<style lang="less" scoped>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.around {
  height: 700px;
  width: 1300px;
  margin: 0 auto;
  .title {
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: 600;
    color: #101d37;
  }
  ul {
    margin-left: -8px;
    .select:after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #19be6b;
    }
    li {
      cursor: pointer;
      display: inline-block;
      line-height: 28px;
      padding: 0 9px;
      margin-bottom: 5px;
      color: #555;
      font-size: 14px;
    }
    .default-active {
      color: #19be6b;
      // background: #f00;
    }
    li:hover {
      color: #19be6b;
    }
  }
}

.around .list {
  //   width: 310px;
  height: 605px;
  background-color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.45);
  .name {
    line-height: 39px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background: #19be6b !important;
  }
  .ul-box {
    height: 540px;
    overflow-y: scroll;
  }
}
.page-footer {
  margin-left: 10px;
}
</style>

    