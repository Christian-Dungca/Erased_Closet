import React, { useReducer, useState } from "react";
import styles from "./Home.module.scss";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Filter from "../Filters/Filter";
import Products from "../Products/Products";
import SearchBar from "../SearchBar/SearchBar";
import filterReducer from "../../reducers/filterReducer";

const initialColorState = {
  yellow: false,
  black: false,
  red: false,
  orange: false,
  blue: false,
  green: false,
  white: false,
  beige: false,
};

const Home = ({ productsInBag }) => {
  const [isFilterOpen, setFilter] = useState(false);
  const [typeFilter, dispatchFilter] = useReducer(filterReducer, "ALL");
  const [colorFilter, setColor] = useState(initialColorState);
  console.log(colorFilter);

  const handleColorChange = (colorInput) => {
    const isColorSet = colorFilter[colorInput];
    setColor({ ...colorFilter, [colorInput]: !isColorSet });
  };

  const handleFilter = () => {
    setFilter(!isFilterOpen);
  };

  const filteredProducts = productsInBag.filter((item) => {
    if (typeFilter === "ALL") return true;
    if (typeFilter === item.type) return true;
    return false;
  });

  const isColorListFalse = Object.values(colorFilter).every((val) => val === false);
  console.log(isColorListFalse)

  const colorFilteredProducts = filteredProducts.filter((item) => {
    if (isColorListFalse) return true;
    if (colorFilter[item.color] === true) return true;
  });

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
            Clothing / {colorFilteredProducts.length} In Stock
          </h3>
        </div>
        <div className={styles.FilterProductsContainer}>
          {isFilterOpen && (
            <Filter
              dispatchFilter={dispatchFilter}
              handleColorChange={handleColorChange}
            />
          )}
          <Products productsList={colorFilteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Home;
