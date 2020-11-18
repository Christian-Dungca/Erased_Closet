import React from "react";
import styles from "./Filter.module.scss";

const Filter = ({dispatchFilter}) => {

  const handleFilterAll = () => {
    dispatchFilter({ type: "SHOW_ALL" });
  };

  const handleFilter = (typeText) => {
    dispatchFilter({
      type: `SHOW_${typeText}`
    })
  }

  return (
    <div className={styles.Filter}>

      <div className={styles.clothingFilter}>
        <h5 className={styles.clothingTitle}> Apparel </h5>
        <ul className={styles.clothingList}>
          <li onClick={handleFilterAll}>All Items</li>
          <li onClick={() => handleFilter('SHIRTS')}>T-Shirts</li>
          <li onClick={() => handleFilter('PANTS')}>Pants</li>
          <li onClick={() => handleFilter('HOODIES')}>Hoodies</li>
          <li onClick={() => handleFilter('ACCESSORIES')}>Accessories</li>
        </ul>
      </div>
      <div className={styles.colorFilter}>
        <h5 className={styles.colorTitle}> Color </h5>
        <ul className={styles.colorList}>
          <li>
              <input type="checkbox"></input>
              <label>Black</label>
          </li>
          <li>
              <input type="checkbox"></input>
              <label>White</label>
          </li>
          <li>
              <input type="checkbox"></input>
              <label>Yellow</label>
          </li>
          <li>
              <input type="checkbox"></input>
              <label>Orange</label>
          </li>
          <li>
              <input type="checkbox"></input>
              <label>Green</label>
          </li>
          <li>
              <input type="checkbox"></input>
              <label>Red</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
