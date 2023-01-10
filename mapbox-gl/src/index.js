import React, { useState } from "react";
import { render } from "react-dom";

import "./index.css";
import useMapbox from "./useMapbox.hook";

function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox();

  return (
    <>
      <button id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
      <div id="map" className="h-full"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
