import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = ({value, handleFilterChange}) => {
    return (
        <div>
            Search: <input value={value} onChange={handleFilterChange} />
        </div>
    )
}

export default SearchBar;