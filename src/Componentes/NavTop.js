import React,{useState} from "react";
import {Link} from "react-router-dom"
import "../estilos.css"

function NavTop() {
    const [estaColapsado,setEstaColapsado] = useState(true)
    const manejarNavbar = ()=> setEstaColapsado(!estaColapsado)
  return (
    <div className="container-fluid" id="navgeneral">
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent" >
        
        <Link className="nav-link" to="/" id="nav-home"style={{textDecoration:'none',color:'black'}}>
          HOME
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!estaColapsado?true:false}
          aria-label="Toggle navigation"
          onClick={manejarNavbar}
        >
          <span className="navbar-toggler-icon" ></span>
        </button>
        
        <div className={`${estaColapsado?'collapse':''} navbar-collapse`} id="navbarNav" >
        {/*ACA VA EL DROPDOWN*/}
          <ul className="navbar-nav">
            <li className="dropdown" >
              <a className="nav-link dropdown-toggle" 
              id="navbarDropdown"
              role="button" 
              data-toggle="dropdown"             
              aria-expanded="false" 
              style={{textDecoration:'none', color:'black'}}>
                QUIENES SOMOS
              </a>
              {/* ACA VA EL MENU DEL DROPDOWN*/}
              <ul className="dropdown-menu"
              aria-labelledby="navbarDropdown" 
              style={{backgroundColor:'#2d3436'}}>
                <li >
                  <Link className="dropdown-item py-2" 
                  to="/Trabajadores" 
                  style={{color:'white'}}
                  onClick={manejarNavbar}>Nuestro Equipo
                  </Link>
                </li>
                <li ><a className="dropdown-item" href="/#contacto" 
                style={{color:'white'}} 
                onClick={manejarNavbar}
                >Contactanos</a></li>
              </ul>

            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Galeria"
                style={{textDecoration:'none', color:'black'}}
                onClick={manejarNavbar}>
                SERVICIOS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Cita"
                style={{textDecoration:'none', color:'black'}}
                onClick={manejarNavbar}>
                RESERVA TU CITA
              </Link>
            </li>
          </ul>
        </div>
        
    </nav>
    </div>
  );
}

export default NavTop;