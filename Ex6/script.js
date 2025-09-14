mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvbmV1YmllIiwiYSI6ImNrMXo3Z3JncjBibTQzZHBjNWlub2V2NXYifQ.YEuXWKArgCh0e2GIwjTZxw';
var map = new mapboxgl.Map({
  container: 'map'
  style: 'mapbox://styles/geoneubie/ck5yrp8iw0cd01iruxg6mqg48',
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
