import Boton from "../boton/Boton";
import { Link } from "react-router-dom";

const CartVacio = () => {
  const th = [
    "Imagen",
    "Producto",
    "Precio",
    "Cantidad",
    "SubTotal",
    "Eliminar",
  ];

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center my-3 py-3">Carrito vacio</h2>
      <div className="row">
        <div className="col-12 text-center">
          <table className="table table-striped">
            <thead>
              <tr>
                {th.map((t) => (
                  <th key={t} className="text-center">
                    {t}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="fs-3 fw-bold">
                <td colSpan="6">
                  <h1 className="">No hay productos en el carrito</h1>
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  <h2 className="my-3">
                    ¿No sabés qué comprar? ¡Miles de productos te esperan!
                  </h2>
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  <Link to="/">
                    <Boton classButton="btn btn-dark" label="Volver" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartVacio;
