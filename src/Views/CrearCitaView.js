import React,{useState,useEffect} from 'react'
import {crearCita} from '../Services/clienteService'

function CrearCitaView() {
    return (

          <div className="col-5 m-5"> 
          <form>
            <div className="mb-3">
              <label>Nombre</label>
              <input type="text" 
              className="form-control"/>
            </div>
            <div>
              <label className="form-label">Email</label>
              <input type="email" className="form-control"/>
            </div>
          </form>
          </div>

    )
}

export default CrearCitaView
