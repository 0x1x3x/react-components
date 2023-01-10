import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchItems = async () => {
    try {
      setLoader(true);
      const res = await fetch(
        "https://learn.guidedao.xyz/api/student/products"
      );
      const data = await res.json();
      setItems(data);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  console.log(items[0]);

  return (
    <div className="w-1/2 ml-10 mt-10">
      {loader ? (
        "Loading..."
      ) : (
        <ul>
          {items.flat(2).map((item) => (
            <li key={item.id}>
              <Item info={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
