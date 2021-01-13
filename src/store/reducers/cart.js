import * as actionTypes from "../actions/actionTypes";

const initalState = {
  cart: [
    { id: 1, name: "Erased Shirt", price: 30, style: "Shirt/Clothing" },
    { id: 2, name: "Erased Hoodie", price: 60, style: "Hoodie/Clothing" },
  ],
};

const isInCart = (id, state) => {
  const insideCart = state.cart.filter((product) => product.id === id);
  return insideCart;
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      if (isInCart(action.id, state)) return {...state};
      return { ...state, favorites: state.favorites.concat(action.id) };
    case actionTypes.REMOVE_FROM_CART:
      if (!isInCart(action.id, state)) return {...state};
      const updatedState = {
        ...state,
        cart: state.cart.filter((product) => {
          console.log(product.id, action.id);
          return product.id !== action.id;
        }),
      };
      console.log(updatedState);
      return updatedState;
    default:
      return state;
  }
};

export default cartReducer;
