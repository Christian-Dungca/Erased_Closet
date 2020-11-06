import React, { useState } from "react";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Products from "../Products/Products";
import listOfProducts from "../Products/products-data";
import SearchBar from "../SearchBar/SearchBar";

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
      <SearchBar
        value={word}
        handleFilterChange={(e) => handleFilterChange(e.target.value)}
      />
      <Products PRODUCT_LIST={word.length < 1 ? Product_List : filterDisplay} />
    </div>
  );
};

export default Home;
