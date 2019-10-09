import React from "react";
import { connect } from "react-redux";

import MovieTable from "./MovieTable";
import ChangeTableView from "./ChangeTableView";

import { fetchMoviesBySearchQuery } from "../store/actions";

class Search extends React.Component {
  componentDidMount() {
    this.props.getMoviesBySearchQuery(this.props.match.params.query);
  }
  componentDidUpdate() {
    this.props.getMoviesBySearchQuery(this.props.match.params.query);
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
  getMoviesBySearchQuery: query => {
    dispatch(fetchMoviesBySearchQuery(query));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(Search);
