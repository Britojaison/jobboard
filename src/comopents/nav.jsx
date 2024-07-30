import logo from '../assets/images.png'
import svg from '../assets/magnifying-glass-solid.svg'

function nav(){
    return(
        <nav className="nav">
            <div>
            <img src={svg} alt="" className='logo' />
            <p>JobBoard</p>
            </div>
        </nav>
    )
}

export default nav