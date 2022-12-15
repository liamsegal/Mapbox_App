import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Controller connected")
    mapboxgl.accessToken = 'pk.eyJ1IjoibGlhbXNlZ2FsIiwiYSI6ImNsYnAwM281MjAyaWEzcWthdW5icnRiaDAifQ.Apx4I94kbSqSpidHbquPcA';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
  });

  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  });

  document.getElementById('geocoder').appendChild(geocoder.onAdd(map))
  
  geocoder.on('result', function (e) {
    document.getElementById('place_name').value = e.place_name
    document.getElementById('place_longitude').value = e.result.center[1]
    document.getElementById('place_latitude').value = e.result.center[2]

  })

  }
}
