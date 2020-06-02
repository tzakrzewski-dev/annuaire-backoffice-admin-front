import React, { Component } from "react";

import { Table, Badge, InputGroup, FormControl } from "react-bootstrap";

import Moment from "react-moment";//methode pour formatage des date

import "./UserLogin.css";

export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /******fonction pour badge dans status adhérent */
  getBadge = (status) => {
    if (status === "actif") {
      return "success";
    } else if (status === "attente validation") {
      return "warning";
    } else if (status === "inactif") {
      return "danger";
    } else if (status === "attente paiement") {
      return "dark";
    }
  };

  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="text-center " style={{ width: 300 }}>
              Email du compte membre *
            </th>
            <th className="text-center " style={{ width: 300 }}>
              Statut
            </th>
            <th className="text-center " style={{ width: 300 }}>
              Date d'enregistrement
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">
              <InputGroup>
                <FormControl
                  type="email"
                  name="emailMember"
                  required
                  value={this.props.data.emailMember}
                  onChange={this.props.handleData}
                />
              </InputGroup>
              <input
                type="hidden"
                name="id"
                value={this.props.data._id}
                onChange={this.props.handleData}
              />
            </td>
            <td className="text-center" style={{ verticalAlign: "middle" }}>
              <InputGroup>
                <Badge
                  className="mx-auto"
                  variant={this.getBadge(this.props.data.status)}
                >
                  {this.props.data.status}
                </Badge>
              </InputGroup> 
            </td>
            <td className="text-center" style={{ verticalAlign: "middle" }}>
              <InputGroup >
              <Moment format="DD/MM/YYYY" className="mx-auto">{this.props.data.registeredDate}</Moment></InputGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
