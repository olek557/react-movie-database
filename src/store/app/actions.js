export const ADD_GENRES = "ADD_GENRES";

export const addGenres = genres => {
  return {
    type: ADD_GENRES,
    payload: genres
  };
};
