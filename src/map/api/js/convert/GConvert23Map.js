export default class GConvert23Map {
  constructor() {
    this.lods = {
      to3d: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 2,
        "5": 3,
        "6": 4,
        "7": 5,
        "8": 6
      },
      to2d: {
        "0": 2,
        "1": 3,
        "2": 4,
        "3": 5,
        "4": 6,
        "5": 7,
        "6": 8
      }
    };
    this.a = 0.70710678;
    this.b = 0.70710678;
    this.d = -0.40824829;
    this.e = 0.40824829;
    this.xoff = 0.0;
    this.yoff = 2.8495;
  }
  to3D(x0, y0) {
    //园区变化
    // var x1 = this.a * x0 + this.b * y0 + this.xoff;
    // var y1 = this.d * x0 + this.e * y0 + this.yoff;
    // return {
    //   x: x1,
    //   y: y1
    // };
    //相城区
    var x1 = x0;
    var y1 = 0.57734 * y0;
    return {
      x: x1,
      y: y1
    };
  }
  to2D(x0, y0) {
    //园区变化
    // var x1 = (this.e * (x0 - this.xoff) - this.b * (y0 - this.yoff)) / (this.e * this.a - this.b * this.d);
    // var y1 = (this.d * (x0 - this.xoff) - this.a * (y0 - this.yoff)) / (this.d * this.b - this.a * this.e);
    // return {
    //   x: x1,
    //   y: y1
    // };
    //相城区
    var x1 = x0;
    var y1 = 1.732 * y0;
    return {
      x: x1,
      y: y1
    };
  }
  get2dZoom(level) {
    // return this.lods.to2d[level];
    return level;
  }
  get3dZoom(level) {
    // return this.lods.to3d[level];
    return level;
  }
}
