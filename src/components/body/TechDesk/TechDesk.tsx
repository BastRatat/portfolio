// @ts-nocheck
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import TechCard from './TechCard.tsx'
import { Container, Row, Col } from 'react-bootstrap'
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
    title: '',
    content: ''
  })

  const handleClick = (title, content) => {
    setCardClicked(true)
    setCard({
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
      <div>HANDLE REDIRECTION</div>
    )
  }
}
 
export default TechDesk;