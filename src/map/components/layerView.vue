
 <template>
  <div class="layerManager" v-show="active">
    <tabs>
      <span class="icon layerClose" style="margin-top: 4px;" title="关闭全部图层" slot="extra"></span>
      <tab-pane name="layer" :label="label">
        <ul>
          <li>
            <span>
              <Checkbox v-model="gj" @on-change="changegj">
                <span class="layerIcon l-layer"></span>公交</Checkbox>
            </span>
          </li>
          <span>
            <Checkbox v-model="cz">
              <span class="layerIcon l-layer"></span>车站</Checkbox>
          </span>
          <li>
            <span>
              <Checkbox v-model="yl">
                <span class="layerIcon l-layer"></span>医疗设施</Checkbox>
            </span>
          </li>
          <li>
            <span>
              <Checkbox v-model="school">
                <span class="layerIcon l-layer"></span>学校</Checkbox>
            </span>
          </li>
          <li>
            <span>
              <Checkbox v-model="yl">
                <span class="layerIcon l-layer"></span>休闲娱乐</Checkbox>
            </span>
          </li>
          <li>
            <span>
              <Checkbox v-model="gy">
                <span class="layerIcon l-layer"></span>公园</Checkbox>
            </span>
          </li>
        </ul>
      </tab-pane>
    </tabs>
  </div>
</template> 
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
import housueName from "@/vuex/store";
import GMapSymbol from "@/map/api/js/GMapSymbol";
import { MapAPI } from "@/core/config/const";
export default {
  data() {
    return {
      gj: true,
      cz: false,
      yl: false,
      school: false,
      yl: false,
      gy: false,
      gjLayer: "",
      houseName: "",
      list: []
    };
  },
  methods: {
    changegj() {
      if (this.gj == true) {
        debugger;
        var value = "BUSSTATION";
        this.houseName = housueName.state.housueName;
        Server.get({
          url: services.road,
          params: {
            name: this.houseName,
            tableName: value,
              distance:this.distance
          }
        }).then(rsp => {
          var _this = this;
          if (rsp.status === 1) {
            _this.list = rsp.data;
            mapApi.esriApi.GetGraphic().then(Graphic => {
              var geometryParse = [];
              this.list.forEach((item, index) => {
                geometryParse.push(
                  mapApi.convert.toGeometryByWKT.parse({
                    wkt: item.Shape,
                    spatialReference: window.mapview.spatialReference
                  })
                );
              });
              Promise.all(geometryParse).then(geometries => {
                var pts = [];
                var graphics = [];
                geometries.forEach((geometry, index) => {
                  var pt = null;
                  if (geometry !== null) {
                    if (geometry.type === "point") {
                      pt = geometry;
                    } else {
                      pt = geometry.extent.center;
                    }
                    pts.push(pt);
                  }
                  var item = this.list[index];
                  var symbol = GMapSymbol.getMarkerPoiSymbol({});
                  var graphic = new Graphic({
                    geometry: pt,
                    symbol: symbol,
                    attributes: {
                      id: item.pIndex,
                      attr: item,
                      centerPt: pt,
                      marker: true,
                      popup: true
                    }
                  });
                  graphics.push(graphic);
                });

                mapApi.esriApi.GetGraphicsLayer().then(GraphicsLayer => {
                  this.gjLayer = new GraphicsLayer({});
                  this.gjLayer.graphics.addMany(graphics);
                  window.mapview.map.add(this.gjLayer);
                });

                // if (layer === null) {
                //   mapview.graphics.addMany(graphics);
                // } else {
                //   layer.graphics.addMany(graphics);
                // }
                // if (extent) {
                //   mapApi.geometryUtils.getMaxExtent(geometries).then(extent => {
                //     mapview.extent = extent.expand(2);
                //   });
                // }

                // if (popup && list.length > 0) {
                //   mapApi.popup.show({
                //     mapView: mapView,
                //     res: list[0],
                //     centerPt: pts[0],
                //     pan: pan
                //   });
                // }
              });
            });
          }
        });

        // this.getData(value);
        // onemap.pubsub.publish("clear");

        // onemap.pubsub.publish("drawMarkerByList", {
        //   list: this.list
        // });
      } else {
        debugger;
        window.mapview.map.remove(this.gjLayer);
      }
    },
    getData(value) {
      debugger;
      this.houseName = housueName.state.housueName;
      Server.get({
        url: services.road,
        params: {
          name: this.houseName,
          tableName: value,
            distance:this.distance
        }
      }).then(rsp => {
        var _this = this;
        if (rsp.status === 1) {
          _this.list = rsp.data;
        }
      });
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: "图层"
    }
  }
};
</script>
<style >
.esri-view-height-small .esri-expand .esri-widget--panel,
.esri-view-height-small .esri-expand .esri-widget--panel-height-only,
.esri-view-height-small .esri-ui-corner .esri-component.esri-widget--panel,
.esri-view-height-small .esri-ui-corner .esri-component.esri-widget--panel-height-only {
    max-height: 206px;
    width: 206px;
    margin-top: 80px;
    margin-right: 65px;
    display: none;
}

.esri-view-height-xsmall .esri-expand .esri-widget--panel,
.esri-view-height-xsmall .esri-expand .esri-widget--panel-height-only,
.esri-view-height-xsmall .esri-ui-corner .esri-component.esri-widget--panel,
.esri-view-height-xsmall .esri-ui-corner .esri-component.esri-widget--panel-height-only {
    display: none;
}

</style>

      <!-- <tab-pane name="layer" :label="label">
        <section :style="{maxHeight:maxHeight+'px'}" v-if="visible" v-show="tabName==='layer'"> -->
          <!-- <tree-view ref="tree" 
            :mapView="mapView" 
            :treeData="layerList"
            :flatState="flatState"
            @on-check-change="onCheckChange"
            @on-group-check-change="onGroupCheckChange"/> -->
        <!-- </section>
      </tab-pane> -->
      <!-- <tab-pane name="favour" v-if="!isOut" label="收藏" >
        <section :style="{maxHeight:maxHeight+'px'}" v-if="visible" v-show="tabName==='favour'">
          <tree-view ref="treeFav" 
            :mapView="mapView" 
            :treeData="favLayerList" 
            :flatState="flatState"
            @on-check-change="onCheckChange"/>
        </section>
      </tab-pane>
      <tab-pane name="recent" v-if="!isOut" label="最近">
        <section  :style="{maxHeight:maxHeight+'px'}" v-if="visible" v-show="tabName==='recent'">
          <tree-view ref="treeRecent" 
            :mapView="mapView" 
            :treeData="recentLayerList"
            :flatState="flatState"
            @on-check-change="onCheckChange"/>
        </section>
      </tab-pane>
      <tab-pane name="legend" label="图例">
        <section   v-if="visible" v-show="tabName==='legend'">
          <legend-view :data="legendList" :legend="legend" :height="maxHeight"/>
        </section>
      </tab-pane> -->
    <!-- </tabs>
  </div>




  



