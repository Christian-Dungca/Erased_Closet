import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

import App from "./App";
import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import "./index.css";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer
})

const logger = store => {
  return next => {
    return action => {
      console.log('[MIDDLEWARE] dispatching', action);
      const result = next(action);
      console.log('[MIDDLEWARE] next state', store.getState())
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
