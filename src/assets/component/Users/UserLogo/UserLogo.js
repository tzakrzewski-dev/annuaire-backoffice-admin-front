import React, { Component } from "react";

import { InputGroup, DropdownButton, FormControl } from "react-bootstrap";

export default class UserLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <InputGroup className="h-100 align-items-center ">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Changer Logo"
          className="pos-button"
        >
          <InputGroup style={{ minWidth: 300 }}>
            <FormControl
              type="file"
              accept="image/jpg, image/jpeg, image/png, image/webp"
              name="brandLogo"
              onChange={(e) => {
                this.props.getFileSize(e, 2000000, this.constructor.name);
                this.props.handleData(e);
              }}
            />
          </InputGroup>
        </DropdownButton>
        <img
          className="img-center"
          src={this.props.data.brandLogo}
          alt="logo blue beacon"
          style={{ height: 120 }}
        ></img>
        <input
          type="hidden"
          name="brandLogoFileName"
          value={this.props.data.brandLogoFileName}
          onChange={this.props.handleData}
        />
      </InputGroup>
    );
  }
}
