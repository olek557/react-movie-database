// import config doesnt work. Investigate
const API_KEY = "?api_key=34c1e852f0ff1cc251255620cae33c92";
const API_LINK = "https://api.themoviedb.org/3";

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_TO_RENDER_LIST = "ADD_TO_RENDER_LIST";
export const INIT_FAVORITES = "INIT_FAVORITES";
export const FETCH_GENRES = "FETCH_GENRES";
export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const FETCH_MOVIE_LIST = "FETCH_MOVIE_LIST";
export const FETCH_MOVIE_LIST_SUCCESS = "FETCH_MOVIE_LIST_SUCCESS";
export const FETCH_MOVIES_BY_IDS_SUCCESS = "FETCH_MOVIES_BY_IDS_SUCCESS";
export const INIT_FAVORITES_SUCCESS = "INIT_FAVORITES_SUCCESS";
export const FETCH_MOVIES_BY_SEARCH_QUERY_SUCCESS =
  "FETCH_MOVIES_BY_SEARCH_QUERY_SUCCESS";

export const fetchGenresSuccess = genres => {
  return {
    type: FETCH_GENRES_SUCCESS,
    payload: genres
  };
};

export const initFavorites = _ => {
  return dispatch => {
    setTimeout(() => {
      const movieList = localStorage.getItem("favoriteMoviesList")
        ? localStorage
            .getItem("favoriteMoviesList")
            .split(",")
            .map(item => +item)
            .filter(item => {
              return typeof item === "number";
            })
        : [];
      dispatch(initFavoritesSuccess(movieList));
    }, 0);
  };
  // console.log("davoritemovieList", movieList);
};

export const initFavoritesSuccess = movies => ({
  type: INIT_FAVORITES_SUCCESS,
  payload: movies
});

export const addToFavorites = movie => {
  return {
    type: ADD_TO_FAVORITES,
    payload: movie
  };
};

export const removeFromFavorites = movie => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movie
});

export const addToRenderList = movies => ({
  type: ADD_TO_RENDER_LIST,
  payload: movies
});

export const fetchGenres = () => {
  return dispatch => {
    const URL = `${API_LINK}/genre/movie/list${API_KEY}`;
    fetch(URL)
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }
      })
      .then(({ genres }) => {
        dispatch(fetchGenresSuccess(genres));
      });
  };
};

export const fetchMovieList = url => {
  return dispatch => {
    fetch(url)
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }
      })
      .then(({ results }) => {
        dispatch(fetchMovieListSuccess(results));
      });
  };
};

export const fetchMovieListSuccess = list => ({
  type: FETCH_MOVIE_LIST_SUCCESS,
  payload: list
});

export const fetchMoviesByIds = idsArray => {
  console.log("i am here", idsArray);
  return dispatch => {
    const URLs = idsArray.map(favorite => {
      return `${API_LINK}/movie/${favorite}${API_KEY}`;
    });
    Promise.all(
      URLs.map(url =>
        fetch(url).then(responce => {
          if (responce.ok) {
            return responce.json();
          }
        })
      )
    ).then(data => {
      dispatch(fetchMoviesByIdsSuccess(data));
    });
  };
};

export const fetchMoviesByIdsSuccess = list => ({
  type: FETCH_MOVIES_BY_IDS_SUCCESS,
  payload: list
});

export const fetchMoviesBySearchQuery = query => {
  return dispatch => {
    const URL =
      "https://api.themoviedb.org/3/search/movie" + API_KEY + "&query=" + query;
    fetch(URL)
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }
      })
      .then(({results}) => {
        dispatch(fetchMoviesBySearchQuerySuccess(results));
      });
  };
};

export const fetchMoviesBySearchQuerySuccess = list => ({
  type: FETCH_MOVIES_BY_SEARCH_QUERY_SUCCESS,
  payload: list
});
