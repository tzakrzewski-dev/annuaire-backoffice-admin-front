/**
 * Contact Component
 */

// Imports
import React, { Component } from "react";
import {
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

// Contact Component
class Contact extends Component {
  // State
  constructor(props) {
    super(props);
    this.state = {
      contactName: "",
      contactFirstname: "",
      contactFunction: "",
      contactCitation: "",
      contactPicture: "",
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

  render() {
    return (
      <div>
        <Container fluid>
          <Row className="justify-content-center">
            <Col>
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h4>IDENTITE DU REPRESENTANT DE LA SOCIETE*</h4>
                  <Label for="Nom du représentant">Nom du représentant*</Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Nom du représentant"
                      required
                      name="contactName"
                      autoComplete="contactName"
                      value={this.state.contactName}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Prénom du représentant">
                    Prénom du représentant*
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Prénom du représentant"
                      required
                      name="contactFirstname"
                      autoComplete="contactFirstname"
                      value={this.state.contactFirstname}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Fonction du représentant">
                    Fonction du représentant*
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Fonction du représentant"
                      required
                      name="contactFunction"
                      autoComplete="contactFunction"
                      value={this.state.contactFunction}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Citation du représentant">
                    Citation du représentant
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="textarea"
                      placeholder="Citation du représentant"
                      maxLength={300}
                      name="contactCitation"
                      autoComplete="contactCitation"
                      value={this.state.contactCitation}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <FormGroup>
                    <Label for="contactPictureFile">
                      Téléchargez une photo portrait du représentant*
                    </Label>
                    <Input
                      type="file"
                      required="required"
                      name="contactPicture"
                      value={this.state.contactPicture}
                      onChange={this.handelInputChange}
                    />
                    {/* <FormText color="muted">
                      Merci de télécharger une photo portrait
                    </FormText> */}
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
