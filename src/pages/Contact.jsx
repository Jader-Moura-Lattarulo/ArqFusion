import { useContext } from "react"
import ContactForm from "../components/ContactForm/ContactForm"
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"

//CONTEXT
import { AppContext } from "../contexts/AppContext"

function Contact() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header/>
            <Banner image="contact.jpg" title={appContext.languages[appContext.language].menu.contact}/>
            <div className="container d-flex ">
                <ContactForm/>
            </div>
            <Footer/>
        </>
    )
}

export default Contact
