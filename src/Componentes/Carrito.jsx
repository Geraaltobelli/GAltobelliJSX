//carrito lo que hace es recorrer y devuelve los productos en carrito y da la opcion de eliminar productos.
import style from './Carrito.module.css';

const Carrito = ( {carroConProducto, eliminarDelCarrito}) => {
    return (
    //Retorno el Carrito
            
        <div className= {style.carrito}>
            <h2>Mi Carrito Actual</h2>
            <div className= {style.carritolist}>
            {carroConProducto.map((producto, indice) =>(
                <div  key={indice}>
                    <img src={producto.image} alt={producto.title} height={50} width={50} />
                    <p>
                        {producto.price}$
                    </p>
                    <button onClick={() => eliminarDelCarrito(indice)}>Eliminar Producto</button>
                </div>
            ))}
            </div>
        </div>
    );

}

export default Carrito;