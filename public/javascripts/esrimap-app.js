require([
  'esri/map',
  'esri/arcgis/utils',
  'esri/dijit/Search',
  'esri/dijit/LayerList',
  'esri/TimeExtent',
  'esri/dijit/TimeSlider',
  'dojo/domReady!'
], function (Map,
             arcgisUtils,
             Search,
             LayerList,
             TimeExtent,
             TimeSlider) {
  arcgisUtils.createMap('3e9b8ac2ed2244bd812f639fe62a5ccb', 'mapDiv').then(function (response) {
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


    var timeSlider = new TimeSlider({
      style: 'width: 100%;'
    }, 'timeSliderDiv');
    var snowLayer = map.getLayer('NDFD_SnowFall_5192');
    var timeExtent = snowLayer.timeInfo.timeExtent;
    $('.start-time').text(timeExtent.startTime.toLocaleString());
    $('.end-time').text(timeExtent.endTime.toLocaleString());
    timeSlider.createTimeStopsByTimeInterval(timeExtent, 6, 'esriTimeUnitsHours');
    timeSlider.startup();
    map.setTimeSlider(timeSlider);
    
    timeSlider.on('time-extent-change', function(){
      $('.current-time').text(timeSlider.getCurrentTimeExtent().endTime.toLocaleString())
    });
  });
});