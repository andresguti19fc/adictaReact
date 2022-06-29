import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "../ItemDetailContainer/ItemDetailContainer.css";
import "../cart/cart.css";
import { useContext, useState } from "react";
import Boton from "../../components/boton/Boton";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/index";
import swal from "sweetalert";

const Checkout = () => {
  const { cart, totalCantidad } = useContext(CartContext);
  const [usuario, setUsuario] = useState("");
  const objOrder = {
    cliente: {
      nombre: usuario.nombre,
      direccion: usuario.direccion,
      email: usuario.email,
      telefono: usuario.telefono,
      fecha: new Date(),
    },
    items: cart,
    total: totalCantidad,
  };

  const capturarInput = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const guardarDatos = (e) => {
    e.preventDefault();
    console.log(usuario);
    setUsuario({ ...objOrder });

    swal({
      title: "¿Estas seguro?",
      text: "¡Tu compra se realizara!",
      icon: "info",
      buttons: true,
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        swal("¡Tu compra se realizó con éxito!", {
          icon: "success",
        });
        const order = collection(db, "orders");
        addDoc(order, objOrder)
          .then(({ id }) => {
            console.log(id);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        swal("¡Tu compra se canceló!");
      }
    });

    e.target.reset();
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
                    <button className="btn btn-outline-dark">enviar</button>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <ul className="list-group">
                    <label>Productos</label>

                    {cart.map((item, index) => (
                      <li key={item.id} className="list-group-item">
                        <div className="row">
                          <div className="col-md-2">
                            {/* <img className="rounded-circle alturaImagen" src={item.imagen} alt={item.nombre} /> */}
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
                            <p>{item.precio} $</p>
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
};
export default Checkout;
