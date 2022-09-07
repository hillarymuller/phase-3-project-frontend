import { useState, useEffect } from "react";
import ParkCard from "./ParkCard";

const ParksContainer = () => {
    const [parks, setParks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/parks")
        .then(r => r.json())
        .then(data => setParks(data))
        .catch(error => alert(error))
    }, []);

    const parkList = parks.map(park => <ParkCard park={park} key={park.id} />)

return (
    <div>
        <h2>Park List</h2>
        {parkList}
    </div>
)
}
export default ParksContainer;