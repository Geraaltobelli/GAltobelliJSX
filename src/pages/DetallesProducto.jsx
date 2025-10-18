

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () =>{

    const {id} = useParams();
    const [producto , setProducto] = useState (null);

    useEffect(()=>{
    fetch (`https://fakestoreapi.com/products/${id}`)
    .then(respuesta => respuesta.json())
    .then(dato => setProducto(dato));
},[id]);

 if(!producto)
    return <p>Cargando ......</p>

return(
    <>
    <h1>Detalles del Producto {id}:  </h1>
    <img src={producto.image} alt={producto.title} width={50} height={50} />
    <h2>{producto.title}</h2>
    <p>{producto.description}</p>
    </>
);

}

export default DetalleProducto;