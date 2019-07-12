export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_TO_RENDER_LIST = "ADD_TO_RENDER_LIST";
export const INIT_FAVORITES = "INIT_FAVORITES";

export const initFavorites = movies => {
  return {
    type: INIT_FAVORITES,
    payload: movies
  };
};

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
