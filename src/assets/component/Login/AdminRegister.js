import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

import logo from "../../images/logo.png"
import "./style.css";

class AdminRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
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
            return <Redirect to="/admin/login" />
        }
        else {
            return;
        }
    }

    loginUser = (e) => {
        if (!this.state.email || !this.state.password) {
            return;
        }

        fetch("http://localhost:8080/superadmin/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then((res) => res.json())
            .then(
                (res) => {
                    console.log(res)
                    this.setState({ redirect: true })
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
                                    <h2 className="text-center text-uppercase title">espace administrateur</h2>
                                    <h3 className="text-center text-uppercase title">enregistrement</h3>
                                    <Form className="mt-4">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control className="input-form" type="email" placeholder="Email ..." onChange={this._inputEmail} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control className="input-form" type="password" placeholder="Mot de passe ..." onChange={this._inputPassword} />
                                        </Form.Group>
                                        <div className="mt-4 text-center">
                                            <Button className="btn btn-connexion " onClick={this.loginUser}>Valider</Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AdminRegister;
