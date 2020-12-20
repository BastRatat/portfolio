// @ts-nocheck

import React from 'react';
import TechDesk from '../body/TechDesk/TechDesk.tsx'
import Contact from '../body/Contact/Contact.tsx'
import Description from '../body/Description/Description.tsx'

export const Homepage:React.FunctionComponent = () => {

  return (
      <div className="App">
          <main>
            <section className="container" id="home">
              <Description />
            </section>
            <section className="container" id="tech">
              <h1 className="description-title text-center">Technologies & projets</h1>
              <TechDesk />
            </section>
            <section className="container" id="contact">
              <Contact />
            </section>
            <section className="container">
              <h1>BEFORE FOOTER</h1>
            </section>
          </main>
      </div>


  );
}

export default Homepage;
