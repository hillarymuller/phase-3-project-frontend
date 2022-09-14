import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TrailCard from "./TrailCard";

const TrailsContainer = () => {
    const { id } = useParams();
    console.log(id);
    const [trails, setTrails] = useState([]);
  
    useEffect(() => {
        fetch(`http://localhost:9292/parks/${id}/trails`)
        .then(r => r.json())
        .then(data => setTrails(data))
        .catch(error => alert(error))
    }, [id]);

  
   
const trailList = trails.map(trail => <TrailCard trail={trail} key={trail.id} setTrails={setTrails} />)

return (
    <div className="cards">

        {trailList}
    </div>
)
}
export default TrailsContainer;