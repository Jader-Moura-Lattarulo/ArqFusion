import { useContext } from "react"
import { Link } from "react-router-dom"

//ASSETS
import Logo from '../../assets/fusio-logo.png'
import BrazilIcon from '../../assets/brazil-icon.svg'
import UsaIcon from '../../assets/usa-icon.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import InstagramIcon from '../../assets/instagram-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import TwitterIcon from '../../assets/twitter-icon.svg'

//COMPONENT
import Button from '../Button/Button'

//CONTEXT
import { AppContext } from '../../contexts/AppContext'

//STYLES
import './Footer.css'

function Footer () {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img className="footer-logo" src={Logo} alt="Logo DNC" />
                        <p className="gray-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                    <div className="d-flex social-links">
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon}/></a>
                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon}/></a>
                        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={LinkedinIcon}/></a>
                        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon}/></a>
                    </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className="grey-1-color">R. Alameda Fusion, 120 – Centro | São Paulo – SP | CEP 01000-000</p>
                            <p className="grey-1-color">contato@arqfusion.com</p>
                            <p className="grey-1-color">(11) 98765-4321</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © ArqFusion - 2024</p>
                    <div className="lang-area d-flex">
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                            <img className="flag-size" src={BrazilIcon} alt="Brasil Icon"/>
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                            <img className="flag-size" src={UsaIcon} alt="USA Icon" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
