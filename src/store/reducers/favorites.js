import * as actionTypes from "../actions/actionTypes";

const initalState = {
  cart: [],
  type: "all the goods stuff",
};

const isInCart = (id, state) => {
  const insideCart = state.cart.includes(id);
  console.log(insideCart);
  return insideCart;
};

const favoritesReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      if (isInCart(action.id, state)) return state;
      return { ...state, favorites: state.favorites.concat(action.id) };
    case actionTypes.REMOVE_FROM_CART:
      if (!isInCart(action.id, state)) return state;
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
