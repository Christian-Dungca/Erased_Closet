import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Navigation from "../../../shared/components/Navigation/Navigation";
import ProductList from "./ProductList/ProductList";
import NewProduct from "./NewProductPage/NewProduct";
import Backdrop from "../../../shared/components/Backdrop/Backdrop";
import Modal from "../../../shared/components/Modal/Modal";
import * as actions from "../../../store/actions/index";
import styles from "./Admin.module.scss";

const Admin = ({ products, fetchProducts, deleteProduct }) => {
  const [newProductForm, setNewProductForm] = useState(false); 
  const [showWarning, setShowWarning] = useState(false);
  const [productId, setProductId] = useState(null);

  const showProductFormHandler = () => {
    setNewProductForm(!newProductForm);
  };

  const showWarningHandler = (prodId) => {
    setProductId(prodId);
    setShowWarning((showWarning) => !showWarning);
  };

  const removeProductHandler = (productId) => {
    deleteProduct(productId);
    setShowWarning((showWarning) => !showWarning);
  };
  

  return (
    <>
      <Navigation />
      {showWarning && (
        <>
          <Backdrop onclick={showWarningHandler} />
          <Modal
            onclick={showWarningHandler}
            btnText={"Delete"}
            btnAction={removeProductHandler}
          >
            <>
              <h1> Delete Product </h1>
              <p>
                Are you sure you want to delete this product from the store?
                This action cannot be redone.
              </p>
            </>
          </Modal>
        </>
      )}
      {newProductForm && (
        <>
          <Backdrop onclick={showProductFormHandler} />
          <NewProduct closeFormHandler={showProductFormHandler} />
        </>
      )}
      <div className={styles.Admin}>
        <div className={styles.header}>
          <h1> Product Inventory (Admin) </h1>
          <div className={styles.createProductWrapper}>
            <div
              className={styles.createProductBtn}
              onClick={showProductFormHandler}
            >
              <h2 className={styles.btnText}> Create </h2>
              <h2 className={styles.btnPlusSymbol}> &#43; </h2>
            </div>
          </div>
        </div>
        <div className={styles.productTableWrapper}>
          <div className={styles.productTable}>
            <li className={styles.productHeader}>product</li>
            <li className={styles.productHeader}>type</li>
            <li className={styles.productHeader}>color</li>
            <li className={styles.productHeader}>price</li>
            <li className={styles.productHeader}>actions</li>

            {products && (
              <ProductList
                products={products}
                showWarningHandler={showWarningHandler}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(actions.fetchProducts()),
    deleteProduct: (pId) => dispatch(actions.deleteProduct(pId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

/* 
name,
type,
price: +price,
details,
color,
size,
image: "https://picsum.photos/id/237/200/300",
images: [
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
],
*/
