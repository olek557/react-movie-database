import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { API_IMAGE_LINK } from "../config";
import { getNameFromId } from "../helpers";
import { addToFavorites, removeFromFavorites } from "../store/actions";

import { FaStar, FaRegStar } from "react-icons/fa";

class MovieTable extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   moviesList: this.props.list
    // };
  }
  handleClickOnFavoriteButton(movie) {
    if (this.props.favorites.indexOf(movie.id) === -1) {
      this.props.addToFavorites(movie.id);
    } else {
      this.props.removeFromFavorites(movie.id);
    }
    setTimeout(() => {
      localStorage.setItem("favoriteMoviesList", this.props.favorites);
    }, 0);
  }

  // componentDidUpdate() {}
  renderMovies({ moviesList }) {
    if (moviesList) {
      return Array.from(moviesList).map(movie => {
        return (
          <div
            className={`film-item ${
              this.props.favorites.indexOf(movie.id) > -1 ? "mod-favorite" : ""
            }`}
            key={movie.id}
          >
            <div className="film-item--poster">
              <img
                src={`${API_IMAGE_LINK}/t/p/w500/${movie.poster_path}`}
                alt="poster"
              />
            </div>
            <div className="film-item--info">
              <div className="film-item--title">
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                <span className="film-year">
                  ({movie.release_date.split("-")[0]})
                </span>
              </div>
              <div className="film-item--info-row">
                <div className="info-row--item mod-grey-text hide-on-tile">
                  {(movie.genre_ids || movie.genres).map(genre => {
                    return (
                      <span key={genre.id || genre}>
                        {genre.name || getNameFromId(genre, this.props.genres)}
                      </span>
                    );
                  })}
                </div>
                <div className="info-row--item">IMDb: {movie.vote_average}</div>
              </div>
              <div className="film-info--descr">{movie.overview}</div>
            </div>
            <button
              className="btn-favorite"
              onClick={() => {
                this.handleClickOnFavoriteButton(movie);
              }}
            >
              {this.props.favorites.indexOf(movie.id) === -1 ? (
                <FaRegStar />
              ) : (
                <FaStar />
              )}
            </button>
          </div>
        );
      });
    }
  }
  render() {
    console.log("i'am render", this.props);
    return (
      <div className="container">
        <div className={`films-list mod-${this.props.tableViewType}`}>
          {this.renderMovies(this.props)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesList: state.global.moviesToRender,
    genres: state.app.genres,
    tableViewType: state.changeTableView.tableViewType,
    favorites: state.global.favorites
  };
};

const mapDispatchToProps = {
  addToFavorites,
  removeFromFavorites
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieTable);
