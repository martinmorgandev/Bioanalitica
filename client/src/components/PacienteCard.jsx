import React from "react";
import { deletePacienteRequest } from "../api/pacientes.api";
import { usePaciente } from "../context/PacienteContext";
import {useNavigate} from "react-router-dom"

function PacienteCard({ paciente }) {

    const {deletePaciente} = usePaciente()
    const navigate = useNavigate()

  return (
    <tr>
      <td>{paciente.nombre}</td>
      <td>{paciente.edad}</td>
      <td>{paciente.sexo}</td>
      <td>{paciente.medico}</td>
      <td>{paciente.diagnostico}</td>
      <td>{paciente.fecha}</td>
      <td>
      <button onClick={() => deletePaciente(paciente.id)} className="btn btn-danger">Eliminar</button>
      <button onClick={() => navigate(`/edit/${paciente.id}`)} className="btn btn-warning">Actualizar</button>
      </td>
    </tr>
  );
}

export default PacienteCard;
