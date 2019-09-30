import React from "react";
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import jumboImage from '../images/jumboimage1.jpg';

const Styles = styled.div`
.jumbo {
    background: url(${jumboImage}) no-repeat fixed top;
    background-size: cover;
    color: #ccc;
    height: 225px;
    position: relative;
    z-index: -2;
}

.overlay {
    background-color: #000;
    opacity:.1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className='overlay'></div>
            <Container className="jumbotron-words">
                <h1>Johnathan Dixon</h1>
                <h5>
                    Full stack web developer.
  </h5>

            </Container>
        </Jumbo>
    </Styles>
)

export default Jumbotron;