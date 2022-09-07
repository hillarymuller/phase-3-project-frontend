const ParkCard = ({ park }) => {
    const { name, location, description, image } = park;
return (
    <div className="card">
        <h3>{name}</h3>
        <img src={image} alt={description}></img>
        <span>{description}</span>
        <h4>{location}</h4>

    </div>
)
}
export default ParkCard;