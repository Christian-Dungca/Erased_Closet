import productList from "../../data/products-data";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    products: productList,
    filteredProducts: productList
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default productsReducer;
