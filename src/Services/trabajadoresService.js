import axios from 'axios'

const url="https://60b48b134ecdc10017480c38.mockapi.io/estilista"

const obtenerTrabajadores= async ()=>{
    try {
        let {data}= await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

const obtenerTrabajadoresporID= async(id)=>{
    try {
        let {data} = await axios.get(`${URL}/${id}`)
        return data
    } catch (error) {
        throw error
    }
}

export{
    obtenerTrabajadores,
    obtenerTrabajadoresporID
}