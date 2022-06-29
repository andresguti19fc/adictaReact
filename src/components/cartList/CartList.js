import Cart from "../cart/Cart";

const CartList = () => {

    const th = [
        "Imagen",
        "Producto",
        "Precio",
        "Cantidad",
        "SubTotal",
        "Eliminar",
      ];

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
              <Cart />
            </table>
          </div>
        </div>
      </div>
    </>
        )
}

export default CartList;


