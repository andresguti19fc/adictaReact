import React from "react";
import ItemList from "../itemList/ItemList.js";
import { getBbdd } from "../../asyncMock";
import { useEffect, useState } from "react";

const ItemListContainer = function ({ title }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getBbdd().then((resolve) => {
      setItems(resolve);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>{title}</h1>
      </div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
