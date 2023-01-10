import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="ml-10">
        <h2 className="text-3xl font-bold">{info.name}</h2>
        <p className="pt-2">{info.desc}</p>
      </div>
      <div className="flex items-center mt-5 ml-10">
        <button
          className="bg-[#fffff] text-black py-1 px-5 min-w-150 cursor-pointer border border-gray-400 rounded shadow active:translate-y-0.5 disabled:opacity-25"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="font-bold px-3">{total ? total : ""}</h3>
        <button
          className="bg-[#fffff] text-black py-1 px-5 min-w-150 cursor-pointer border border-gray-400 rounded shadow active:translate-y-0.5"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
