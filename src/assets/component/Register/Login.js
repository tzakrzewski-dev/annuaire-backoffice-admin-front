/**
 * Login Component
 */

// Imports
import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  FormGroup,
  Label,
} from "reactstrap";
import { FaDownload } from "react-icons/fa";
import Recaptcha from "react-recaptcha";
import "./RegisterStyleSheets/LoginStyle.css";
import chartes from '../../../dda-brochure.pdf'


// Login Component
class Login extends Component {
  // State
  constructor(props) {
    super(props);

    // this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      emailMember: "",
      passwordMember: "",
      confirmPasswordMember: "",
      paymentType: "",
      rgpd: "",
      charte: "",
      isVerified: false,
    };
  }

  //capture de la valeur des inputs onChange
  handelInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  // verif recaptcha loaded

  // recaptchaLoaded() {
  //   console.log("captcha successfully loaded");
  // }

  // verification du callback recaptcha
  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true,
      });
      this.props.setRecaptchaChallenge(true);
    }
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row className="justify-content-center">
            <Col >
              <Card className="mx-4">
                <CardBody className="p-4">
                  {/* connexion */}
                  <h4>VOS IDENTIFIANTS DE CONNEXION</h4>
                  <Label for="E-mail de connexion du compte membre">
                    E-mail de connexion du compte membre*
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="email"
                      placeholder="E-mail de connexion"
                      required
                      name="emailMember"
                      autoComplete="emailMember"
                      value={this.state.emailMember}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Mot de passe de votre compte">
                    Mot de passe de votre compte*
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="password"
                      placeholder="Mot de passe de votre compte"
                      required
                      name="passwordMember"
                      autoComplete="passwordMember"
                      value={this.state.passwordMember}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Confirmez votre mot de passe">
                    Confirmez votre mot de passe*
                  </Label>
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="password"
                      placeholder="Confirmez votre mot de passe"
                      required
                      name="confirmPasswordMember"
                      autoComplete="confirmPasswordMember"
                      value={this.state.confirmPasswordMember}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  {/* cotisation */}
                  <h4>COTISATION</h4>
                  <p>
                    Votre adhésion à Cannes Is Up est soumise à une cotisation
                    de 50 euros par an.
                  </p>
                  <FormGroup tag="fieldset">
                    <legend>Choisissez votre mode de paiement</legend>
                    <FormGroup check required>
                      <Label check for="virement">
                        <Input
                          type="radio"
                          name="paymentType"
                          required
                          value="virement"
                          id="virement"
                          onChange={this.handelInputChange}
                        />{" "}
                        VIREMENT
                      </Label>
                    </FormGroup>

                    <FormGroup check>
                      <Label check for="cb">
                        <Input
                          type="radio"
                          name="paymentType"
                          value="cb"
                          id="cb"
                          onChange={this.handelInputChange}
                        />{" "}
                        CB
                      </Label>
                    </FormGroup>

                    {/* mentions légales */}
                    <h4>MENTIONS LEGALES</h4>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          required
                          name="rgpd"
                          value="rgpd"
                          id="rgpd"
                          onChange={this.handelInputChange}
                        />{" "}
                        J'accepte le règlement général sur la protection des
                        données (RGPD)
                      </Label>
                    </FormGroup>

                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          required
                          name="charte"
                          value="charte"
                          id="charte"
                          onChange={this.handelInputChange}
                        />{" "}
                        J'ai lu et j'accepte la charte Cannes Is Up
                      </Label>
                      <a href={chartes} download>
                        <FaDownload size={30} style={{ color: "#F7316B" }} />
                        Télécharger la charte
                      </a>
                    </FormGroup>
                  </FormGroup>

                  {/* // recaptcha params */}
                  <Recaptcha
                    sitekey="6LcUwvoUAAAAAG2BGLQ7J5fREfZTZFvdwGY0wJbI"
                    // render="explicit"// RETIRE AUSSI DE INDEX.HTML
                    // onloadCallback={this.recaptchaLoaded}
                    verifyCallback={this.verifyCallback}
                  />

                  <Button color="#F7316B" block className="btn btn-connexion">
                    Créez votre compte
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
