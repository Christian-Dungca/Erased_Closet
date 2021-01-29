import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Navigation from "../../../shared/components/Navigation/Navigation";
import ProductList from "./ProductList/ProductList";
import NewProduct from "./NewProductPage/NewProduct";
import Backdrop from "../../../shared/components/Backdrop/Backdrop";
import * as actions from "../../../store/actions/index";
import styles from "./Admin.module.scss";

const Admin = ({ products, fetchProducts }) => {
  const [newProductForm, setNewProductForm] = useState(false);
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        await fetchProducts();
      } catch (err) {
        console.log(err);
      }
    };
    setProductList(products);
    console.log("productList", productList);
  }, []);

  const createProductHandler = () => {
    console.log("inside createProductHandler");
    setNewProductForm(!newProductForm);
  };

  return (
    <>
      <Navigation />
      {newProductForm && <Backdrop onclick={createProductHandler} />}
      {newProductForm && <NewProduct closeFormHandler={createProductHandler} />}
      <div className={styles.Admin}>
        <div className={styles.header}>
          <h1> Product Inventory (Admin) </h1>
          <div className={styles.createProductWrapper}>
            {/* <h2 className={styles.productsText}> Products </h2> */}
            <div
              className={styles.createProductBtn}
              onClick={createProductHandler}
            >
              <h2 className={styles.btnText}> Create </h2>
              <h2 className={styles.btnPlusSymbol}> &#43; </h2>
            </div>
          </div>
        </div>
        <div className={styles.productTableWrapper}>
          <div className={styles.productTable}>
            {/* <ul className={styles.productRowHeader}> */}
            <li className={styles.productHeader}>product</li>
            <li className={styles.productHeader}>type</li>
            <li className={styles.productHeader}>color</li>
            <li className={styles.productHeader}>price</li>
            <li className={styles.productHeader}>actions</li>
            {/* </ul> */}

            {products && <ProductList products={products} />}
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
    fetchProducts: () => dispatch(actions.fetchProducts),
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
