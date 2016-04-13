require([
  'esri/map',
  'esri/arcgis/utils',
  'dojo/domReady!'
], function(Map, arcgisUtils){
  arcgisUtils.createMap('16384bba263b4c6eb25e9a30e1cc68c1', 'mapDiv').then(function (response) {
    var map = response.map;
  });
});