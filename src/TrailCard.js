const TrailCard = ({ trail }) => {
    const { name, description, image, length, difficulty } = trail;

    return (
        <div className="card">
        <h3>{name}</h3>
        <img src={image} alt={description}></img>
        <span>{description}</span>
        <h4>{length}mi</h4>
        <h4>{difficulty}</h4>

    </div>
    )
}
export default TrailCard;