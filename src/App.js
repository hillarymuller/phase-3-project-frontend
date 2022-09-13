import Navbar from "./Navbar";
import ParksContainer from "./ParksContainer";
import NewTrailForm from "./NewTrailForm";
import TrailsContainer from './TrailsContainer';
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import './App.css';
import { useState, useEffect } from 'react';

function App() {


  const [parks, setParks] = useState([]);
  useEffect(() => {
      fetch("http://localhost:9292/parks")
      .then(r => r.json())
      .then(data => setParks(data))
      .catch(error => alert(error))
  }, []);

 
  function onFormSubmit(newTrail) {
    console.log(newTrail)
}
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wisconsin Hiking Trails</h1>
        <Navbar />
      </header>
      <Switch>
        <Route path="/parks/new">
          <NewTrailForm parks={parks} onFormSubmit={onFormSubmit} />
        </Route>
        <Route path="/parks/:id">
          <TrailsContainer />
        </Route>
        <Route path="/parks">
          <ParksContainer parks={parks} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
  

      </Switch>

    </div>
  );
}

export default App;
