import React, {useState } from 'react'
import {createPacienteRequest} from "../../api/pacientes.api"
import { usePaciente } from '../../context/PacienteContext';
import { useParams } from 'react-router-dom';

function PacienteForm() {
  const params = useParams()
  // console.log(params)

  const {createNewPaciente} = usePaciente()

  const [nombre, setnombre] = useState('');
  const [edad, setedad] = useState('');
  const [sexo, setsexo] = useState('masculino');
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
    // console.log(nombre)
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
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-12'>
          <h1>Registrar Paciente</h1>
        <form onSubmit={onSubmit}>
          <input className='form-control form-control-lg mb-3' onChange={(e) => onChange(e)} value={nombre} name='nombre' type="text" placeholder='Nombre'/>
          <input className='form-control form-control-lg  mb-3' onChange={(e) => onChange(e)} value={edad} name='edad' type="number" placeholder='Edad'/>
          {/* <input  className='form-control form-control-lg  mb-3' onChange={(e) => onChange(e)} value={sexo} name='sexo' type="text" placeholder='sexo'/> */}

          <select name="sexo" id="sexo" className='form-select form-select-lg mb-3' onChange={(e) => onChange(e)}  value={sexo}>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>

          <input className='form-control form-control-lg  mb-3' onChange={(e) => onChange(e)} value={medico} name='medico' type="text" placeholder='Medico'/>
          <input className='form-control form-control-lg  mb-3' onChange={(e) => onChange(e)} value={diagnostico} name='diagnostico' type="text" placeholder='Diagnostico'/>
          <button className='btn btn-primary form-control-lg  mb-3' type='submit'>Guardar Paciente</button>
         </form>
        </div>
      </div>
    </div>
    
  )
}

export default PacienteForm