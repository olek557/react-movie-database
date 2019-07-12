import React from "react";
import getData from "../api";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: this.props.match.params.id,
      data: {}
    };
  }
  componentDidMount() {
    const URL = `https://api.themoviedb.org/3/movie/${
      this.state.movieId
    }?api_key=34c1e852f0ff1cc251255620cae33c92`;
    getData(URL).then(data => {
      this.setState({ data: data });
    });
  }

  convertMinutesToHoursAndMinutes(minutes) {
    return `${Math.floor(minutes/60)}h ${minutes % 60}m`
  }

  render() {
    return this.props ? (
      <div>
        <div className="container films-detail-view">
          <div className="section-header">
            <a href="http://index.html" className="back-btn">
              Back to your wathlist
            </a>
            <span className="delete-btn" />
          </div>

          <div className="film-item">
            <div className="film-item--title">
              <div>
                {this.state.data.title}
                <span className="film-year">({this.state.data.release_date ? this.state.data.release_date.split('-')[0] : ''})</span>
              </div>
              <div className="film-imbd">
                {this.state.data.vote_average}
                <div className="f-z-24">IMDb</div>
              </div>
            </div>
            <div className="film-item--info-row mod-grey-text">
              <div className="info-row--item">{this.convertMinutesToHoursAndMinutes(this.state.data.runtime)}</div>
              <div className="info-row--item">Crime, Drama</div>
            </div>

            <div>
              <div className="film-item--poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${
                    this.state.data.poster_path
                  }`}
                  alt="poster"
                />
              </div>
              {/* <div className="film-trailer">
              <iframe
                width="1265"
                height="480"
                src={`https://www.youtube.com/embed/${this.state.trailer.key}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="video"
              />
            </div> */}
            </div>
            <div className="m-bottom-25">
              <div className="film-info--def">
                <div className="def--name">Director:</div>
                <div className="def-descr">Frank Darabont</div>
              </div>
              <div className="film-info--def">
                <div className="def--name">Stars:</div>
                <div className="def-descr">
                  Tim Robbins, Morgan Freeman, Bob Gunton
                </div>
              </div>
            </div>
            <div className="film-info--descr">
              {this.state.data.overview}
            </div>
          </div>
        </div>
      </div>
    ) : (
      "Loading"
    );
  }
}

export default Movie;
