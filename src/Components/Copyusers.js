import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Table } from "react-bootstrap";

import { enableRipple } from "@syncfusion/ej2-base";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";

import { FaCcVisa, FaUser } from "react-icons/fa";
import { TiArrowShuffle } from "react-icons/ti";
import picture from "../assets/images/Picture.png";
import picture2 from "../assets/images/profil.png";
import picture3 from "../assets/images/brandLogo.png";

enableRipple(true);

const UserRow = (props) => {
  const user = props.user;

  return (
    <div style={{ marginTop: "20px", maxHeight: "600px" }}>
      <div>
        <div>
          <div
            style={{
              maxHeight: "800px",
              width: "350px",
              borderRadius: "5px",
              border: "solid",
              borderColor: "#cacaca",
              float: "left",
              marginTop: "40px",
              marginLeft: "118px",
            }}
          >
            <img
              style={{ width: "100%", maxHeight: "100px" }}
              src={user.company.picture}
            ></img>
            <img
              style={{
                left: "168px",
                top: "-73px",
                position: "relative",
                overflow: "hidden",
                width: "140px",
                height: "140px",
                webkitBorderRadius: "50%",
                mozBorderRadius: "50%",
                msBorderRadius: "50%",
                oBorderRadius: "50%",
                borderRadius: "50%",
              }}
              src={user.contact.picture}
            ></img>
            <div>
              <img
                style={{
                  width: "79%",
                  marginTop: "-76px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={user.company.brandLogo}
              ></img>
              <div>
                <h3 style={{ color: "#e66d9a", paddingLeft: "15px" }}>
                  {user.company.name}
                </h3>
                <p style={{ paddingLeft: "15px" }}>
                  {user.company.descriptionActivity}
                </p>
                <div>
                  {" "}
                  <h4 style={{ color: "#37c6f1", paddingLeft: "15px" }}>
                    Secteur d'activité
                  </h4>
                  <p style={{ fontWeight: "bold", paddingLeft: "15px" }}>
                    {user.company.sectorActivity}
                  </p>
                </div>
                <div>
                  <h4 style={{ color: "#37c6f1", paddingLeft: "15px" }}>
                    {user.contact.function}
                  </h4>
                  <p style={{ fontWeight: "bold", paddingLeft: "15px" }}>
                    {user.contact.name}
                  </p>
                </div>
                <div style={{ textAlign: "center", paddingLeft: "15px" }}>
                  {" "}
                  <button
                    style={{
                      color: "#e66d9a",
                      border: "solid",
                      fontWeight: "bold",
                      paddingInlineEnd: "45px",
                      paddingInlineStart: "45px",
                      paddingBlockStart: "10px",
                      paddingBlockEnd: "10px",
                      borderRadius: "5px",
                      border: "solid",
                    }}
                  >
                    VOIR LE MEMBRE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  //Liaison avec la base de donnée MVC : Modèle dashboard
  componentDidMount() {
    fetch("http://localhost:8080/superadmin/dashboard", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then((response) => response.json())
      .then(
        (data) => this.setState({ data }),
        (error) => console.log(error)
      );
  }

  /******* Structure de la page entête des colonnes */
  render() {
    console.log(this.state.data);
    const userList = this.state.data.filter((user) => user._id);
    console.log(userList);

    return (
      <div>
        <div style={{}}>
          {userList.map((user, index) => (
            <UserRow key={index} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
