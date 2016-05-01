L.mapbox.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';

var map = L.mapbox.map('mapDiv', 'mapbox.pirates')
  .setView([39.7555, -105.2211], 11);

var featureGroup = L.featureGroup().addTo(map);

new L.Control.Draw({
  edit: {
    featureGroup: featureGroup
  }
}).addTo(map);

map.on('draw:created', function(e) {
  featureGroup.addLayer(e.layer);
});


$.getJSON('api/historic-places', function(data){
  console.log(data);
  $.each(data, function(index, value){
    L.geoJson(value).addTo(map).bindPopup(value['properties']['description']);
  });

});
