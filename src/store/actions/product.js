import axios from "axios";
import * as actionTypes from "./actionTypes";

const isBadHttpResponse = (status) => {
  return status >= 400 && status <= 599 ? true : false;
};

export const fetchProducts = () => async (dispatch) => {
  const saveProducts = (res) => {
    dispatch({
      type: actionTypes.FETCH_PRODUCTS,
      result: res,
    });
    return res;
  };

  try {
    const resData = await axios.get("http://localhost:5000/api/products");
    if (!isBadHttpResponse(resData.status)) {
      return saveProducts(resData.data.products);
    } else {
      throw new Error(`Bad request [${resData.status}]. Can't get products `);
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchProduct = (pId) => async (dispatch) => {
  console.log("fetchign product");
  const fetchProductById = (res) => {
    dispatch({
      type: actionTypes.FETCH_PRODUCT,
      result: res,
    });
    return res;
  };

  try {
    const resData = await axios.get(
      `http://localhost:5000/api/products/${pId}`
    );

    if (!isBadHttpResponse(resData.status)) {
      return fetchProductById(resData.data.product);
    } else {
      throw new Error(
        `Bad request [${resData.status}]. Can't get that product`
      );
    }
  } catch (err) {
    console.log(err);
  }
};

export const createProduct = (inputs) => async (dispatch) => {
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

  for (const key of Object.keys(inputs.images.value)) {
    bodyFormData.append("images", inputs.images.value[key]);
  }

  try {
    const resData = await axios({
      method: "post",
      url: "http://localhost:5000/api/products",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (!isBadHttpResponse(resData.status)) {
      return addProduct(resData.product);
    } else {
      throw new Error(
        `Bad request [${resData.status}]. Couldn't create new product`
      );
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = (pId) => async (dispatch) => {
  const deleteProductById = (res) => {
    dispatch({
      type: actionTypes.DELETE_PRODUCT,
      result: res,
    });
  };

  try {
    const resData = axios.delete(`http://localhost:5000/api/products/${pId}`);
    if (!isBadHttpResponse(resData.status)) {
      return deleteProductById(resData.data.deletedProduct);
    } else {
      throw new Error(
        `Bad request [${resData.status}]. Couldn't delete that product`
      );
    }
  } catch (err) {
    console.log(err);
  }
};
