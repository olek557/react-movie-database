import { ADD_GENRES } from "./actions";

const defaultState = {
  genres: {}
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_GENRES:
      return { ...state, genres: action.payload };
  }
  return state;
};

export default appReducer;
