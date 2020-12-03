import React from 'react';
import './App.css';

import NavigationBar from './components/header/NavigationBar'

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <p className="text-center">Portfolio</p>
    </div>
  );
}

export default App;
