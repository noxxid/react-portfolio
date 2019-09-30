import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="social-links">
                            <a href="https://github.com/noxxid" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/johnathan-dixon-810595176/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </Col>
                    <Col className="aboutme-section"><p>Hello my name is John, and I am a full stack web developer. My knowledge includes HTML, CSS, Javascript, JQuery, MySQL, MongoDB, Node, and React.</p></Col>
                </Row>
                <Row>
                    <Col>
                        <div className="navigations-buttons">
                            <Button variant="dark" size="lg" href="https://drive.google.com/open?id=1RNm05B7YarvxyIu7T5Xph56WdeH4Fajg" target="_blank">Resume</Button>
                            <Button variant="dark" size="lg" href="#projects-div">Portfolio</Button>
                            <Button variant="dark" size="lg">Contact</Button>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default HomePage;