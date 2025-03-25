//COMPONENT
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"

function Home() {
    return (
        <>
        <Header/>
        <div className="container">
            <Hero/>
        </div>
        <Footer/>
        </>
    )
}

export default Home
