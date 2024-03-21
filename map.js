/*
***********************Map de la librairie leaflet**************************
*/
let map = L.map('map').setView([45.439695, 4.3871779],17)


// des cartes prisent sur leaflet et leaflet extra

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([45.439695, 4.3871779]).addTo(map);