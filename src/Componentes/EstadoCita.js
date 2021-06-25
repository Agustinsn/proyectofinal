import React, { useState,useEffect } from 'react'
import { obtenerCliente } from '../Services/clienteService'

function EstadoCita() {
    const [clientes,setClientes]=useState([])
    const [idCliente,setIdCliente]=useState('')
    const [datos,setDatos]=useState([])

    const obtenerDatos=async()=>{
        let datosObtenidos = await obtenerCliente()
        setClientes([...datosObtenidos])
    }
    
    const obtenerDatosCliente =(idCliente)=>{
        let encontrado = clientes.find((clientes)=>clientes.id===idCliente)
        setDatos(encontrado)
        return encontrado
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        obtenerDatosCliente(idCliente)
        
    }
    useEffect(()=>{
        {obtenerDatos()}
    },[])
    
    return (
        <div className="container">
            <div className="row">
                <form onSubmit={handlesubmit}>
                    <div className="form-group">
                       <label style={{color:'black'}}>Ingrese el codigo que le brindaron al momento de confirmar su cita</label>
                       <input
                       type="number"
                       name="codigo"
                       onChange={(e)=>setIdCliente(e.target.value)}
                        value={idCliente}
                       className="form-control"
                       placeholder="Ejem:123"
                       />
                    </div>
                    <button className="btn btn-success" type="submit">Ver Cita</button>
                </form>
                {clientes.map((cli,i)=>(
                    <div className="col-12" key={i}>{cli.nombre} {cli.id}</div>
                    ))}
                    
            </div>
            <p>{datos.hora}</p>
        </div>
    )
}

export default EstadoCita
