import GConvert23Map from "./GConvert23Map"
import GGeometryToWKT from "./GGeometry2WKT"
import GWKT2Geometry from "./GWKT2Geometry"
import GGeoJson2Geometry from "./GGeoJson2Geometry"
export const convert = {
  to23D: new GConvert23Map(),
  toWKTByGeometry: new GGeometryToWKT(),
  toGeometryByWKT: new GWKT2Geometry(),
  toGeometryByGeoJson: new GGeoJson2Geometry()
};
