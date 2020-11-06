import React from 'react';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Products from '../Products/Products';
import listOfProducts from '../Products/products-data';

const Home = () => {
    return (
        <div>
            <Landing />
            <About />
            <Products PRODUCT_LIST={listOfProducts}/> 
        </div>
        
    )
}

export default Home; 