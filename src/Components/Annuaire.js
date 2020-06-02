import React, { Component } from "react";
import Navabar from "../assets/component/Navbar/Navbar";
import Test from "./test";
import imgannuaire from "../assets/images/ANNUAIRE.png";
import User from "./Copyusers";
class Annuaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adherent: [
        {
          companyName: "",
          companypicture: "",
          contactpicture: "",
          companyBrandlogo: "",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div>
          <Navabar />
        </div>

        <div>
          <img
            src={imgannuaire}
            style={{
              width: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></img>
          <User />
        </div>
        <div></div>
      </div>
    );
  }
}

export default Annuaire;
