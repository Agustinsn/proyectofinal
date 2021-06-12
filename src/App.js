import React from "react"
import {Switch, BrowserRouter as Router} from "react-router-dom"
import NavTop from "./Componentes/NavTop";
import Routes from "./Routes";
import Footer from "./Componentes/Footer";
import './App.css';
import CrearCitaView  from "./Views/CrearCitaView";
import Example from "./Componentes/DatePicker";



function App() {
  return (
    <Router>
      <NavTop/>
      <Switch>
        <Routes/>
      </Switch>
    </Router>
  );
}

export default App;
