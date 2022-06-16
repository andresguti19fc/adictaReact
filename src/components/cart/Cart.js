import { useContext } from "react";
import CartContext from "../../context/CartContext.js";
import Boton from "../../components/boton/Boton.js";
import "./cart.css";

const Cart = () => {
  const { cart, eliminarTodo, comprarCart, eliminarCart } = useContext(CartContext);

  const handleEliminarCart = (e) => {
    e.preventDefault();
    eliminarCart(e.target.id);
  }

  const th = ["Imagen", "Producto", "Precio", "Cantidad", "SubTotal", "Eliminar"];

  return (
    <>
      <div className="cart container text-center minHeight">
        <div className="cart-header row">
          <div className="col-md-12">
            <h3 className="text-center fs-1 fw-bold my-5">
              Carrito de compras
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
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
                {cart.map((item) => (
                  <tr key={item.id} className="fs-3 fw-bold">
                    <td>
                      <img
                        className="rounded-circle alturaImagen"
                        src={item.imagen}
                        alt={item.nombre}
                      />
                    </td>
                    <td>{item.nombre}</td>
                    <td>{item.precio} $</td>
                    <td>{item.cantidad}</td>
                    <td>{item.precio * item.cantidad} $</td>
                    <td>
                      <Boton
                        label="eliminar"
                        onClick={handleEliminarCart}
                        classButton="btn btn-outline-danger"
                      />
                    </td>
                  </tr>
                ))}
                <tr className="fs-3 fw-bold">
                  <td colSpan="5">Total</td>
                  <td>
                    {cart.reduce(
                      (total, item) => total + item.precio * item.cantidad,
                      0
                    )}{" "}
                    $
                  </td>
                </tr>
                <tr className="fs-3 fw-bold">
                  <td colSpan="5">
                    <Boton
                      label="comprar"
                      classButton="btn btn-outline-success" onClick={comprarCart} />
                  </td>
                  <td>
                    <Boton
                      label="vaciar carrito"
                      onClick={eliminarTodo}
                      classButton="btn btn-outline-warning"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
