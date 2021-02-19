import React, { useState } from "react";
import { Link } from "react-router-dom";

import bagIcon from "../../../assets/svgs/shopping_bag-white-18dp.svg";
import searchIcon from "../../../assets/svgs/search-white-18dp.svg";
import styles from "./Navigation.module.scss";

const Navigation = (props) => {
  const [logoShow, setLogo] = useState(true);

  return (
    <nav className={styles.Navigation}>
      {logoShow && (
        <div className={styles.logoContainer}>
          <Link className={styles.logo} to="/">
            <h1> Erased Closet</h1>
          </Link>
        </div>
      )}
      <ul className={styles.Links}>
        <li>
          <Link to="/login"> sign in</Link>
        </li>
        <li>
          <img src={searchIcon} />
        </li>
        <li onClick={props.handleCart}>
          <img src={bagIcon} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
