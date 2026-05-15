import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

console.log('Mapbox GL JS Loaded:', mapboxgl);

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFubmFoaHVhbmdoIiwiYSI6ImNtcDZkcmRtNDFtM20ycHBvYTRlOG42OGkifQ.mF9IT7d_tc6ApT4QV7VBeg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-71.09415, 42.36027],
  zoom: 12
});