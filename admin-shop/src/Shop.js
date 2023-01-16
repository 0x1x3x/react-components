import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  const saveGoods = async (item) => {
    const { id, ...others } = item;
    try {
      const res = await fetch(
        "https://learn.guidedao.xyz/api/student/products",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ ...others }),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (items.length === 0) {
      document.title = `Товары отсутствуют`;
    } else {
      document.title = `Товаров в корзине: ${items.length}`;
    }
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }

    const item = {
      id: uuid(),
      name: name,
      desc: desc,
    };
    setItems([...items, item]);
    setName("");
    setDesc("");
    setValid("");
    saveGoods(item);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleDeleteClick = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
      />
      <div className="px-2.5">
        {items.length === 0 && <p>Добавьте первый товар</p>}
      </div>
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </>
  );
}
