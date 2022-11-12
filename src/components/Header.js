import React from "react";
import "../App.css";
import DateTime from "./DateTime";
import { Nav, Navbar, Container} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="text-primary">Food Recipe Search</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-white"/>
          <Navbar.Collapse id="navbarScroll barhover">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              
            >
              <Nav.Link href="/" className="text-white barhover">Home</Nav.Link>
              <Nav.Link href="/search" className="text-white barhover">Search</Nav.Link>
            </Nav>
            <div className="d-flex text-white">
              <DateTime />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
