import React from 'react';

const AgregarProducto = () => {


    return (
        <div className="container border p-5 bg-light">
        <div className="row text-center justify-content-center">
            <div className="col-md-6">
            <h1>Agregar Producto</h1>

<form>
    <div className="form-group">
        <label>Nombre</label>
        <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            required
        />
        </div>
        <div className="form-group">
        <label>Categoria</label>
        <select className="form-select" id="categoria" name="categoria">
            <option>Seleccione una categoria</option>
            <option>zapatos</option>
            <option>camisas</option>
            <option>pantalon</option>
            <option>accesorios</option>
        </select>
        </div>
        <div className="form-group">
        <label>Precio</label>
        <input
            type="number"
            className="form-control"
            id="precio"
            name="precio"
            placeholder="Precio"
            required
        />
        </div>
        <div className="form-floating mt-4">
  <textarea className="form-control" placeholder="descripcion" id="floatingTextarea2"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
        <div className="form-group">
        <label>Imagen</label>
        <input
            type="file" 
            className="form-control file"
            id="imagen"
            name="imagen"
            placeholder="Imagen"
            required
        />
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
</form>
            </div>
        </div>
        


        </div>
    );
    }
    export default AgregarProducto;