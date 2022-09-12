import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TrailCard from "./TrailCard";

const TrailsContainer = () => {

    const { id } = useParams();
    console.log(id);
    const [trails, setTrails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/parks/${id}`)
        .then(r => r.json())
        .then(data => setTrails(data))
        .catch(error => alert(error))
    }, []);
    
    function onDeleteItem(id) {
        const updatedTrails = trails.filter(trail => trail.id !== id);
        setTrails(updatedTrails);
        console.log(trails);
    }
const trailList = trails.map(trail => <TrailCard trail={trail} key={trail.id} onDeleteItem={onDeleteItem} />)

return (
    <div>
        {trailList}
    </div>
)
}
export default TrailsContainer;