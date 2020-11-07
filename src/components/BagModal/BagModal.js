import React from 'react';
import styles from './BagModal.module.scss';

const BagModal = ({toggleBag}) => {

    return (
        <div className={styles.BagModal}>
            <h1 onClick={toggleBag}> Close </h1>
        </div>
    )
}

export default BagModal;