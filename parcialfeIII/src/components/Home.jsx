import React from 'react'
import Card from './Card'

const Home = () => {
    const alumnos = [
        {
            "id": 0,
            "apellido": "Meson" ,       
            "nombre": "Santiago",
        },
        {
            "id": 1,
            "apellido": "Paz" ,       
            "nombre": "Valen",
        }
    ]
  return (
    <div className='home'>
        {alumnos.map( alumnos => {
            return <Card alumnos={alumnos} key={alumnos.id}/>
        })}
        
    </div>
  )
}

export default Home