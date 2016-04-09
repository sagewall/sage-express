require([
  'esri/map',
  'esri/arcgis/utils',
  'dojo/domReady!'
], function(Map, arcgisUtils){
  arcgisUtils.createMap('a3ecc21f773a4e1aab73ae5aa5f015ae', 'mapDiv').then(function (response) {
    var map = response.map;
  });
});