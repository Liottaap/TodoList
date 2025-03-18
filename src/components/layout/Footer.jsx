import './layout.css'
import Logo from '../../assets/icons/LogoPorfolio.png'
import Donate from '../../assets/icons/cocktail-svgrepo-com.svg'

function Footer () {
    return(
        <footer>
            <section className="footer-info">            
                <img src={Logo} alt="Logo de LA design, una desarrolladora web de páginas retro, waporwave" className="footer-img" />
                <p>LA design - Liotta Ana 2025</p>
            </section>

            <li className='dwm-container'>
                Cheers
                <a href="https://www.paypal.com/donate/?hosted_button_id=K4EKCBHRK8EGN"  
                title="Dona y ayuda a esta desarrolladora web retro a seguir su camino"></a>
            </li>


        </footer>
    )
}

export default Footer