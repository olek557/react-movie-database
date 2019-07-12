import React from "react";
import { connect } from "react-redux";

import MovieTable from "./MovieTable";
import ChangeTableView from "./ChangeTableView";

import { addToRenderList } from "../store/actions";
import getData from "../api";
import { API_KEY, API_LINK } from "../config";

class PopularMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { moviesList: {} };
  }
  componentDidMount() {
    const URL = `${API_LINK}/movie/popular${API_KEY}`;
    getData(URL).then(({ results }) => {
      this.props.addToRenderList(results);
    });
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

const mapDispatchToProps = {
  addToRenderList
};

export default connect(
  null,
  mapDispatchToProps
)(PopularMovies);
