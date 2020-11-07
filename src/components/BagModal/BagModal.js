import React from "react";
import styles from "./BagModal.module.scss";

const fakeProductsList = [
  {
    id: 1,
    name: "product name",
    type: undefined,
    description: undefined,
    color: "yellow",
    size: undefined,
    inCart: undefined,
    images: undefined,
    imageUrl: "../../assets/images/sm-lady-blue-bg.jpg",
  },
  {
    id: 1,
    name: "product name",
    type: undefined,
    description: undefined,
    color: "yellow",
    size: undefined,
    inCart: undefined,
    images: undefined,
    imageUrl: "../../assets/images/sm-lady-blue-bg.jpg",
  },
];

const BagModal = ({ toggleBag }) => {
  return (
    <div className={styles.BagModal}>
      <div className={styles.btnContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={toggleBag}
          className={styles.closeBtn}
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </div>
      <div className={styles.productsContainer}>
        {fakeProductsList.map((product) => {
          return (
            <div className={styles.product}>
              <div className={styles.image}></div>
              <div className={styles.details}>
                <h3 className={styles.name}>Lorem Ipsum is simply dummy</h3>
                <div className={styles.descriptionContainer}>
                  <p className={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <p className={styles.removeBtn}>Remove</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BagModal;
