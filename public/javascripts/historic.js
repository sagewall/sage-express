mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';

var map = new mapboxgl.Map({
  container: 'mapDiv',
  style: 'mapbox://styles/sagewall/cin8vj3is0000b4nos3pormeg',
  center: [-105.2211, 39.7555],
  zoom: 11
});

map.on('click', function(e){
  console.log('click');
  var features = map.queryRenderedFeatures(e.point);
  if(!features.length){
    return;
  }
  var feature = features[0];
  $('#infoDiv').html(feature.properties.PopupInfo);
});
