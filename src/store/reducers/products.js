import productList from "../../data/products-data";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: null,
  product: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      // console.log(action.result);
      return { ...state, products: action.result };
    case actionTypes.FETCH_PRODUCT:
      // console.table(action.result)
      return { ...state, product: action.result };
    default:
      return state;
  }
};

export default productsReducer;
