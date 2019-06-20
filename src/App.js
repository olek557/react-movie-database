import React from "react";
import Favorite from "./components/favorites/Favorites";
import Movie from "./components/movie/Movie";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <Link to="/">Favorites</Link>
          <Link to="/movie">Movie</Link>
        </ul>
      </div>
      <Route exact path="/" component={Favorite} />
      <Route path="/movie" component={Movie} />
    </Router>
  );
}

export default App;
