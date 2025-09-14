mapboxgl.accessToken = 'pk.eyJ1IjoiZG5ldWZlbGQtZnJjYyIsImEiOiJjbTBmeDY4cDcxNHdhMmtvaXRmdjJqeDltIn0.TQpjFnvI8qiW1J5OEmGJIA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/dneufeld-frcc/cmezze56b011t01ssezwt9ial',
  center: [-105, 39.7], 
  zoom: 8
});

function parseSourceParam() {

  const locString = window.location;
  console.log("locString=" + locString);
  
  const urlParams = new URLSearchParams(locString.search);
  var source = urlParams.get("source");
  console.log(source);

  // Add conditionals
  if (source == "winterpark") { 
    map.setCenter([-105.8171, 39.9135]);
    map.setZoom(9);
    document.getElementById("skiText").interHTML = "Ski Area: Winter Park"
  }

}
if (source == "vail") { 
  map.setCenter([-106.319,39.6446]);
  map.setZoom(9);
  document.getElementById("skiText").innerHTML = "Ski Area: Vail"
}
  
}
