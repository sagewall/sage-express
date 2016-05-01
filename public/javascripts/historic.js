L.mapbox.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';

var map = L.mapbox.map('mapDiv', 'mapbox.streets')
  .setView([39.7555, -105.2211], 11);

var drawingGroup = L.featureGroup().addTo(map);

new L.Control.Draw({
  edit: {
    featureGroup: drawingGroup
  }
}).addTo(map);

map.on('draw:created', function(e) {
  drawingGroup.addLayer(e.layer);
});


$.getJSON('api/historic-places', function(data){
  console.log(data);
  $.each(data, function(index, value){
    L.geoJson(value)
      .bindPopup(value.properties.name)
      .on('click', showDescription)
      .addTo(map);
  });
});

function showDescription(e){
  $('#description').html(e.layer.feature.properties.description);
}