import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

export const useMapbox = ({
  container = "map",
  center = [-73.990593, 40.740121],
  zoom = 10,
}) => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";

  const [lat, lng] = center;

  useLayoutEffect(() => {
    const center = [lat, lng];
    const params = {
      container,
      style: "mapbox://styles/mapbox/dark-v10",
      center,
      zoom,
    };
    const map = new mapboxgl.Map(params);
  }, [container, lat, lng, zoom]); // center ломает ререндер
};
