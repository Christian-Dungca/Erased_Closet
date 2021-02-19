import React from "react";

import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.gridContainer}>
        <div className={styles.image}>
            <div className={styles.imageAccent}></div>
            <h2 className={styles.imageText}>About</h2>
        </div>
        <p className={styles.topDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga
          aspernatur, dolorum voluptatem dignissimos deleniti qui ab possimus,
          quibusdam in accusantium voluptatum odio maiores, error assumenda
          inventore nostrum suscipit expedita.
        </p>
        <p className={styles.bottomDescription}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit earum
          sunt rem aut culpa? Modi provident tempore omnis labore vel sit
          impedit veritatis beatae, alias dolor saepe magni dolores vitae? Id
          ipsum possimus aspernatur tempora voluptatem expedita doloremque
          veniam. Quis voluptatem blanditiis dolor perferendis libero iure
        </p>
      </div>
    </div>
  );
};

export default About;
