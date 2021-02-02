import productList from "../../data/products-data";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  product: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.result};
    case actionTypes.FETCH_PRODUCT:
      return { ...state, product: {...action.result} };
    case actionTypes.DELETE_PRODUCT:
      const updatedProductsList = state.products.filter((product) => {
        return product._id !== action.result._id;
      });
      return { ...state, products: updatedProductsList };
    case actionTypes.ADD_PRODUCT:
      const newProduct = action.result;
      const newProductList = [...state.products, newProduct]
      return { ...state, products: newProductList };
    default:
      return state;
  }
};

export default productsReducer;
