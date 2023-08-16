import React, { useState } from 'react'
import './Form.css'

const Form = () => {

    const [fecha, setDate] = useState('')

  return (
   <form className='form' >
    <label > Agregar fecha de ingreso</label>
    <input type="text" onChange={(e)=> setDate(e.target.value)}/>
    

   </form>
  )
}

export default Form