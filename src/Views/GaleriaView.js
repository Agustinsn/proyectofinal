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
        <div>

        <div className="container">
            <div className="row">
            {galeria.map((gal,i)=>(
                <div className="col-auto col-sm-4" key={i}>
                <div className="card mt-3" >
                    <img className="card-img-top" 
                    src={gal.Foto_galeria}
                    />
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}

export default GaleriaView
