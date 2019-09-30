import React, { Component } from "react";
import { Container, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import gifimage from "../images/neighborhood board.PNG";
import moviepicker from "../images/professionalPortfolio RAJ App.PNG";
import memorygame from "../images/reactmemorygame placeholder.PNG";


const Styles = styled.div`{
    .Card {
        
    }
}`;

class Projects extends Component {
    render() {
        return (
            <div className="projects-section" id="projects">
                <Styles>
                    <Container>
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={gifimage} />
                                    <Card.Body>
                                        <Card.Title>Neighborhood Board</Card.Title>
                                        <Card.Text>
                                            This is a project my team worked on to create a place for a community to set up a newsfeed, event space, and marketplace just for their individual community.
    </Card.Text>
                                        <div className='cardbuttons'>
                                            <Button variant="info" href="http://neighborhood-board.herokuapp.com/login" target="_blank">Demo</Button>
                                            <Button variant="dark" href="https://github.com/jaronrayj/neighborhood-board" target="_blank">Repo</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={moviepicker} />
                                    <Card.Body>
                                        <Card.Title>Movie Picker</Card.Title>
                                        <Card.Text>
                                            In this project we created an app that will allow you to see a list of movies to watch based off genre and popularity. Using an API we would pull the movies based on genre and popularity and displayed them in cards, allowing you to view a trailer and a synopsis of the movie.
    </Card.Text>
                                        <div className='cardbuttons'>
                                            <Button variant="info" href="https://aryoshida.github.io/RAJ/" target="_blank">Demo</Button>
                                            <Button variant="dark" href="https://github.com/aryoshida/RAJ" target="_blank">Repo</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={memorygame} />
                                    <Card.Body>
                                        <Card.Title>Memory Game</Card.Title>
                                        <Card.Text>
                                            Created a fun react app that displayed marvel charachters that you would have to remember who you have clicked on and click all of the cast. Every time you pick someone that board shuffles the images.
    </Card.Text>
                                        <div className='cardbuttons'>
                                            <Button variant="info" href="https://noxxid.github.io/reactMemoryGame/" target="_blank">Demo</Button>
                                            <Button variant="dark" href="https://github.com/noxxid/reactMemoryGame" target="_blank">Repo</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Styles>
            </div>
        )
    }
}

export default Projects;