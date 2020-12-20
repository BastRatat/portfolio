// @ts-nocheck

import React from 'react';
import TechDesk from '../body/TechDesk/TechDesk.tsx'
import Contact from '../body/Contact/Contact.tsx'
import Description from '../body/Description/Description.tsx'

const paragraphStyle = {
  color: 'white', 
  letterSpacing: '1px', 
  fontSize: '1.2em'
}


export const Homepage:React.FunctionComponent = () => {

  return (
      <div className="App">
          <main>
            <section className="container" id="home">
              <Description />
            </section>
            <section className="container" id="tech">
              <h1 className="description-title text-center">Technologies & projets</h1>
              <p className="text-center font-weigth-bold" style={paragraphStyle}>Cliquez pour voir mes compétences</p>
              <TechDesk />
            </section>
            <section className="container" id="contact">
              <Contact />
            </section>
            <section className="container my-5">
              <article>
                <h3 className="description-title text-center">A propos</h3>
                <figure className="d-flex justify-content-center">
                  <img className="img-fluid profile-picture" src="https://avatars3.githubusercontent.com/u/32437299?v=4" alt="Bastien Ratat" width="300" />
                </figure>
                <p className="text-justify font-weigth-bold p-3" style={paragraphStyle}>Né à Lyon, j'ai eu l'opportunité de travailler dans plusieurs pays étrangers (Etats-Unis, Chine et Taiwan). Passionné par l'informatique, je possède également un Bachelor en Management. J'aime particulièrement associer la finance et l'algorithmique.</p>
                <p className="text-justify font-weigth-bold p-3" style={paragraphStyle}>J'aime consacrer mon temps libre au fitness, à la musique, à la cuisine des plats asiatiques et à la calligraphie. Je passe aussi du temps à apprendre des langues étrangères et parle couramment l'anglais ainsi que le mandarin</p>
              </article>
            </section>
          </main>
      </div>


  );
}

export default Homepage;
