// Ideally replace values below with your MapBox Access Token Style and Feature Service URL from AGOL
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvbmV1YmllIiwiYSI6ImNrMXo3Z3JncjBibTQzZHBjNWlub2V2NXYifQ.YEuXWKArgCh0e2GIwjTZxw';

var map = new mapboxgl.Map({
  container: 'map',
  // Replace with your styp
  style: 'mapbox://styles/geoneubie/ck27u9ejp1e291cmo0c78b4e3',
  center:[-105.28391,40.02072],
  bearing: 0, // bearing in degrees
  pitch: 60,
  zoom: 12 
});

map.on('load', function () {
    // Add a layer showing the city parks
    map.addLayer({
        'id': 'mobilehomes-layer',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Intersect_of_Mobile_homes_and_Flood_Risk_Boulder/FeatureServer/0/query?where=flood_risk+%3D+%27high%27&outSR=4326&f=geojson'
        },
        'paint': {
          // make circles larger as the user zooms from z12 to z22
          'circle-radius': {
          'base': 1.75,
          'stops': [[12, 2], [22, 180]]
          },
          'circle-color': '#bd2b24',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#000'
        }
    });
});


  
