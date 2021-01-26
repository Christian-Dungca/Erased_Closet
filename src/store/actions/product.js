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
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        console.log('res', res.data.products);
        dispatch(saveProducts(res.data.products));
      })
      .catch((err) => {
        console.log(err);
        console.log("[ERROR] Can not fetch products");
      });
  };
};
