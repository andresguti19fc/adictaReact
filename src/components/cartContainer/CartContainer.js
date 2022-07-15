import CartList from "../cartList/CartList";
import CartVacio from "../cart/CartVacio";
import { useContext } from "react";
import CartContext from "../../context/CartContext.js";

const CartContainer = () => {

    const { totalCantidad } = useContext(CartContext);
// hacer card para el footr
    if (totalCantidad === 0) {
        return <CartVacio />;
    }
    return <CartList />;    
}

export default CartContainer;