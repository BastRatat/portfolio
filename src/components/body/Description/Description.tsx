// @ts-nocheck

import React from 'react';
import { Container } from 'react-bootstrap';
import { homePageDescription } from '../../../utils/description'

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
        <h3 className="description-title">{homePageDescription.fourthParagraph}</h3>
      </article>
    </section>

  )
}

export default Description