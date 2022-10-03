import React from 'react'
import { Link } from "react-router-dom";
import "../styles/nav.css"
import { Navbar, Nav, Container } from 'react-bootstrap';



export const Navbars = () => {
    return (
        <>
  <Navbar bg="white" variant="white">
    <Container>
   
    <Nav className="me-auto">
      <Link to="/">
      <Nav.Link href="#home">Home</Nav.Link>
      </Link>
      <Link to="/About">
      <Nav.Link href="#About">About</Nav.Link>
      </Link>
      <Link to="/Contact">
      <Nav.Link href="#Contact">Contact</Nav.Link>
      </Link>
    </Nav>
    </Container>
  </Navbar>
  
</>
    )
}