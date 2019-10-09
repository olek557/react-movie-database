import React from "react";
import { connect } from "react-redux";
import MovieTable from "./MovieTable";
import ChangeTableView from "./ChangeTableView";
import { fetchMoviesByIds } from "../store/actions";

class Favorites extends React.Component {
  componentDidMount() {
    this.props.getFavorites(this.props.favorites);
  }
  componentDidUpdate(prevProps) {
    if (this.props.favorites !== prevProps.favorites) {
      this.props.getFavorites(this.props.favorites);
    }
  }

  render() {
    console.log("hi", this.props.favorites);
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
    favorites: state.global.favorites
  };
};
const mapDispatchToProps = dispatch => ({
  getFavorites: favoritesIds => {
    dispatch(fetchMoviesByIds(favoritesIds));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
