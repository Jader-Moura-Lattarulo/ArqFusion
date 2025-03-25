import AboutText from "../components/AboutText/AboutText"
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
function About() {
    return (
        <>
            <Header/>
            <Banner image="about.jpg" title="About"/>
            <div className="container d-flex ">
                <AboutText/>
            </div>
            <Footer/>
        </>
    )
}

export default About
