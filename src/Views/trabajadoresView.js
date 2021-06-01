import React,{useState,useEffect} from 'react'
import {obtenerTrabajadores} from "../Services/trabajadoresService"

function TrabajadoresView() {

    const [trabajadores,setTrabajadores] = useState([])

    const getTrabajadores = async()=>{
        try {
            let trabajadoresObtenidos= await obtenerTrabajadores()
            setTrabajadores([...trabajadoresObtenidos])
        } catch (error) {
            throw error
        }
    }

    useEffect(()=>{
        getTrabajadores()
    },[])
    return (
        <div className="container-fluid">
            <div className="row">

            {trabajadores.map((trab,i)=>(
                 <div className="col-4">
                        <div className="card">
                            <div className="card-header">{trab.Nombre}</div>
                            <div className="card-body">{trab.Foto}</div>
                        </div>
                </div>
            ))}
           
           </div>
        </div>
    )
}

export default TrabajadoresView
