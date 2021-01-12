import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [logoShow, setLogo] = useState(true);

  return (
    <nav className={styles.Navigation}>
      {logoShow && (
        <div className={styles.logoContainer}>
          <Link className={styles.logo}>
            <h1 > Erased Closet</h1>
          </Link>
        </div>
      )}
      <ul className={styles.Links}>
        <li> Login </li>
        <li> Search </li>
        <li> Cart </li>
      </ul>
    </nav>
  );
};

export default Navigation;
