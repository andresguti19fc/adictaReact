import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/index';

const ItemDetailContainer = () => {

    const [cargando, setCargando] = useState(true);

    const [prod, setProd] = useState();

    const {itemId} = useParams();
        
    useEffect(() => {

        const documento = doc(db, 'bbdd', itemId);

        getDoc(documento).then(doc => {
            const documentoFormateado = {id: doc.id, ...doc.data()}
                setProd(documentoFormateado);
        }).catch(err => {
            console.log(err);
        }
        ).finally(() => {
            setCargando(false);
        })                  
    }, [itemId]);

       
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