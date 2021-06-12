import React,{useState,useEffect} from 'react'
import Example from '../Componentes/DatePicker'
import Form from "../Componentes/Form"

function CrearCitaView() {
    return (
      <div className="container">
        <div className="row"> 
            <div className="col col-6">
              <Form/>
            </div>
            <div className="col col-6 mt-5 pt-1">
              <Example/>
            </div>
            <div className="col col-6">
             <p> HOLA</p> Hola
            </div>
          </div>

      </div>
          

    )
}

export default CrearCitaView
