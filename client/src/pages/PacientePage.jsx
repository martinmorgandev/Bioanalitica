import React, { useContext, useEffect, useState} from 'react'
import { getPacientesRequest } from '../api/pacientes.api'
import PacienteCard from '../components/PacienteCard'
import { PacienteContext, PacienteContextProvider, usePaciente } from '../context/PacienteContext';

function PacientePage() {

  const {text, pacientes, loadPacientes} = usePaciente()

  useEffect(() => {
    loadPacientes()
  }, [])

  function renderMain() {
    if(pacientes.length === 0) return <h1>No hay tareas</h1>
    return pacientes.map((paciente) => <PacienteCard paciente={paciente} key={paciente.id}></PacienteCard>)
  }
  
  return (
    <div>
      <h1>Pacientes</h1>
      {renderMain()}
    </div>
  )

}

export default PacientePage