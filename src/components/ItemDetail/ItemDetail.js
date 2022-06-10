import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ItemDetail = ({ id, nombre, imagen, categoria, descripcion, precio }) => {
  return (
    <>
      <div className="card container text-center w-50">
        <div className="row">
          <div className="col-md-4">
            <div className="card-header">
              <h2 className="display-5 fw-1 card-title">{categoria}</h2>
            </div>
            <div className="card-image">
              <img className="img-fluid" src={imagen} alt={nombre} />
            </div>
          </div>
          <div className="col-md-8 d-flex align-items-center justify-content-around">
            <div className="card-content d-flex flex-column justify-content-around h-100">
              <span className="card-title my-3 fs-1">
                <b>{nombre}</b>
              </span>
              {/* estrellas */}
              <div className="d-flex flex-row justify-content-around">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h3 className="fs-1 my-3">
                <b>Precio:</b> {precio}{" "}
                <span className="spanCounter fs-2">$</span>
              </h3>
              <Link to={"/"} className="btn btn-outline-dark">
                Agregar al carrito
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <footer className="card-footer">
            <h3 className="card-text">detalles del producto</h3>
            <p className="fs-4 my-3 text-start">{descripcion}</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
