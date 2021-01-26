import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";
import Navigation from "../../../shared/components/Navigation/Navigation";
import styles from "./ProductPage.module.scss";
import { act } from "react-dom/test-utils";

const ProductPage = ({ product, fetchProduct }) => {
  const [currentProduct, setCurrentProduct] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  let { id } = useParams();
  // console.log(typeof id)

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      try {
        await fetchProduct(id);
        console.log(product);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
    setCurrentProduct(product);
    setIsLoading(false);
  }, []);

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className={styles.ProductPage}>
      <div onClick={handleClick} className={styles.mainImage}></div>
      <div className={styles.nextImage}></div>
      {product && (
        <div className={styles.detailsContainer}>
          <h2>{product.name}</h2>
          <h2>{product.color}</h2>
          <h2>{product.details}</h2>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.products.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (pId) => dispatch(actions.fetchProduct(pId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
