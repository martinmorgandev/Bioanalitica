import React from "react";
import { deletePacienteRequest } from "../api/pacientes.api";
import { usePaciente } from "../context/PacienteContext";
import {useNavigate} from "react-router-dom"

function PacienteCard({ paciente }) {

    const {pacientes,loadPacientes, deletePaciente} = usePaciente()
    const navigate = useNavigate()

  return (
    <div>
      <p>{paciente.nombre}</p>
      <p>{paciente.edad}</p>
      <p>{paciente.sexo}</p>
      <p>{paciente.medico}</p>
      <p>{paciente.diagnostico}</p>
      <p>{paciente.fecha}</p>
      <button onClick={() => deletePaciente(paciente.id)} className="btn btn-danger">Eliminar</button>
      <button onClick={() => navigate(`/edit/${paciente.id}`)} className="btn btn-warning">Actualizar</button>
    </div>
  );
}

export default PacienteCard;
