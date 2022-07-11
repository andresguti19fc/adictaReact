import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import { collection, addDoc  } from "firebase/firestore";
import { db } from "../../services/firebase/index";

const AgregarProducto = () => {
  const [producto, setProducto] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productoBbdd = {
      nombre: producto.nombre,
      precio: producto.precio,
      categoria: producto.categoria,
      descripcion: producto.descripcion,
      imagen: producto.imagen,
      stock: 22,
    };
    addDoc(collection(db, "bbdd"), productoBbdd).then((id) => {
      console.log(id);
    }).catch((error) => {
      console.log(error);
    });       
    e.target.reset();
    swal("Listo", `${producto.nombre}, agregado correctamente`, "success");
  }

  return (
    <div className="container border my-4 p-5 bg-light">
      <div className="row text-center justify-content-center">
        <div className="col-md-6">
          <h1>Agregar Producto</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group py-2">
              <label>Nombre</label>
              <input
                onChange={onChange}
                className="form-control"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="form-group py-2">
              <label>Categoria</label>
              <select
                onChange={onChange}
                className="form-select"
                id="categoria"
                name="categoria"
              >
                <option>Seleccione una categoria</option>
                <option>zapatos</option>
                <option>camisas</option>
                <option>pantalon</option>
                <option>accesorios</option>
              </select>
            </div>
            <div className="form-group py-2">
              <label>Precio</label>
              <input
                onChange={onChange}
                className="form-control"
                type="number"
                id="precio"
                name="precio"
                placeholder="Precio"
                required
              />
            </div>
            <div className="form-floating py-2 mt-4">
              <textarea
                onChange={onChange}
                className="form-control"
                name="descripcion"
                placeholder="descripcion"
                id="floatingTextarea2"
              ></textarea>
              <label htmlFor="floatingTextarea2">
                Descripcion del producto
              </label>
            </div>
            <div className="form-group py-2">
              <label>Imagen</label>
              <input
                onChange={onChange}
                className="form-control file"
                type="file"
                id="imagen"
                name="imagen"
                placeholder="Imagen"
                required
              />
            </div>
            <button className="btn btn-dark my-5">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default AgregarProducto;
