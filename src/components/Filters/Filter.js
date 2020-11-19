import React from "react";
import styles from "./Filter.module.scss";

const Filter = ({ dispatchFilter, handleColorChange }) => {
  const handleFilterAll = () => {
    dispatchFilter({ type: "SHOW_ALL" });
  };

  const handleFilterChange = (typeText) => {
    dispatchFilter({
      type: `SHOW_${typeText}`,
    });
  };

  return (
    <div className={styles.Filter}>
      <div className={styles.clothingFilter}>
        <h5 className={styles.clothingTitle}> Apparel </h5>
        <ul className={styles.clothingList}>
          <li onClick={handleFilterAll}>All Items</li>
          <li onClick={() => handleFilterChange("SHIRTS")}>T-Shirts</li>
          <li onClick={() => handleFilterChange("PANTS")}>Pants</li>
          <li onClick={() => handleFilterChange("HOODIES")}>Hoodies</li>
          <li onClick={() => handleFilterChange("ACCESSORIES")}>Accessories</li>
        </ul>
      </div>
      <div className={styles.colorFilter}>
        <h5 className={styles.colorTitle}> Color </h5>
        <ul className={styles.colorList}>
          <li>
            <input
              type='checkbox'
              onChange={() => handleColorChange("black")}
            ></input>
            <label>Black</label>
          </li>
          <li>
            <input
              type='checkbox'
              onChange={() => handleColorChange("white")}
            ></input>
            <label>White</label>
          </li>
          <li>
            <input
              type='checkbox'
              onChange={() => handleColorChange("yellow")}
            ></input>
            <label>Yellow</label>
          </li>
          <li>
            <input
              type='checkbox'
              onChange={() => handleColorChange("orange")}
            ></input>
            <label>Orange</label>
          </li>
          <li>
            <input
              type='checkbox'
              onChange={() => handleColorChange("green")}
            ></input>
            <label>Green</label>
          </li>
          <li>
            <input
              type='checkbox'
              onChange={() => handleColorChange("red")}
            ></input>
            <label>Red</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
