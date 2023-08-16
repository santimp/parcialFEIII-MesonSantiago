import React from 'react'
import './Card.css'

const Card = ({alumnos, }) => {

  return ( <div className='card'> 

  <h4>{alumnos.apellido}</h4>
  <h4>{alumnos.nombre}</h4>
  <button onClick={() => setAlumno()}>ingresar datos</button>

  
  



   </div> )
}

export default Card