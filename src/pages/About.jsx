import { useContext } from "react"
import AboutText from "../components/AboutText/AboutText"
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

//CONTEXT
import { AppContext } from "../contexts/AppContext"

function About() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header/>
            <Banner image="about.jpg" title={appContext.languages[appContext.language].menu.about}/>
            <div className="container d-flex ">
                <AboutText/>
            </div>
            <Footer/>
        </>
    )
}

export default About
