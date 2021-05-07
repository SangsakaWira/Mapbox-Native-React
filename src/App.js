import "./styles.css";
import React, { useEffect, useState, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FuZ3Nha2F3aXJhIiwiYSI6ImNqdXBhajZmeTBudXg0NG50YjdhcDF2amUifQ.NmC56k1T54xEKGmlrFOxRA";

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <div
          ref={mapContainer}
          style={{ height: "400px" }}
          className="map-container"
        />
      </div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
