// @ts-nocheck

import React from 'react';
import { Container } from 'react-bootstrap';
import { homePageDescription } from '../../../utils/description'
import ocr from '../../../images/ocr.png'

const Description:React.FunctionComponent = () => {
  return (
    <section className="container description-background my-4">
      <article className="p-3">
        <h2 className="description-title">Mon parcours</h2>
        <p className="description-text">{homePageDescription.firstParagraph}</p>
        <p className="description-text">{homePageDescription.secondParagraph}</p>
      </article>
      <article className="p-3">
        <h2 className="description-title">{homePageDescription.thirdParagraph.title}</h2>
        {homePageDescription.thirdParagraph.skills.map((skill, index) => (
          <p key={index} className="diploma-skill">{skill}</p>
        ))}
      </article>
      <article className="p-3">
        <figure>
          <h2 className="description-title">Diplôme</h2>
          <div className="d-flex justify-content-center align-items-center">
            <img src={ocr} alt="diplome" className="img-fluid" width="400"/>
          </div>
          <a href="https://www.francecompetences.fr/recherche/rncp/27099/" className="diploma-link">
            <h4>Développeur d'applications (inscrit au RNCP)</h4>
          </a>
          <div className="my-5">
            <h5>Code(s) NSF</h5>
            <p className="description-text text-center">Programmation, mise en place de logiciels</p>
          </div>

        </figure>
        
      </article>
      <article className="p-1">
        <h5 className="description-title">{homePageDescription.fourthParagraph}</h5>
      </article>
    </section>

  )
}

export default Description