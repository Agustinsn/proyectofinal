import axios from "axios"
const url= `${process.env.REACT_APP_URL_API}/servicio`

const obtenerGaleria= async()=>{
    try {
        let {data}= await axios.get(url)
        return data
    } catch (error) {
        throw error
    }
}

export{
    obtenerGaleria
}