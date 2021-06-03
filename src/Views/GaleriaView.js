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
            <div className="d-flex justify-content-center">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">HOME</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                             <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
            </nav>
            </div>

        <div className="container">
            <div className="row">
            {galeria.map((gal,i)=>(
                <div className="col-auto col-sm-4">
                <div className="card" >
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
