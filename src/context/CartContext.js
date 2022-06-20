import { useState, useEffect, createContext } from 'react';
import swal from 'sweetalert';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    

    const [totalCantidad, setTotalCantidad] = useState(0);

    useEffect(() => {
        let totalCantidad = 0
        cart.forEach(prod => {
            totalCantidad += prod.cantidad
        })
        setTotalCantidad(totalCantidad)
    }, [cart])

    const cantidadCart = () => {
        return cart.reduce((total, prod) => total + prod.cantidad, 0)
        
    }

    const existeCart = (id) => {
        return cart.some(item => item.id === id);
    }        

        const agregarCart = (item) => {
            if(!existeCart(item.id)) {
                setCart([...cart, item]);
                }
            }

    const eliminarCart = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }
    
    const eliminarTodo = () => {
        setCart([]);
    }
    const comprarCart = () => {        
        setCart([]);
        swal("Gracias por su compra", "ok", "success");
    }
    return (
        <CartContext.Provider value={{ 
            cart,
            cantidadCart,
            totalCantidad,
            agregarCart,
            eliminarCart,
            eliminarTodo,
            comprarCart
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;


