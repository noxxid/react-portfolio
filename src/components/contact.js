import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class Contact extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Button variant="dark" size="lg" onClick={this.handleShow}>
                    Contact
                        </Button>

                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact Me</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <strong>Phone:</strong>
                        <p>951-760-6198</p>
                        
                        <strong>Email</strong>
                        <p>noxxid.john@gmail.com</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                                </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Contact;