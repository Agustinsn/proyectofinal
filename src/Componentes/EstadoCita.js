import React, { useState,useEffect, Fragment } from 'react'
import { obtenerCliente } from '../Services/clienteService'

function EstadoCita() {
    const [clientes,setClientes]=useState([])
    const [idCliente,setIdCliente]=useState('')
    const [datos,setDatos]=useState([])
    const [boton,setBoton]=useState(false)

    const obtenerDatos=async()=>{
        let datosObtenidos = await obtenerCliente()
        setClientes([...datosObtenidos])
    }
    
    const obtenerDatosCliente =(idCliente)=>{
        let encontrado = clientes.find((clientes)=>clientes.id===idCliente)
        if (encontrado !==undefined){
            setDatos(encontrado)
            console.log(encontrado)
            return encontrado
        }else{
            alert("Verifique su codigo y vuelva a ingresarlo")
        }

    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        obtenerDatosCliente(idCliente)
        setBoton(!boton)
        
    }
    useEffect(()=>{
        {obtenerDatos()}
    },[])
    
    return (
        <div className="container">
            <div className="row"  style={{justifyContent:'center'}}>
                <form onSubmit={handlesubmit}>
                    <div className="form-group"> 
                       <h4 style={{color:'black'}}>Ingrese el codigo que le brindaron al momento de confirmar su cita</h4>
                       <input
                       type="number"
                       name="codigo"
                       onChange={(e)=>setIdCliente(e.target.value)}
                       value={idCliente}
                       className="form-control"
                       placeholder="Ejem:123"
                       style={{}}
                       />
                    </div>
                    <button className="btn btn-success" type="submit">Ver Cita</button>
                </form>         
            </div>
            {boton===true?
            <div>
            <span>Bienvenid@ {datos.nombre}</span>
            <p>El estado de su cita es: {datos.estado}</p>
            <p>El dia de su cita es: {datos.fecha}</p>
            <p>La hora de su cita es: {datos.hora}</p>
            <p>El servicio a realizar es: </p>
            <p>El estilista a realizar el servicio es: </p>
            </div>:
            <Fragment></Fragment>}
        </div>
    )
}

export default EstadoCita
