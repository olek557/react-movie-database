import React from "react";
import { connect } from "react-redux";
import MovieTable from "./MovieTable";
import ChangeTableView from "./ChangeTableView";
import { API_LINK, API_KEY } from "../config";
import getData from "../api";
import { addToRenderList } from "../store/actions";

class Favorites extends React.Component {
  componentDidMount() {
    console.log("FAV", this.props.favorites)
    const URLs = this.props.favorites.map(favorite => {
      return `${API_LINK}/movie/${favorite}${API_KEY}`;
    });
    Promise.all(URLs.map(url => getData(url))).then(data => {
      this.props.addToRenderList(data);
    });
  }
  render() {
    return (
      <div className="container">
        <div className="section-header">
          <h1 className="h1">Your favorites</h1>
          <ChangeTableView />
        </div>
        <MovieTable />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // moviesList: state.global.moviesToRender,
    favorites: state.global.favorites
  };
};
const mapDispatchToProps = {
  addToRenderList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
