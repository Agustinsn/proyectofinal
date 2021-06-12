import React,{useState} from "react";
import {Link} from "react-router-dom"

function NavTop() {
    const [estaColapsado,setEstaColapsado] = useState(true)
    const manejarNavbar = ()=> setEstaColapsado(!estaColapsado)

    const [dropColapsado,setDropEstaColapsado] = useState(true)
    const manejarDrop = ()=> setDropEstaColapsado(!dropColapsado)
  return (
    <div className="d-flex container-lg justify-content-lg-center justify-content-center m-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
        <Link className="nav-link" to="/" style={{textDecoration:'none', color:'black'}}>
          HOME
        </Link>
        <div className="d-flex align-content-end">
        <button
          className="navbar-toggler navbar-toggler-right"
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
        </div>
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
              style={{backgroundColor:'white'}}>
                <li >
                  <Link className="dropdown-item py-2" 
                  style={{ color:'black'}}
                  to="/Trabajadores">Nuestro Equipo</Link></li>
                <li ><a className="dropdown-item" style={{ color:'black'}}>Contactanos</a></li>
              </ul>

            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{textDecoration:'none', color:'black'}}>
                SERVICIOS
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#"
                style={{textDecoration:'none', color:'black'}}
                to="/Galeria">
                GALERIA
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Cita"
                style={{textDecoration:'none', color:'black'}}>
                RESERVA TU CITA
              </Link>
            </li>
          </ul>
        </div>
        </div>
    </nav>
    </div>
  );
}

export default NavTop;