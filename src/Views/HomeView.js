import React from 'react'

import CarouselContainer from '../Componentes/Slide'
import ubicacion from '../img/Ubicacion.PNG'
import background from '../img/background.jpg'


function HomeView() {
    return (
<main className="container-fluid w-100" 
style={{backgroundImage:`linear-gradient(white, lightblue)`}}>	
	<div className="container">
			<CarouselContainer/>	
			<div className="container pt-5 mx-auto" style={{textAlign:'center'}}>
				<h1 style={{textAlign:'center'}}>BIENVENIDOS AL SPA</h1>
				<p className="mx-5" >Ubicados en Lima, el SPA XX es el lugar ideal para ese corte de cabello o tratamiento facial que tanto desea. Contamos con un equipo especializado en diversos tratamientos para brindarle el mejor servicio. LOS ESPERAMOS! </p>
				<div className="row">
					<div className="col col-8 mt-5">	
						<h2>Nuestra Ubicacion</h2>
						<p>Nos encontramos en Av. Jose Larco, en el distrito de Miraflores. Contamos con estacionamiento vigilado para mayor seguridad.</p> <br/>
						<img src={ubicacion} style={{maxWidth:'500px'}}/>
					</div>

					<div className="col col-4 mt-5">
						<h2>Horario de Atencion</h2>
						<p>Debido a la pandemia actual, nuestro horario de atencion se encuentra reducido, asi mismo es necesario agendar la cita previamente debido al limite de aforo permitido</p>
					</div>
				</div>

			</div>
	</div>
			
</main>
    )
}


export default HomeView
