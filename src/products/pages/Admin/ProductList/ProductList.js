import React from "react";
import {Link} from "react-router-dom";

import styles from "./ProductList.module.scss";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <>
      {products.map((product) => {
        return (
          <React.Fragment key={product._id}>
            <li> {product.name} </li>
            <li> {product.price} </li>
            <li> {product.type} </li>
            <li> {product.color} </li>
            <li> {product.size} </li>
            <li>
              <Link to={`/product/${product._id}`}> edit</Link> delete
            </li>
          </React.Fragment>
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
