import React, { createContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import styles from "./App.module.scss";
// import Home from "../Home/Home";
import Home from "./products/components/Landing/NHome";
// import Navigation from "./components/Navigation/Navigation";
// import BagModal from "./components/BagModal/BagModal";
import BagModal from "./components/BagModal/BagModal";
// import ProductPage from "./components/ProductPage/ProductPage";
import productsList from "./data/products-data";
import bagReducer from "./components/reactReducers/bagReducer";

import ProductsPage from "./products/pages/ProductsPage/ProductsPage";
import Navigation from "./shared/components/Navigation/Navigation";
import ProductPage from "./products/pages/ProductPage/ProductPage";
import NewProductPage from "./products/pages/NewProductPage/NewProduct";


const BagContext = createContext(null);
const ProductContext = createContext(null);

const App = () => {
  const [isBagOpen, toggleBag] = useState(false);
  const [products, dispatchProduct] = useReducer(bagReducer, productsList);
  const itemsInBag = products.filter((product) => product.inBag === true);

  // let serverData;
  // useEffect(async () => {
  //   const res = await axios.get("http://localhost:5000/api/products");
  //   serverData = res.data;
  //   console.log("serverData");
  //   console.log(serverData);
  // }, []);

  const toggleBagModal = () => {
    toggleBag(!isBagOpen);
  };

  const [isCartOpen, setCart] = useState(false);

  const handleCart = () => {
    setCart(!isCartOpen);
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
          {/* <Navigation /> */}
          <Switch>
            <Route path="/" exact>
              <ProductsPage handleCart={handleCart} isCartOpen={isCartOpen} />
            </Route>
            <Route path="/add-product" exact>
              <NewProductPage />
            </Route>
            {/* <Route path="/update-product/:id" exact>
              <NewProductPage />
            </Route> */}
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
