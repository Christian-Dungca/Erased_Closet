import axios from "axios";
import * as actionTypes from "./actionTypes";

export const saveProducts = (res) => {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    result: res,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    axios.get("http://localhost:5000/api/products")
        .then((res) => {
            dispatch(saveProducts(res.data));
        } )
        .catch(err => [
            console.log('[ERROR] Can not fetch products')
        ])
  };
};
