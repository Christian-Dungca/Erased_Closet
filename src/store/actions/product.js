import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchProducts = () => async (dispatch) => {
  const saveProducts = (res) => {
    dispatch({
      type: actionTypes.FETCH_PRODUCTS,
      result: res,
    });
    return res;
  };

  try {
    const res = await axios.get("http://localhost:5000/api/products");
    return saveProducts(res.data.products);
  } catch (err) {
    console.log(err);
    console.log("[ERROR] Can not fetch products");
  }
};

const fetchProductById = (res) => {
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

export const createProduct = (inputs) => {
  return async (dispatch) => {
    const addProduct = (res) => {
      return {
        type: actionTypes.ADD_PRODUCT,
        result: res,
      };
    };

    let bodyFormData = new FormData();
    bodyFormData.append("name", inputs.name.value);
    bodyFormData.append("type", inputs.type.value);
    bodyFormData.append("price", inputs.price.value);
    bodyFormData.append("details", inputs.details.value);
    bodyFormData.append("color", inputs.color.value);
    bodyFormData.append("size", inputs.size.value);
    bodyFormData.append("image", inputs.image.value);

    console.log(bodyFormData);

    try {
      const resData = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: bodyFormData,
      });

      // const res = await axios({
      //   method: "post",
      //   url: "http://localhost:5000/api/products",
      //   data: bodyFormData,
      //   headers: { "Content-Type": "multipart/form-data" },
      // });
      return addProduct(resData);
    } catch (err) {
      console.log(err);
      console.log("[ERROR] Can not add product");
    }
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
