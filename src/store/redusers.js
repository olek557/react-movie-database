import { combineReducers } from "redux";
import appReducer from "./app/reducers";
import changeTableViewReducer from "./changeTebleView/reducers";
import movieTableReducer from "./moviewTable/reducers";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  ADD_TO_RENDER_LIST,
  INIT_FAVORITES
} from "./actions";
const defautState = {
  favorites: [],
  moviesToRender: []
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
    case ADD_TO_RENDER_LIST:
      return { ...state, moviesToRender: action.payload };
    case INIT_FAVORITES:
      return { ...state, favorites: action.payload };
  }
  return state;
};

export default combineReducers({
  global: globalReducer,
  app: appReducer,
  changeTableView: changeTableViewReducer,
  movieTable: movieTableReducer
});
