//Aca se tienen que renderizar los productos. 
// ES EL PADRE de Productos y Carrito.
//Maneja el Estado de Carrito con useState
//Tenemos 2 funciones aca, una para agregar al carrito y la otra para eliminar del carrito

import { useState } from "react";
import style from './Inicio.module.css'
import Header from "../Componentes/Header";
import Productos from "../Componentes/Productos";
import Carrito from "../Componentes/Carrito";

const Inicio = () => {

//------------------------------------------------------
    const [carrito, setCarrito] = useState ([]);

//------------------------------------------------------
    const agregarProducto = (producto) => {
        setCarrito ([...carrito, producto]);
    };
//------------------------------------------------------
    const eliminarDelCarrito = (indiceAEliminar) => {
        setCarrito(carrito.filter((_,indice)=> indice !== indiceAEliminar));
    };

    //------------contador de tamaño carrito--------------------------
    const contadorCarrito = carrito.length;
        
    return(
        <div className={style.inicio}>
            <Header contadorCarrito={contadorCarrito}/>
            {/*Le pasa agregarACarrito como prop a Productos */}
            <Productos agregarProducto = {agregarProducto} />
            <br />
            {/*Le pasa carrito y la función de eliminar como props a Carrito */}
            <Carrito carroConProducto = {carrito} eliminarDelCarrito={eliminarDelCarrito}
            />
        </div>
        
    )
}

export default Inicio;

