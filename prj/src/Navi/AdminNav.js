import React, { Component } from 'react'
import logo from '../cutm_logo.jpg'
import {Navbar, Nav, NavDropdown, Container,NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class AdminNav extends Component {
    render() {
        return (
          <div className="container-fluid nav_bg">
          <div className="row">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <NavLink to="/"><img src={logo}   width="70" alt="" class="d-Inline-block align-middle mr-2"/></NavLink>

  <Navbar.Brand href="/home">   CENTURION UNIVERSITY</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
       <Nav.Link as={Link} to="/home">Home</Nav.Link>
        
        <Nav.Link as={Link} to="/STUDENT">Students</Nav.Link>
        <Nav.Link as={Link} to="/TPO">TPO</Nav.Link>
        <Nav.Link as={Link} to="/job">JobProfile</Nav.Link>
          <Nav.Link as={Link} to="/tpo-profile">MyProfile</Nav.Link>
          <Nav.Link as={Link} to="/tpo-profile">Apply Job</Nav.Link>
       
    </Nav>
  <Nav>
  <Nav.Link as={Link} to="/log">Login</Nav.Link>
    <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/">Account</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
          
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/"> Logout</NavDropdown.Item>
        </NavDropdown>
        </Nav>
  </Navbar.Collapse>
  
</Navbar>
            </div>
            </div>
        )
    }
}
export default AdminNav







