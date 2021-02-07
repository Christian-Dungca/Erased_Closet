import React, { useRef } from "react";

import styles from "./ImageUpload.module.scss";

const ImageUpload = ({ inputHandler, currentStep, id }) => {
  const fileInputRef = useRef(null);

  const pickedHandler = (event) => {
      console.log(event.target)
  }

  const pickImageHandler = () => {
    fileInputRef.current.click();
  }

  if (currentStep !== 3) return null;
  return (
    <div className={styles.ImageUpload}>
      <input
        ref={fileInputRef}
        id={id}
        type="file"
        accept=".jpg,.jpeg,.png"
        style={{ display: "none" }}
        onChange={pickedHandler}
      />
      <h2 className={styles.title}> Upload Product Images </h2>
      <div className={styles.addImageContainer} onClick={pickImageHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={styles.plusSign}
        >
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>
      </div>
      <div className={styles.imagePreview}>
        <div className={styles.image}></div>
        <div className={styles.imageName}></div>
      </div>
      <div className={styles.imagePreview}>
        <div className={styles.image}></div>
        <div className={styles.imageName}></div>
      </div>
    </div>
  );
};

export default ImageUpload;
