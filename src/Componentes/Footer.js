import React from 'react'
import fb from '../img/facebook.svg'
import inst from '../img/instagram.svg'

function Footer() {
    return (
        <footer 
        style={{color:'white',
        backgroundColor:'#2d3436',
        bottom:'0',
        width:'100%'}}>
          <div className="container">
            <div className="row">
                <div className="col-4" id="creditos">
                Desarrollador por: 
                <p>Grupo 6: <br/>
                Enrique Coronado<br/>
                Agustin Sosa</p>
                </div>
                <div className="col-4" id="centro">
                <p id="spa">SPA SinNombreAun</p> 
                <p id="derechos">Derechos Reservados</p>
                </div>
                <div className="col-4" style={{textAlign:'end'}}>
                  <p>Encuentranos en nuestras redes sociales</p>
                  <img src={fb} id="fb"/>
                  <img src={inst} id="inst"/>
                </div>
            </div>
          </div>
    </footer>
    )
}

export default Footer
