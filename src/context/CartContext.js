import { useState, useEffect, createContext, useRef } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [totalCantidad, setTotalCantidad] = useState(0);
  
  const render = useRef(0)
  
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('cart');
    const cartParsed = JSON.parse(carritoGuardado);
    setCart(cartParsed);
  }, [])

  useEffect(() => {
    if(render.current > 0){
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    render.current+=1
  }, [cart]);

  useEffect(() => {
    let totalCantidad = 0;
    cart.forEach((prod) => {
      totalCantidad += prod.cantidad;
    });
    setTotalCantidad(totalCantidad);
  }, [cart]);

  const cantidadCart = () => {
    return cart.reduce((total, prod) => total + prod.cantidad, 0);
  };

  const existeCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const agregarCart = (item) => {
    if (!existeCart(item.id)) {
      setCart([...cart, item]);
    }
  };

  const eliminarCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const eliminarTodo = () => {
    setCart([]);
  };
  const comprarCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cantidadCart,
        totalCantidad,
        agregarCart,
        eliminarCart,
        eliminarTodo,
        comprarCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
