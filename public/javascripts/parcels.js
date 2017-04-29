mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiY2oyMmpwdXBpMDBzZTJxbzd0cjRia25sciJ9.P-lRgeNCd7hw7MwQ0USh9w';

var map = new mapboxgl.Map({
    container: 'mapDiv',
    style: 'mapbox://styles/sagewall/ciphm32fr000ybjm5rhsz8hmx',
    center: [-104.99, 39.74],
    zoom: 15
});

console.log(map.queryRenderedFeatures());

map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, {layers: ['parcels']});
    if (!features.length) {
        console.log('No parcels found');
    } else {
        $.each(features, function (index, value) {
            new mapboxgl.Popup()
                .setLngLat(map.unproject(e.point))
                .setHTML("<p>" + value.properties.PIN + "</p><hr><ul><li>" + value.properties.OWNER_NAME + "</li><li>" + value.properties.SITUS_AD_1 + "</li><li>" + value.properties.D_CLASS_CN + "</li><li>" + value.properties.TOTAL_VALU + "</li></ul>")
                .addTo(map);
        });
    }
});

map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, {layers: ['parcels']});
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});