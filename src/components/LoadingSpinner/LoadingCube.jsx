import './LoadingCube.css'
import LoadingCubeGif from '../../assets/loading.cube.gif'

function LoadingCube() {
    return (
        <div className='d-flex al-center jc-center loading-overlay-container'>
            <img src={LoadingCubeGif} alt="Loading" height="280px"/>
        </div>
    )
}

export default LoadingCube
