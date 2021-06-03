import axios from "axios"
const url= "https://60b48b134ecdc10017480c38.mockapi.io/galeria"

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