import React, { createContext, useEffect, useReducer, useState } from "react";
import styles from "./App.module.scss";
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import BagModal from "../BagModal/BagModal";
import PRODUCT_LIST from "../Products/products-data";
import bagReducer from "../../reducers/bagReducer";

const BagContext = createContext(null);
const ProductContext = createContext(null);

function App() {
  // Bag reducer to Add and remove items from BagModal
  const [productsInBag, dispatchProduct] = useReducer(bagReducer, PRODUCT_LIST);
  // console.log('----- productsInBag ------')
  // console.table(productsInBag)
  const itemsInBag = productsInBag.filter((product) => product.inBag === true);
  // console.log('----- itemsInBag ------')
  // console.table(itemsInBag)
  // BagModal State => either opened or closed
  const [bagModal, toggleBag] = useState(false);
  // Handler will toggle BagModal
  const toggleBagModal = () => {
    toggleBag(!bagModal);
  };

  return (
    <div className={styles.App}>
      <ProductContext.Provider value={productsInBag}>
        <BagContext.Provider value={dispatchProduct}>
          {bagModal && (
            <BagModal toggleBag={toggleBagModal} itemsInBag={itemsInBag} dispatchProduct={dispatchProduct} />
          )}
          <Navigation toggleBag={toggleBagModal} />
          <Home productsInBag={productsInBag} />
        </BagContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export { BagContext, ProductContext };
export default App;
