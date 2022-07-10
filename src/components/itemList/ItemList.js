import Item from "../item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div
        className="alert alert-dark alert-dismissible fade show py-5 my-5c text-danger fs-4"
        role="alert"
      >
        <strong>Lo sentimos!</strong> En estos momentos no hay productos
        disponibles en esta categoria.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
        <div>
          <Link to="/" className="btn btn-danger mt-3">
            Volver
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    );
  }
};
export default ItemList;
