import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Transition } from "react-transition-group";

import Cart from "../../components/Cart/Cart";
import Backdrop from "../../../shared/components/Backdrop/Backdrop";
import Navigation from "../../../shared/components/Navigation/Navigation";
import * as actions from "../../../store/actions/index";
import styles from "./ProductsPag.module.scss";

const ProductsPage = (props) => {
  const [productsList, setProductsList] = useState(props.products);
  const [currentProduct, setCurrentProduct] = useState(null);

  return (
    <div>
      {props.isCartOpen && (
        <>
          <Transition
            in={props.isCartOpen}
            timeout={300}
            mountOnEnter
            unmountOnExit
          >
            {(state) => <Cart handleCart={props.handleCart} show={state} />}
          </Transition>
          <Backdrop onclick={props.handleCart} />
        </>
      )}
      <Navigation handleCart={props.handleCart} />
      <div className={styles.ProductsPage}>
        <div className={styles.leftContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.mainTitle}> Erased Closet </h1>
            <h3 className={styles.subTitle}> Will You Carry the Mark </h3>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Link
            // to={`/product/${currentProduct.id}`}
            to={`/product/60074469f356fc228cf64ef4`}
            className={styles.linkContainer}
          >
            <div className={styles.imageContainer}>
              {/* <img src={`${currentProduct.imageUrl}`}></img> */}
            </div>
          </Link>
        </div>
        <div className={styles.productNumber}>
          <h2>
            01 <span> / </span> 12
          </h2>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    filteredProducts: state.products.filteredProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
