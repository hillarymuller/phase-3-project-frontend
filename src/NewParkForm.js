import { useState } from "react";
import { useHistory } from 'react-router-dom';





const NewParkForm = ({ onAddPark }) => {
    const history = useHistory();

    const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    location: ""
});

function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value,});
}

function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/parks`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": formData.name,
            "image": formData.image,
            "description": formData.description,
            "location": formData.location
        })
    })
    .then(r => r.json())
    .then(data => console.log(data))
    .then(data => onAddPark(data))
    .then(redirect())
}


function redirect() {
    history.push(`/parks`);
}

return (
    <section>
        <h3>Add New Park</h3>
        <form onSubmit={handleSubmit}>
            <label>
                Park Name:
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
                Location
                <input onChange={handleChange}
                type="text"
                name="location"
                value={formData.location}
                />
            </label>
            <br></br>
            <button type="submit">Add</button>
        </form>
    </section>
)
}
export default NewParkForm;