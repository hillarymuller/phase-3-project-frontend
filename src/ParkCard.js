import { Link } from "react-router-dom";

const ParkCard = ({ park }) => {
    const { name, location, description, image, id } = park;
return (
    <div className="card">
       
        <h2>{name}</h2>
        <img src={image} alt={description}></img>
        <br></br>
        <br></br>
        <span>{description}</span>
        <br></br>
        <h4>{location}</h4>
        <Link className="card-link" to={`/parks/${id}/trails`}>View Trails</Link>
      

    </div>
)
}
export default ParkCard;