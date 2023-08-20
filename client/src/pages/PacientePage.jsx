import React, { useContext, useEffect, useState } from "react";
import { getPacientesRequest } from "../api/pacientes.api";
import PacienteCard from "../components/PacienteCard";
import {
  PacienteContext,
  PacienteContextProvider,
  usePaciente,
} from "../context/PacienteContext";

function PacientePage() {
  const { text, pacientes, loadPacientes } = usePaciente();

  useEffect(() => {
    loadPacientes();
  }, []);

  function renderMain() {
    if (pacientes.length === 0) return <tr><td>No hay elementos</td></tr>;
    return pacientes.map((paciente) => (
      <PacienteCard paciente={paciente} key={paciente.id}></PacienteCard>
    ));
  }

  return (
    <>
    <div className="col">
      <h1>Lista de pacientes</h1>
    </div>
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr className="table-dark">
            <th>Nombre</th>
            <th>Edad</th>
            <th>Sexo</th>
            <th>Medico</th>
            <th>Diagnostico</th>
            <th>Fecha</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderMain()}</tbody>
      </table>
    </div>
    </>
  );
}

export default PacientePage;
