 // @ts-nocheck

 // declare a card object for each tab with titles and content

import React, { useState } from 'react';
import './App.css';
import  { tabsContentEnglish } from './utils/tabsContent'
import NavigationBar from './components/header/NavigationBar.tsx'
import HomeCard from './components/header/HomeCard.tsx'
import ProfilePicture from './components/header/ProfilePicture.tsx'

function App() {
  
  console.log(tabsContentEnglish)

  const [homeHovered, setHomeHovered] = useState<boolean>(false)
  const [projectHovered, setProjectHovered] = useState<boolean>(false)
  const [contactHovered, setContactHovered] = useState<boolean>(false)

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
        <HomeCard picture={1} title={tabsContentEnglish.home.title} text={tabsContentEnglish.home.text} />
      )}
      {projectHovered && (
        <HomeCard picture={2} title={tabsContentEnglish.projects.title} text={tabsContentEnglish.projects.text} />
      )}
      {contactHovered && (
        <HomeCard picture={3} title={tabsContentEnglish.contact.title} text={tabsContentEnglish.contact.text} />
      )}
      
    </div>
  );
}

export default App;
