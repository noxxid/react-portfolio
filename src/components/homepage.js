import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Contact from "../components/contact";

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
                        <div className="navigation-buttons">
                            <Button variant="dark" size="lg" href="https://drive.google.com/open?id=1RNm05B7YarvxyIu7T5Xph56WdeH4Fajg" target="_blank">Resume</Button>
                            {/* <Button variant="dark" size="lg" href="#projects-div">Portfolio</Button> */}
                            <div className="contactModal">
                                <Contact />
                            </div>
                        </div>
                    </Col>
                    <Col className="aboutme-section">
                        <Row>
                            <p>Web developer proficient in the MERN stack with an interest in further expanding knowledge and using expertise to collaborate on interesting and dynamic projects. Extremely adaptable and collaborative, with  skill in conflict resolution. Graduated from the University of Utah Coding Bootcamp. Seeking a job that offers ample opportunity to provide innovation while cultivating employee growth.</p>
                        </Row>
                        <Row className="skillsDetail">
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Javascript</li>
                                <li>JQuery</li>
                                <li>Bootstrap</li>
                                <li>ReactJS</li>
                            </ul>
                            <ul>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                                <li>Firebase</li>
                                <li>MySQL</li>
                                <li>Express</li>
                                <li>Handlebars.js</li>
                            </ul>
                        </Row>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        )
    }
}

export default HomePage;