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

        <div className="container">
        <header><h1>EL EQUIPO</h1></header>
            <div className="row mb-5">
            {trabajadores.map((trab,i)=>(
                 <div className="col-lg-6 col-12 mt-5 p-2 " key={i} >
                        <div className="d-flex" 
                        style={{Width:'450px',textAlign:'center',}}>
                            <img className="img-card-left" style={{height:'400px', width:'350px'}} src={trab.Foto}/>
                            <div className="d-block w-75" style={{textAlign:'center',height:'400px',width:'350px'}}><h2>{trab.Nombre}</h2>
                            <h3 className="d-block w-75" style={{textAlign:'center',height:'400px'}}>{trab.Descripcion_trabajador}</h3></div>
                        </div>
                </div>
            ))}
           </div>
        </div>
    )
}

export default TrabajadoresView
