import React, { useState,useEffect, Fragment} from 'react';
import { crearCita} from '../Services/clienteService';
import { obtenerTrabajadores } from '../Services/trabajadoresService';
import { obtenerGaleria } from '../Services/galeriaService';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import Swal from 'sweetalert2';
import Loading from './Loading';
import "../estilos.css"

import DatePicker,{registerLocale} from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import fi from 'date-fns/locale/es'


const ContactForm = () => {

  const [nombre, setUserName] = useState('');
  const [correo, setEmail] = useState('');
  const [fecha1, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 9))
  const [descripcion, setDescripcion]=useState('')

  const [trabajadores, setTrabajadores] = useState([])
  const [id_estilista, setEstlistaId]=useState('')



  const [servicio,setServicio]=useState([])
  const [id_servicio, setServicioId]=useState('')

  const [cargando, setCargando]= useState(true)


  let estado = "pendiente"
  let fecha=fecha1.getTime()
  let hora=fecha1.getHours()
 

  const Swal = require('sweetalert2')
  {/* Array de datos para enviar */}
  const datos={
    nombre,
    correo,
    fecha,
    descripcion,
    id_estilista,
    estado,
    id_servicio,
    hora,
  }
  
  {/* Obtener datos*/}
  const getTrabajadores= async()=>{
    try {
      let trabajadoresObtenidos = await obtenerTrabajadores()
      setTrabajadores([...trabajadoresObtenidos])
      setCargando(false)

    } catch (error) {
      throw error
    }
  }
  const getServicios= async()=>{
    try {
      let serviciosObtenidos = await obtenerGaleria()
      setServicio([...serviciosObtenidos])
      setCargando(false)
    } catch (error) {
      throw error
    }
  }
  {/* Mostrar option  */}
  const getNombreEstilista = (id_estilista)=>{
    id_estilista = (id_estilista ? id_estilista : "")
    let estilistaEncontrado = trabajadores.find((trabajadores)=>(trabajadores.id.toString()===id_estilista.toString()))
    return estilistaEncontrado ? estilistaEncontrado.nombre : ""
  }
  const getNombreServicio = (id_servicio)=>{
    id_servicio = (id_servicio ? id_servicio : "")
    let servicioEncontrado = servicio.find((servicio)=>(servicio.id.toString()===id_servicio.toString()))
    return servicioEncontrado ? servicioEncontrado.nombre : ""
  }

  {/* Manejar Evento */}  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({datos})
    Swal.fire({
      title: '¿Está seguro?',
      text:'Los datos seran enviados,¿Está seguro?',
      icon: 'question',
      showCancelButton:true,
      confirmButtonText: 'Enviar'
    }).then((result)=>{
      if (result.isConfirmed){
        Swal.fire('Gracias! El staff se estará contactando con usted lo antes posible para confirmar su cita.','','success')
        crearCita(datos)
      } else if (result.isDenied){
        
      }
    })
  };

  {/* Obtener datos al inicializar */}
  useEffect(()=>{{getTrabajadores()}
    {getServicios()}
    },[])


  return (
    <Fragment>
      {
        cargando? (<Loading/>):(

       

    <div className="container">
      <h1 id="form-titulo">Agende su cita</h1>
      <div className="row">
        <div className="col col-lg-7">
      <form onSubmit={handleSubmit} id="formulario" >
        <div className="form-group ">
          <label>Nombre y Apellido</label>
          <input
            type="text"
            name="nombre"
            onChange={(e) => setUserName(e.target.value)}
            value={nombre}
            className="form-control"
            title="Ingrese su nombre y apellido"
            pattern="[a-zA-Z'-'\s]*"
            placeholder="Ejem: Pepito Perez"
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="correo"
            onChange={(e) => {setEmail(e.target.value)}}
            value={correo}
            className="form-control"
            title="Ingrese su correo electronico"
            pattern="[A-Z a-z 0-9]{1,}@[A-Z a-z 0-9]{1,}.[A-Z a-z]{2,}."
            placeholder="Ejem:pepito.perez@algo.com"
          />
        </div>
        <div className="form-group">
          <label>Comentario</label>
          <textarea 
          className="form-control" 
          onChange={(e) => {setDescripcion(e.target.value)}}
          placeholder="Ingrese un comentario para el staff o puede dejar su número telefonico."
          value={descripcion}
          style={{width:'90%',marginLeft:'5px'}}></textarea>
        </div>
        {/*Select del servicio */}
        <select onChange={(e)=>{setServicioId(e.target.value)}} 
        style={{margin:'0px 5px 10px'}}
        required>
          <option hidden value="">Elige el servicio</option>
          {servicio.map((serv,i)=>(
                
            <option value={serv.id} key={i}>{serv.nombre}</option> 
            
    
          ))}</select>
          {/*Select del estilista */}
          <select onChange={(e)=>{setEstlistaId(e.target.value)}}  
          style={{margin:'0px 5px 10px'}}
          required>
          <option hidden value="">Elige tu estilista</option>

            {trabajadores.map((trab,i)=>(
                
              <option value={trab.id} key={i} name={trab.nombre}>{trab.nombre}</option> 
              
    
            ))}</select>
        <div id="datepicker">
          {/*CALENDARIO REACT DATEPICKER */}
          <p style={{color:'white'}}>Eliga la fecha y hora para su cita</p>
          <DatePicker 
          selected={fecha1} 
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy" 
          minDate={new Date()}
          value={fecha1}
          showTimeSelect
          timeIntervals={60}
          timeCaption="Time"
          timeFormat="h:mm aa"
          minTime={setHours(setMinutes(new Date(),1, 0), 9)}
          maxTime={setHours(setMinutes(new Date(),1, 0), 19)}
          locale={fi}
          withPortal/>
        </div>
        <div className="col text-center">
          <button type="submit" 
          className="btn btn-dark btn-lg"
          form="formulario">Enviar</button>
      </div>

      </form>
      </div>
      <div className="col col-lg-4 d-none d-lg-block" id="muestra">
        <h2 style={{fontWeight:'bold'}}>Datos</h2>
        <p>Nombre: {nombre}</p>
        <p>Correo: {correo}</p>
        <p>Comentario: {descripcion}</p>
        <p>Fecha elegida: {fecha1.toLocaleDateString('es-ES',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</p>
        <p>Hora: {fecha1.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit', hour12:true})}</p>
        <p>Servicio: {getNombreServicio(id_servicio)}</p>
        <p>Estilista: {getNombreEstilista(id_estilista)}</p>
      </div>
      </div>
      <div style={{paddingTop:'40px'}}>

      </div>
    </div> )
      }
    </Fragment>
  );
};

export default ContactForm;