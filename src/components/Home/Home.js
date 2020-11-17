import React, { useReducer, useState } from "react";
import styles from "./Home.module.scss";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Filter from "../Filters/Filter";
import Products from "../Products/Products";
import listOfProducts from "../Products/products-data";
import SearchBar from "../SearchBar/SearchBar";
import filterReducer from "../../reducers/filterReducer";

const Home = ({productsInBag}) => {
  // Filter Reducer
  const [filter, dispatchFilter] = useReducer(filterReducer, "accessories");

  const handleShowAll = () => {
    dispatchFilter({ type: "SHOW_ALL" });
  };

  const handleShowShirts = () => {
    dispatchFilter({ type: "SHOW_SHIRTS" });
  };

  const filteredProducts = listOfProducts.filter((item) => {
    if (filter === "ALL") {
      return true;
      console.log(item.type)
    }
    if (filter === "shirt" && item.type === "shirt") {
      return true;
    }
    if (filter === "pants" && item.type === "pants") {
      return true;
    }
    if (filter === "hoodies" && item.type === "hoodie") {
      return true;
    }
    if (filter === "accessories" && item.type === "accessory") {
      return true;
    }
    return false;
  });

  console.table(filteredProducts);

  // Side Navigation Hides Filter Options
  const [hideFilter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter(!hideFilter);
  };

  return (
    <div>
      <Landing />
      <About />
      <div className={styles.navAndProductsContainer}>
        <div className={styles.nav}>
          <p onClick={handleFilter} className={styles.filterBtn}>
            filters
          </p>
          <h3 className={styles.productsTitle}>
            Clothing / {filteredProducts.length} In Stock
          </h3>
        </div>
        <div className={styles.FilterProductsContainer}>
          {hideFilter && <Filter handleShowShirts={handleShowShirts} />}
          <Products
            productsList={filteredProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
