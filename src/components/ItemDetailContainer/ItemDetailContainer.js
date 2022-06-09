import { useState, useEffect } from 'react';
import { getItemById } from '../../mock/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';

const ItemDetailContainer = () => {

    let num = 5;
    let minimo = 10;
    let maximo = 20;
    if(num > minimo && num < maximo) {
        console.log('numero entre');
    }

    const [cargando, setCargando] = useState(true);

    const [prod, setProd] = useState();

    const {itemId} = useParams();
        
    useEffect(() => {
        setCargando(true);
           getItemById(itemId).then((resolve) => {            
            setProd(resolve);            
        }).catch(error => {
            console.log(error); 
        }
        ).finally(() => {
            console.log('finally');
            setCargando(false)
        });
    }, [itemId]);
    console.log(prod);
    if(cargando){
        return <Spiner />
      }else{
        <h1>No hay productos</h1>
      }
    return (
        <div className="minHeight">

        <h2 className="text-center my-5">detallar los productos</h2>
        <ItemDetail {...prod} />
        </div>    
    )
}

export default ItemDetailContainer;