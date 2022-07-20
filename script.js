var map;
require(["esri/map","dojo/domReady!"],function (Map) {
    map = new Map("map", {
        basemap: "topo-vector",
        center: [36.9,-1.22],
        zoom: 11
      });
});