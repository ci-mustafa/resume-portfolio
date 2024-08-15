function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 48.1351, // Latitude for Munich
            lng: 11.5820 // Longitude for Munich
        }
    });


    // Add a marker in Munich
    let marker = new google.maps.Marker({
        position: {
            lat: 48.1351,
            lng: 11.5820
        }, // Munich coordinates
        map: map,
        title: "Munich" // Tooltip text
    });

    let markers = [marker];

    let markerClusterer = MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
};