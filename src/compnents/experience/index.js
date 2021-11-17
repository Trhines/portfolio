import React from 'react'
import './index.css'
import { Container, Row, Col, Card, } from 'react-bootstrap'
import { useEffect } from 'react'


const Experience = (props) => {
    return (
        <Container fluid="md">
            <Row>
            <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>React</Card.Title>
                            <Card.Text>
                                Javascript library utilizing virtual doms to ceate modern responsive single page web apps.
                                React applications take advantage of jsx and state management for increased flexebility and functionality.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>HTML/CSS</Card.Title>
                            <Card.Text>
                                The building blocks of a website.
                                Built with flex properties and grid based layouts for scaleable
                                application for all screen sizes, and styled with custom css properties alongside
                                libraries such as Bootstrap. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Javascript</Card.Title>
                            <Card.Text>
                                Front end language used to handle the majority of complex functions on a website.
                                server side and 3rd party api's
                                frameworks sucha s React and Node.js 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Node.js</Card.Title>
                            <Card.Text>
                                The backbone of more complex functionality. Typically used with framworks such as Express and React,
                                and built in such a way that it fits into a larger architecture such as the MERN stack. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>MySQL</Card.Title>
                            <Card.Text>
                                Sequel based relational database.
                                Used in conjuction with MySQL Workbench for administration and maintinence,
                                and built with the Sequelize ORM.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>MongoDB</Card.Title>
                            <Card.Text>
                                No sequel database.
                                Designed to be easy to use and have a fast development time. Used in conjuction with Robo 3T for administration and maintinence,
                                built using Mongoose ODM.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>API</Card.Title>
                            <Card.Text>
                                Constructed Custom server side APIs and interacted with 3rd party APIs.
                                Designed with REST architecture or using GraphQL in conjuction with Apollo Server/Client.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Experience;