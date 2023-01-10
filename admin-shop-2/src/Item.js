import React, { useState } from "react";

export default function Item({ info: { name, desc, image } }) {
  const [total, setTotal] = useState(0);

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="w-2/5 ">
      <img className="w-a mb-2" src={image} alt="" />
      <div className="text-justify">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="pt-2">{desc}</p>
      </div>
      <div className="flex items-center mt-5 mb-5">
        <button
          className="bg-[#fffff] text-black py-1 px-5 min-w-150 cursor-pointer border border-gray-400 rounded shadow active:translate-y-0.5 disabled:opacity-25"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="font-bold px-3">{total ? total : ""}</h3>
        <button
          className="bg-[#fffff] text-black py-1 px-5 min-w-150 cursor-pointer border border-gray-400 rounded shadow active:translate-y-0.5 disabled:opacity-25"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
