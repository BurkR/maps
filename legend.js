
function legend() {
    document.getElementById('airports').innerHTML = 'Airports of the United States';
}

legend.addTo(mymap);

var legend = L.control({position: 'topright'});

// 10. Function that runs when legend is added to map
legend.onAdd = function () {

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
