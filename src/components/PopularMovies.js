import React from "react";
import { connect } from "react-redux";

import MovieTable from "./MovieTable";
import ChangeTableView from "./ChangeTableView";

import { fetchMovieList } from "../store/actions";
import { API_KEY, API_LINK } from "../config";

class PopularMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { moviesList: {} };
  }
  componentDidMount() {
    const URL = `${API_LINK}/movie/popular${API_KEY}`;
    this.props.getListToRender(URL);
  }
  render() {
    return (
      <div className="container">
        <div className="section-header">
          <h1 className="h1">Popular movies</h1>
          <ChangeTableView />
        </div>
        <MovieTable />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getListToRender: url => {
    dispatch(fetchMovieList(url));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PopularMovies);
