 // @ts-nocheck
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ProfilePicture from './ProfilePicture.tsx'
import './Homecard.css'

interface HomeCardProps {
    picture: number,
    title: string,
    text: string
}

const HomeCard:React.FunctionComponent = ({picture, title, text}:HomeCardProps) => {

    return (  
            <Card className="card">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={6} className="p-2 d-flex align-items-center justify-content-center">
                                <div>
                                    <Card.Title className="card-title text-center font-weight-bold p-3">{title}</Card.Title>
                                    <Card.Text className="card-body p-1 text-justify">
                                        {text}
                                    </Card.Text> 
                                </div>   
                            </Col>
                            <Col xs={12} sm={12} md={6} className="p-3">
                                <ProfilePicture picture={picture} />   
                            </Col>
                        </Row>
                    </Container>
            </Card>
    )
}
 
export default HomeCard