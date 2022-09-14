const TrailCard = ({ trail, setTrails }) => {
    const { name, description, image, length, difficulty, id, park_id: parkId, favorite } = trail;
    function handleDelete(id) {
        fetch(`http://localhost:9292/parks/${parkId}/${id}`, {
            method: 'DELETE'
        })
    .then(r => r.json())
        .then((data) => setTrails(data))
        .catch(error => console.log(error))
    }
    function handleFavorite(id) {
        fetch(`http://localhost:9292/parks/${parkId}/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                favorite: !favorite,
            }),
        })
        .then(r => r.json())
        .then(data => setTrails(data))
        .catch(error => console.log(error))
    }

    return (
        <div className="card">
        <h3>{name}</h3>
        <img src={image} alt={description}></img>
        <br></br>
        <br></br>
        <span>{description}</span>
        <h4>length: {length}mi</h4>
        <h4>difficulty: {difficulty}</h4>
        <button className="card-button" onClick={() => handleFavorite(id)}>{favorite ? "♥" : "♡"}</button>
        <button className="card-button" onClick={() => handleDelete(id)}>Delete Trail</button>
        
    </div>
    )
}
export default TrailCard;