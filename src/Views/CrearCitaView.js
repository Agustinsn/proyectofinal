import React, { useState } from 'react'
import Form from "../Componentes/Form"
import EstadoCita from '../Componentes/EstadoCita'


function CrearCitaView() {

    const [boton1,setBoton1]=useState(true)
    return (
      <div className="container" style={{height:'100%'}}>
        <div className="row">
        <div className="col-12 col-lg-2 order-md-1" style={{marginTop:'50px',textAlign:'end'}}>
        <button
          onClick={(e)=>setBoton1(!boton1)}
          style={{backgroundColor:'salmon'}}
          >Conozca el estado de su cita <strong>AQUI</strong></button>
        </div>
        <div className="col-12 col-lg-10 order-md-0" style={{paddingTop:'50px',textAlign:'center'}}>
          {boton1===true? 
          <Form/>
          : <div><EstadoCita/></div>}
        </div>
        </div>
      </div>
          

    )
}

export default CrearCitaView
