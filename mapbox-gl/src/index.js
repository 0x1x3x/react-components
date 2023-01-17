import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import { useMapbox } from "./useMapbox.hook";

function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox({
    container: "map",
    center: [37.61192, 55.76199],
    zoom: 10,
  });

  return (
    <>
      <div className="min-h-full" id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
