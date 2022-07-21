/*var map;
require(["esri/map","dojo/domReady!"],function (Map) {
    map = new Map("mapDiv", {
        basemap: "streets",
        center: [36.9,-1.22],
        zoom: 11
      });
});
*/

require([

  "esri/map",
  "esri/dijit/Search",
  "dojo/domReady!"

], function (Map, Search) {
   var map = new Map("map", {
      basemap: "gray-vector",
      center: [36.9,-1.22], // lon, lat
      zoom: 6
   });

   var search = new Search({
      map: map
   }, "search");
   search.startup();

});

