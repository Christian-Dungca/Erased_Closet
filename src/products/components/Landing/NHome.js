import React from "react";
import styles from "./NHome.module.scss";
import modelImg from "../../../assets/svgs/model.png";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.gradient}></div>
      {/* Navigation */}
      <div className={styles.Navigation}>
        <h5 href="#" className={styles.logo}>
          Erased Closet
        </h5>
        <div className={styles.sideLinks}>
          <h5> Favorites </h5>
          <h5> Bag </h5>
        </div>
      </div>
      {/* Large Text */}
      <h1 className={styles.title}> Erased Closet </h1>
      {/* Large Image */}
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img src={modelImg} className={styles.image} />
          {/* Add to cart button */}
          {/* <div className={styles.addToCart}>
            <p> add to cart</p>
          </div> */}
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.backdrop}></div>
          <h1> Light Gray </h1>
          <h1> Suede Sweater </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
