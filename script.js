var map;
require(["esri/map","dojo/domReady!"],function (Map) {
    map = new Map("map", {
        basemap: "streets",
        center: [36.9,-1.22],
        zoom: 11
      });
});