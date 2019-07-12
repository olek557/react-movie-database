import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Favorites from "./components/Favorites";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PopularMovies from "./components/PopularMovies";

import getData from "./api";
import { API_KEY, API_LINK } from "./config";

import { addGenres } from "./store/app/actions";
import { initFavorites } from "./store/actions";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.initFavorites(
      localStorage
        .getItem("favoriteMoviesList")
        .split(",")
        .filter(item => {
          return typeof item === "nuber";
        })
    );
    const URL = `${API_LINK}/genre/movie/list${API_KEY}`;
    getData(URL).then(({ genres }) => {
      this.props.addGenres(genres);
    });
  }
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" render={props => <PopularMovies {...props} />} />
        <Route path="/favorites" render={props => <Favorites {...props} />} />
        <Route path="/movie/:id" render={props => <Movie {...props} />} />
        <Route path="/search/:query" render={props => <Search {...props} />} />
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres: state.app.genres
  };
};

const mapDispatchToProps = {
  addGenres,
  initFavorites
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
