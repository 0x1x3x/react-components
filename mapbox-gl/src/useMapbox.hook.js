import { useState, useEffect, useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function useMapbox() {
  useEffect(() => {});
  const [marker, setMarker] = useState();

  mapboxgl.accessToken =
    "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-73.990593, 40.740121],
      zoom: 12,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([-73.990593, 40.740121])
      .addTo(map);

    setMarker(marker);
  }, []);
}
