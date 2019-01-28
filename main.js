// 1. Create a map object.
var mymap = L.map('map', {
    center: [44.13, -119.93],
    zoom: 7,
    maxZoom: 10,
    minZoom: 3,
    detectRetina: true});




// Get GeoJSON and put on it on the map when it loads
//cellTowers= L.geoJson.ajax("assets/airports.geojson", {
    // assign a function to the onEachFeature parameter of the cellTowers object.
    // Then each (point) feature will bind a popup window.
    // The content of the popup window is the value of `feature.properties.airports`
  //  onEachFeature: function (feature, layer) {
   //     layer.bindPopup(feature.properties.company);



    // Create Div Element and Populate it with HTML
var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<b>airports</b><br />';
    div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p>0</p>';
    div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p>0.1</p>';
    div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p>0.3</p>';
    div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p>0.5</p>';
    div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p>0.7</p>';
    div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p>1</p>';
    
    div.innerHTML += '<hr><b>Company<b><br />';
    div.innerHTML += '<i class="density-0"></i><p>Density 0</p>';
    div.innerHTML += '<i class="density-0.1"></i><p> Density 0.1</p>';
    div.innerHTML += '<i class="density-0.3"></i><p> Density 0.3</p>';
    div.innerHTML += '<i class="density-0.5"></i><p> Density 0.5</p>';
    div.innerHTML += '<i class="density-0.7"></i><p> Density 0.7</p>';
    div.innerHTML += '<i class="density-1"></i><p> Density 1</p>';
    // Return the Legend div containing the HTML content
    return div;
};

// 12. Add a scale bar to map
L.control.scale({position: 'bottomleft'}).addTo(mymap);
