import React from 'react'
import fb from '../img/facebook.svg'
import inst from '../img/instagram.svg'

function Footer() {
    return (
        <footer 
        style={{backgroundColor:'transparent',
        bottom:'0',
        width:'100%',padding:'10px'}}>
          <div className="container">
            <div className="row">
                <div className="col-4" id="creditos">
                Desarrollador por: 
                <p>Agustin Sosa</p>
                </div>
                <div className="col-4" id="centro">
                </div>
                <div className="col-4" style={{textAlign:'end'}}>
                  <p>Encuentranos en nuestras redes sociales</p>
                  <img src={fb} id="fb" alt="fb_icon"/>
                  <img src={inst} id="inst" alt="inst_icon"/>
                </div>
            </div>
          </div>
    </footer>
    )
}

export default Footer
