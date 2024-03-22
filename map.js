window.addEventListener("DOMContentLoaded",()=>{})



/*
***********************Map de la librairie leaflet**************************
*/
let map = L.map('map').setView([45.44970163781364, 4.381406596976945],17)


// des cartes prisent sur leaflet et leaflet extra

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([45.44970163781364, 4.381406596976945]).addTo(map);

