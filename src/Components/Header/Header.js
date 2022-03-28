import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* <h1>Welcome to my React Router project.</h1> */}
      {/* <nav>
        <Link to="/"> Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/about">About</Link>
      </nav> */}

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <div >
              <Link className="link" to="/"> Home</Link>
              <Link className="link" to="/friends">Friends</Link>
              <Link className="link" to="/about">About</Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
