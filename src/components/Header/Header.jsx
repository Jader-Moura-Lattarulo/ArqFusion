import { Link } from "react-router-dom"

//ASSETS
import Logo from '../../assets/dnc-logo.svg'

//STYLES
import './Header.css'

function Header () {
    return (
        <header>
            <div className="container">
                <div className="align-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} alt="logoDNC" /></Link>
                    <nav>
                        <ul className="d-flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
