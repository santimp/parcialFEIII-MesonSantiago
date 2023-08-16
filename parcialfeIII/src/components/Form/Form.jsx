import React, { useState } from 'react'
import './Form.css'

const Form = () => {

    const [alumno, setAlumno] = useState({
        pais: '',
        provincia: ''
    })


    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        if(alumno.pais.length > 3 && !alumno.pais.startsWith(' ') && alumno.provincia.length > 6) {
            setEnviado(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    

  return (
   <form className='form' >
    <label > Agregar pais de residencia: </label>
    <input type="text" onChange={(e)=> setAlumno({...alumno, pais: e.target.value})}/>
    <br />
    <label > Agregar provincia de residencia: </label>
   
    <input type="text" onChange={(e)=> setAlumno({...alumno, provincia: e.target.value})}/>
    <br />
    <button onClick={handleSubmit}>Enviar</button>

    {enviado && <h3>El domicilio del alumno es: {alumno.pais && alumno.provincia }</h3>}
        {error && <h3 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h3>}

   </form>
  )
}

export default Form