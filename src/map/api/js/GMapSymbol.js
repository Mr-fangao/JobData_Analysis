export default class GMapSymbol {
  static pointSymbol() {
    return {
      type: "simple-marker",
      style: "circle",
      color: [255, 0, 0],
      size: 15,
      outline: {
        color: [255, 0, 0],
        width: 1
      }
    };
  }

  static polylineSymbol() {
    return {
      type: "simple-line",
      color: [226, 119, 40],
      width: 2
    };
  }

  static polygonSymbol() {
    return {
      type: "simple-fill",
      color: [255, 0, 0, 0.2],
      outline: {
        color: [255, 0, 0],
        style: "solid",
        width: 1
      }
    }
  }

  static getSymbol(geometry) {
    switch (geometry.type.toLowerCase()) {
      case "point":
        return this.pointSymbol();
      case "polyline":
        return this.polylineSymbol();
      case "polygon":
        return this.polygonSymbol();
      default:
        return null;
    }
  }

  static getMarkerSymbol(opt) {
    var w = opt.w || 21;
    var h = opt.h || 33;
    var x = opt.x || 0;
    var y = opt.y || 10;
    return {
      type: "picture-marker",
      url: "/img/poi/r_" + opt.name + ".png",
      width: w + "px",
      height: h + "px",
      xoffset: x,
      yoffset: y,
      angle: 0
    };
  }

  static gethousePointSymbol(opt) {
    var w = opt.w || 21;
    var h = opt.h || 33;
    var x = opt.x || 0;
    var y = opt.y || 10;
    return {
      type: "picture-marker",
      url: "/img/poi/b_h" + ".png",
      width: w + "px",
      height: h + "px",
      xoffset: x,
      yoffset: y,
      angle: 0
    };
  }


  static getMarkerPoiSymbol(opt) {
    var w = opt.w || 21;
    var h = opt.h || 33;
    var x = opt.x || 0;
    var y = opt.y || 10;
    return {
      type: "picture-marker",
      url: "/img/poi/b_l.png",
      width: w + "px",
      height: h + "px",
      xoffset: x,
      yoffset: y,
      angle: 0
    };
  }

  static getGWRPoiSymbol(opt) {
    var w = opt.w || 21;
    var h = opt.h || 33;
    var x = opt.x || 0;
    var y = opt.y || 10;
    return {
      type: "picture-marker",
      url: "/img/poi/b_h.png",
      width: w + "px",
      height: h + "px",
      xoffset: x,
      yoffset: y,
      angle: 0
    };
  }
  static getdaishouHouse(opt) {
    
    var w = opt.w || 21;
    var h = opt.h || 33;
    var x = opt.x || 0;
    var y = opt.y || 10;
    return {
      type: "picture-marker",
      url: "/img/poi/r_h.png",
      width: w + "px",
      height: h + "px",
      xoffset: x,
      yoffset: y,
      angle: 0
    };
  }
}