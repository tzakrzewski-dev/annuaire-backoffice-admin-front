import React, { Component } from "react";

import {
  Table,
  Container,
  InputGroup,
  FormControl,
  Card,
  DropdownButton,
} from "react-bootstrap";

/****Import des logo de réseau sociaux */
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaVimeoSquare,
  FaInstagramSquare,
} from "react-icons/fa";

import { Editor } from "@tinymce/tinymce-react";

export default class UserCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionActivity: "",
    };
  }

  //envoi dans le state des datas du wysiwyg
  handleEditorChange = (descriptionActivity) => {
    this.setState({ descriptionActivity });
  };

  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  render() {
    return (
      <Container fluid>
        <Card
          style={{
            height: 100,
            width: 400,
            position: "absolute",
            top: 0,
            right: 0,
            margin: 0,
            border: "none",
          }}
        >
          <InputGroup
            className="h-100 align-items-center"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <DropdownButton
              as={InputGroup.Prepend}
              variant="outline-secondary"
              title="Changer Présentation"
              className="pos-button"
              style={{ position: "absolute", top: 0, color: "#0000" }}
            >
              <InputGroup>
                <FormControl
                  type="file"
                  accept=".pdf"
                  name="companyPresentationFile"
                  onChange={(e) => {
                    this.props.getFileSize(e, 10000000, this.constructor.name);
                    this.props.handleData(e);
                  }}
                />
              </InputGroup>
            </DropdownButton>
          </InputGroup>

          <input
            type="hidden"
            name="companyPresentationFileName"
            value={this.props.data.companyPresentationFile}
            onChange={this.props.handleData}
          />
        </Card>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="center-column" style={{ width: "17.5%" }}>
                Nom de société*
              </th>
              <th className="center-column" style={{ width: "17.5%" }}>
                Adresse*
              </th>
              <th className="center-column" style={{ width: "17.5%" }}>
                Adresse complémentaire
              </th>
            </tr>
          </thead>
          <tbody className="align-items-center">
            <tr>
              <td className="center-column">
                <InputGroup>
                  <FormControl
                    as="textarea"
                    aria-label="With textarea"
                    type="text"
                    required
                    name="companyName"
                    autoComplete="companyName"
                    value={this.props.data.companyName}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
              <td className="center-column">
                <InputGroup>
                  <FormControl
                    as="textarea"
                    aria-label="With textarea"
                    required
                    name="companyAddress"
                    autoComplete="companyAddress"
                    value={this.props.data.companyAddress}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
              <td className="center-column">
                <InputGroup>
                  <FormControl
                    as="textarea"
                    aria-label="With textarea"
                    name="companyAddressComp"
                    autoComplete="companyAddressComp"
                    value={this.props.data.companyAddressComp}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="center-column" style={{ width: "20%" }}>
                Code postal*
              </th>
              <th className="center-column" style={{ width: "20%" }}>
                Ville de la société*
              </th>
              <th className="center-column" style={{ width: "25%" }}>
                Téléphone
              </th>
              <th className="center-column" style={{ width: "35%" }}>
                Email
              </th>
            </tr>
          </thead>
          <tbody className="align-items-center">
            <tr>
              <td className="center-column">
                <InputGroup>
                  <FormControl
                    type="text"
                    name="companyZip"
                    required
                    autoComplete="companyZip"
                    pattern="[0-9]{5}"
                    placeholder="Renseigner votre code postal à 5 chiffres"
                    value={this.props.data.companyZip}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
              <td className="center-column">
                <InputGroup>
                  <FormControl
                    type="text"
                    name="companyCity"
                    autoComplete="companyCity"
                    required
                    value={this.props.data.companyCity}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
              <td className="center-column">
                <InputGroup>
                  <FormControl
                    type="text"
                    name="companyPhone"
                    placeholder="N°de téléphone à 10 chiffres"
                    pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                    value={this.props.data.companyPhone}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
              <td className="center-column">
                <InputGroup>
                  <FormControl
                    type="email"
                    name="companyEmail"
                    value={this.props.data.companyEmail}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="center-column">Secteur d'activité*</th>
            </tr>
          </thead>
          <tbody className="align-items-center">
            <tr>
              <td className="left-column" style={{ width: 10 }}>
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="*Secteur d'activité de la société"
                    required
                    name="companySectorActivity"
                    autoComplete="companySectorActivity"
                    value={this.props.data.companySectorActivity}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="center-column">Description de l'activité</th>
            </tr>
          </thead>
          <tbody className="align-items-center">
            <tr>
              <td className="left-column" style={{ width: 10, height: "auto" }}>
                <Editor
                  apiKey="wjewff6ohro6jht8yv49xms1w7nef8tf546wz7ei8impp54e"
                  init={{
                    height: 200,
                    menubar: false,
                    width: "100%",
                    valid_elements: "p,h6,br",
                    outputFormat: "text",
                    plugins: [
                      "advlist autolink lists ",
                      "charmap print preview ",
                      "searchreplace visualblocks code",
                      "insertdatetime media table wordcount",
                    ],
                    toolbar:
                      "undo redo | h6 | bold italic | \
    alignleft aligncenter alignright | \
    bullist numlist outdent indent ",
                  }}
                  initialValue=""
                  value={this.props.data.companyDescriptionActivity}
                  name="companyDescriptionActivity"
                  onEditorChange={this.props.handleEditorChange}
                />
                <input
                  type="hidden"
                  name="companyDescriptionActivity"
                  value={this.props.data.companyDescriptionActivity}
                  onChange={this.props.handleData}
                />
                {/*** 
<InputGroup style={{ height: 250 }}>
                  <FormControl
                    as="textarea"
                    aria-label="With textarea"
                    name="companyDescriptionActivity"
                    value={this.props.data.companyDescriptionActivity}
                    onChange={this.props.handleData}
                  />
                </InputGroup>*/}
              </td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th colSpan="3" className="mx-auto text-center">
                Réseaux sociaux
              </th>
            </tr>
          </thead>

          <tbody className="align-items-center">
            <tr>
              <td className="center-column">
                {" "}
                <FaFacebookSquare size={40} style={{ color: "#f7316b" }} />
              </td>
              <td className="center-column">
                {" "}
                <FaInstagramSquare size={40} style={{ color: "#f7316b" }} />
              </td>
              <td className="center-column">
                {" "}
                <FaLinkedin size={40} style={{ color: "#f7316b" }} />
              </td>
            </tr>
            <tr>
              <td className="center-column" style={{ width: "20%" }}>
                <InputGroup>
                  <FormControl
                    style={{ width: "100%", textAlign: "center" }}
                    type="url"
                    placeholder="Facebook"
                    name="facebookUrl"
                    autoComplete="facebookUrl"
                    value={this.props.data.facebookUrl}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
              <td className="center-column" style={{ width: "20%" }}>
                <InputGroup>
                  <FormControl
                    style={{ width: "100%", textAlign: "center" }}
                    type="url"
                    placeholder="Instagram"
                    name="instagramUrl"
                    value={this.props.data.instagramUrl}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
              <td className="center-column" style={{ width: "20%" }}>
                <InputGroup>
                  <FormControl
                    style={{ width: "100%", textAlign: "center" }}
                    type="url"
                    placeholder="LinkedIn"
                    name="linkedUrl"
                    value={this.props.data.linkedInUrl}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
            </tr>
          </tbody>
          <tbody className="align-items-center">
            <tr>
              <th className="center-column">
                <FaTwitterSquare size={40} style={{ color: "#f7316b" }} />
              </th>
              <th className="center-column">
                <FaVimeoSquare size={40} style={{ color: "#f7316b" }} />
              </th>
            </tr>
            <tr>
              <td className="center-column" style={{ width: "20%" }}>
                <InputGroup>
                  <FormControl
                    style={{ width: "100%", textAlign: "center" }}
                    type="url"
                    placeholder="Twitter"
                    name="twitterUrl"
                    value={this.props.data.twitterUrl}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
              <td className="center-column" style={{ width: "20%" }}>
                <InputGroup>
                  <FormControl
                    style={{ width: "100%", textAlign: "center" }}
                    type="url"
                    placeholder="Vimeo"
                    name="vimeoUrl"
                    value={this.props.data.vimeoUrl}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}
