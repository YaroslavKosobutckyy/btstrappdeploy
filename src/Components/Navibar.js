import React, { useState } from 'react';
import { Nav, Navbar, Button, Container, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Styles = styled.div`
        a, .navbar-brand, .navbar-nav .nav-link {
            color: #adb1b8;
            &:hover {
                color: white
            }
        }
`;

export default function NaviBar() {

    const [show, setShow]= useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
           <Styles>
                <Navbar collapseOnselect expand="lg" bg="dark" variant="dark">
                    <Container>
                            <Navbar.Brand>Yarko's PAGE</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link><Link to ="/">Weather</Link></Nav.Link>
                                    <Nav.Link><Link to ="/slider">Information</Link></Nav.Link>
                                    <Nav.Link><Link to ="/about">About</Link></Nav.Link>
                                    </Nav>
                                    <Nav>
                                        <Button variant="primary" className="mr-2" onClick={handleShow}>Log in</Button>
                                        <Button variant="primary">Log out</Button>
                                    </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
           </Styles>
           <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                   <Modal.Title>Log in</Modal.Title>
               </Modal.Header>
              <Modal.Body>
                    <Form>
                        <Form.Group controllId="fromBasicEmail">
                        <Form.Label>Email adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">We'll never share your email</Form.Text>
                        </Form.Group>

                        <Form.Group controllId="fromBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"/>
                        </Form.Group>


                        <Form.Group controllID="fromBasicCheckbox">
                        <Form.Check type="checkbox" label="save user"/>

                        </Form.Group>
                    </Form>
               </Modal.Body>
           </Modal>
        </>
    )
}
