import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
  Row,
} from "react-bootstrap";

import logo from "../../images/logo.png";
import "./Navbar.css";

class NavbarMenu extends Component {
  render() {
    return (
      <Container fluid className="">
        <div style={{ height: 5, backgroundColor: "#1da1f2" }}></div>
        <Navbar variant="dark" className="justify-content-center">
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
          <Nav.Link as={Link} to="/annuaire">
            <span className="txtmenu ">Annuaire</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/adherent">
            <span className="txtmenu ">Devenez adhérent</span>
          </Nav.Link>
        </Navbar>
      </Container>
    );
  }
}

export default NavbarMenu;
