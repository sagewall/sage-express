L.mapbox.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';

var map = L.mapbox.map('mapDiv')
 .setView([39.74, -104.99], 15);

L.mapbox.styleLayer('mapbox://styles/sagewall/ciphm32fr000ybjm5rhsz8hmx').addTo(map);