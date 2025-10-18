import styles from './Footer.module.css';

const Footer = () => {

return(
    
    <footer className={styles.footer}>
        {/*Enlaces info*/}
        <div className={styles.footerlist} >
            <a   href="#">Acerca de Nosotros</a>
            <a   href="#">Politicas de Privacidad</a>
            <p className= {styles.copyright} >2025 Productos Materos. Todos los derechos reservados.</p>
        </div>
        
        {/**Seccion Copyright */}

        

    </footer>

)

}

export default Footer;