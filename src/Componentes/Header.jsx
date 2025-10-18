import styles from './Header.module.css'
import NavBar from "./NavBar"
import logo from '../assets/boutique.png'
import logo2 from '../assets/carro.png'
import { Link } from 'react-router-dom'

const Header = ({contadorCarrito}) => {

return(
    
    <header className={styles.header} >

          {/*Titulo */}
        <div className= {styles.titulo}>
            <img src={logo} alt="logo de la pagina" width={50} height={50} />
        </div>   

        {/**Barra de Navegacion */}
        <div className={styles.navbarContainer}>
            <NavBar/>
        </div>
               
         {/**Icono Carrito, faltara completar*/}
        
            <Link to= {'/Cart'} >
                  <span>Mi carrito </span>< img src={logo2} alt='Logo carrito' width={30} height={30}/> 
                  <span>{contadorCarrito}</span>
            </Link>
   
    </header>

    )
}

export default Header;