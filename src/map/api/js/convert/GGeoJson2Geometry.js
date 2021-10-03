class GeoJsonToGeometry {
  point(options) {
    return new Promise(function (resolve) {
      mapApi.esriApi.GetPoint().then(Point => {
        var pt = options.geometry.coordinates
        var json = {
          x: pt[0],
          y: pt[1],
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
        var points = options.geometry.coordinates;
        var json = {
          paths: points,
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
        var polyLines = options.geometry.coordinates;
        var polyLine = new Polyline({
          paths: polyLines,
          spatialReference: options.spatialReference
        });
        resolve(polyLine);
      });
    });
  }

  polygon(options) {
    return new Promise(function (resolve) {
      mapApi.esriApi.GetPolygon().then((Polygon) => {
        var rings = options.geometry.coordinates;
        var json = {
          rings: rings,
          spatialReference: options.spatialReference
        };
        var polygon = new Polygon(json);
        resolve(polygon);
      });
    });
  }

  multiPolygon(options) {
    return new Promise(function (resolve) {
      mapApi.esriApi.GetPolygon().then((Polygon) => {
        var rings = options.geometry.coordinates;
        var json = {
          rings: rings,
          spatialReference: options.spatialReference
        };
        var polygon = new Polygon(json);
        resolve(polygon);
      });
    });
  }
}

export default class GGeoJsonToGeometry {
  parse(options) {
    let geometry = options.geometry;
    let type = geometry.type.toLowerCase();
    let geoJsonToGeometry = new GeoJsonToGeometry();
    switch (type.replace(" ", "")) {
      case "point":
      case "multipoint":
        return geoJsonToGeometry.point(options);
      case "linestring":
        return geoJsonToGeometry.polyLine(options);
      case "multilinestring":
        return geoJsonToGeometry.multiPolyLine(options);
      case "polygon":
        return geoJsonToGeometry.polygon(options);
      case "multipolygon":
        return geoJsonToGeometry.multiPolygon(options);
      default:
        return new Promise(function (resolve) {
          resolve(null);
        });
    }
  }
}
