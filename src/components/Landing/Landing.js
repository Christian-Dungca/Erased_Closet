import React from "react";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.Landing}> 
        <div className={styles.textSection}> Landing text section</div>
        <div className={styles.bigImgSection}> Title section</div>
        <div className={styles.smallImgSection}>
            <div className={styles.smallImg}>Small Image Section</div>
        </div>
    </div>
  );
};

export default Landing;
