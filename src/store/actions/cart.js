import productsReducer from '../reducers/products';
import * as actionTypes from './actionTypes';

export const addToCart = (productID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        id: productID
    }
}

export const removeFromCart = (productID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        id: productID
    }
}