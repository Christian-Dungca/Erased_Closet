import React, { useReducer, useState } from "react";
import styles from "./Home.module.scss";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Filter from "../Filters/Filter";
import Products from "../Products/Products";
// import listOfProducts from "../Products/products-data";
import SearchBar from "../SearchBar/SearchBar";
import filterReducer from "../../reducers/filterReducer";

const Home = ({ productsInBag }) => {
  const [color, setColor] = useState("ALL");
  console.log(color);

  const handleColorChange = (colorInput) => {
    const newColor = colorInput === color ? 'ALL' : colorInput;
    console.log([color, colorInput, newColor]);
    setColor(newColor);
  };

  // Style Filter Reducer
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");
  const filteredProducts = productsInBag.filter((item) => {
    if (filter === "ALL") {
      return true;
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
  // console.log("-----fitleredProducts-----");
  // console.table(filteredProducts);

  const colorFilteredProducts = filteredProducts.filter((item) => {
    if (color === "ALL") return true;
    if (item.color === color.toLowerCase()) return true;
    return false;
  });

  console.log("-----colorFilteredProducts-----");
  console.table(colorFilteredProducts);

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
            Clothing / {colorFilteredProducts.length} In Stock
          </h3>
        </div>
        <div className={styles.FilterProductsContainer}>
          {hideFilter && (
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
