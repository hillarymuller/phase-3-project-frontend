
import ParkCard from "./ParkCard";

const ParksContainer = ({ parks }) => {
  

    const parkList = parks.map(park => <ParkCard park={park} key={park.id} />)

return (
    <div>
        <h2>Park List</h2>
        {parkList}
    </div>
)
}
export default ParksContainer;