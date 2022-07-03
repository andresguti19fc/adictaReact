import { Link } from "react-router-dom";

const Item = ({ nombre, imagen, precio, id, stock }) => {
  
  return (
    <div className="col-xl-3 col-md-4 my-5">
      <div className="card h-100">
        <img className="card-img-top img-fluid" src={imagen} alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{precio} $</p>
          <footer>
                <Link className="btn btn-outline-dark" to={`/detail/${id}`} >ver detalles</Link>
             </footer>
        </div>
      </div>
    </div>
  );
};

export default Item;
