import {Route} from 'react-router-dom'
import TrabajadoresView from './Views/TrabajadoresView'
import CrearCitaView from './Views/CrearCitaView'
import GaleriaView from './Views/GaleriaView'
import HomeView from './Views/HomeView'


function Routes() {
    return (
        <div>
            <Route path="/" exact component={HomeView}/>
            <Route path="/Trabajadores" exact component={TrabajadoresView}/>
            <Route path="/Galeria" exact component={GaleriaView}/>
            <Route path="/Cita" exact component={CrearCitaView}/>
            
        </div>
    )
}

export default Routes
