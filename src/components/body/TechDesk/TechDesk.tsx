// Add transparent logo for each language

// @ts-nocheck
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import TechCard from './TechCard.tsx'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './TechDesk.css'
import { technologies } from '../../../utils/technologies'

interface Card {
  image: string,
  title: string,
  content: string,
  links: Array<string>
}

export const TechDesk:React.FunctionComponent = () => {

  const [cardClicked, setCardClicked] = useState<boolean>(false)
  const [card, setCard] = useState<Card>({
    image: '',
    title: '',
    content: '',
    links: []
  })

  const cleanState = () => {
    setCardClicked(false)
    setCard({
      image: '',
      title: '',
      content: '',
      links: []
    })
  }

  const handleClick = (image, title, content, links) => {
    setCardClicked(true)
    setCard({
      image: image,
      title: title,
      content: content,
      links: links
    })
  }

  if (!cardClicked) {
    return (
      <Container className="deck my-4">
        <Row className="d-flex justify-content-center">
          {technologies.map((tech, index) => (
            <Col xs={4} key={index}>
              <TechCard 
                techLogo={tech.image}
                title={tech.title}
                content={tech.skills}
                links={tech.github}
                handleClick={handleClick}
              />    
            </Col>
          ))}
        </Row>
      </Container>
    )
  } else {
    return (
      <Container className="text-center technology-content my-4">
        <h1 className="p-4">{card.title}</h1>
        <img src={card.image} alt="techLogo" className="img-fluid text-center p-3 mb-3" width="200"/>
        {card.content.map((skill, index) => (
          <h5 key={index} className="m-2 skills p-1">{skill}</h5>   
        ))}
        <section className="my-5 projects-background justify-content-center">
          <div>
            {card.links && (
              <div className="py-3">
                <h3 className="py-3 projects-titles">Projets</h3>
                {card.links.map((example, index) => (
                  <div className="p-2">
                    <a href={example.link} key={index} className="examples">{example.title}</a>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>
        <Button onClick={cleanState} className="tech-btn m-3">Retour</Button>
      </Container>
    )
  }
}
 
export default TechDesk;