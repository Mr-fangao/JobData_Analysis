import gDrawGraphic from "./js/GDrawGraphic";
import GDrawSketch from "./4+/GDrawSketch"
export default class Register {
  constructor(mapView) {
    this.mapView = mapView;
    this.gDraw = null; //绘制工具
    new GDrawSketch(mapView).then(gDraw => {
      this.gDraw = gDraw;
      this.gDraw.on("draw-complete", e => {
        parent.onemap.pubsub.publish("draw-complete", e);
      });
    });
  }

  mapEvent() {
    this.mapView.on("click", e => {
      e.stopPropagation();
      this.mapView.hitTest(e).then(rsp => {
        if (rsp.results.length === 0) {
          return false;
        }
        let graphic = rsp.results[0].graphic;
        if (graphic) {
          var attributes = graphic.attributes;
          if (attributes && attributes.popup === true) {
            mapApi.popup.show({
              mapView: this.mapView,
              res: attributes.attr,
              centerPt: attributes.centerPt
            });
          }
        }
      });
    });
    return this;
  }

  mapEventfore() {
    debugger;
    this.mapView.on("click", e => {
      e.stopPropagation();
      this.mapView.hitTest(e).then(rsp => {
        if (rsp.results[0].graphic.attributes.attr.name1 === 0) {
          return false;
        }
        let graphic = rsp.results[0].graphic;
        if (graphic) {
          var attributes = graphic.attributes;
          if (attributes && attributes.popup === true) {
            mapApi.forePoup.show({
              mapView: this.mapView,
              res: attributes.attr,
              centerPt: attributes.centerPt
            });
          }
        }
      });
    });
    return this;
  }

  mapAPI() {

    onemap.pubsub.subscribe("drawMarkerByList", arg => {
      arg.mapView = this.mapView;
      gDrawGraphic.markersByList(arg);
    });
    onemap.pubsub.subscribe("drawHouseByList", arg => {

      arg.mapView = this.mapView;
      gDrawGraphic.housesByList(arg);
    }); // 绘制小气泡列表
    onemap.pubsub.subscribe("drawforeHouseWKT", arg => {
      arg.mapView = this.mapView;
      gDrawGraphic.housesGWRByList(arg);
    }); // 绘制小气泡列表
    onemap.pubsub.subscribe("drawHouseGWRByList", arg => {
      arg.mapView = this.mapView;
      gDrawGraphic.daishouHouse(arg);
    }); // 绘制小气泡列表
    onemap.pubsub.subscribe("drawPolygonByList", arg => {
      arg.mapView = this.mapView;
      // 绘制面
      gDrawGraphic.polygonsByList(arg);
    }); // 绘制面状列表
    return this;
  }

  parentMapAPI() {
    if (parent.onemap) {
      parent.onemap.pubsub.subscribe("clear", arg => {
        onemap.pubsub.publish("clear");
      });
      parent.onemap.pubsub.subscribe("drawMarkerByList", arg => {
        arg.mapView = this.mapView;
        gDrawGraphic.markersByList(arg);
      }); // 绘制小气泡列表
      parent.onemap.pubsub.subscribe("drawPolygonByList", arg => {
        arg.mapView = this.mapView;
        // 绘制面
        gDrawGraphic.polygonsByList(arg);
      }); // 绘制面状列表
      parent.onemap.pubsub.subscribe("drawPolygonByGeoJson", arg => {
        arg.mapView = this.mapView;
        // 绘制面
        gDrawGraphic.polygonsByGeoJson(arg);
      }); // 绘制面状列表
      parent.onemap.pubsub.subscribe("location", arg => {
        this.mapView.graphics.forEach(g => {
          if (g.attributes.popup === true && g.attributes.attr.pIndex === arg.pIndex) {
            mapApi.popup.show({
              mapView: this.mapView,
              res: g.attributes.attr,
              centerPt: g.attributes.centerPt,
              pan: true
            });
            return false;
          }
        });
      }); //根据list定位
      parent.onemap.pubsub.subscribe("draw", arg => {
        var type = arg.type || "polygon";
        var layer = arg.layer || null;
        this.gDraw.create(type, layer);
      }); //图形绘制
      return this;
    }
  }
}