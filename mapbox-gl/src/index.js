import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import useMapbox from "./useMapbox.hook";

function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox({
    container: "map",
    center: [-73.990593, 40.740121],
    zoom: 12,
  });

  return (
    <>
      <button
        id="rerender"
        className="cursor-pointer bg-[#0000ff] text-white py-3.5 px-5 min-w-150 border border-[#0000ff] rounded shadow disabled:opacity-25active:translate-y-0.5 hover:bg-blue-700"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <div className="min-h-full" id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
