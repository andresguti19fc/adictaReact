import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "../ItemDetailContainer/ItemDetailContainer.css";
import "../cart/cart.css";
import { useContext, useState } from "react";
import Boton from "../../components/boton/Boton";
import { useAuth0 } from "@auth0/auth0-react";
import CartContainer from "../cartContainer/CartContainer";
import {  addDoc,  documentId,  collection,  Timestamp,  getDocs,  query,  where,  writeBatch,} from "firebase/firestore";
import { db } from "../../services/firebase/index";
import swal from "sweetalert";

const Checkout = () => {
  const { cart, totalCantidad, comprarCart } = useContext(CartContext);

  const [usuario, setUsuario] = useState("");

  const { isAuthenticated } = useAuth0();

  const objOrder = {
    cliente: {
      nombre: usuario.nombre,
      direccion: usuario.direccion,
      email: usuario.email,
      telefono: usuario.telefono,
      fecha: Timestamp.fromDate(new Date()),
    },
    items: cart,
    total: totalCantidad,
  };

  const capturarInput = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };
  if (isAuthenticated) {
    const guardarDatos = async (e) => {
      e.preventDefault();
      setUsuario({ ...objOrder });

      const order = collection(db, "orders");
      const batch = writeBatch(db);
      const productosRef = collection(db, "bbdd");
      const q = query(
        productosRef,
        where(
          documentId(),
          "in",
          cart.map((item) => item.id)
        )
      );
      const productos = await getDocs(q);
      const sinStock = [];
      productos.docs.forEach((doc) => {
        const item = cart.find((el) => el.id === doc.id);
        if (doc.data().stock >= item.cantidad) {
          batch.update(doc.ref, {
            stock: doc.data().stock - item.cantidad,
          });
        } else {
          sinStock.push(item);
        }
      });
      if (sinStock.length === 0) {
        addDoc(order, objOrder).then((id) => {
          batch.commit();
          e.target.reset();
          comprarCart();
          swal(
            "Compra realizada",
            `su comprobante de compra es: ${id.id}`,
            "success",
            {
              button: "volver a la tienda",
            }
          )
            .then((value) => {
              if (value) {
                window.location.href = "/";
              }
            })
            .catch((error) => {
              console.log(error);
            });
        });
      } else {
        swal(
          "¡Algo salio mal!",
          `No se pudo realizar la compra. no hay stock suficiente: ${sinStock
            .map((item) => item.nombre)
            .join(", ")}`,
          "error"
        );
      }
      console.log(order.id);
    };

    return (
      <div className="container minHeight my-5">
        <div className="row">
          <div className="col-md-12">
            <h1>Checkout</h1>
            <hr />
            <div className="row">
              <form onSubmit={guardarDatos}>
                <div className="row">
                  <div className="col-6 col-md-6 col-4">
                    <div className="form-group">
                      <label>Nombre</label>
                      <input
                        onChange={capturarInput}
                        name="nombre"
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Telefono</label>
                      <input
                        onChange={capturarInput}
                        type="number"
                        name="telefono"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Direccion</label>
                      <input
                        onChange={capturarInput}
                        type="text"
                        name="direccion"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        onChange={capturarInput}
                        type="email"
                        name="email"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group my-3">
                      <Link to="/">
                        <Boton
                          label="Volver"
                          classButton="btn btn-outline-primary mx-3"
                        />
                      </Link>
                      <button className="btn btn-outline-dark">
                        Finalizar compra
                      </button>
                    </div>
                  </div>
                  <div className="col-6 col-md-6">
                    <ul className="list-group">
                      <label>Productos</label>
                      {cart.map((item, index) => (
                        <li key={item.id} className="list-group-item">
                          <div className="row">
                            <div className="col-md-2">
                              <span>{index + 1}</span>
                            </div>
                            <div className="col-md-6">
                              <h5>{item.nombre}</h5>
                              <p>{item.descripcion}</p>
                            </div>
                            <div className="col-md-2">
                              <p>{item.cantidad}</p>
                            </div>
                            <div className="col-md-2">
                              <p>{item.precio * item.cantidad} $</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <CartContainer />
        {swal(
          "¡Algo salio mal!",
          "Debes iniciar sesion para realizar la compra",
          "error"
        )
          .then((value) => {
            if (value) {
              window.location.href = "/";
            }
          })
          .catch((error) => {
            console.log(error);
          })}
      </>
    );
  }
};
export default Checkout;