import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ContactDescription from './ContactDescription'
import ContactInformation from './ContactInformation'
import ContactForm from './ContactForm'

const Contact:React.FunctionComponent = () => {
  return (
    <Container className="contact-background">
      <Row>
        <Col xs={12} sm={12} md={8} className="d-flex align-items-center">
          <ContactDescription />
        </Col>
        <Col xs={12} sm={12} md={4}>
          <ContactInformation />
        </Col>
      </Row>
      {/* <h3 className="text-center contact-title">Plus d'information</h3> */}
      {/* <ContactForm /> */}
    </Container>
  )
}
 
export default Contact