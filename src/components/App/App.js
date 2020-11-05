import React from 'react';
import styles from './App.module.scss';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
