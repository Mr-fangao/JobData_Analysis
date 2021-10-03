class GGeometryUtils {
  getMaxExtent(geometries) {
    //获取外包矩形
    return new Promise(resolve => {
      mapApi.esriApi.GetExtent().then((Extent) => {
        if (geometries.length === 0) return null;
        var maxExtent = null;
        var g1 = geometries[0];
        if (g1.type == "point") {    
          maxExtent = {
            xmax: g1.x,
            ymax: g1.y,
            xmin: g1.x,
            ymin: g1.y
          };
        } else {
          maxExtent = g1.extent;
        }
        var xMax = maxExtent.xmax;
        var yMax = maxExtent.ymax;
        var xMin = maxExtent.xmin;
        var yMin = maxExtent.ymin;

        geometries.forEach(function (g) {
          let extent = null;
          if (g.type == "point") {
            extent = {
              xmax: g.geometry.x,
              ymax: g.geometry.y,
              xmin: g.geometry.x,
              ymin: g.geometry.y
            }
          } else {
            extent = g.extent;
          }
          if (xMax < extent.xmax) {
            xMax = extent.xmax;
          }
          if (yMax < extent.ymax) {
            yMax = extent.ymax;
          }
          if (xMin > extent.xmin) {
            xMin = extent.xmin;
          }
          if (yMin > extent.ymin) {
            yMin = extent.ymin;
          }
        });
        var unionExtent = new Extent({
          xmax: xMax,
          ymax: yMax,
          xmin: xMin,
          ymin: yMin,
          spatialReference: g1.spatialReference
        })
        resolve(unionExtent);
      });
    });
  }
}
export const geometryUtils = new GGeometryUtils();
