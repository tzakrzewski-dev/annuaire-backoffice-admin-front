import React, { Component } from "react";
import { InputGroup, DropdownButton, Container } from "react-bootstrap";

export default class UserCompanyPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <InputGroup className="h-100 align-items-center">
          <img
            style={{
              backgroundImage: `url("${this.props.data.companyPicture}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: 180,
              objectFit: "cover",
            }}
            alt=""
          />
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Changer Image"
            className="pos-button"
            style={{ position: "absolute", top: 0, color: "#0000" }}
          >
            <input
              type="file"
              accept="image/*"
              name="companyPicture"
              onChange={e => { this.props.getFileSize(e,2000000,this.constructor.name); this.props.handleData(e)}}
            />
          </DropdownButton>
        </InputGroup>
        <input
          type="hidden"
          name="companyPictureFileName"
          value={this.props.data.companyPicture}
          onChange={this.props.handleData}
        />
      </Container>
    );
  }
}
