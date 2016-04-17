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
  arcgisUtils.createMap('d2a52f9eb6db4bc884f0d9f093bbf4da', 'mapDiv').then(function (response) {
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