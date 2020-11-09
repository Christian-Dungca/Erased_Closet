import React, { createContext, useEffect, useReducer, useState } from "react";
import styles from "./App.module.scss";
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import BagModal from "../BagModal/BagModal";
import bagReducer from "../../reducers/bagReducer";
import PRODUCT_LIST from "../Products/products-data";

const BagContext = createContext(null);

function App() {
  // I need to pass state into Home via props, and the search bar thingy will use the state given via props
  // const [allProducts] = useState(PRODUCT_LIST);

  // Bag reducer to Add and remove items from BagModal
  const [productsInBag, dispatchProduct] = useReducer(bagReducer, PRODUCT_LIST);

  // All the products with inBag property which === true
  // const [itemsInBag, setItemsInBag] = useState(
  //   productsInBag.filter((product) => product.inBag === true)
  // );

  const itemsInBag = productsInBag.filter((product) => product.inBag === true)

  // useEffect()

  // BagModal State => either opened or closed
  const [bagModal, toggleBag] = useState(false);

  // Handler will toggle BagModal
  const toggleBagModal = () => {
    toggleBag(!bagModal);
  };


  return (
    <div className={styles.App}>
      <BagContext.Provider value={dispatchProduct}>
        {bagModal && (
          <BagModal toggleBag={toggleBagModal} itemsInBag={itemsInBag} />
        )}
        <Navigation toggleBag={toggleBagModal} />
        <Home />
      </BagContext.Provider>
    </div>
  );
}

export {BagContext};
export default App;
