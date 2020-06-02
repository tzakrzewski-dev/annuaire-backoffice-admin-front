import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { Card, Col, Row, Container, Form } from "react-bootstrap";

/*****import for grid, filter */

import { IoMdPerson } from "react-icons/io";

import "./User.css";

import NavbarFrontBack from "../NavbarBackFront/NavbarBackFront";

import UserLogin from "./UserLogin/UserLogin";
import UserLogo from "./UserLogo/UserLogo";
import UserContact from "./UserContact/UserContact";
import UserCompany from "./UserCompany/UserCompany";
import UserCompanyPicture from "./UserCompany/UserCompanyPicture";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: "",
        emailMember: "",
        companyName: "",
        companyAddress: "",
        companyAddressComp: "",
        companyZip: "",
        companyCity: "",
        companyPhone: "",
        companyEmail: "",
        companyWebsite: "",
        companySectorActivity: "",
        companyDescriptionActivity: "",
        brandLogo: "",
        brandLogoFileName: "", //pour conserver nom de l'image lors du changement d'une autre
        companyPicture: "",
        companyPictureFileName: "", //pour conserver nom de l'image lors du changement d'une autre
        companyPresentationFile: "",
        companyPresentationFileName: "", //pour conserver nom de l'image lors du changement d'une autre
        facebookUrl: "",
        instagramUrl: "",
        linkedInUrl: "",
        twitterUrl: "",
        vimeoUrl: "",
        contactName: "",
        contactFirstname: "",
        contactFunction: "",
        contactCitation: "",
        contactPicture: "",
        contactPictureFileName: "", //pour conserver nom de l'image lors du changement d'une autre
        status: "",
        visibility: "",
        registeredDate: "",
      },
      isBrandLogoLimitSize: false, //booleen pour vérification de la taille de l'image logo société
      isCompanyPictureLimitSize: false, //booleen pour vérification de la taille de l'image  de la société
      isCompanyPresentationLimitSize: false, //booleen pour vérification de la taille du fichier de présentation
      isContactPictureLimitSize: false, //booleen pour vérification de la taille de l'image contact
    };
  }

  _redirect = () => {
    if (!localStorage.getItem("token") || !localStorage.getItem("user")) {
      return <Redirect to="/" />;
    } else {
      return;
    }
  };

  /***mise à jour des datas dans le state par leur nom de propriété */
  handleData = (e) => {
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({ data: data });
  };

  /****Mise à jour des informations dans le state pour le tinyMCE */

  handleEditorChange = (content) => {
    const data = this.state.data;
    data.companyDescriptionActivity = content;
    this.setState({ data: data });
  };

  /****Methode de contrôle de la taille des fichiers */
  getFileSize = (e, limitSize, nameComponent) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    const fileSize = e.target.files[0].size;

    console.log(nameComponent);

    const message =
      "Vous êtes en train de modifier le fichier " +
      nameComponent +
      " votre fichier est trop lourd , il pèse : " +
      fileSize +
      "" +
      "\r" +
      "Veuillez sélectionner un fichier moins lourd";
    console.log(fileSize);
    if (fileSize > limitSize) {
      window.alert(message);
      if (nameComponent === "UserLogo") {
        console.log(nameComponent);

        this.setState({ isBrandLogoLimitSize: true });
      } else if (nameComponent === "UserContact") {
        this.setState({ isContactPictureLimitSize: true });
      } else if (nameComponent === "UserCompanyPicture") {
        this.setState({ isCompanyPictureLimitSize: true });
      } else {
        this.setState({ isCompanyPresentationLimitSize: true });
      }
      return;
    }
    this.setState({
      isBrandLogoLimitSize: false,
      isContactPictureLimitSize: false,
      isCompanyPictureLimitSize: false,
      isCompanyPresentationLimitSize: false,
    });

    console.log(message);
  };

  //Liaison avec la base de donnée MVC : Modèle dashboard
  // route adherent

  componentDidMount() {
    fetch(
      /***Route de récupération des informations */
      "http://localhost:8080/adherent/dashboard/detail?id=" +
        this.props.match.params.id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            /**Déclaration des propriétés dans l'objet data */
            data: {
              _id: data._id,
              emailMember: data.login.emailMember,
              companyName: data.company.name,
              companyAddress: data.company.address,
              companyAddressComp: data.company.addressComp,
              companyZip: data.company.zip,
              companyCity: data.company.city,
              companyPhone: data.company.phone,
              companyEmail: data.company.email,
              companyWebsite: data.company.website,
              companySectorActivity: data.company.sectorActivity,
              companyDescriptionActivity: data.company.descriptionActivity,
              brandLogo: data.company.brandLogo,
              brandLogoFileName: data.company.brandLogo,
              companyPicture: data.company.picture,
              companyPictureFileName: data.company.picture,
              companyPresentationFile: data.company.presentationFile,
              companyPresentationFileName: data.company.presentationFile,
              facebookUrl: data.social.facebookUrl,
              instagramUrl: data.social.instagramUrl,
              linkedInUrl: data.social.linkedinUrl,
              twitterUrl: data.social.twitterUrl,
              vimeoUrl: data.social.vimeoUrl,
              contactName: data.contact.name,
              contactFirstname: data.contact.firstname,
              contactFunction: data.contact.function,
              contactCitation: data.contact.citation,
              contactPicture: data.contact.picture,
              contactPictureFileName: data.contact.picture,
              status: data.status,
              paymentType: data.paymentType,
              visibility: data.visibility,
              registeredDate: data.registeredDate,
            },
          });
        },
        (error) => console.log(error)
      );
  }

  // récupération des inputs au submit et fetch
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    //vérification taille limite des fichiers avant de procéder à la modification dans la base de donnée
    if (
      this.state.isBrandLogoLimitSize ||
      this.state.isCompanyPictureLimitSize ||
      this.state.isCompanyPresentationLimitSize ||
      this.state.isContactPictureLimitSize
    ) {
      alert("Une de vos images à dépassées la limite autorisée");
      return;
    } else {
      // Body de la requête
      const body = new FormData(e.target);

      // Options de la requête fetch
      const options = {
        method: "PUT",
        // headers: { "Content-Type": "application/json" },
        // headers: { "Content-Type": "multipart/form-data", boundary: "boundary" }, fetch ne fonctionne pas quand ce headers est actif
        mode: "cors",
        body: body,
        // body: JSON.stringify({
        //   ...this.state.company,
        //   ...this.state.social,
        //   ...this.state.contact,
        //   ...this.state.login,
        // }),
      };

      // route d'envoi de la requête de modification de la fiche utilisateur
      fetch("http://localhost:8080/adherent/dashboard/modify", options)
        .then((response) => response.json())
        .then(
          (data) => {
            console.log(data);
            alert(
              "Vos modifications ont bien été prises en compte, veuillez rafraichir votre navigateur"
            );
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  /******* Affichage de la fiche */
  render() {
    return (
      <Container fluid>
        {this._redirect()}
        <NavbarFrontBack />
        <div>
          <h4
            style={{
              fontWeight: "bold",
              color: "#f7316b",
              textAlign: "center",
            }}
          >
            Bonjour M.{this.state.data.contactName} nous sommes heureux de vous
            revoir.
          </h4>
          <p
            style={{
              fontWeight: "bold",
              color: "#f7316b",
              textAlign: "center",
            }}
          >
            Vous pouvez faire vos modifications ici
          </p>
        </div>

        <Form onSubmit={this.handleSubmit}>
          <Row className="flex-nowrap mx-auto">
            <Col xl={6}>
              <Card className="flex align-items-center" style={{ height: 180 }}>
                <UserLogo
                  data={this.state.data}
                  handleData={this.handleData}
                  getFileSize={this.getFileSize}
                />
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title style={{ paddingBottom: 10 }}>
                    <IoMdPerson
                      className="mx-2"
                      size={62}
                      style={{ color: "#F7316B" }}
                    />
                    Infos de connection
                  </Card.Title>
                  <div>
                    <p>
                      Tous les champs comportant * doivent être impérativement
                      renseignés
                    </p>
                  </div>
                  <UserLogin
                    data={this.state.data}
                    handleData={this.handleData}
                  />
                </Card.Body>
              </Card>
              <Card style={{ minHeight: 810 }}>
                <Card.Body className="info-representant h-auto">
                  <Card.Title style={{ paddingBottom: 10 }}>
                    <IoMdPerson
                      className="mx-2"
                      size={62}
                      style={{ color: "#F7316B" }}
                    />
                    Infos du représentant
                  </Card.Title>
                  <div>
                    <p>
                      Tous les champs comportant * doivent être impérativement
                      renseignés
                    </p>
                  </div>
                  <UserContact
                    data={this.state.data}
                    handleData={this.handleData}
                    getFileSize={this.getFileSize}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6}>
              {/***
               * Image de la société
               */}
              <Card>
                <UserCompanyPicture
                  data={this.state.data}
                  handleData={this.handleData}
                  getFileSize={this.getFileSize}
                />
              </Card>
              <Card>
                <Card.Body className="info-société h-auto">
                  <Card.Title style={{ paddingBottom: 10 }}>
                    <IoMdPerson
                      className="mx-2"
                      size={62}
                      style={{ color: "#F7316B" }}
                    />
                    Infos de la société
                  </Card.Title>
                  <div>
                    <p>
                      Tous les champs comportant * doivent être impérativement
                      renseignés
                    </p>
                  </div>
                  <UserCompany
                    data={this.state.data}
                    handleData={this.handleData}
                    handleEditorChange={this.handleEditorChange}
                    getFileSize={this.getFileSize}
                  />
                </Card.Body>
                <Row
                  className="flex justify-content-center align-items-center "
                  style={{ height: 100 }}
                >
                  <button style={{ height: 50 }} className="btn btn-connexion">
                    Validation des modifications
                  </button>
                </Row>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default User;
