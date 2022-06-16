
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CartWidget.css';
import { useContext } from 'react';
import  CartContext  from '../../context/CartContext.js';
import { Link } from "react-router-dom";

const CartWidget = () => {
    
    const { totalCantidad } = useContext(CartContext);

    return (
        <Link to="cart" className='btn btn-outline-light' >
            <FontAwesomeIcon icon={faCartShopping} />
        <span className="spanCounter"> { totalCantidad } </span>
        </Link>
       );
}

export default CartWidget;