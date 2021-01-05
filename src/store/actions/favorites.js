import productsReducer from '../reducers/products';
import * as actionTypes from './actionTypes';

export const addToFavorites = (productID) => {
    return {
        type: actionTypes.ADD_TO_FAVORITES,
        id: productID
    }
}

export const removeFromFavorites = (productID) => {
    return {
        type: actionTypes.REMOVE_FROM_FAVORITES,
        id: productID
    }
}