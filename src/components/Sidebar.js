import "./product.css"
import logo from "./image1.png"
import chezuba from "./chezuba.png"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div style={{"margin": "10px 10px"}}>
                <img className="sidebar-photo" src={chezuba} />
                <h2 style={{"color": "gray"}}>CHEZUBA</h2>
            </div>
            
            <div style={{"margin": "50px 10px"}}>
                <img className="sidebar-photo" src={logo} alt="oops" />
                <p className="sidebar-name">Sukhendra Rompally</p>
            </div>
            

            <div className="sidebar-links">
                <a href="" className="sidebar-link" style={{"color": "blue"}}>Home</a>
                <a href="" className="sidebar-link">Calendar</a>
                <a href="" className="sidebar-link">Projects</a>
                <a href="" className="sidebar-link">My Applications</a>
                <a href="" className="sidebar-link">Extras</a>
            </div>
        </div>
    )
}

export default Sidebar