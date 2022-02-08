import "./product.css"

const Card1 = () => {
    return(
        <div className="card1">
            <div className="card1-header">
                <h3>Activity Calendar</h3>
                <a href="" className="card-link">View all</a>
            </div>
            <div>
                <h3>Today</h3>
                <p className="line">Donate Books</p>
            </div>
            <div>
                <h3>Tomorrow</h3>
                <p className="line">Donate Books</p>
            </div>
        </div>
    )
}

export default Card1