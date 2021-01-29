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
        // console.log("res", res.data.products);
        dispatch(saveProducts(res.data.products));
      })
      .catch((err) => {
        console.log(err);
        console.log("[ERROR] Can not fetch products");
      });
  };
};

export const fetchProductById = (res) => {
  return {
    type: actionTypes.FETCH_PRODUCT,
    result: res,
  };
};

export const fetchProduct = (pId) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/api/products/${pId}`)
      .then((res) => {
        // console.log("res", res.data.product);
        dispatch(fetchProductById(res.data.product));
      })
      .catch((err) => {
        console.log(err);
        console.log("[ERROR] Can not fetch products");
      });
  };
};

export const addProduct = (res) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    result: res,
  };
};

export const createProduct = (inputs) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/products", {
        name: inputs.name.value,
        type: inputs.type.value,
        price: inputs.price.value,
        details: inputs.details.value,
        color: inputs.color.value,
        size: inputs.size.value,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(addProduct(res.data.product));
      })
      .catch((err) => {
        console.log(err);
        console.log("[ERROR] Can not add product");
      });
  };
};

export const deleteProductById = (res) => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    result: res,
  };
};

export const deleteProduct = (pId) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/api/products/${pId}`)
      .then((res) => {
        dispatch(deleteProductById(res.data.deletedProduct));
      })
      .catch((err) => {
        console.log(err);
        console.log("[ERROR] Can not delete product");
      });
  };
};
