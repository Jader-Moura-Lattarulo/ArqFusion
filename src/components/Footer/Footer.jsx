import { Link } from "react-router-dom"

//ASSETS
import Logo from '../../assets/dnc-logo.svg'
import BrazilIcon from '../../assets/brazil-icon.svg'
import UsaIcon from '../../assets/usa-icon.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import InstagramIcon from '../../assets/instagram-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import TwitterIcon from '../../assets/twitter-icon.svg'

//STYLES
import './Footer.css'

function Footer () {
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img className="footer-logo" src={Logo} alt="Logo DNC" />
                        <p className="gray-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho</p>
                    <div className="d-flex social-links">
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon}/></a>
                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon}/></a>
                        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={LinkedinIcon}/></a>
                        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon}/></a>
                    </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>Pages</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="footer-col">
                            <h3>Contact</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="lang-area d-flex">
                        <img className="flag-height" src={BrazilIcon} alt="Brasil Icon" />
                        <img className="flag-height" src={UsaIcon} alt="USA Icon" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
