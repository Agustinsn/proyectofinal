import axios from "axios"
const url= "https://60c1f0b34f7e880017dc0deb.mockapi.io/servicio"

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