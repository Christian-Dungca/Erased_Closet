import React, { useState } from 'react';
import styles from './App.module.scss';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import BagModal from '../BagModal/BagModal';

function App() {
  const [bag, toggleBag] = useState(true);

  const handleBag = () => {
    toggleBag(!bag)
  }

  return (
    <div className={styles.App}>
      {bag && <BagModal toggleBag={handleBag}/>}
      <Navigation toggleBag={handleBag}/>
      <Home />
    </div>
  );
}

export default App;
