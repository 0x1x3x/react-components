import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

export const useMapbox = (options = {}) => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-73.990593, 40.740121],
      zoom: 13,
      ...options,
    });
  }, []);
};
