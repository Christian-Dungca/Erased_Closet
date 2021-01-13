import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import "./index.css";
import App from "./App";
import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
