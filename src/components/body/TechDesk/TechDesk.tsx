// @ts-nocheck
import React from 'react';
import TechCard from './TechCard.tsx'
import { Container, Row, Col } from 'react-bootstrap'
import './TechDesk.css'
import { technologies } from '../../../utils/technologies'



export const TechDesk:React.FunctionComponent = () => {

  return (  
    <Container className="deck">
      <Row>
        {technologies.map((tech) => (
          <Col xs={4}>
            <TechCard 
              techLogo={tech.image}
              title={tech.title}
              content={tech.skills}
            />    
          </Col>
        ))}
      </Row>

    </Container>
  )
}
 
export default TechDesk;