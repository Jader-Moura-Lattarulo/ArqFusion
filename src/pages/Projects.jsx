import { useContext } from "react"
import Header from "../components/Header/Header"
import ProjectsList from "../components/ProjectsList/ProjectsList"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"

//CONTEXT
import { AppContext } from "../contexts/AppContext"

function Projects() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header/>
            <Banner image="projects.jpg" title={appContext.languages[appContext.language].menu.projects}/>
            <div className="container d-flex al-center jc-center">
                <ProjectsList/>
            </div>
            <Footer/>
        </>
    )
}

export default Projects
