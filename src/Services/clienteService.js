import axios from "axios"

const url="https://60b48b134ecdc10017480c38.mockapi.io/clientes"

const obtenerCategoria = async()=>{

    try {
        let {data}= await axios.get(url)
        return data
    } catch (error) {
        throw error
    }

}

export{
    obtenerCategoria
}