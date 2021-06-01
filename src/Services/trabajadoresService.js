import axios from 'axios'

const url="https://60b48b134ecdc10017480c38.mockapi.io/trabajadores"

const obtenerTrabajadores= async ()=>{
    try {
        let {data}= await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export{
    obtenerTrabajadores
}