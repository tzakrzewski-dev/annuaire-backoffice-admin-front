import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";


import logo from "../../images/logo.png"
import "./style.css";

class AdherentReset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            success: false,
            route: "",
            email: "",
            name: "",
            firstname: "",
            password: "",
            passwordConfirm: "",
        }
    }


    // capture des inputs
    handelInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name + " : " + e.target.value)
    };


    // etape 1/2 reset password
    ResetPassword = (e) => {
        e.preventDefault();
        if (!this.state.email || !this.state.name || !this.state.firstname) {
            alert("Champ(s) non renseigné(s)");
            return;
        }
        fetch("http://localhost:8080/adherent/reset", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "cors",
            body: JSON.stringify({ emailMember: this.state.email, contactName: this.state.name, contactFirstname: this.state.firstname })
        })
            .then((res) => res.json())
            .then(
                (res) => {
                    localStorage.setItem("token", res.token);
                    this.setState({ success: res.success, route: res.route, id: res.user });
                    console.log(res)
                },
                (error) => {
                    e.preventDefault();
                    console.log(error);
                })
    }


    // etape 2/2 reset password
    ResetPassword2 = (e) => {
        e.preventDefault();
        const password = this.state.password;
        const passwordConfirm = this.state.passwordConfirm;
        if (password !== passwordConfirm) {
            alert("Mot de passe différents");
            return;
        }
        fetch(`http://localhost:8080/adherent/reset/${this.state.route}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json", "Authorization": "bearer " + localStorage.getItem("token") },
            mode: "cors",
            body: JSON.stringify({ emailMember: this.state.email, passwordMember: this.state.password, id: this.state.id })
        })
            .then((res) => res.json())
            .then(
                (res) => {
                    console.log(res)
                    window.alert("mot de passe modifié avec succès")
                    this.setState({ redirect: true })

                },
                (error) => {
                    e.preventDefault();
                    console.log(error);
                })
    }

    _redirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/adherent/login" />
        }
        else {
            return;
        }
    }

    // affichage conditionnel etape 1-2
    displayBox = () => {
        if (this.state.success === false) {
            return (
                <div>
                    <h4 className="text-center text-uppercase title">renouvellement mot de passe</h4>
                    <h4 className="text-center text-uppercase title">étape 1/2</h4>
                    <Form className="mt-4">

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Adresse Email</Form.Label>
                            <Form.Control className="input-form" type="email" name="email" value={this.state.email} onChange={this.handelInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control className="input-form" type="text" name="name" value={this.state.name} onChange={this.handelInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicFirstname">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control className="input-form" type="text" name="firstname" value={this.state.firstname} onChange={this.handelInputChange} />
                        </Form.Group>

                        <div className="mt-4 text-center">
                            <Button className="btn btn-connexion " onClick={this.ResetPassword}>Valider</Button>
                        </div>

                    </Form>
                </div>
            )
        }
        if (this.state.success === true) {
            return (
                <div>
                    <h4 className="text-center text-uppercase title">renouvellement mot de passe</h4>
                    <h4 className="text-center text-uppercase title">étape 2/2</h4>
                    <Form className="mt-4">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control className="input-form" type="password" name="password" value={this.state.password} onChange={this.handelInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPasswordConfirm">
                            <Form.Label>Confirmation mot de passe</Form.Label>
                            <Form.Control className="input-form" type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handelInputChange} />
                        </Form.Group>
                        <div className="mt-4 text-center">
                            <Button className="btn btn-connexion " onClick={this.ResetPassword2}>Valider</Button>
                        </div>

                    </Form>
                </div>
            )
        }
    }


    // render
    render() {
        return (
            <div div className="mt-5 app flex-row align-items-center login" >
                {this._redirect()}
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card className="p-2 bg-light">
                                <Card.Body>
                                    <div className="logo mt-2 mb-3">
                                        <img src={logo} alt="logo CannesIsUp" />
                                    </div>
                                    {this.displayBox()}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}


export default AdherentReset;
