import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
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
            <div className="links">
              <CustomLink className="link" to="/"> Home</CustomLink>
              <CustomLink className="link" to="/friends">Friends</CustomLink>
              <CustomLink className="link" to="/about">About</CustomLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
