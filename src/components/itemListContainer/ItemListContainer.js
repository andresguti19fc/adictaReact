import React from "react";
import ItemList from "../itemList/ItemList.js";
import Spiner from "../Spiner/Spiner.js";
import { getBbdd } from "../../mock/asyncMock";
import { getBbddByCategoria } from "../../mock/asyncMock";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const ItemListContainer = function ({ title }) {
  const [items, setItems] = useState([]);

const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    setCargando(true);
    if(!categoriaId)  {
    getBbdd().then((resolve) => {
      setItems(resolve);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setCargando(false);
    });
  } else {
    getBbddByCategoria(categoriaId).then((resolve) => {
      setItems(resolve);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setCargando(false);
    });
  }
  }, [categoriaId]);
  if(cargando){
    return <Spiner />
  }else{
    <h1>No hay productos</h1>
  }

  return (
    <div className="container text-center minHeight">
      <div className="row App">
        <h1>{title}</h1>
      </div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
