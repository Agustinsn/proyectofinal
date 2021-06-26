import React, { useState,useEffect, Fragment } from 'react'
import { obtenerCliente } from '../Services/clienteService'
import Loading from './Loading'

function EstadoCita() {
    const [clientes,setClientes]=useState([])
    const [idCliente,setIdCliente]=useState('')
    const [datos,setDatos]=useState([])

    const [boton,setBoton]=useState(false)
    const [cargando, setCargando]= useState(true)

    const obtenerDatos=async()=>{
        let datosObtenidos = await obtenerCliente()
        setClientes([...datosObtenidos])
        setCargando(false)
    }
    const fechaReal = (dato)=>{
        let fecha = new Date(parseInt(dato))    
        return fecha.toLocaleDateString()
    }
    const horaReal = (dato)=>{
        let hora = new Date(dato)    
        return hora.getTime()
    }

    const obtenerDatosCliente =(idCliente)=>{
        let encontrado = clientes.find((clientes)=>clientes.id===idCliente)
        if (encontrado !==undefined){
            setDatos(encontrado)
            setCargando(false)
            console.log(encontrado)
            return encontrado
        }else{
            alert("Verifique su codigo y vuelva a ingresarlo")
            setBoton(false)
            setDatos('')
        }
    }
    const limpiar=(e)=>{
        setIdCliente('')
        setBoton(!boton)
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
        <Fragment>
            {cargando?(
                <Loading/>
            ):(

        <div className="container" style={{height:'100vh'}}>
            <div className="row"  style={{justifyContent:'center'}}>
                <div className="col col-lg-6">
                <form  onSubmit={handlesubmit}>
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
            {boton===true && datos !== '' ?
            <div className="col-12" style={{marginTop:'30px'}}>
            <h6>Bienvenid@: {datos.nombre}</h6>
            <p>El estado de su cita es: {datos.estado}</p>
            <p>El dia de su cita es: {fechaReal(datos.fecha)}</p>
            <p>La hora de su cita es: {horaReal(datos.hora)}</p>
            <button onClick={(e)=>limpiar(e)}>Limpiar</button>
            </div>:
            <Fragment></Fragment>}
        </div>
        </div>)}
        </Fragment>
    )
}

export default EstadoCita
