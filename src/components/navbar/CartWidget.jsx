import Boton from "../boton/Boton";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CartWidget = () => {
    return (
        <Boton label={<FontAwesomeIcon icon={faCartShopping} /> } span={<span style={{color: 'red'}}>0</span>} />
    );
}

export default CartWidget;