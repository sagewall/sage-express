require([
  'esri/views/MapView',
  'esri/WebMap',
  'esri/widgets/Search',
  'esri/widgets/Locate',
  'dojo/domReady!'
], function(
  MapView,
  WebMap,
  Search,
  Locate
) {

  var webmap = new WebMap({
    portalItem: { // autocasts as new PortalItem()
      id: 'f19c8d3bd088429081589669094ebdec'
    }
  });

  var view = new MapView({
    map: webmap,
    container: 'viewDiv'
  });
  view.then(function(){
    var searchWidget = new Search({
      view: view
    });
    searchWidget.startup();

    view.ui.add(searchWidget, {
      position: "top-left",
      index: 0
    });

    var locateBtn = new Locate({
      view: view
    });
    locateBtn.startup();

    // Add the locate widget to the top left corner of the view
    view.ui.add(locateBtn, {
      position: "top-left",
      index: 1
    });
  });
});