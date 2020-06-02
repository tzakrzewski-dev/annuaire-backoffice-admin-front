import React, { Component } from "react";

import {
  Table,
  Container,
  FormControl,
  InputGroup,
  DropdownButton,
} from "react-bootstrap";

//import DragAndDRop from "../DragAndDrop/DragAndDrop";

export default class UserContact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="center-column">Nom*</th>
              <th className="center-column">Prénom*</th>
              <th className="center-column">Fonction*</th>
            </tr>
          </thead>
          <tbody className="align-items-center">
            <tr>
              <td className="center-column" style={{ width: 10 }}>
                <InputGroup>
                  <FormControl
                    as="textarea"
                    required
                    name="contactName"
                    value={this.props.data.contactName}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
              <td className="center-column" style={{ width: 10 }}>
                <InputGroup>
                  <FormControl
                    as="textarea"
                    required
                    name="contactFirstname"
                    value={this.props.data.contactFirstname}
                    onChange={this.props.handleData}
                  />
                </InputGroup>
              </td>
              <td className="center-column" style={{ width: 10 }}>
                <InputGroup>
                  <FormControl
                    as="textarea"
                    required
                    name="contactFunction"
                    value={this.props.data.contactFunction}
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
              <th className="center-column">Photo*</th>
              <th className="center-column">Changement photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="center-column" style={{ width: 50 }}>
                <img
                  src={this.props.data.contactPicture}
                  alt={this.props.data.contactName}
                ></img>
              </td>
              <td style={{ width: "50%" }}>
                <DropdownButton
                  as={InputGroup.Prepend}
                  variant="outline-secondary"
                  title="Changer Photo"
                  className="pos-button"
                >
                  <InputGroup>
                    <FormControl
                      type="file"
                      accept="image/jpg, image/jpeg, image/png, image/webp"
                      name="contactPicture"
                      onChange={(e) => {
                        this.props.getFileSize(
                          e,
                          2000000,
                          this.constructor.name
                        );
                        this.props.handleData(e);
                      }}
                    />
                  </InputGroup>
                </DropdownButton>
                <input
                  type="hidden"
                  name="contactPictureFileName"
                  value={this.props.data.contactPicture}
                  onChange={this.props.handleData}
                />
              </td>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="center-column">Citation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="center-column">
                <InputGroup style={{ height: 160 }}>
                  <FormControl
                    as="textarea"
                    aria-label="With textarea"
                    name="contactCitation"
                    value={this.props.data.contactCitation}
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
