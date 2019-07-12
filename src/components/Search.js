import React from "react";
import MovieTable from "./MovieTable";
import getData from "../api";
import { API_KEY } from "../config";

class PopularMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableView: "tile"
    };
  }
  handleChangeTableView(tableType) {
    this.setState({ tableView: tableType });
  }
  componentDidMount() {
    const URL = "https://api.themoviedb.org/3/search/movie" + API_KEY + "&query=" + this.props.match.params.query;
    getData(URL).then(({ results }) => {
      this.setState({ moviesList: results });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="section-header">
          <h1 className="h1">Popular movies</h1>
          <div>
            <button
              className="btn-icon icon-tile"
              onClick={() => {
                this.handleChangeTableView("tile");
              }}
            />
            <button
              className="btn-icon icon-rows"
              onClick={() => {
                this.handleChangeTableView("rows");
              }}
            />
          </div>
        </div>
        <MovieTable
          tableView={this.state.tableView}
          list={this.state.moviesList}
        />
      </div>
    );
  }
}

export default PopularMovies;
