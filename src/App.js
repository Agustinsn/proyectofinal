import React from "react"
import {Switch, BrowserRouter as Router} from "react-router-dom"
import NavTop from "./Componentes/NavTop";
import Routes from "./Routes";
import Footer from "./Componentes/Footer";
import './App.css';
import './estilos.css'



function App() {
  return (
    <Router>
      <NavTop/>
      <Switch>
        <Routes/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
