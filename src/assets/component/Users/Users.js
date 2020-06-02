import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Badge, Card, Col, Row, Button } from "react-bootstrap";

import { enableRipple } from "@syncfusion/ej2-base";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";

import { FaCcVisa, FaUser } from "react-icons/fa";
import { TiArrowShuffle } from "react-icons/ti";

import Moment from "react-moment";

import NavbarFrontBack from "../NavbarBackFront/NavbarBackFront";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

enableRipple(true);

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visibility: false,
    };
  }

  /**
   * Gestion du tableau
   */

  /*****Déclaration des propriétés des colonnes**********/
  columns = [
    {
      dataField: "companyName",
      text: "Nom de société",
      sort: true,
      formatter: (cell, row) => {
        console.log(cell);
        console.log(row.id);
        return <Link to={`/adherent/dashboard/${row.id}`}>{cell}</Link>;
      },
      style: {
        fontSize: "18px",
        textAlign: "center",
        verticalAlign: "middle",
        width: "15%",
      },
      filter: textFilter({
        placeholder: "Entrer Nom de société",
      }),
    },
    {
      dataField: "picture",
      text: "Photo",
      formatter: this.thumbnail,
      style: {
        textAlign: "center",
        verticalAlign: "middle",
      },
    },
    {
      dataField: "name",
      text: "Nom",
      style: {
        fontSize: "18px",
        textAlign: "center",
        verticalAlign: "middle",
      },
      filter: textFilter({
        placeholder: "Entrer le Nom",
      }),
    },
    {
      dataField: "firstname",
      text: "Prénom",
      style: {
        fontSize: "18px",
        textAlign: "center",
        verticalAlign: "middle",
      },
      filter: textFilter({
        placeholder: "Entrer le Prénom",
      }),
    },
    {
      dataField: "city",
      text: "Ville",
      style: {
        fontSize: "18px",
        textAlign: "center",
        verticalAlign: "middle",
      },
      filter: textFilter({
        placeholder: "Entrer la Ville",
      }),
    },
    {
      dataField: "phone",
      text: "Téléphone",
      style: {
        fontSize: "18px",
        textAlign: "center",
        verticalAlign: "middle",
      },
    },
    {
      dataField: "PaymentType",
      text: "Type de paiement",
      formatter: (cell, row) => {
        console.log(cell);
        console.log(row);

        return <span>{this.getPaiementType(cell)}</span>;
      },
      style: {
        fontSize: "18px",
        textAlign: "center",
        verticalAlign: "middle",
      },
    },
    {
      dataField: "status",
      text: "Status",
      formatter: (cellContent, row) => {
        console.log(cellContent);
        console.log(row);
        return (
          <Badge variant={this.getBadge(cellContent)}>{cellContent}</Badge>
        );
      },
      style: {
        fontSize: "18px",
        textAlign: "center",
        verticalAlign: "middle",
      },
      filter: textFilter({
        placeholder: "Entrer le Status",
      }),
    },
    {
      dataField: "registeredDate",
      text: "Date d'enregistrement",
      sort: true,
      formatter: (cellContent) => {
        return <Moment format="DD/MM/YYYY">{cellContent}</Moment>;
      },
      style: {
        fontSize: "18px",
        textAlign: "center",
        verticalAlign: "middle",
      },
    },
    {
      dataField: "visibility",
      text: "Visibilité",
      formatter: (cellContent, row) => {
        return (
          <SwitchComponent
            name="visibility"
            checked={cellContent}
            onChange={(e) => this.toggleVisibility(e, row.id)}
          />
        );
      },
      style: {
        fontSize: "18px",
        textAlign: "center",
        verticalAlign: "middle",
      },
    },
    {
      text: "Actions",
      formatter: (cellContent, row) => {
        return (
          <div>
            <Link to={`/adherent/dashboard/${row.id}`}>
              <Button variant="warning" style={{ marginBottom: 20 }}>
                Modifier
              </Button>
            </Link>
            <Button
              variant="danger"
              name="deleteButton"
              onClick={(e) => {
                if (
                  window.confirm(
                    "Etes-vous certain(e) de vouloir supprimer ce membre de votre base de données?"
                  )
                )
                  this.deleteUser(e, row.id);
              }}
            >
              Supprimer
            </Button>{" "}
          </div>
        );
      },
      style: {
        fontSize: "18px",
        textAlign: "center",
        verticalAlign: "middle",
      },
    },
  ];

  /*****définition de la pagination du tableau */
  pageButtonRenderer =()=> ({
    page,
    active,
    disable,
    title,
    onPageChange
  }) => {
    const handleClick = (e) => {
      e.preventDefault();
      onPageChange(page);
    };
    const activeStyle = {};
    if (active) {
      activeStyle.backgroundColor = 'black';
      activeStyle.color = 'white';
    } else {
      activeStyle.backgroundColor = 'gray';
      activeStyle.color = 'black';
    }
    if (typeof page === 'string') {
      activeStyle.backgroundColor = 'white';
      activeStyle.color = 'black';
    }
    return (
      <li className="page-item">
        <a href="#" onClick={ handleClick } style={ activeStyle }>{ page }</a>
      </li>
    );
  };
  
  options =() =>{
    this.pageButtonRenderer()
  };

  

  /****méthode pour affichage des images */
  thumbnail(cell) {
    return <img src={cell} alt={cell} style={{ height: "30%" }} />;
  }

  /******méthode pour badge dans status adhérent */
  getBadge = (cellContent) => {
    if (cellContent === "actif") {
      return "success";
    } else if (cellContent === "attente validation") {
      return "warning";
    } else if (cellContent === "inactif") {
      return "danger";
    } else if (cellContent === "attente paiement") {
      return "dark";
    }
  };

  /******méthode pour générer des icons dans type de paiement */
  getPaiementType = (cellContent) => {
    if (cellContent === "cb") {
      return <FaCcVisa size={50} style={{ color: "#1da1f2" }} />;
    } else {
      return <TiArrowShuffle size={50} style={{ color: "#1da1f2" }} />;
    }
  };

  _redirect = () => {
    if (!localStorage.getItem("token") || !localStorage.getItem("user")) {
      return <Redirect to="/" />;
    } else {
      return;
    }
  };

  //Liaison avec la base de donnée MVC : Modèle dashboard
  componentDidMount() {
    fetch("http://localhost:8080/superadmin/dashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("token"),
      },
      mode: "cors",
      body: JSON.stringify({ id: localStorage.getItem("user") }),
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data: data.map(
            (data) => ({
              id: data._id,
              companyName: data.company.name,
              picture: data.contact.picture,
              name: data.contact.name,
              firstname: data.contact.firstname,
              city: data.company.city,
              email: data.company.email,
              phone: data.company.phone,
              status: data.status,
              PaymentType: data.paymentType,
              visibility: data.visibility,
              registeredDate: data.registeredDate,
            }),
            (error) => console.log(error)
          ),
        })
      );
  }

  /*****Méthode pour gérer l'affichage des adhérents */
  toggleVisibility = (e, id) => {
    // fetch PUT modif visibilityUser dans le back et stockage dans le state
    const body = {
      visibility: e.target.checked,
      id: id,
    };

    fetch("http://localhost:8080/superadmin/modify", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then(
        (visibility) => {
          const data = this.state.data;
          data.forEach((user, index) => {
            if (user._id === id) {
              data[index].visibility = e.target.checked;
            }
          });
          this.setState({ data: data });
        },

        (error) => console.log(error)
      );
  };

  deleteUser = (e, id) => {
    //body de la requete
    const body = {
      id: id,
    };

    //fetch
    fetch("http://localhost:8080/superadmin/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then(
        (data) => this.setState({ data }),
        (error) => console.log(error)
      );
  };

  /******* Structure de la page entête des colonnes */
  render() {
    console.log(this.state.data);
    const userList = this.state.data.filter((user) => user._id);
    console.log(userList);

    return (
      /********Affichage du render du component */
      <div className="animated fadeIn">
        {this._redirect()}
        <NavbarFrontBack />
        <Row>
          <Col xl={12}>
            <Card>
              <Card.Header>
                <FaUser size={34} style={{ color: "#F7316B" }} /> Adhérents
                <small className="text-muted">- Liste des adhérents</small>
              </Card.Header>
              <BootstrapTable
                keyField="id"
                data={this.state.data}
                columns={this.columns}
                pagination={paginationFactory(this.options)}
                filter={filterFactory()}
                headerClasses="header-class"
                striped
                hover
                condensed
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Users;
