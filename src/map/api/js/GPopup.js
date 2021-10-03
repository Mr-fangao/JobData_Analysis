class PopupHtml {
  static render(res) {
    let html = ["<div class='v-popup-content'>"];
    var attr = res.attribute;
    for (var key in attr) {
      debugger
      html.push("<div class='ivu-row'>")
      html.push("<div class='ivu-col ivu-col-span-7' style='text-align: right;'>" + key.split("$")[0] + "：</div>");
      html.push("<div class='ivu-col ivu-col-span-17'>" + attr[key] + " ");
      if (key.split("$").length === 2 && attr[key] !== "") {
        html.push(key.split("$")[1])
      }
      html.push("</div>")
      html.push("</div>");
    }
    html.push("</div>");

    if (res.querylist && !onemap.utils.isEmptyObject(res.querylist)) {
      html.push("<div class='v-popup-footer'>");
      for (let f in res.querylist) {
        if (f.indexOf("device") === -1) {
          html.push('<a class="link" onclick=' + res.querylist[f] + '><span class="esri-popup__action-text">' + f + '</span></a>');
        }
      }
      html.push("</div>");
    }
    return html.join("");
  }
}
class GPopup {
  // api4
  show(opt) {
    var mapView = opt.mapView;
    var res = opt.res;
    var centerPt = opt.centerPt;
    var pan = opt.pan || false;

    mapView.popup.open({
      title: res.name,
      content: PopupHtml.render(res),
      location: centerPt
    });
    if (pan === true) {
      mapView.goTo(centerPt);
    }
  }
}

export const popup = new GPopup();
