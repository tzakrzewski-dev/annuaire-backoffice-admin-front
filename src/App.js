import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./Components/Home/Home";
import Register from "../src/assets/component/Register/Register";
import Users from "./assets/component/Users/Users";

import Detail from "./assets/component/Fiche/Detail/Detail";

import AdherentLogin from "./assets/component/Login/AdherentLogin";
import AdherentReset from "./assets/component/Login/AdherentReset";

import AdminLogin from "./assets/component/Login/AdminLogin";
import AdminRegister from "./assets/component/Login/AdminRegister";

import User from "./assets/component/Users/User";
import Adherent from "./assets/component/Adherent/Adherent";
import AnnuaireRomain from "./Components/Annuaire";
import Annuaire from "./Components/Annuaire_thibaut";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/superadmin/dashboard" component={Users} />

        <Route path="/annuaire/fiche/detail" component={Detail} />
        <Route path="/annuaire" component={Annuaire} />
        <Route path="/annuairetest" component={AnnuaireRomain} />

        <Route path="/adherent/dashboard/:id" component={User} />

        <Route path="/adherent/login" component={AdherentLogin} />
        <Route path="/adherent/reset" component={AdherentReset} />

        <Route path="/admin/login" component={AdminLogin} />

        <Route path="/admin/register" component={AdminRegister} />
        <Route path="/Adherent" component={Adherent} />
        <Route path="/Register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
