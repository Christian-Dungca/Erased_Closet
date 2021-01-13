import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import styles from "./Cart.module.scss";

const Cart = (props) => {
  console.log(props);

  const removeFromCartHandler = (productID) => {
    props.removeFromCart(productID);
  };
  return (
    <div className={styles.Cart}>
      <h1 onClick={props.handleCart}> close </h1>
      <h1> this is the cart component</h1>
      {props.productsInCart.map((product) => {
        return (
          <div key={product.name}>
            <h2> {product.name} </h2>
            <h2> {product.price} </h2>
            <p
              onClick={() => {
                removeFromCartHandler(product.id);
              }}
            >
              Remove from cart
            </p>
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (prodId) => {
      dispatch(actions.removeFromCart(prodId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
