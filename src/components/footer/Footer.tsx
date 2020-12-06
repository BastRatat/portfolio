 // @ts-nocheck
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import './Footer.css'

const socialNetworks = {
  linkedIn: {
    url: 'https://www.linkedin.com/in/bastien-ratat/',
    picture: 'https://www.hesus.eu/wp-content/uploads/2019/05/linkedin-icon-logo-png-transparent.png'
  },
  gitHub: {
    url: 'https://github.com/Tybrax/',
    picture: 'https://pngimg.com/uploads/github/github_PNG83.png'
  }
}

const Footer:React.FunctionComponent = () => {
  return (  
    <footer className="container-fluid">
      <Row className="d-flex justify-content-center align-items-center p-3">
        <Col>
          <h4><span>©</span> 2020 Copyright : Bastien RATAT</h4>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <ul className="list-inline">
              <li className="list-inline-item">
                <a href={socialNetworks.linkedIn.url} className="text-center">
                  <img src={socialNetworks.linkedIn.picture} alt="LinkedIn" width="60" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href={socialNetworks.gitHub.url} className="text-center">
                  <img src={socialNetworks.gitHub.picture} alt="LinkedIn" width="60" height="60" />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </footer>
  )
}
 
export default Footer;