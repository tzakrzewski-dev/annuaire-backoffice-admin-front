/**
 * Company Component
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

import { Editor } from "@tinymce/tinymce-react";
import "./RegisterStyleSheets/CompanyStyle.css";
// Company Component
class Company extends Component {
  // State
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      companyName: "",
      companyAddress: "",
      companyAddressComp: "",
      companyZip: "",
      companyCity: "",
      companyPhone: "",
      companyEmail: "",
      companyWebsite: "",
      sectorActivity: "",
      descriptionActivity: "",
      brandLogo: "",
      companyPicture: "",
      companyPresentationFile: "",
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  //capture de la valeur des inputs onChange
  handelInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  //envoi dans le state des datas du wysiwyg
  handleEditorChange(descriptionActivity, Editor) {
    this.setState({ descriptionActivity });
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Card className="mx-4 identity-h">
                <CardBody className="p-4">
                  <h4>IDENTITE DE VOTRE SOCIETE</h4>
                  <Label for="Nom de la société">Nom de la société*</Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Nom de la société"
                      required
                      name="companyName"
                      autoComplete="companyName"
                      value={this.state.companyName}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Adresse de la société">
                    Adresse de la société*
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Adresse de la société"
                      required
                      name="companyAddress"
                      autoComplete="companyAddress"
                      value={this.state.companyAddress}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Complément d'adresse de la société">
                    Complément d'adresse de la société
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Complément d'adresse de la société"
                      name="companyAddressComp"
                      autoComplete="companyAddressComp"
                      value={this.state.companyAddressComp}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Code postal de la société">
                    Code postal de la société*
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="text"
                      // maxLength={5}
                      pattern="[0-9]{5}"
                      placeholder="Code postal de la société"
                      required
                      name="companyZip"
                      autoComplete="companyZip"
                      value={this.state.companyZip}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Ville de la société">Ville de la société*</Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Ville de la société"
                      required
                      name="companyCity"
                      autoComplete="companyCity"
                      value={this.state.companyCity}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Téléphone de la société">
                    Téléphone de la société
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="tel"
                      pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                      placeholder="Téléphone de la société"
                      name="companyPhone"
                      autoComplete="companyPhone"
                      value={this.state.companyPhone}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="E-mail de la société">E-mail de la société</Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="email"
                      placeholder="E-mail de la société"
                      name="companyEmail"
                      autoComplete="companyEmail"
                      value={this.state.companyEmail}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Site internet de la société">
                    Site internet de la société
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="url"
                      placeholder="Site internet de la société"
                      name="companyWebsite"
                      autoComplete="companyWebsite"
                      value={this.state.companyWebsite}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Secteur d'activité de la société">
                    Secteur d'activité de la société*
                  </Label>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend"></InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Secteur d'activité de la société"
                      required
                      name="sectorActivity"
                      autoComplete="sectorActivity"
                      value={this.state.sectorActivity}
                      onChange={this.handelInputChange}
                    />
                  </InputGroup>

                  <Label for="Description de l'activité de la société">
                    Description de l'activité de la société*
                  </Label>
                  <InputGroup className="mb-3 justify-content-center">
                    {/**** 
                                    <InputGroupAddon addonType="prepend">
                                    </InputGroupAddon>
                                    <Input type="textarea" placeholder="*Description de l'activité de la société" maxLength={300} required name="descriptionActivity" autoComplete="descriptionActivity" 
                                    value={this.state.descriptionActivity}
                                    onChange={this.handelInputChange}/>*/}

                    <Editor
                      apiKey="wjewff6ohro6jht8yv49xms1w7nef8tf546wz7ei8impp54e"
                      value={this.state.descriptionActivity}
                      init={{
                        height: 500,
                        menubar: false,
                        width: "100%",
                        outputFormat: "text",
                        plugins: [
                          "advlist autolink lists link image",
                          "charmap print preview anchor help",
                          "searchreplace visualblocks code",
                          "insertdatetime media table paste wordcount",
                        ],
                        toolbar:
                          "undo redo | h6 | bold italic | \
                          alignleft aligncenter alignright | \
                          bullist numlist outdent indent | help",
                      }}
                      initialValue=""
                      onEditorChange={this.handleEditorChange}
                    />
                    <input
                      type="hidden"
                      name="descriptionActivity"
                      value={this.state.descriptionActivity}
                    />
                  </InputGroup>

                  <FormGroup>
                    <Label for="logoFile">
                      Téléchargez le logo de la société*
                    </Label>
                    <Input
                      type="file"
                      required="required"
                      name="brandLogo"
                      value={this.state.brandLogo}
                      onChange={this.handelInputChange}
                      // onSubmit={this.checkFileSize}
                    />
                    {/* <FormText color="muted">
                      Merci de télécharger votre logo.
                    </FormText> */}
                  </FormGroup>

                  <FormGroup>
                    <Label for="companyPictureFile">
                      Téléchargez une photo de couverture de la société
                    </Label>
                    <Input
                      type="file"
                      name="companyPicture"
                      value={this.state.companyPicture}
                      onChange={this.handelInputChange}
                    />
                    {/* <FormText color="muted">
                      Merci de télécharger une photo de couverture;
                    </FormText> */}
                  </FormGroup>

                  <FormGroup>
                    <Label for="companyPresentationFile">
                      Téléchargez un dossier de présentation de la société
                    </Label>
                    <Input
                      type="file"
                      name="companyPresentationFile"
                      value={this.state.companyPresentationFile}
                      onChange={this.handelInputChange}
                    />
                    {/* <FormText color="muted">
                      Téléchargez un dossier de présentation.
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

export default Company;
