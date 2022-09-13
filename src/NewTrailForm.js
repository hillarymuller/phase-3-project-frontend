import { useState } from "react";
import { useHistory } from 'react-router-dom';





const NewTrailForm = ({ parks, onFormSubmit }) => {
    const history = useHistory();

    const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    length: 0,
    difficulty: "",
    parkId: 0
});

function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value,});
}

function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/parks/${formData.parkId}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": formData.name,
            "image": formData.image,
            "description": formData.description,
            "length": formData.length,
            "difficulty": formData.difficulty,
            "park_id": formData.parkId
        })
    })
    .then(r => r.json())
    .then(data => console.log(data))
    .then(data => onFormSubmit(data))
    .then(redirect())
}


function redirect() {
    history.push("/parks");
}

return (
    <section>
        <h3>Add New Trail</h3>
        <form onSubmit={handleSubmit}>
            <label>
                Trail Name:
                <input onChange={handleChange}
                type="text"
                name="name"
                value={formData.name}
                 />
            </label>
            <br></br>
            <label>
                Description:
                <input onChange={handleChange}
                type="text"
                name="description"
                value={formData.description}
                />
            </label>
            <br></br>
            <label>
                Image
                <input onChange={handleChange}
                type="text"
                name="image"
                value={formData.image}
                />
            </label>
            <br></br>
            <label>
                Difficulty
                <input onChange={handleChange}
                type="text"
                name="difficulty"
                value={formData.difficulty}
                />
            </label>
            <br></br>
            <label>
                Length
                <input onChange={handleChange}
                type="number"
                name="length"
                value={formData.length}
                />
            </label>
            <br></br>
            <label>
                Park
                <select value={formData.parkId} onChange={handleChange} name="parkId">
                    <option>Please choose a park</option>
                    {parks.map(park => <option value={park.id} key={park.id}>{park.name}</option>)}
                    </select> 
            </label>
            <button type="submit">Add</button>
        </form>
    </section>
)
}
export default NewTrailForm;