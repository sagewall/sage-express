require([
  'esri/map',
  'esri/arcgis/utils',
  'esri/dijit/Search',
  'esri/dijit/LayerList',
  'dojo/domReady!'
], function (Map,
             arcgisUtils,
             Search,
             LayerList) {
  arcgisUtils.createMap('84b8a102ef3b491eac81da8516516d42', 'mapDiv').then(function (response) {
    var map = response.map;
    var searchOptions = {
      map: map
    };

    var search = new Search(searchOptions, 'searchDiv');
    search.startup();

    var layerList = new LayerList({
      map: map,
      showLegend: true,
      showSubLayers: true,
      layers: []
    },'layersDiv');
    layerList.startup();
    
  });
});