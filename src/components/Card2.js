import { AccountCircle } from "@material-ui/icons"
import "./product.css"
import logo from "./image1.png"

const Card2 = () => {
    // const styles = {

    //     largeIcon: {
    //       width: 600,
    //       height: 600,
    //     },
      
    //   };
    return(
        <div className="card2">
            <h2>User Activity</h2>
            <div className="card2-2">
                <div className="card2-1">
                    <h1>0 Hrs</h1>
                    <h2>Volunteer Experience</h2>
                </div>
                <img className="image" src={logo} />
            </div>
        </div>
    )
}

export default Card2