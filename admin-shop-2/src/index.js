import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
        <button
          className="ml-10 mt-5 mb-5 cursor-pointer bg-[#0000ff] text-white py-3.5 px-5 min-w-150 border border-[#0000ff] rounded shadow disabled:opacity-25active:translate-y-0.5 hover:bg-blue-700"
          onClick={() => setLogin(false)}
        >
          Выйти
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2 className="font-bold ml-10 mt-5 text-xl">Нужно залогиниться!</h2>
        <button
          className="ml-10 mt-5 cursor-pointer bg-[#0000ff] text-white py-3.5 px-5 min-w-150 border border-[#0000ff] rounded shadow disabled:opacity-25active:translate-y-0.5 hover:bg-blue-700"
          onClick={() => setLogin(true)}
        >
          Войти
        </button>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
