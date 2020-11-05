import React from "react";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.Landing}> 
        <div className={styles.textSection}></div>
        <div className={styles.bigImgSection}></div>
        <div className={styles.smallImgSection}>
            <div className={styles.smallImg}></div>
        </div>
    </div>
  );
};

export default Landing;
