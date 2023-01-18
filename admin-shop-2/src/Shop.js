import React, { useState, useEffect } from "react";
import useFetch from "./useFetch.hook";
import Item from "./Item";

export default function Shop() {
  const [items, setItems] = useState([]);
  const { get, loader } = useFetch();

  useEffect(() => {
    (async () => {
      try {
        const data = await get(
          "https://learn.guidedao.xyz/api/student/products"
        );
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [get]);

  console.log(items[0]);

  return (
    <div className="w-1/2 ml-10 mt-10">
      <ul>
        {loader
          ? "Loading"
          : items.flat(2).map((item) => (
              <li key={item.id}>
                <Item info={item} />
              </li>
            ))}
      </ul>
    </div>
  );
}
