// @ts-nocheck

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css';
import  { tabsContentEnglish } from './utils/tabsContent'
import NavigationBar from './components/header/NavigationBar.tsx'
import HomeCard from './components/header/HomeCard.tsx'
import Footer from './components/footer/Footer.tsx'
import TechDesk from './components/body/TechDesk/TechDesk.tsx'

import { UpCircleFilled } from '@ant-design/icons' 

function App() {

  const [homeMessage, setHomeMessage] = useState<boolean>(true)
  const [homeHovered, setHomeHovered] = useState<boolean>(false)
  const [projectHovered, setProjectHovered] = useState<boolean>(false)
  const [contactHovered, setContactHovered] = useState<boolean>(false)

  const handleHover = (tabName) => {
    switch(tabName) {
      case "Home":
        setHomeMessage(false)
        setProjectHovered(false)
        setContactHovered(false)
        setHomeHovered(true)
        break
      case "Projects":
        setHomeMessage(false)
        setContactHovered(false)
        setHomeHovered(false)
        setProjectHovered(true)
        break
      case "Contact":
        setHomeMessage(false)
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
      {homeMessage && (
        <Container className="home-message my-5 jumb">
              <h2 className="text-center p-3">Bastien Ratat, <span className="span-style">26</span></h2>
              <div className="d-flex align-items-center justify-content-center align-items-center p-3">
                <h5 className="typewriter">
                  <span style={{color: '#fc5185'}}>{"<h1>"}</span>Full stack developer<span style={{color: '#fc5185'}}>{"<h1>"}</span>
                </h5>
              </div>
        </Container>
      )}
      {homeHovered && (
        <HomeCard picture={1} title={tabsContentEnglish.home.title} text={tabsContentEnglish.home.text} />
      )}
      {projectHovered && (
        <HomeCard picture={2} title={tabsContentEnglish.projects.title} text={tabsContentEnglish.projects.text} />
      )}
      {contactHovered && (
        <HomeCard picture={3} title={tabsContentEnglish.contact.title} text={tabsContentEnglish.contact.text} />
      )}
      <main>
        <section className="container" id="home">
          <h1>Home</h1>
        </section>
        <section className="container" id="tech">
        <h1>Tech stack</h1>
          <TechDesk />
        </section>
        <section className="container" id="projects">
          <h1>Projects</h1>
        </section>
        <section className="container" id="contact">
          <h1>Contact</h1>
        </section>
        <section className="container">
          <h1>BEFORE FOOTER</h1>
        </section>
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
