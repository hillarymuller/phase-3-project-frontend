import Navbar from "./Navbar";
import ParksContainer from "./ParksContainer";
import NewTrailForm from "./NewTrailForm";
import TrailsContainer from './TrailsContainer';
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project</h1>
        <Navbar />
      </header>
      <Switch>
        <Route path="/parks/:id/trails/new">
          <NewTrailForm />
        </Route>
        <Route path="/parks/:id/trails">
          <TrailsContainer />
        </Route>
        <Route path="/parks">
          <ParksContainer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
  

      </Switch>

    </div>
  );
}

export default App;
