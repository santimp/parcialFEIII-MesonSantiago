import React from 'react'
import './Card.css'

const Card = ({alumnos}) => {

  return ( <div className='card'> 

  <h4>{alumnos.apellido}</h4>
  <h4>{alumnos.nombre}</h4>

   </div> )
}

export default Card