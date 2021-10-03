export default class GIQuery {
  constructor(opt) {
    this.view = opt.mapView;
    this.isPopup = opt.isPopup;
    this.isActive = false;
    this.iService = parent.onemap.CONFIG.getServiceByName("iQueryServiceKey");
    this.pointerClickListener = null;
  }

  toggle() {
    if (this.pointerClickListener !== null) {
      this.pointerClickListener.remove();
      this.pointerClickListener = null;
    }
    if (this.iService != null) {
      this.pointerClickListener = this.view.on("click", (e) => {
        if (this.view.isEdit === true) return false;
        if (this.view.IQueryLayerIds.length === 0) return false;
        mapApi.loading.show(e); //show loading
        let mapPoint = e.mapPoint;
        onemap.server.get({
          url: this.iService.serviceUrl,
          params: {
            x: mapPoint.x,
            y: mapPoint.y,
            layerIds: this.view.IQueryLayerIds.join(",")
          }
        }).then(res => {
          mapApi.loading.hide(); //hide loading
          this.view.graphics.removeAll();
          // 弹出框
          var length = res.data.length
          if (length === 0) {
            this.view.popup.close();
            onemap.pubsub.publish("hideQuickSearchResult");
          } else if (length === 1) {
            if (this.isPopup) {
              mapApi.popup.show({
                mapView: this.view,
                centerPt: mapPoint,
                res: res.data[0]
              });
            }
            //绘制图层
            setTimeout(() => {
              onemap.pubsub.publish("drawPolygonByList", {
                list: res.data
              });
            }, 100);

            //隐藏面板
            onemap.pubsub.publish("hideQuickSearchResult");
          } else {
            onemap.pubsub.publish("showQuickSearchResult", {
              isPopup: this.isPopup,
              list: res.data
            });
          }
          setTimeout(() => {
            var result = null;
            if (length > 0) {
              result = res.data;
            }
            onemap.pubsub.publish("iQueryResult", result);
          }, 100);
        });
      }, error => {
        this.$Message.warning(error.message);
      });
    } else {
      console.log("请先打开需要查询的图层或者配置I查询服务");
    }
  }
}
