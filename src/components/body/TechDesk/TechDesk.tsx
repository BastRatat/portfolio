// @ts-nocheck
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import TechCard from './TechCard.tsx'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './TechDesk.css'
import { technologies } from '../../../utils/technologies'

interface Card {
  title: string,
  content: string
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      TEST
    </div>
  );
}

export const TechDesk:React.FunctionComponent = () => {

  const [cardClicked, setCardClicked] = useState<boolean>(false)
  const [card, setCard] = useState<Card>({
    image: '',
    title: '',
    content: ''
  })

  const cleanState = () => {
    setCardClicked(false)
    setCard({
      image: '',
      title: '',
      content: ''
    })
  }

  const handleClick = (image, title, content) => {
    setCardClicked(true)
    setCard({
      image: image,
      title: title,
      content: content
    })
  }

  if (!cardClicked) {
    return (
      <Container className="deck">
        <Row className="d-flex justify-content-center">
          {technologies.map((tech, index) => (
            <Col xs={4} key={index}>
              <TechCard 
                techLogo={tech.image}
                title={tech.title}
                content={tech.skills}
                handleClick={handleClick}
              />    
            </Col>
          ))}
        </Row>
      </Container>
    )
  } else {
    return (
      <Container className="text-center technology-content mt-3">
        <h1 className="p-4">{card.title}</h1>
        <img src={card.image} alt="techLogo" className="img-fluid text-center p-3 mb-3" width="300"/>
        {card.content.map((skill, index) => (
          <h5 key={index} className="m-2 skills p-1">{skill}</h5>   
        ))}
        <Button onClick={cleanState} className="tech-btn m-3">Retour</Button>
      </Container>
    )
  }
}
 
export default TechDesk;