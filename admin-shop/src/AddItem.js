import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div className="py-1 px-2.5">
        <label htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="py-3 px-2.5 text-base rounded border border-gray-400 ml-2"
        />
      </div>
      <div className="py-1 px-2.5">
        <label htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="py-3 px-2.5 text-base rounded border border-gray-400 ml-2"
        />
      </div>
      <div className="px-2.5">
        <div className="py-2.5">{props.valid}</div>
        <input
          type="submit"
          className="cursor-pointer bg-[#0000ff] text-white py-3.5 px-5 min-w-150 border border-[#0000ff] rounded shadow disabled:opacity-25active:translate-y-0.5 hover:bg-blue-700"
          value="Добавить"
        />
      </div>
    </form>
  );
}
