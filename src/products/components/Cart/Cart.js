import React from 'react';
import styles from './Cart.module.scss';

const Cart = (props) => {
    return (
        <div className={styles.Cart}>
            <h1 onClick={props.handleCart}> close </h1>
            <h1> this is the cart component</h1>
        </div>
    )
}

export default Cart;