import React from "react";
import { connect } from "react-redux";
import styles from "./Cart.module.scss";

const Cart = (props) => {
  console.log(props);
  return (
    <div className={styles.Cart}>
      <h1 onClick={props.handleCart}> close </h1>
      <h1> this is the cart component</h1>
      {props.productsInCart.map((product) => {
        return (
          <div key={product.name}>
            <h2> {product.name} </h2>
            <h2> {product.price} </h2>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productsInCart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Cart);
