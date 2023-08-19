import React from "react";
import { deletePacienteRequest } from "../api/pacientes.api";

function PacienteCard({ paciente }) {

    const handleDelete = async(id) => {
        try {
           const response = await deletePacienteRequest(id)
           console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <p>{paciente.nombre}</p>
      <p>{paciente.edad}</p>
      <p>{paciente.sexo}</p>
      <p>{paciente.medico}</p>
      <p>{paciente.diagnostico}</p>
      <p>{paciente.fecha}</p>
      <button onClick={() => handleDelete(paciente.id)} className="btn btn-danger">Eliminar</button>
      <button className="btn btn-warning">Actualizar</button>
    </div>
  );
}

export default PacienteCard;
