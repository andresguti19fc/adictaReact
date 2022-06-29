import React from "react";
import ItemList from "../itemList/ItemList.js";
import Card from "../card/Card.js";
import Spiner from "../Spiner/Spiner.js";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getDocs, query, collection, where } from 'firebase/firestore';
import {db} from "../../services/firebase/index";

const ItemListContainer = function ({ title }) {
  const [items, setItems] = useState([]);

const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    setCargando(true);

    const coleccion = categoriaId ? (
      query(collection(db, 'bbdd'), where('categoria', '==', categoriaId))) 
      : (collection(db, 'bbdd')
      ); 

    getDocs(coleccion).then(res => {
      const bbddFormateado = res.docs.map(doc => {
        return {
          id: doc.id, ...doc.data()
        };
      });
      setItems(bbddFormateado);
    }).catch(err => {
      console.log(err);
    }
    ).finally(() => {
      setCargando(false);
    }
    )
  }, [categoriaId]);



  if(cargando){
    return <Spiner />
  }else{
    <h1>No hay productos</h1>
  }

  return (
    <div className="container text-center minHeight">
      <div className="row App">
        <h1 className="my-3">{title}</h1>
      </div>
      <ItemList items={items} />
      <div className="row gap-5 justify-content-center my-5 pb-4">
        <Card />
      </div>
      
    </div>
  );
};

export default ItemListContainer;
