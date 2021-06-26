import React,{useState,useEffect,Fragment} from 'react'
import {obtenerGaleria} from '../Services/galeriaService'
import Loading from '../Componentes/Loading'


function GaleriaView() {

    const  [galeria,setGaleria] = useState([])
    const  [cargando, setCargando] = useState(true)


    const getGaleria = async ()=>{
        try {
            let galeriaObtenida = await obtenerGaleria()
            setCargando(false)
            setGaleria([...galeriaObtenida]);
        } catch (error) {
            throw error
        }
    }

    
    useEffect(()=>{
        getGaleria(); 
        
    },[])

    return (
        <Fragment>
            {cargando ?(
                <Loading/>
            ):
            
        <div className="container" >
            
            <div style={{textAlign:'center',padding:'10px 0px 5px'}}>
                <h1 id="servicios-titulo">Servicios</h1>
                <p>Brindamos diversos servicios con los que seguro quedará satisfecho!</p>
            </div>
            <div className="row">
            {galeria.map((gal,i)=>(
                <div className="co-12 col-lg-4" key={i} id="servicios-general" >
                <div className="card mt-3" id="servicios" >
                    <img className="card-img-top" 
                    src={gal.foto}
                    />
                    <p>{gal.nombre}</p>
                    <p style={{fontWeight:'bold'}}>Precio: S/. {gal.precio}</p>
                </div>
                </div>
            ))}

            </div>
        </div> }
        </Fragment>
    )
}

export default GaleriaView
