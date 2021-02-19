import React, { useRef, useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { gsap } from "gsap";
import { Transition } from "react-transition-group";

import Cart from "../../components/Cart/Cart";
import Backdrop from "../../../shared/components/Backdrop/Backdrop";
import Navigation from "../../../shared/components/Navigation/Navigation";
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import * as actions from "../../../store/actions/index";
import styles from "./ProductsPage.module.scss";

const ProductsPage = (props) => {
  const [productsList, setProductsList] = useState(props.products);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [playAnimation, setPlayAnimation] = useState(false);
  const imageRef = useRef(0);
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);

  useEffect(() => {
    timeline.to(imageRef.current, {
      left: 0,
      top: 0,
      height: "100vh",
      width: "60vw",
    });
    if (playAnimation) {
      timeline.play();
    } else {
      timeline.reverse();
    }
  }, [playAnimation]);

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
      <Landing />
      <About />
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


