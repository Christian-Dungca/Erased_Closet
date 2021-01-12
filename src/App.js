import React, { createContext, useReducer, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
// import Home from "../Home/Home";
import Home from "./products/components/Landing/NHome";
// import Navigation from "./components/Navigation/Navigation";
import BagModal from "./components/BagModal/BagModal";
import ProductPage from "./components/ProductPage/ProductPage";
import productsList from "./data/products-data";
import bagReducer from "./components/reactReducers/bagReducer";

import ProductsPage from './products/pages/ProductsPage';
import Navigation from "./shared/components/Navigation/Navigation";


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
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <ProductsPage />
            </Route>
            <Route path="/product/:id">
              <ProductPage products={products} />
            </Route>
          </Switch>
        </BagContext.Provider>
      </ProductContext.Provider>
    </div>
  );
  // return (
  //   <div className={styles.App}>
  //     <ProductContext.Provider value={products}>
  //       <BagContext.Provider value={dispatchProduct}>
  //         {isBagOpen && (
  //           <BagModal
  //             dispatchProduct={dispatchProduct}
  //             itemsInBag={itemsInBag}
  //             toggleBag={toggleBagModal}
  //           />
  //         )}
  //         {/* <Navigation toggleBagModal={toggleBagModal} /> */}
  //         <Switch>
  //           <Route path="/" exact>
  //             <Home productsInBag={products} />
  //           </Route>
  //           <Route path="/product/:id">
  //             <ProductPage products={products} />
  //           </Route>
  //         </Switch>
  //       </BagContext.Provider>
  //     </ProductContext.Provider>
  //   </div>
};

export { BagContext, ProductContext };
export default App;
