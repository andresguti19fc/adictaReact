import Boton from "../boton/Boton";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CartWidget.css';

const CartWidget = () => {
    return (
        <Boton classButton='btn btn-outline-light' label={<FontAwesomeIcon icon={faCartShopping} /> } span={<span className="spanCounter"> 0</span>} />
    );
}

export default CartWidget;