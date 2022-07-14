const Card = ({food}) =>{
    
    return (  <div className="card">
        <h2> {food.name} </h2>
        <p>{food.description}</p>
        <p>{food.location.address}</p>
        <p>{food.location.web}</p>
        {food.visited && <div className="visited"></div>}
        {!food.visited && <div className="not-visited"></div>}
    </div> )
}

export default Card;