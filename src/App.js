import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Favorites from "./components/Favorites";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PopularMovies from "./components/PopularMovies";

import { initFavorites, fetchGenres } from "./store/actions";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchGenres();
    this.props.initFavorites();
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
    genres: state.global.genres
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGenres: () => {
      dispatch(fetchGenres(dispatch));
    },
    initFavorites: () => {
      dispatch(initFavorites(dispatch));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
