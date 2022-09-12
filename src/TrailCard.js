const TrailCard = ({ trail, onDeleteItem }) => {
    const { name, description, image, length, difficulty, id, park_id: parkId } = trail;
    function handleDelete(id) {
        fetch(`http://localhost:9292/parks/${parkId}/${id}`, {
            method: 'DELETE'
        })
    
        .then(() => onDeleteItem(id))
        .catch(error => console.log(error))
    }
    return (
        <div className="card">
        <h3>{name}</h3>
        <img src={image} alt={description}></img>
        <span>{description}</span>
        <h4>{length}mi</h4>
        <h4>{difficulty}</h4>
        <button onClick={() => handleDelete(id)}>Delete Trail</button>

    </div>
    )
}
export default TrailCard;