import React,{useState,useEffect} from 'react'
import {obtenerGaleria} from '../Services/galeriaService'


function GaleriaView() {

    const  [galeria,setGaleria] = useState([])
    
    const getGaleria = async ()=>{
        try {
            let galeriaObtenida = await obtenerGaleria()
            setGaleria([...galeriaObtenida])
        } catch (error) {
            throw error
        }
    }
    
    useEffect(()=>{
        getGaleria()
    },[])

    return (
        <div className="container" >
            <div className="row">
            {galeria.map((gal,i)=>(
                <div className="co-12 col-lg-4" key={i} id="servicios-general">
                <div className="card mt-3" id="servicios">
                    <img className="card-img-top" 
                    src={gal.foto}
                    />
                    <p>{gal.nombre}</p>
                    <p style={{fontWeight:'bold'}}>Precio: S/. {gal.precio}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default GaleriaView
