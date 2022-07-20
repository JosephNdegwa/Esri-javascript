var map;
require(["esri/map","dojo/domREady!"],function (Map) {
    map = new Map("map", {
        basemap: "topo-vector",
        center: [-122.45, 37.75],
        zoom: 13
      });
});