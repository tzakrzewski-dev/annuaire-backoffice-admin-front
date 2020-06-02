import React, { Component } from "react";

import { Card, Col, Row, Container, Image } from "react-bootstrap";

/****Import des logo de réseau sociaux */
import {
  FaDownload,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaVimeoSquare,
  FaInstagramSquare,
} from "react-icons/fa";

import "./Detail.css";

import Navbar from "../../Navbar/Navbar";

/*******Définition des élements d'affichage sur la fiche catégorie image société */
const UsersheetDetail = (props) => {
  const user = props.user;
  //const userLink = `/annuaire/fiche/detail/${user._id}`;
  console.log(user.social.facebookUrl);

  return (
    <Container fluid>
      <Row className="my-auto ml-0 mr-0">
        <img
          style={{
            backgroundImage: `url("${user.company.picture}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 170,
            objectFit: "cover",
          }}
          alt=""
        />
      </Row>
      <Row style={{ height: 90 }}>
        <Col className="flex my-auto">
          <img className="img-logo" src={user.company.brandLogo} alt=""></img>
        </Col>
        <Col className="icon-download">
          <p className="text-donwload my-auto">
            Télécharger la brochure de la société
          </p>
          <a
            href={user.company.presentationFile}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <FaDownload size={30} style={{ color: "#F7316B" }} />
          </a>
        </Col>
      </Row>
      <Row>
        <h2 className="text-uppercase brand-name mt-3">{user.company.name}</h2>
      </Row>
      <Row>
        <div
          className="text-activity px-4"
          dangerouslySetInnerHTML={{ __html: user.company.descriptionActivity }}
        />
      </Row>
      <hr className="divider"></hr>
      <Row>
        <div className="w-100">
          <h5 className="text-category font-weight-bold">Secteur d'activité</h5>
        </div>
        <div className="w-100">
          <h5 className="font-weight-bold text-capitalize">
            {user.company.sectorActivity}
          </h5>
        </div>
      </Row>
      <hr className="divider"></hr>
      <Row>
        <div className="w-100">
          <h5 className="text-category font-weight-bold">Coordonnées</h5>
        </div>
      </Row>
      <Row>
        <Col>
          <h8 className="pl-3 font-weight-bold">Adresse:</h8>
        </Col>
        <Col xs={9}>
          <p className="text-activity mb-0 pb-0">
            {user.company.address}
            {user.company.addressComp}
          </p>
          <p className="text-activity mt-0 pt-0">
            {user.company.zip} {user.company.city}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h8 className="pl-3 font-weight-bold">Téléphone:</h8>
        </Col>
        <Col xs={9}>
          <p className="text-activity">{user.company.phone}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h8 className="pl-3 font-weight-bold">Email:</h8>
        </Col>
        <Col xs={9}>
          <a
            className="text-activity text-decoration-none"
            href={`mailto:${user.company.email}`}
          >
            {user.company.email}
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <h8 className="pl-3 font-weight-bold">Site Web:</h8>
        </Col>
        <Col xs={9}>
          <a
            className="text-activity"
            href={user.company.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.company.website}
          </a>
          <a
            className="text-activity text-decoration-none"
            href={user.company.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.company.website}
          </a>
        </Col>
      </Row>
      <hr className="divider"></hr>
      <Row style={{ marginBottom: 15 }}>
        <div className="w-100">
          <h5 className="text-category font-weight-bold">Réseaux Sociaux</h5>
        </div>
        <Col style={{ marginLeft: 15 }}>
          {user.social.facebookUrl && (
            <a
              className="socialIcon px-1"
              href={user.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare size={40} style={{ color: "#f7316b" }} />
            </a>
          )}
          {user.social.instagramUrl && (
            <a
              className="socialIcon px-1"
              href={user.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare size={40} style={{ color: "#f7316b" }} />
            </a>
          )}
          {user.social.linkedinUrl && (
            <a
              className="socialIcon px-1"
              href={user.social.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} style={{ color: "#f7316b" }} />
            </a>
          )}
          {user.social.twitterUrl && (
            <a
              className="socialIcon px-1"
              href={user.social.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare size={40} style={{ color: "#f7316b" }} />
            </a>
          )}
          {user.social.vimeoUrl && (
            <a
              className="socialIcon px-1"
              href={user.social.vimeoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaVimeoSquare size={40} style={{ color: "#f7316b" }} />
            </a>
          )}
          {/*
          <a
            className="socialIcon"
            href={user.social.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {user.social.twitterUrl === "" ? (
              ""
            ) : (
              <FaTwitterSquare size={40} style={{ color: "#f7316b" }} />
            )}
          </a>
          <a
            className="socialIcon px-1"
            href={user.social.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.social.facebookUrl === "" ? (
              ""
            ) : (
              <FaFacebookSquare size={40} style={{ color: "#f7316b" }} />
            )}
          </a>
          <a
            className="socialIcon px-1"
            href={user.social.instagramUrl}
            target=" _blank"
          >
            {user.social.instagramUrl === "" ? (
              ""
            ) : (
              <FaInstagramSquare size={40} style={{ color: "#f7316b" }} />
            )}
          </a>
          <a
            className="socialIcon px-1"
            href={user.social.linkedinUrl}
            target=" _blank"
          >
            {user.social.linkedinUrl === "" ? (
              ""
            ) : (
              <FaLinkedin size={40} style={{ color: "#f7316b" }} />
            )}
          </a>

          <a
            className="socialIcon px-1"
            href={user.social.vimeoUrl}
            target=" _blank"
          >
            {user.social.vimeoUrl === "" ? (
              ""
            ) : (
              <FaVimeoSquare size={40} style={{ color: "#f7316b" }} />
            )}
          </a>*/}
        </Col>
      </Row>
    </Container>
  );
};

/*******Définition des élements d'affichage sur la fiche catégorie Logo */
const UserCard = (props) => {
  const user = props.user;
  return (
    <Row>
      <Image src={user.contact.picture} className="m-0 p-0 img-circle" />
      <div className="px-4 position-relative" style={{ top: "100px" }}>
        <div className="">
          <h5 className="ml-0 text-category">Dirigeant</h5>
        </div>
        <div>
          <h6 className="d-inline font-weight-bolder text-capitalize mr-2">
            {user.contact.firstname}
          </h6>
          <h6 className="d-inline font-weight-bolder text-uppercase">
            {user.contact.name}
          </h6>
        </div>
        <div>
          <p className="text-capitalize">{user.contact.function}</p>
        </div>
        <div className="">
          <h5 className="ml-0 mt-5 text-category">Parole de membre</h5>
        </div>
        <div>
          <p className="text-activity"> {user.contact.citation}</p>
        </div>
      </div>
    </Row>
  );
};

class Detail extends Component {
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
    /****Filtre temporaire de fiche */
    const userList = this.state.data.filter(
      //récupération de l'id de la fiche
      (user) =>
        user._id.toString() === window.location.pathname.split("/").pop()
    );

    console.log(this.props);
    console.log(userList);

    return (
      <Container fluid>
        <Navbar />
        <Row className="flex-nowrap mx-auto">
          <Col md={{ span: 5, offset: 2 }}>
            <Card>
              <Card.Img />
              {userList.map((user) => (
                <UsersheetDetail user={user} />
              ))}
            </Card>
          </Col>
          <Col xl={3}>
            <Card className="card-user">
              <Card.Img />
              {userList.map((user) => (
                <UserCard user={user} />
              ))}
            </Card>
            <Col xs={6} md={4}></Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
