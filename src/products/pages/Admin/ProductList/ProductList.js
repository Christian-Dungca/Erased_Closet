import React from "react";
import styles from './ProductList.module.scss';

const ProductList = ({products}) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ul>
              <li> {product.name} </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}; 

export default ProductList;
