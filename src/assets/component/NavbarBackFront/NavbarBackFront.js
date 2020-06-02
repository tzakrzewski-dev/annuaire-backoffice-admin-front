import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

import logo from "../../images/logo.png";
import "./NavbarBackFront.css";

class NavbarBackFront extends Component {
  render() {
    return (
      <Container fluid>
        <div style={{ height: 5, backgroundColor: "#1da1f2" }}></div>
        <Navbar variant="dark" className="justify-content-end">
          <Link to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="129"
                height="65"
                className="d-inline-block align-top"
                alt="Logo Cannes is Up"
              />
            </Navbar.Brand>
          </Link>

          <a href="mailto:contact@cannesisup.com">
            {" "}
            <span className="txtmenu ">Contact</span>
          </a>

          <Nav.Link as={Link} to="/" onClick={() => localStorage.clear()}>
            <span className="txtmenu ">Logout</span>
          </Nav.Link>
        </Navbar>
      </Container>
    );
  }
}

export default NavbarBackFront;
