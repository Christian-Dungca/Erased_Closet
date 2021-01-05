import * as actionTypes from "../actions/actionTypes";

const initalState = {
  favorites: [],
  type: "all the goods stuff",
};

const isFavorited = (id, state) => {
  const insideFavorites = state.favorites.includes(id);
  console.log(insideFavorites);
  return insideFavorites;
};

const favoritesReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVORITES:
      if (isFavorited(action.id, state)) return state;
      return { ...state, favorites: state.favorites.concat(action.id) };
    case actionTypes.REMOVE_FROM_FAVORITES:
      if (!isFavorited(action.id, state)) return state;
      console.log('is removed');
      const updatedState = {
        ...state,
        favorites: state.favorites.filter((id) => {
          return id !== action.id;
        }),
      };
      return updatedState;
    default:
      return state;
  }
};

export default favoritesReducer;
