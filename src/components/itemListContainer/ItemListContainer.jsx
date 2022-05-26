import React from "react";
import Boton from "../boton/Boton";
const ItemListContainer = function ({ title }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{title}</h1>
        </div>
      </div>
      <Boton label="E-comerce" />
    </div>
  );
};

export default ItemListContainer;
