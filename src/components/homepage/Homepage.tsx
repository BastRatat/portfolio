// @ts-nocheck

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import  { tabsContentEnglish } from '../utils/tabsContent'
import NavigationBar from '../header/NavigationBar.tsx'
import HomeCard from '../header/HomeCard.tsx'
import Footer from '../footer/Footer.tsx'
import TechDesk from '../body/TechDesk/TechDesk.tsx'

export const Homepage:React.FunctionComponent = () => {

  return (
      <div className="App">
          <main>
            <section className="container" id="home">
              <h1>Home</h1>
            </section>
            <section className="container" id="tech">
            <h1>Tech stack</h1>
              <TechDesk />
            </section>
            <section className="container" id="projects">
              <h1>Projets</h1>
            </section>
            <section className="container" id="contact">
              <h1>Contact</h1>
            </section>
            <section className="container">
              <h1>BEFORE FOOTER</h1>
            </section>
          </main>
      </div>


  );
}

export default Homepage;
