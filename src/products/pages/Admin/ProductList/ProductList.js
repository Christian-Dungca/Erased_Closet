import React from "react";

import styles from "./ProductList.module.scss";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product._id} className={styles.productRow}>
            <ul className={styles.mainList}>
              <ul className={styles.productName}>
                <li className={styles.name}> {product.name} </li>
                <li className={styles.size}> size: {product.size} </li>
              </ul>
              <li className={styles.type} > {product.type} </li>
              <li className={styles.color}> {product.color} </li>
              <li className={styles.price}> ${product.price} </li>
              <li className={styles.actions}>edit delete</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;

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
