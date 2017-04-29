mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiY2oyMmpwdXBpMDBzZTJxbzd0cjRia25sciJ9.P-lRgeNCd7hw7MwQ0USh9w';

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