import React from 'react';
import {Navbar,Container,Nav,Form}from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
export default function Navigation({settter,setRate}) {
  return (
    <div>
       
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movieapp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Movies</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            onChange={(e)=>settter(e.target.value)}
            aria-label="Search"
          />
          <div  className="me-2">
            <ReactStars
    count={5}
    onChange={(e)=>setRate(e)}
    size={20}
    activeColor="#ffd700"
  /></div>
          </Form>
            
        
        
            
          </Nav>
        </Container>
        
      </Navbar>
    </div>
  )
}
