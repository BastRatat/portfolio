 // @ts-nocheck

 // declare a card object for each tab with titles and content


import React, { useState } from 'react';
import './App.css';

import NavigationBar from './components/header/NavigationBar.tsx'
import HomeCard from './components/header/HomeCard.tsx'
import ProfilePicture from './components/header/ProfilePicture.tsx'

function App() {
  
  const [homeHovered, setHomeHovered] = useState(false)
  const [projectHovered, setProjectHovered] = useState(false)
  const [contactHovered, setContactHovered] = useState(false)

  const handleHover = (tabName) => {
    switch(tabName) {
      case "Home":
        setProjectHovered(false)
        setContactHovered(false)
        setHomeHovered(true)
        break
      case "Projects":
        setContactHovered(false)
        setHomeHovered(false)
        setProjectHovered(true)
        break
      case "Contact":
        setProjectHovered(false)
        setHomeHovered(false)
        setContactHovered(true)
        break
    }
  }
  
  return (
    <div className="App">
      <header>
        <NavigationBar handleHover={handleHover} />
      </header>
      {homeHovered && (
        <HomeCard picture={1} />
      )}
      {projectHovered && (
        <HomeCard picture={2} />
      )}
      {contactHovered && (
        <HomeCard picture={3} />
      )}
      
    </div>
  );
}

export default App;
