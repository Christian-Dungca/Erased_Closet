import React, { createContext, useReducer, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import BagModal from "../BagModal/BagModal";
import ProductPage from "../ProductPage/ProductPage";
import productsList from "../../products-data";
import bagReducer from "../../reducers/bagReducer";

const BagContext = createContext(null);
const ProductContext = createContext(null);

const App = () => {
  const [isBagOpen, toggleBag] = useState(false);
  const [products, dispatchProduct] = useReducer(bagReducer, productsList);
  const itemsInBag = products.filter((product) => product.inBag === true);

  const toggleBagModal = () => {
    toggleBag(!isBagOpen);
  };

  return (
    <div className={styles.App}>
      <ProductContext.Provider value={products}>
        <BagContext.Provider value={dispatchProduct}>
          {isBagOpen && (
            <BagModal
              dispatchProduct={dispatchProduct}
              itemsInBag={itemsInBag}
              toggleBag={toggleBagModal}
            />
          )}
          <Navigation toggleBagModal={toggleBagModal} />
          <Switch>
            <Route path="/" exact>
              <Home productsInBag={products} />
            </Route>
            <Route path="/product/:id">
              <ProductPage products={products} />
            </Route>
          </Switch>
        </BagContext.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export { BagContext, ProductContext };
export default App;
