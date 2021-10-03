class WKTUtil {
  constructor(options) {
    this.regExes = {
      "typeStr": /^\s*(\w+)\s*\s∗(.∗)\s∗\s*$/,
      "spaces": /\s+/,
      "parenComma": /\)\s*,\s*\(/,
      "doubleParenComma": /\)\s*\)\s*,\s*\(\s*\(/, // can"t use {2} here
      "trimParen": /^\s*?(.∗?)?\s*$/
    };
    for (var i in options) {
      this[i] = options[i];
    }

    this.parse = this.parse();
  }

  trim(str) {
    return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }

  read(wkt) {
    let features;
    let type;
    let str;
    let wkts = [];
    wkt = wkt.replace(/[\n\r]/g, " ");
    let matches = wkt.split("(");
    if (matches) {
      type = matches[0].toLowerCase().replace(" ", "");
      if (type.indexOf("polygon") > -1) {
        if (matches.length === 3) {
          str = matches[2].replace("))", "");
          wkts.push(str);
        } else {
          // 孔洞或者多面情况
          for (let a = 2; a < matches.length; a++) {
            str = matches[a].replace(/\),/g, "").replace(/\)/g, "");
            if (str) {
              wkts.push(str);
            }
          }
        }
      } else {
        if (type === "multilinestring") {
          for (let a = 2; a < matches.length - 1; a++) {
            str = matches[a].replace("),", "");
            wkts.push(str);
          }
          wkts.push(matches[matches.length - 1].replace("))", ""));
        } else {
          str = matches[1].replace(")", "");
          wkts.push(str);
        }
      }
      if (this.parse[type]) {
        features = this.parse[type].apply(this, [wkts.join("@")]);
      }
    }
    return features;
  }

  parse() {
    return {
      point(str) {
        let coords = this.trim(str).split(this.regExes.spaces);
        return coords;
      },
      multipoint: function (str) {
        let point;
        let points = this.trim(str).split(",");
        let components = [];
        for (let i = 0, len = points.length; i < len; ++i) {
          point = points.replace(this.regExes.trimParen, "$1");
          components.push(this.parse.point.apply(this, [point]).geometry);
        }
        return components;
      },
      linestring: function (str) {
        let points = this.trim(str).split(",");
        let components = [];
        for (let i = 0, len = points.length; i < len; ++i) {
          components.push(this.parse.point.apply(this, [points[i]]));
        }
        return components;
      },
      multilinestring: function (str) {
        let lines = this.trim(str).split("@");
        let components = [];
        for (let i = 0, len = lines.length; i < len; ++i) {
          components.push(this.parse.linestring.apply(this, [lines[i]]));
        }
        return components;
      },
      polygon: function (str) {
        let _this = this;
        let ring;
        let linestring;
        let strs = str.split("@");
        let components = [];
        strs.forEach(function (str) {
          let rings = _this.trim(str).split(_this.regExes.parenComma);
          for (let i = 0, len = rings.length; i < len; ++i) {
            ring = rings[i].replace(_this.regExes.trimParen, "$1");
            linestring = _this.parse.linestring.apply(_this, [ring]);
            components.push(linestring);
          }
        });
        return components;
      },
      multipolygon: function (wkt) {
        let strs = wkt.split("@");
        let components = [];
        for (let i = 0, len = strs.length; i < len; ++i) {
          components.push(this.parse.linestring.apply(this, [strs[i]]));
        }
        return components;
      }
    };
  }
}
class WKTToGeometry {
  point(options) {
    return new Promise(function (resolve) {
      mapApi.esriApi.GetPoint().then(Point => {
        var wktUtil = new WKTUtil();
        var pt = wktUtil.read(options.wkt);
        var json = {
          x: parseFloat(pt[0]),
          y: parseFloat(pt[1]),
          spatialReference: options.spatialReference
        };

        var point = new Point(json);
        resolve(point);
      })
    });
  }

  polyLine(options) {
    return new Promise(function (resolve) {
      mapApi.esriApi.GetPolyline().then(Polyline => {
        var wktUtil = new WKTUtil();
        var points = wktUtil.read(options.wkt);
        var json = {
          paths: [points],
          spatialReference: options.spatialReference
        };
        var polyLine = new Polyline(json);
        resolve(polyLine);
      });
    });
  }

  multiPolyLine(options) {
    return new Promise(function (resolve) {
      mapApi.esriApi.GetPolyline().then(Polyline => {
        var wktUtil = new WKTUtil();
        var polyLines = wktUtil.read(options.wkt);
        var polyLine = new Polyline(options.spatialReference);
        polyLines.forEach(function (index, item) {
          polyLine.addPath(item);
        });
        resolve(polyLine);
      });
    });
  }

  polygon(options) {
    return new Promise(function (resolve) {
      Promise.all([mapApi.esriApi.GetPoint(), mapApi.esriApi.GetPolygon()]).then(([Point, Polygon]) => {
        var wktUtil = new WKTUtil();
        var points = wktUtil.read(options.wkt);
        var json = {
          rings: points,
          spatialReference: options.spatialReference
        };
        var polygon = new Polygon(json);
        resolve(polygon);
      });
    });
  }

  multiPolygon(options) {
    return new Promise(function (resolve) {
      Promise.all([mapApi.esriApi.GetPoint(), mapApi.esriApi.GetPolygon()]).then(([Point, Polygon]) => {
        var wktUtil = new WKTUtil();
        var polygons = wktUtil.read(options.wkt);
        var polygon = new Polygon({
          spatialReference: options.spatialReference
        });
        polygons.forEach(function (item) {
          polygon.addRing(item);
        });
        resolve(polygon);
      });
    });
  }
}

export default class GWKT2Geometry {
  parse(options) {
    let wkt = options.wkt;
    let type = wkt.split("(")[0].toLowerCase();
    let wktToGeometry = new WKTToGeometry();
    switch (type.replace(" ", "")) {
      case "point":
      case "multipoint":
        return wktToGeometry.point(options);
      case "linestring":
        return wktToGeometry.polyLine(options);
      case "multilinestring":
        return wktToGeometry.multiPolyLine(options);
      case "polygon":
        return wktToGeometry.polygon(options);
      case "multipolygon":
        return wktToGeometry.multiPolygon(options);
      default:
        return new Promise(function (resolve) {
          resolve(null);
        });
    }
  }
}
