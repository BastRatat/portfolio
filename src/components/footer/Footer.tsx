 // @ts-nocheck
import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './Footer.css'
import gitHubPicture from '../../images/github.png'
import linkedInPicture from '../../images/linkedIn.png'

const socialNetworks = {
  linkedIn: {
    url: 'https://www.linkedin.com/in/bastien-ratat/',
    picture: linkedInPicture
  },
  gitHub: {
    url: 'https://github.com/Tybrax/',
    picture: gitHubPicture
  }
}

const Footer:React.FunctionComponent = () => {

  return (  
    <footer className="container-fluid">
      <Row className="d-flex justify-content-center align-items-center p-3">
        <Col>
          <h5><span>©</span> 2020 Copyright : Bastien RATAT</h5>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <ul className="list-inline">
              <li className="list-inline-item m-2">
                <a href={socialNetworks.linkedIn.url} className="text-center">
                  <img src={socialNetworks.linkedIn.picture} alt="LinkedIn" width="60" />
                </a>
              </li>
              <li className="list-inline-item m-2">
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