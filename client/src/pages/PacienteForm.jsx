import React, { useState } from 'react'
import {createPacienteRequest} from "../api/pacientes.api"

function PacienteForm() {

  const [nombre, setnombre] = useState('');
  const [edad, setedad] = useState('');
  const [sexo, setsexo] = useState('');
  const [medico, setmedico] = useState('');
  const [diagnostico, setdiagnostico] = useState('');

  const clear = () => {
    setnombre('')
    setedad('')
    setsexo('')
    setmedico('')
    setdiagnostico('')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await createPacienteRequest({nombre, edad, sexo, medico, diagnostico})
      console.log(result)
      clear()
    } catch (error) {
      console.log(error)
    }
  }
  
  const onChange = (e) => {
    if(e.target.name === "nombre"){
      setnombre(e.target.value)
    }else if(e.target.name === "edad"){
      setedad(e.target.value)
    }else if(e.target.name === "sexo"){
      setsexo(e.target.value)
    }else if(e.target.name === "medico"){
      setmedico(e.target.value)
    }else if(e.target.name === "diagnostico"){
      setdiagnostico(e.target.value)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => onChange(e)} value={nombre} name='nombre' type="text" placeholder='nombre'/>
        <input onChange={(e) => onChange(e)} value={edad} name='edad' type="text" placeholder='edad'/>
        <input onChange={(e) => onChange(e)} value={sexo} name='sexo' type="text" placeholder='sexo'/>
        <input onChange={(e) => onChange(e)} value={medico} name='medico' type="text" placeholder='medico'/>
        <input onChange={(e) => onChange(e)} value={diagnostico} name='diagnostico' type="text" placeholder='diagnostico'/>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default PacienteForm