import React, { Children } from "react";

import styles from "./Modal.module.scss";

const Modal = ({ onclick, children, btnAction, btnText }) => {
  console.log(btnAction); 
  return (
    <div className={styles.Modal}>
      <div className={styles.childrenWrapper}>{children}</div>
      <div className={styles.footer}>
        <h2 onClick={onclick}> cancel </h2>
        <button onClick={btnAction}> {btnText} </button>
      </div>
    </div>
  );
};

export default Modal;
