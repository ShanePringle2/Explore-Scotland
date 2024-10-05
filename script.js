// Initialize the map and set its view to show all of Scotland
var map = L.map('map').setView([56.4907, -4.2026], 7); // Adjusted to show all of Scotland

// Limit the map to show only Scotland
var bounds = L.latLngBounds(
    [[54.5, -8], [61, 0]] // South-West and North-East limits of Scotland
);
map.setMaxBounds(bounds);
map.on('drag', function () {
    map.panInsideBounds(bounds, { animate: false });
});

// Use CartoDB Positron tiles for a clean, minimal look
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
    maxZoom: 18,
    minZoom: 6
}).addTo(map);

// Marker for Edinburgh
var edinburghMarker = L.marker([55.9533, -3.1883]).addTo(map);
edinburghMarker.bindPopup("<b>Edinburgh</b><br>Capital of Scotland. Famous for its history and the Edinburgh Castle.");

// Click event on Edinburgh marker to zoom in and redirect
edinburghMarker.on('click', function () {
    map.setView([55.9533, -3.1883], 13, { animate: true }); // Zoom into Edinburgh
    setTimeout(function () {
        window.location.href = 'edinburgh.html'; // Redirect to Edinburgh page after zooming
    }, 1000); // 1 second delay
});

// Marker for Glasgow
var glasgowMarker = L.marker([55.8642, -4.2518]).addTo(map);
glasgowMarker.bindPopup("<b>Glasgow</b><br>Largest city in Scotland. Known for its vibrant culture and architecture.");

// Click event on Glasgow marker to zoom in and redirect
glasgowMarker.on('click', function () {
    map.setView([55.8642, -4.2518], 13, { animate: true }); // Zoom into Glasgow
    setTimeout(function () {
        window.location.href = 'glasgow.html'; // Redirect to Glasgow page after zooming
    }, 1000); // 1 second delay
});
