import GMapSymbol from "./GMapSymbol";
class GDrawGraphic {
  markersByList(args, layer = null) {
    var list = args.list || [];
    var marker = args.marker || false;
    var name = args.name || null;
    var extent = args.extent || false;
    var popup = args.popup || false;
    var pan = args.pan || false;
    var mapView = args.mapView;
    if (list.length === 0) return;
    mapApi.esriApi.GetGraphic().then(Graphic => {

      var geometryParse = [];
      list.forEach((item, index) => {
        geometryParse.push(
          mapApi.convert.toGeometryByWKT.parse({
            wkt: item.Shape,
            spatialReference: mapView.spatialReference
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
          var item = list[index];
          var symbol = GMapSymbol.getMarkerSymbol({
            name: index + 1
          });
          var graphic = new Graphic({
            geometry: pt,
            symbol: symbol,
            attributes: {
              id: item.pIndex,
              attr: item,
              centerPt: pt,
              marker: true,
              popup: popup
            }
          });
          graphics.push(graphic);
        });
        if (layer === null) {
          mapView.graphics.addMany(graphics);
        } else {
          layer.graphics.addMany(graphics);
        }
        if (extent) {
          mapApi.geometryUtils.getMaxExtent(geometries).then(extent => {
            mapView.extent = extent.expand(2);
          });
        }

        if (popup && list.length > 0) {
          mapApi.popup.show({
            mapView: mapView,
            res: list[0],
            centerPt: pts[0],
            pan: pan
          });
        }
      });
    });
  }
  housesByList(args, layer = null) {
    var list = args.list || [];
    var marker = args.marker || false;
    var name = args.name || null;
    var extent = args.extent || false;
    var popup = args.popup || false;
    var pan = args.pan || false;
    var mapView = args.mapView;
    if (list.length === 0) return;
    mapApi.esriApi.GetGraphic().then(Graphic => {
      var geometryParse = [];
      list.forEach((item, index) => {
        geometryParse.push(
          mapApi.convert.toGeometryByWKT.parse({
            wkt: item.Shape,
            spatialReference: mapView.spatialReference
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
          var item = list[index];
          var symbol = GMapSymbol.getMarkerPoiSymbol({});
          var graphic = new Graphic({
            geometry: pt,
            symbol: symbol,
            attributes: {
              id: item.pIndex,
              attr: item,
              centerPt: pt,
              marker: true,
              popup: popup
            }
          });
          graphics.push(graphic);
        });
        if (layer === null) {
          mapView.graphics.addMany(graphics);
        } else {
          layer.graphics.addMany(graphics);
        }
        if (extent) {
          mapApi.geometryUtils.getMaxExtent(geometries).then(extent => {
            mapView.extent = extent.expand(2);
          });
        }

        if (popup && list.length > 0) {
          mapApi.popup.show({
            mapView: mapView,
            res: list[0],
            centerPt: pts[0],
            pan: pan
          });
        }
      });
    });
  }

  polygonsByList(args, layer = null) {
    var mapView = args.mapView;
    var list = args.list;
    var extent = args.extent && args.extent === true ? true : false;
    var popup = args.popup && args.popup === true ? true : false;
    if (list.length === 0) return;
    mapApi.esriApi.GetGraphic().then(Graphic => {
      var geometryParse = [];
      list.forEach((item, index) => {
        geometryParse.push(
          mapApi.convert.toGeometryByWKT.parse({
            wkt: item.Shape,
            spatialReference: mapView.spatialReference
          })
        );
      });
      Promise.all(geometryParse).then(geometries => {
        var graphics = [];
        geometries.forEach((geometry, index) => {
          if (geometry !== null) {
            var pt = null;
            if (geometry !== null) {
              if (geometry.type === "point") {
                pt = geometry;
              } else {
                pt = geometry.extent.center;
              }
            }
            if (geometry.type !== "point") {
              var item = list[index];
              var symbol = GMapSymbol.getSymbol(geometry);
              var graphic = new Graphic({
                geometry: geometry,
                symbol: symbol,
                attributes: {
                  id: item.pIndex,
                  attr: item,
                  centerPt: pt,
                  marker: true,
                  popup: popup
                }
              });
              graphics.push(graphic);
            }
          }
        });
        if (layer === null) {
          mapView.graphics.addMany(graphics);
        } else {
          layer.graphics.addMany(graphics);
        }

        if (extent) {
          setTimeout(() => {
            mapApi.geometryUtils.getMaxExtent(geometries).then(extent => {
              mapView.extent = extent.expand(2);
            });
          }, 100);
        }
      });
    });
  }

  polygonsByGeoJson(args, layer = null) {
    var mapView = args.mapView;
    var geojson = args.geojson;
    var list = args.list;
    var extent = args.extent && args.extent === true ? true : false;
    mapApi.esriApi.GetGraphic().then(Graphic => {
      var geometryParse = [];
      list.forEach((item, index) => {
        geometryParse.push(
          mapApi.convert.toGeometryByGeoJson.parse({
            geometry: item.geometry,
            spatialReference: mapView.spatialReference
          })
        );
      });
      Promise.all(geometryParse).then(geometries => {
        var graphics = [];
        geometries.forEach((geometry, index) => {
          var symbol = GMapSymbol.getSymbol(geometry);
          var graphic = new Graphic({
            geometry: geometry,
            symbol: symbol
          });
          graphics.push(graphic);
        });
        if (layer === null) {
          mapView.graphics.addMany(graphics);
        } else {
          layer.graphics.addMany(graphics);
        }

        // if (extent) {
        //   setTimeout(() => {
        //     mapApi.geometryUtils.getMaxExtent(geometries).then(extent => {
        //       mapView.extent = extent.expand(2);
        //     });
        //   }, 100);
        // }
      });
    });
  }
  housesGWRByList(args, layer = null) {
    var list = args.list || [];
    var marker = args.marker || false;
    var name = args.name || null;
    var extent = args.extent || false;
    var popup = args.popup || false;
    var pan = args.pan || false;
    var mapView = args.mapView;
    if (list.length === 0) return;
    mapApi.esriApi.GetGraphic().then(Graphic => {
      var geometryParse = [];
      list.forEach((item, index) => {
        geometryParse.push(
          mapApi.convert.toGeometryByWKT.parse({
            wkt: item.foreHouseWKT,
            spatialReference: mapView.spatialReference
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
          var item = list[index];
          var symbol = GMapSymbol.getGWRPoiSymbol({});
          var graphic = new Graphic({
            geometry: pt,
            symbol: symbol,
            attributes: {
              id: item.pIndex,
              attr: item,
              centerPt: pt,
              marker: true,
              popup: popup
            }
          });
          graphics.push(graphic);
        });
        if (layer === null) {
          mapView.graphics.addMany(graphics);
        } else {
          layer.graphics.addMany(graphics);
        }
        if (extent) {
          mapApi.geometryUtils.getMaxExtent(geometries).then(extent => {
            mapView.extent = extent.expand(2);
          });
        }

        if (popup && list.length > 0) {
          mapApi.forePoup.show({
            mapView: mapView,
            res: list[0],
            centerPt: pts[0],
            pan: pan
          });
        }
      });
    });
  }


  daishouHouse(args, layer = null) {
    var list = args.list || [];
    var marker = args.marker || false;
    var name = args.name || null;
    var extent = args.extent || false;
    var popup = args.popup || false;
    var pan = args.pan || false;
    var mapView = args.mapView;
    if (list.length === 0) return;
    mapApi.esriApi.GetGraphic().then(Graphic => {
      var geometryParse = [];
      list.forEach((item, index) => {
        geometryParse.push(
          mapApi.convert.toGeometryByWKT.parse({
            wkt: item.houseWKT,
            spatialReference: mapView.spatialReference
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
          var item = list[index];
          var symbol = GMapSymbol.getdaishouHouse({});
          var graphic = new Graphic({
            geometry: pt,
            symbol: symbol,
            attributes: {
              id: item.pIndex,
              attr: item,
              centerPt: pt,
              marker: true,
              popup: popup
            }
          });
          graphics.push(graphic);
        });
        if (layer === null) {
          mapView.graphics.addMany(graphics);
        } else {
          layer.graphics.addMany(graphics);
        }
        if (extent) {
          mapApi.geometryUtils.getMaxExtent(geometries).then(extent => {
            mapView.extent = extent.expand(2);
          });
        }

        if (popup && list.length > 0) {
          mapApi.popup.show({
            mapView: mapView,
            res: list[0],
            centerPt: pts[0],
            pan: pan
          });
        }
      });
    });
  }


}

export default new GDrawGraphic();