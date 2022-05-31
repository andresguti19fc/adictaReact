import Boton from "../boton/Boton";

const Item = ({ nombre, imagen, precio }) => {
  return (
    <div className="col-xl-3 col-md-4 my-5">
      <div className="card h-100">
        <img className="card-img-top img-fluid" src={imagen} alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{precio}</p>
          <Boton classButton="btn btn-outline-dark" label="ver detalles" />
        </div>
      </div>
    </div>
  );
};

export default Item;
