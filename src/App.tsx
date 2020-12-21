// @ts-nocheck

// Go to top button

import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import './App.css';

import NavigationBar from './components/header/NavigationBar.tsx'
import Homepage from './components/homepage/Homepage.tsx'
import Footer from './components/footer/Footer.tsx'
import HomeCard from './components/header/HomeCard.tsx'
import { tabsContentFrench } from './utils/tabsContent'

interface hovered {
  homeHovered: boolean,
  techHovered: boolean,
  contactHovered: boolean
}

function App() {

  const [homeMessage, setHomeMessage] = useState<boolean>(true)
  const [homeHovered, setHomeHovered] = useState<boolean>(false)
  const [techHovered, setTechHovered] = useState<boolean>(false)
  const [contactHovered, setContactHovered] = useState<boolean>(false)

  const [hovered, setHovered] = useState<hovered>({
    home: false,
    tech: false,
    contact: false
  })

  const handleHover = (tabName) => {
    switch(tabName) {
      case "Accueil":
        setHomeMessage(false)
        setHovered({
          projects: false,
          contact: false,
          tech: false,
          home: true
        })
        break
      case "Contact":
        setHomeMessage(false)
        setHovered({
          home: false,
          projects: false,
          tech: false,
          contact: true
        })
        break
      case "Tech":
        setHomeMessage(false)
        setHovered({
          home: false,
          contact: false,
          projects: false,
          tech: true
        })
        break
    }
  }
  
  return (
      <div className="App">
        <header>
          <NavigationBar handleHover={handleHover} />
        </header>
        {homeMessage && (
        <Container fluid className="home-message">
          <h2 className="text-center p-3">Bastien Ratat, <span className="span-style">26</span></h2>
          <div className="d-flex align-items-center justify-content-center align-items-center p-3">
            <h5 className="typewriter">
              <span style={{color: '#fc5185'}}>{"<h1>"}</span>Full stack developer<span style={{color: '#fc5185'}}>{"<h1>"}</span>
            </h5>
          </div>
        </Container>
      )}
      {hovered.home && (
        <HomeCard picture={1} title={tabsContentFrench.home.title} text={tabsContentFrench.home.text} />
      )}
      {hovered.contact && (
        <HomeCard picture={3} title={tabsContentFrench.contact.title} text={tabsContentFrench.contact.text} />
      )}
      {hovered.tech && (
        <HomeCard picture={4} title={tabsContentFrench.tech.title} text={tabsContentFrench.tech.text} />
      )}
        <Homepage />       
        <Footer />
      </div>
  );
}

export default App;
