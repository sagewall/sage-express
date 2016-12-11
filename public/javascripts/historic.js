mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';

var map = new mapboxgl.Map({
    container: 'mapDiv',
    style: 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya',
    center: [-105.25, 39.75],
    zoom: 10
});

map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, {layers: ['historic-place']});
    if (!features.length) {
        $('#info').html('Click historic places on map to see a description.')
    } else {
        $.each(features, function (index, feature) {
            $('#info').html(feature.properties.Description)
        });
    }
});

map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, {layers: ['historic-place']});
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});