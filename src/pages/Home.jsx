//COMPONENT
import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Home() {
    return (
        <>
        <Header/>
            <Banner title="Home" image="about.jpg"></Banner>
            <h1>HOME</h1>
            <p>Subtitle</p>
            <Button buttonStyle="primary" arrow>Primary!</Button>
            <Button buttonStyle="secondary">Secondary!</Button>
            <Button buttonStyle="outline">Outline!</Button>
            <Button buttonStyle="disabled" disabled>Disabled!</Button>
        <Footer/>
        </>
    )
}

export default Home
