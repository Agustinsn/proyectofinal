import React,{useState,useEffect} from 'react'
import {obtenerTrabajadores} from "../Services/trabajadoresService"

function trabajadoresView() {

    const [trabajadores,setTrabajadores] = useState([])

    const getTrabajadores = async()=>{
        try {
            let trabajadoresObtenidos= await obtenerTrabajadores()
            setTrabajadores([...trabajadoresObtenidos])
        } catch (error) {
            throw error
        }
    }
    return (
        <div>
            <h1>Trabajadores</h1>
            <div className="container">

            </div>
        </div>
    )
}

export default trabajadoresView
