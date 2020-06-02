import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

import logo from "../../images/logo.png"
import "./style.css";

class AdherentLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            succes: false,
            email: "",
            password: ""
        }
    }

    _inputEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    _inputPassword = (event) => {
        this.setState({ password: event.target.value });
    }

    _redirect = () => {
        if (this.state.redirect) {
            return <Redirect to={`/adherent/dashboard/${this.state.id}`} />
        }
        else {
            return;
        }
    }

    loginUser = (e) => {
        if (!this.state.email || !this.state.password) {
            return;
        }

        fetch("http://localhost:8080/adherent/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify({
                emailMember: this.state.email,
                passwordMember: this.state.password
            })
        })
            .then((res) => res.json())
            .then(
                (res) => {
                    localStorage.setItem("user", res.user);
                    localStorage.setItem("token", res.token);
                    this.setState({ redirect: res.success, id: res.user })
                },
                (error) => {
                    e.preventDefault();
                    console.log(error);
                })
    }

    render() {
        return (
            <div className="mt-5 app flex-row align-items-center login" >
                {this._redirect()}
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card className="p-2 bg-light">
                                <Card.Body>
                                    <div className="logo mt-2 mb-3">
                                        <img src={logo} alt="logo CannesIsUp" />
                                    </div>
                                    <h2 className="text-center text-uppercase title">espace adhérent</h2>
                                    <Form className="mt-4">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Adresse Email</Form.Label>
                                            <Form.Control className="input-form" type="email" onChange={this._inputEmail} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Mot de passe</Form.Label>
                                            <Form.Control className="input-form" type="password" onChange={this._inputPassword} />
                                        </Form.Group>
                                        <div className="mt-4 text-center">
                                            <Button className="btn btn-connexion " onClick={this.loginUser}>Connexion</Button>
                                        </div>
                                        <div className="mt-2 text-center">
                                            <Link to="/adherent/reset">
                                                <Button variant="link" className="btn btn-forget" >Mot de passe oublié ?</Button>
                                            </Link>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default AdherentLogin;
