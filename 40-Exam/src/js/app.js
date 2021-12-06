
function initMap() {
    const options = {
        zoom:18, // начальный зум
        center: {lat: 47.8465, lng:  35.1355} //стартовые координаты центра карты
    }
    const map = new google.maps.Map(document.getElementById('map'), options);

    //@info https://developers.google.com/maps/documentation/javascript/custom-markers#customizing_markers_by_map_features
    const marker = new google.maps.Marker({
        // position:{lat: 47.8460, lng:  35.1355}, // Brooklyn Coordinates
        position:{lat: 47.84632042567421,  lng: 35.13545530019000}, // Координаты копированные с самой карты
        map: map, // карта к какой нужно применить
        icon:`./img/custom_marker.png`,
        // icon:'https://img.icons8.com/fluent/48/000000/marker-storm.png',
        zoom:0,
        // adding custom icons (Here I used a Flash logo marker)
        draggarble: false// If set to true you can drag the marker
    });
    // модалка с инфо
    // детальней => @info https://developers.google.com/maps/documentation/javascript/reference#drawing-on-the-map
    const information = new google.maps.InfoWindow({
        content: `<h4>Государственный цирк</h4>`
    });

    // добавление события клика
    marker.addListener('click', function() {
        information.open(map, marker);
    });
}