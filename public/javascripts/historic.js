mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';

var map = new mapboxgl.Map({
    container: 'mapDiv',
    style: 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya',
    center: [-105.25, 39.75],
    zoom: 10
});

map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, {layers: ['historic-places']});
    if (!features.length) {
        console.log('No historic places found');
    } else {
        $.each(features, function (index, feature) {
            new mapboxgl.Popup()
                .setLngLat(map.unproject(e.point))
                .setHTML(feature.properties.description)
                .addTo(map);
        });
    }
});