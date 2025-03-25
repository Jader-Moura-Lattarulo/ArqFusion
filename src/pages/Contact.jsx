import ContactForm from "../components/ContactForm/ContactForm"
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"

function Contact() {
    return (
        <>
            <Header/>
            <Banner image="contact.jpg" title="Contact Us"/>
            <div className="container d-flex ">
                <ContactForm/>
            </div>
            <Footer/>
        </>
    )
}

export default Contact
