import { useState } from 'react';
import Boton from '../boton/Boton';
import '../navbar/CartWidget.css';

const Counter = ({onAdd, stock = 25, initial = 0}) => {

    const [count, setCount] = useState(initial);
    
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
    }
}

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1);
    }  
}         

    const onadd = () => onAdd(count);
    
    return (
        <div>
            <Boton classButton='btn btn-outline-secondary' onClick={decrement} label='-' />
            <span className='badge badge-pill badge-secondary spanCounter'>{count}</span>
            <Boton classButton='btn btn-outline-dark' onClick={increment} label='+' />
            <br/>            
            <Boton label='agregar al carrito' classButton="btn btn-outline-dark my-3" onClick={onadd} />
        </div>
    );
}

export default Counter;