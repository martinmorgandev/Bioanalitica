import React, {useState } from 'react'
import {createPacienteRequest} from "../api/pacientes.api"
import { usePaciente } from '../context/PacienteContext';
import { useParams } from 'react-router-dom';

function PacienteForm() {
  const params = useParams()
  // console.log(params)

  const {createNewPaciente} = usePaciente()

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
    // setObjeto()
    console.log(nombre)
    createNewPaciente({
      nombre: nombre,
      edad: edad,
      sexo: sexo,
      medico: medico,
      diagnostico: diagnostico
    })
    clear()
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