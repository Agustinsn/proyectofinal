import React,{useState,useEffect} from 'react'
import {obtenerTrabajadores} from "../Services/trabajadoresService"
import "../trabajadores.css"



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

        <div className="container" id="TrabGen">
        <header><p>EL EQUIPO</p></header>
            <div className="row" id="row-card">
            {trabajadores.map((trab,i)=>(
                 <div className="col-12 col-lg-6" key={i} >
                 <div
                   className="card flex-row border-light" >
                   <img className="card-img-left" src={trab.foto}/>
                   <div className="card-body" style={{display:'flex', flexDirection:'column'}}>
                     <h6 className="card-title" style={{alignSelf:'center'}}>{trab.nombre}</h6>
                     <span className="card-text" style={{alignSelf:'center',textAlign:'center'}}> {trab.descripcion}</span>
                   </div>
                 </div>
               </div>
            ))}
           </div>
        </div>
    )
}

export default TrabajadoresView
