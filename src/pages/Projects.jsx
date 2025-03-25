import Header from "../components/Header/Header"
import ProjectsList from "../components/ProjectsList/ProjectsList"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"

function Projects() {
    return (
        <>
            <Header/>
            <Banner image="projects.jpg" title="Projects"/>
            <div className="container d-flex al-center jc-center">
                <ProjectsList/>
            </div>
            <Footer/>
        </>
    )
}

export default Projects
