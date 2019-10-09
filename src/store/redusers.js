import { combineReducers } from "redux";
import appReducer from "./app/reducers";
import changeTableViewReducer from "./changeTebleView/reducers";
import movieTableReducer from "./moviewTable/reducers";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  INIT_FAVORITES_SUCCESS,
  FETCH_GENRES_SUCCESS,
  FETCH_MOVIES_BY_IDS_SUCCESS,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIES_BY_SEARCH_QUERY_SUCCESS
} from "./actions";

const defautState = {
  favorites: [],
  moviesToRender: [],
  genres: []
};

const globalReducer = (state = defautState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item !== action.payload)
      };
    case INIT_FAVORITES_SUCCESS:
      return { ...state, favorites: action.payload };
    case FETCH_GENRES_SUCCESS:
      return { ...state, genres: action.payload };
    case FETCH_MOVIE_LIST_SUCCESS:
      return { ...state, moviesToRender: action.payload };
    case FETCH_MOVIES_BY_IDS_SUCCESS:
      return { ...state, moviesToRender: action.payload };
    case FETCH_MOVIES_BY_SEARCH_QUERY_SUCCESS:
      return { ...state, moviesToRender: action.payload };
  }
  return state;
};

export default combineReducers({
  global: globalReducer,
  app: appReducer,
  changeTableView: changeTableViewReducer,
  movieTable: movieTableReducer
});
