/**
 * Adherent Component
 */

// Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Adherent.css";
import Navbar from "../Navbar/Navbar";

// Adherent Component
class Adherent extends Component {
  render() {
    return (
      <div className="adherentContainer">
          <Navbar/>
        <h2 className="adherenth2"> rejoignez-nous ! </h2>
        <h3 className="adherenth3"> Comment adherer ?</h3>
        <h4 className="adherenth4">
          Vous représentez ou travaillez dans une entreprise innovante et/ou
          créative du bassin Cannois ? Rejoignez-nous !
        </h4>
        <ol className="adherentOl">
          <li>
            Remplissez notre formulaire d’adhésion en ligne (lien ci-dessous)
          </li>
          <li>
            Une fois réceptionnée, notre équipe transmet votre candidature au
            Conseil d’Administration pour approbation.
          </li>
        </ol>
        <Link to="/Register">
          <button className="adherentButton">formulaire d'adhesion</button>
        </Link>
      </div>
    );
  }
}

export default Adherent;
