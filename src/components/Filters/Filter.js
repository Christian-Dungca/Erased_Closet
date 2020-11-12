import React from "react";
import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.Filter}>

      <div className={styles.clothingFilter}>
        <h5 className={styles.clothingTitle}> Apparel </h5>
        <ul className={styles.clothingList}>
          <li>T-Shirts</li>
          <li>Pants</li>
          <li>Hoodies</li>
          <li>Accessories</li>
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
