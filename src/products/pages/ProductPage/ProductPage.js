import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";

import Navigation from "../../../shared/components/Navigation/Navigation";
import styles from "./ProductPage.module.scss";

const ProductPage = ({products}) => {
  const history = useHistory();
  let { id } = useParams();

  console.log('products', products)

  const currentProduct = products.filter((product) => {
    return product.id === +id;
  })[0];

  console.log(currentProduct)

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className={styles.ProductPage}>
      <div onClick={handleClick} className={styles.mainImage}></div>
      <div className={styles.nextImage}></div>
      <div className={styles.detailsContainer}>
        <h2>{currentProduct.name}</h2>
        <h2>{currentProduct.color}</h2>
        <h2>{currentProduct.description}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps)(ProductPage);
