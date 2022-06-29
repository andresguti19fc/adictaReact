import { useContext } from "react";
import CartContext from '../../context/CartContext'
import Boton from "../../components/boton/Boton.js";
import "./cart.css";
import {Link} from "react-router-dom";

const Cart = () => {
  const { cart, eliminarTodo, eliminarCart } =
    useContext(CartContext);
/* 
const handleCrearOrden = () => {
      const objOrder = {
        cliente:{
          nombre: '',
          email: '',
          telefono: '',
        },
        items: cart,
        total: totalCantidad

        }

        const order = collection(db, 'orders');
        addDoc(order, objOrder).then(({id}) => {
          console.log(id)
        } );


      }

      /* const handleUpdateStock = () => {
        const docRef = doc(db, 'products', cart[0].id);
      } */
  return (
    <>
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
                onClick={() => eliminarCart(item.id)}
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
<Link to="/checkout" ><Boton
              label="generar la orden"
              classButton="btn btn-outline-success"
              
            /></Link>
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
    </>
  );
};

export default Cart;
