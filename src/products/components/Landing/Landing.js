import React from "react";

import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.Landing}>
      <div className={styles.container}></div>
      <div className={styles.imgContainer}>
          <h2 className={styles.syndicateText}> syndicate </h2>
          <h2 className={styles.studiosText}> studios </h2>
      </div>
    </div>
  );
};

export default Landing;
