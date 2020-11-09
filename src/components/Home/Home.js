import React, { useState } from "react";
import styles from "./Home.module.scss";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Filter from "../Filters/Filter";
import Products from "../Products/Products";
import listOfProducts from "../Products/products-data";
import SearchBar from "../SearchBar/SearchBar";

/* 
    complex searching based on every word
    
    [] have to check if the words contain spaces / white space
    [] created a new array of words, from the original string which is broken up by whitespace
    [] use that array of words to check against each product
        --> for each word in the array words, does the color contain that value, does the name contain that value
        --> has to contain all of the words
*/

const Home = () => {
  // Word keeps track of the input field
  const [word, setWord] = useState("");
  // The orignal array of Products
  const [Product_List] = useState(listOfProducts);
  // The filtered list of products based on SearchBar component's value
  const [filterDisplay, setFilterDisplay] = useState([]);

  // Function runs when input is changed
  const handleFilterChange = (e) => {
    setWord(e);
    let oldList = Product_List.map((product) => {
      return {
        ...product,
        name: product.name.toLowerCase(),
        color: product.color.toLowerCase(),
      };
    });

    if (word !== "") {
      // If user types something input, then the newList will reflect that value
      let newList = [];
      newList = oldList.filter(
        (product) =>
          product.name.includes(word.toLowerCase()) ||
          product.color.includes(word.toLowerCase())
      );
      setFilterDisplay(newList);
    } else {
      // If the user doesn't type anthing then original list of items will be given
      setFilterDisplay(Product_List);
    }
  };

  return (
    <div>
      <Landing />
      <About />
      {/* <SearchBar
        value={word}
        handleFilterChange={(e) => handleFilterChange(e.target.value)}
      /> */}
      <div className={styles.FilterProductsContainer}>
        <Filter />
        <Products
          PRODUCT_LIST={word.length < 1 ? Product_List : filterDisplay}
        />
      </div>
    </div>
  );
};

export default Home;
