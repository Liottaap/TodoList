import './layout.css'
import Logo from '../../assets/icons/LogoPorfolio.png'
import Donate from '../../assets/icons/cocktail-svgrepo-com.svg'

function Footer () {
    return(
        <footer>
            <section className="footer-info">            
                <img src={Logo} alt="LA degin logo" className="footer-img" />
                <p>LA design - Liotta Ana 2025</p>
            </section>

            <section className='dwm-container'>
            <p>Cheers</p>

                <img src={Donate} alt="click to donate" className='footer-img donate-img'/>
            </section>


        </footer>
    )
}

export default Footer