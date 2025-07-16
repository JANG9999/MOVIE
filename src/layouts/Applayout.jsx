import React, { useState } from "react";
import {Outlet, Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="/">Movie 306</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" id="navbar-toggler"/>
          <Navbar.Collapse  id="navbarScroll" >
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/movie">Movies</Nav.Link>
              <Nav.Link as={Link} to="/mypage">My Page</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AppLayout;
