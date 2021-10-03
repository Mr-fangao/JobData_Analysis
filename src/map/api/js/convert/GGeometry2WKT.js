export default class GGeometryToWKT {
  ToWKT(geometry) {
    if (geometry) {
      let polyType = geometry.type.toUpperCase();
      if (polyType === "POLYGON") {
        let rings = [].concat(geometry.rings[0]);
        rings.push(rings[0]);
        return "POLYGON ((" + rings.join(" ").replace(/\s+/g, "&").replace(/,/g, " ").replace(/&/g, ",") + "))";
      } else if (polyType === "POLYLINE") {
        return "LINESTRING (" +
          geometry.paths[0].join(" ").replace(/\s+/g, "&").replace(/,/g, " ").replace(/&/g, ",") + ")";
      } else if (polyType === "POINT") {
        return `POINT (${geometry.x} ${geometry.y})`
      }
    } else {
      return "";
    }
  }
}
