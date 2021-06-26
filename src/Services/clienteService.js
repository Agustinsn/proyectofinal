import axios from "axios"

const url=`${process.env.REACT_APP_URL_API}/agenda`

const obtenerCliente = async()=>{
    try {
        let {data}= await axios.get(url)
        return data
    } catch (error) {
        throw error
    }
}

const crearCita = async(nuevaCita)=>{
    try {
        let headers={
            "Content-Type":"application/json"
        }
        let {data}= await axios.post(url,nuevaCita,{headers})
        return data
    } catch (error) {
        throw error
    }
}

export{
    obtenerCliente,
    crearCita
}