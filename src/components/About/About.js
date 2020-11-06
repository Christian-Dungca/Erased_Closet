import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.leftContainer}>
        <div className={styles.imgContainer}></div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.textContainer}>
          <p className={styles.textTop}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className={styles.textBottom}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
