import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="shop">
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <button
            className="bg-[#fffff] text-black py-1 px-5 min-w-150 cursor-pointer mt-8 mr-10 ml-10 border border-gray-400 rounded shadow active:translate-y-0.5"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
