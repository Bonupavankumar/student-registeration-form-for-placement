import React, { Component } from 'react'
import logo from '../cutm_logo.jpg'
import {NavLink, Nav, NavDropdown,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class TpoNav extends Component {
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
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/job">JobProfile</Nav.Link>
          <Nav.Link as={Link} to="/tpo-profile">MyProfile</Nav.Link>
          <Nav.Link as={Link} to="/tpo-profile">Apply Job</Nav.Link>
        
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/account">Account</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/myprofile"> Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/logout"> Logout</NavDropdown.Item>
          </NavDropdown>
      </Nav>
    
    </Navbar.Collapse>
    
  </Navbar>
              </div>
              </div>
        )
    }
}

export default TpoNav






