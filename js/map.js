

// Define your locations: HTML content for the info window, latitude, longitude
var locations = [
['<h4>Whistler/Blackcomb , Canada </h4>', 50.115167, -122.948663],
['<h4>Mammoth Mountain , USA</h4>', 37.630952, -119.032607],
['<h4>Davos , Switzerland </h4>', 46.800233, 9.831045],
['<h4>Verbier , Switzerland</h4>', 46.096221, 7.228913],
['<h4>Vail , USA </h4>', 39.640005, -106.373392],
['<h4> St Anton , Austria</h4>', 47.129981, 10.268850],
['<h4>Mount Bachelor , USA </h4>', 43.979155, -121.688563 ],
['<h4>Chamonix , France</h4>', 45.922750, 6.879865 ],
['<h4>Serre Chevalier , France</h4>', 44.910962, 6.549743 ]
];


// Setup the different icons and shadows
var iconURLPrefix = 'http://maps.google.com/mapfiles/ms/icons/';

var icons = [
iconURLPrefix + 'red-dot.png',
iconURLPrefix + 'green-dot.png',
iconURLPrefix + 'blue-dot.png',
iconURLPrefix + 'orange-dot.png',
iconURLPrefix + 'purple-dot.png',
iconURLPrefix + 'pink-dot.png',
iconURLPrefix + 'yellow-dot.png'
]
var icons_length = icons.length;


var shadow = {
    anchor: new google.maps.Point(15,33),
    url: iconURLPrefix + 'msmarker.shadow.png'
    };

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(-37.92, 151.25),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    panControl: false,
    zoomControlOptions: {
    position: google.maps.ControlPosition.LEFT_BOTTOM
    }
    });

var infowindow = new google.maps.InfoWindow({
    maxWidth: 160
    });

var marker;
var markers = new Array();

var iconCounter = 0;

// Add the markers and infowindows to the map
for (var i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon : icons[iconCounter],
        shadow: shadow
    });

    markers.push(marker);

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
    infowindow.setContent(locations[i][0]);
    infowindow.open(map, marker);
    }
    })(marker, i));

    iconCounter++;
    // We only have a limited number of possible icon colors, so we may have to restart the counter
    if(iconCounter >= icons_length){
    iconCounter = 0;
    }
    }

function AutoCenter() {
    //  Create a new viewpoint bound
    var bounds = new google.maps.LatLngBounds();
    //  Go through each...
    $.each(markers, function (index, marker) {
    bounds.extend(marker.position);
    });
    //  Fit these bounds to the map
    map.fitBounds(bounds);
    }
AutoCenter();
