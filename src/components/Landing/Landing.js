import React from "react";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.Landing}> 
        <div className={styles.textSection}>
          <h1 className={styles.name}>The Erased Closet</h1>
          <h3 className={styles.slogan}> will you carry the mark? </h3>
        </div>
        <div className={styles.bigImgSection}></div>
        <div className={styles.smallImgSection}>
            <div className={styles.smallImg}></div>
        </div>
    </div>
  );
};

export default Landing;
