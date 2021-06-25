import React, { useState } from 'react'
import Form from "../Componentes/Form"
import EstadoCita from '../Componentes/EstadoCita'


function CrearCitaView() {

    const [boton1,setBoton1]=useState(true)
    const [boton2,setBoton2]=useState(false)
    return (
      <div className="container" style={{height:'100%'}}>
        <div style={{paddingTop:'50px',textAlign:'center'}}>
          <button
          onClick={(e)=>setBoton1(!boton1)}
          >Agende su cita AQUI</button>
          <h1>Agende su cita</h1>
          {boton1===true? 
          <Form/>
          : <div><EstadoCita/></div>}
        </div>
        
        
      </div>
          

    )
}

export default CrearCitaView
