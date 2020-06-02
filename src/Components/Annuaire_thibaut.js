import React, { Component } from "react";
import Navabar from "../assets/component/Navbar/Navbar";
import Footer from "../assets/component/Footer/Footer";
import imgannuaire from "../assets/images/annuaire_banniere.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

class Annuaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ctrl: "ok",
      hasMore: true,
      items: Array.from({ length: 0 }),
      adherent: [],
      newAdherent: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/adherent/annuaire", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({ adherent: data, newAdherent: data });
          this.fetchMoreData();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  totalMembers = () => {
    const a = this.state.adherent.length;
    return (
      <h6
        className="mt-2 text-center font-weight-bold"
        style={{ fontSize: "14px", marginBottom: "60px" }}
      >
        {a} membres
      </h6>
    );
  };

  fetchMoreData = () => {
    const a = this.state.items.length;
    const b = this.state.newAdherent.length;
    const c = b - a;
    if (a >= b) {
      this.setState({ hasMore: false });
      return;
    }
    if (a <= b && c < 9) {
      setTimeout(() => {
        this.setState({
          hasMore: false,
          items: this.state.items.concat(Array.from({ length: c })),
        });
      }, 1500);
      return;
    }
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 9 })),
      });
    }, 1500);
    return;
  };

  result = () => {
    if (this.state.hasMore) {
      return (
        <h4 className="my-5" style={{ textAlign: "center" }}>
          Chargement ...
        </h4>
      );
    } else {
      return (
        <h4 className="my-5" style={{ textAlign: "center" }}>
          Fin de l'annuaire
        </h4>
      );
    }
  };

  onChangeHandler(e) {
    if (e.target.value) {
      this.setState({ ctrl: "ko" });
    } else {
      this.setState({ ctrl: "ok" });
    }
    let newArray = this.state.newAdherent.filter((d) => {
      let searchValue = d.company.name.toLowerCase();
      return searchValue.indexOf(e.target.value) !== -1;
    });
    this.setState({ adherent: newArray });
  }

  render() {
    return (
      <div>
        <div>
          <Navabar />
        </div>
        <div>
          <img
            className="w-100 d-block mx-auto"
            src={imgannuaire}
            style={{ maxHeight: 150 }}
            alt=""
          ></img>
        </div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChangeHandler.bind(this)}
          className="mx-auto d-block text-left pl-3"
          placeholder="Recherchez : un membre, une activité, un mot clé..."
          style={{
            marginTop: "80px",
            width: "435px",
            height: "45px",
            border: "1px solid #cacaca",
            fontSize: "15px",
          }}
        />
        <div className="totalMembers">{this.totalMembers()}</div>
        {this.state.ctrl === "ok" ? (
          <InfiniteScroll
            className="d-flex flex-wrap mx-auto"
            style={{ width: "1200px" }}
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
          >
            {this.state.items.map((i, index) => (
              <div
                div
                className="card mx-auto mt-0 mb-4 "
                style={{
                  width: "350px",
                  height: "625px",
                  border: "2px solid #cacaca",
                  borderRadius: "10px",
                }}
                key={index}
              >
                <div
                  className="w-100"
                  style={{
                    height: "125px",
                    overflow: "hidden",
                    borderRadius: "7.5px",
                  }}
                >
                  <img
                    className="img-fluid"
                    src={this.state.newAdherent[index].company.picture}
                    alt={this.state.newAdherent[index].company.picture}
                  />
                </div>
                <div className="card-body position-relative">
                  <img
                    className="img-fluid position-absolute"
                    src={this.state.newAdherent[index].contact.picture}
                    alt={this.state.newAdherent[index].contact.picture}
                    style={{
                      border: "5px solid #ffffff",
                      borderRadius: "50%",
                      height: "160px",
                      width: "160px",
                      top: "-70px",
                      left: "100px",
                    }}
                  />
                  <img
                    className="mt-5 pt-3 mx-auto img-fluid"
                    style={{ maxWidth: "250px", maxHeight: "65px", display: "block" }}
                    src={this.state.newAdherent[index].company.brandLogo}
                    alt={this.state.newAdherent[index].company.brandLogo}
                  />
                  <div style={{ position: "absolute", top: "135px" }}>
                    <p
                      className="card-title mt-3 mb-0 pb-0 text-uppercase font-weight-bold"
                      style={{ color: "#f7316b", fontSize: "18px" }}
                    >
                      {this.state.newAdherent[index].company.name}
                    </p>
                    <p
                      className="card-text m-0 p-0"
                      style={{ fontSize: "15px", lineHeight: "17.5px" }}
                      dangerouslySetInnerHTML={{
                        __html:
                          this.state.newAdherent[
                            index
                          ].company.descriptionActivity.slice(0, 110) +
                          " [...]",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      top: "247px",
                      position: "absolute",
                      width: "305px",
                    }}
                    className="border-bottom px-5"
                  ></p>
                  <div style={{ position: "absolute", top: "250px" }}>
                    <p
                      className="card-text h5 m-0 pb-1 mt-1"
                      style={{ color: "#1DA1F2" }}
                    >
                      Secteur d'activité
                    </p>
                    <p
                      className="card-text text-capitalize font-weight-bold"
                      style={{ fontSize: "14px" }}
                    >
                      {this.state.newAdherent[index].company.sectorActivity}
                    </p>
                  </div>
                  <p
                    style={{
                      top: "332px",
                      position: "absolute",
                      width: "305px",
                    }}
                    className="border-bottom px-5"
                  ></p>
                  <div style={{ position: "absolute", top: "335px" }}>
                    <p
                      className="card-text h5 m-0 pb-1 mt-1"
                      style={{ color: "#1DA1F2" }}
                    >
                      Dirigeant
                    </p>
                    <p
                      className="card-text font-weight-bold"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="text-capitalize">
                        {this.state.newAdherent[index].contact.firstname}
                      </span>
                      <span className="text-uppercase">
                        {" "}
                        {this.state.newAdherent[index].contact.name}
                      </span>
                    </p>
                  </div>
                </div>
                <Link
                  className="text-center w-100 pb-4"
                  to={`/annuaire/fiche/detail/${this.state.newAdherent[index]._id}`}
                >
                  <button
                    className="annuaire-button mx-auto w-75"
                    value={this.state.newAdherent[index]._id}
                  >
                    voir le membre
                  </button>
                </Link>
              </div>
            ))}
          </InfiniteScroll>
        ) : (
            <div className="d-flex flex-wrap mx-auto" style={{ width: "1200px" }}>
              {this.state.adherent.map((data) => {
                return (
                  <div
                    key={data._id}
                    className="card mx-auto mt-0 mb-4 "
                    style={{
                      width: "350px",
                      height: "625px",
                      border: "2px solid #cacaca",
                      "border-radius": "10px",
                    }}
                  >
                    <div
                      className="w-100"
                      style={{
                        height: "125px",
                        overflow: "hidden",
                        "border-radius": "7.5px",
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={data.company.picture}
                        alt={data.company.picture}
                      />
                    </div>
                    <div className="card-body position-relative">
                      <img
                        className="img-fluid position-absolute"
                        src={data.contact.picture}
                        alt={data.contact.picture}
                        style={{
                          border: "5px solid #ffffff",
                          "border-radius": "50%",
                          height: "160px",
                          width: "160px",
                          top: "-70px",
                          left: "100px",
                        }}
                      />
                      <img
                        className="mt-5 pt-3 mx-auto img-fluid"
                        style={{ "max-width": "250px", display: "block" }}
                        src={data.company.brandLogo}
                        alt={data.company.brandLogo}
                      />
                      <div style={{ position: "absolute", top: "135px" }}>
                        <p
                          className="card-title h5 mt-3 mb-0 pb-0 text-uppercase font-weight-bold"
                          style={{ color: "#f7316b" }}
                        >
                          {data.company.name}
                        </p>
                        <p
                          className="card-text m-0 p-0"
                          style={{ "font-size": "15px", "line-height": "17.5px" }}
                          dangerouslySetInnerHTML={{
                            __html:
                              data.company.descriptionActivity.slice(0, 110) +
                              " [...]",
                          }}
                        />
                      </div>
                      <p
                        style={{
                          top: "247px",
                          position: "absolute",
                          width: "305px",
                        }}
                        className="border-bottom px-5"
                      ></p>
                      <div style={{ position: "absolute", top: "250px" }}>
                        <p
                          className="card-text h5 m-0 pb-1 mt-1"
                          style={{ color: "#1DA1F2" }}
                        >
                          Secteur d'activité
                      </p>
                        <p
                          className="card-text text-capitalize font-weight-bold"
                          style={{ "font-size": "14px" }}
                        >
                          {data.company.sectorActivity}
                        </p>
                      </div>
                      <p
                        style={{
                          top: "332px",
                          position: "absolute",
                          width: "305px",
                        }}
                        className="border-bottom px-5"
                      ></p>
                      <div style={{ position: "absolute", top: "335px" }}>
                        <p
                          className="card-text h5 m-0 pb-1 mt-1"
                          style={{ color: "#1DA1F2" }}
                        >
                          Dirigeant
                      </p>
                        <p
                          className="card-text font-weight-bold"
                          style={{ "font-size": "14px" }}
                        >
                          <span className="text-capitalize">
                            {data.contact.firstname}
                          </span>
                          <span className="text-uppercase">
                            {" "}
                            {data.contact.name}
                          </span>
                        </p>
                      </div>
                    </div>
                    <Link
                      className="text-center w-100 pb-4"
                      to={`/annuaire/fiche/detail/${data._id}`}
                    >
                      <button
                        className="annuaire-button mx-auto w-75"
                        value={data._id}
                      >
                        voir le membre
                    </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

        <div>{this.result()}</div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Annuaire;
