mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';
var map = new mapboxgl.Map({
  container: 'mapDiv',
  style: 'mapbox://styles/sagewall/cip04ztds0002biksiuzb0ujm'
});

map.addControl(new mapboxgl.Geolocate({
  position: 'bottom-left'
}));