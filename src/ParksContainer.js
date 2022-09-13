
import ParkCard from "./ParkCard";

const ParksContainer = ({ parks }) => {
  

    const parkList = parks.map(park => <ParkCard park={park} key={park.id} />)

return (
    <div>
            <h3>Park List</h3>
            <div className="cards">
        {parkList}
        </div>
    </div>
)
}

export default ParksContainer;