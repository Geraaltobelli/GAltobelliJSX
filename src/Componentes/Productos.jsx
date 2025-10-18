//importamos useEffect y useState y Link para las rutas.

import { useState , useEffect } from "react";
import {Link} from 'react-router-dom';
import style from './Productos.module.css';

//Creamos el componente productos, HIJO de INICIO.
const Productos = ({agregarProducto}) =>{

    const [productos, setProductos] = useState ([]);
    const [cargando, setCargando] = useState (true);
    const [error, setError] = useState (null);

    const URL = 'https://fakestoreapi.com/products';
    ///**Aca consumo la API */
    useEffect (() => {
        {/**la funcion fetch devuelve una promesa. */}
        {/**el metodo json() lo que hace es recibir la promera, la "convierte en un objeto JS". */}
        {/**Luego actualizo productos con los datos que trae el fetch, aca ya tengo los productos. Los tengo que cargar en un estado. */}
        fetch(URL)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            setProductos(datos);
            setCargando(false);
        })
        .catch((error) => {
            setError('Error de CARGA');
            setCargando(false);
        });
        }, []);

        if(cargando) return 'Un momento por favor, Cargando los productos';
        if(error) return error;

        {/**Aca renderizamos */}
        return(
            
            <div className={style.carritoProductos}>
                <h2>Productos.</h2>
                <div className={style.cajonProductos} >
                    {/**Aca con un MAP recorro el Array de productos y lo voy mostrando, a su vez agrego el buton para "agregar Producto" y el detalle */}
                    {productos.map((producto) => (
                        <div className={style.cartaproducto} key={producto.id}>
                                                         
                            <div className={style.contenedorImage}>
                                <img className={style.imgProducto} src={producto.image} alt={producto.title} height={50} width={50} />
                            </div>
                            
                            <div className={style.descripcionProducto}>
                                {producto.title}
                            </div>
                            
                            <div className={style.precioProducto}>
                                Precio: ${producto.price}
                            </div>
                            
                            <div className= {style.botonAgregar} >
                                <button onClick={()=> agregarProducto(producto)}>Agregar Producto.</button>
                            </div>
                            <div className={style.detalleProducto}>
                                <Link to={`/productos/${producto.id}`}>Detalles </Link>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
       )
    }

export default Productos;
   

