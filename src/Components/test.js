import React, { Component } from "react";
import imgannuaire from "../assets/images/ANNUAIRE.png";
import picture from "../assets/images/Picture.png";
import picture2 from "../assets/images/profil.png";
import picture3 from "../assets/images/brandLogo.png";

class test extends Component {
  render() {
    return (
      <div>
        <div>
          <div style={{ border: "solid", width: "30%" }}>
            <img style={{ width: "100%" }} src={picture}></img>
            <img
              style={{
                left: "212px",
                top: "-50px",
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
              src={picture2}
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
                src={picture3}
              ></img>
              <div>
                <h3>NOM DE LA SOCIETE</h3>
                <p>
                  Lorem ipsum leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s <br />{" "}
                  with the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker <br /> including versions of Lorem Ipsum
                  Description{" "}
                </p>
                <div>
                  {" "}
                  <h4>SECTEUR D ACTIVITE</h4>
                  <p>SECTEUR D ACTICTIVITE DE LA SOCIETE</p>
                </div>
                <div>
                  <h4>FONCTION DU REPRESENTANT</h4>
                </div>
                <div>
                  {" "}
                  <button>VOIR LE MEMBRE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default test;
