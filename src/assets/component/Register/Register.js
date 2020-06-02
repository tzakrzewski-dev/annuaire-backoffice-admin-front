/**
 * Register Component
 */

// Imports
import React, { Component } from "react";
import Company from "./Company";
import Contact from "./Contact";
import Social from "./Social";
import Login from "./Login";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./RegisterStyleSheets/RegisterStyle.css";

import fond from "../../images/fond_contact1.jpg";

import { Col, Row, Container } from "react-bootstrap";

// Register Component
class Register extends Component {
  // State
  constructor(props) {
    super(props);
    this.state = {
      company: {},
      social: {},
      contact: {},
      login: {},
      recaptchaChallenge: false,
    };
  }

  eventhandlerCompany = (data) => {
    this.setState({ company: data });
    console.log(this.state.company);
  };

  eventhandlerSocial = (data) => {
    this.setState({ social: data });
    console.log(this.state.social);
  };

  eventhandlerContact = (data) => {
    this.setState({ contact: data });
    console.log(this.state.contact);
  };

  eventhandlerLogin = (data) => {
    this.setState({ login: data });
    console.log(this.state.login);
  };

  // récupération des inputs au submit et fetch
  handleSubmit = (e) => {
    e.preventDefault();

    //Verification recaptcha
    if (!this.state.recaptchaChallenge) {
      alert("Merci de vérifier que vous n'êtes pas un robot");
      return;
    }

    // Body de la requête
    const body = new FormData(e.target);
    if (body.get("passwordMember") !== body.get("confirmPasswordMember")) {
      alert("vos mots de passe sont différents");
    }

    // Options de la requête fetch
    const options = {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      // headers: { "Content-Type": "multipart/form-data", boundary: "boundary" }, fetch ne fonctionne pas quand ce headers est actif
      mode: "cors",
      body: body,
      // body: JSON.stringify({
      //   ...this.state.company,
      //   ...this.state.social,
      //   ...this.state.contact,
      //   ...this.state.login,
      // }),
    };

    //Requête
    fetch("http://localhost:8080/adherent/register", options)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  setRecaptchaChallenge = (status) => {
    this.setState({
      recaptchaChallenge: status,
    });
  };

  render() {
    return (
      <Container fluid>
        <Navbar />
        <div className="registerContainer">
          <div
            style={{
              backgroundImage: `url("${fond}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: 160,
              objectFit: "cover",
            }}
            alt=""
          ></div>

          <form onSubmit={this.handleSubmit} enctype=" multipart / form-data ">
            <h6 className="text-center">
              Merci de remplir le formulaire suivant. Les champs comportant un
              astérisque sont obligatoires.
            </h6>
            <Row className="bandeauImage">
              <Col xl={6}>
                <div className="registerCompany">
                  <Company onChange={this.eventhandlerCompany} />
                </div>
              </Col>
              <Col xl={6}>
                <div className="registerSocial">
                  <Social onChange={this.eventhandlerSocial} />
                </div>
                <div className="registerContact">
                  <Contact onChange={this.eventhandlerContact} />
                </div>
                <div className="registerLogin">
                  <Login
                    onChange={this.eventhandlerLogin}
                    setRecaptchaChallenge={this.setRecaptchaChallenge}
                  />
                </div>
              </Col>
            </Row>
          </form>
          <Footer />
        </div>
      </Container>
    );
  }
}

export default Register;
