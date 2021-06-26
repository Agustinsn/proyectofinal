import React from 'react'
import { Link } from 'react-router-dom'
import CarouselContainer from '../Componentes/Slide'
import ubicacion from '../img/Ubicacion.PNG'
import wts from '../img/wts.svg'


function HomeView() {
    return (
<div className="container-fluid" id="main">	
	<div className="container-fluid" id="cuerpo">	
			<div className="container pt-5 mx-auto" style={{textAlign:'center'}}>
				<h1 style={{textAlign:'center'}} id="titulo-main">BIENVENIDOS AL SPA</h1>
				<CarouselContainer important/>
				<div id="texto1">
				<p>Ubicados en Lima, el SPA XX es el lugar ideal para ese corte de cabello o tratamiento facial que tanto desea. Contamos con un equipo especializado en diversos tratamientos para brindarle el mejor servicio. LOS ESPERAMOS! </p>
				</div>

				<div className="row">
					<div className="col col-lg-8 mt-5">	
						<h2>Nuestra Ubicacion</h2>
						<p>Nos encontramos en Av. Jose Larco, en el distrito de Miraflores. Contamos con estacionamiento vigilado para mayor seguridad.</p> <br/>
						<a href="https://goo.gl/maps/RiKB6iTaBmxG1UkE6" target="_blank">
						<img src={ubicacion} id="img-ubi"/>
						</a>

					</div>

					<div className="col col-lg-4 mt-5">
						<h2>Horario de Atencion</h2>
						<p>Debido a la pandemia actual, nuestro horario de atencion se encuentra reducido, asi mismo es necesario agendar la cita previamente debido al limite de aforo permitido</p>
						<div style={{paddingTop:'50px',fontSize:'20px',fontWeight:'bold'}}>
							Lunes a Sabado de 9am a 9pm
							<br/>
							Domingos no atendemos
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col col-lg mt-5">
					<h2>Contactanos!</h2>
					<p>Si tiene alguna duda sobre los servicios que brindamos
						o desea solicitar algun servicio en especial no dude en 
						contactarnos dando click en la imagen de WhatsApp o mandando un mensaje al siguiente número.
					</p>
					</div>
				</div>
				<div className="row">
				<div className="col-4 col-lg-6">	
				<a href="https://wa.link/4ew9a6" style={{display:'flex',justifyContent:'flex-end'}} target="_blank"><img src={wts} id="img-wts"/></a>		
				</div>
				<div className="col-8 col-lg-6" id="contacto">
				+51 987654321
				</div>
				</div>
			</div>
	</div>
			
</div>
    )
}


export default HomeView
