/**
 * Social Component
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
  Label,
} from "reactstrap";

// Social Component
class Social extends Component {
  // State
  constructor(props) {
    super(props);
    this.state = {
      facebookUrl: "",
      instagramUrl: "",
      linkedInUrl: "",
      twitterUrl: "",
      vimeoUrl: "",
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
            <Col >
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h4>RESEAUX SOCIAUX DE VOTRE SOCIETE</h4>
                  <Label for="facebook de la société">
                    Facebook (URL) de la société
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="url"
                      placeholder="Facebook"
                      name="facebookUrl"
                      autoComplete="facebookUrl"
                      value={this.state.facebookUrl}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="instagram de la société">
                    Instagram (URL) de la société
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="url"
                      placeholder="Instagram"
                      name="instagramUrl"
                      autoComplete="instagramUrl"
                      value={this.state.instagramUrl}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="linkedIn de la société">
                    LinkedIn (URL) de la société
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="url"
                      placeholder="LinkedIn"
                      name="linkedInUrl"
                      autoComplete="linkedInUrl"
                      value={this.state.linkedInUrl}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="twitter de la société">
                    Twitter (URL) de la société
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="url"
                      placeholder="Twitter (URL) de la société"
                      name="twitterUrl"
                      autoComplete="twitterUrl"
                      value={this.state.twitterUrl}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="vimeo de la société">
                    Vimeo (URL) de la société
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="url"
                      placeholder="vimeo (URL) de la société"
                      name="vimeoUrl"
                      autoComplete="vimeoUrl"
                      value={this.state.vimeoUrl}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Social;
