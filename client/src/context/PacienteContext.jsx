import { createContext, useContext, useState } from "react";
import {
  createPacienteRequest,
  deletePacienteRequest,
  getPacientesRequest,
  getPacienteRequest,
  updatePacienteRequest
} from "../api/pacientes.api";

export const PacienteContext = createContext();

export const usePaciente = () => {
  const context = useContext(PacienteContext);
  if (!context) {
    throw new Error(
      "usePaciente must be used within a PacienteContextProvider"
    );
  }
  return context;
};

export const PacienteContextProvider = ({ children }) => {
  const [pacientes, setpacientes] = useState([]);

  const loadPacientes = async () => {
    const pacientes = await getPacientesRequest();
    setpacientes(pacientes.data);
  };

  const deletePaciente = async (id) => {
    try {
      const response = await deletePacienteRequest(id);
      const newPacientes = pacientes.filter((item) => item.id !== id);
      setpacientes(newPacientes);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewPaciente = async ({
    nombre,
    edad,
    sexo,
    medico,
    diagnostico
  }) => {
    try {
      const result = await createPacienteRequest({
        nombre,
        edad,
        sexo,
        medico,
        diagnostico
      });
      console.log(result);
    //   clear();
    } catch (error) {
      console.log(error);
    }
  };

  const getPaciente = async (id) => {
    try {
        const response =  await getPacienteRequest(id)
        return response.data
    } catch (error) {
        console.log(error)
    }
  }

  const updatePaciente = async (id, {
    nombre,
    edad,
    sexo,
    medico,
    diagnostico,
  }) => {
    try {
    const result = await updatePacienteRequest(id, {
        nombre: nombre,
        edad: edad,
        sexo: sexo,
        medico: medico,
        diagnostico: diagnostico
      })
    console.log(result)
    } catch (error) {
        console.log(error)
    }
  }



  return (
    <PacienteContext.Provider
      value={{
        text: "Hello you!",
        pacientes: pacientes,
        loadPacientes: loadPacientes,
        deletePaciente: deletePaciente,
        createNewPaciente: createNewPaciente,
        getPaciente: getPaciente,
        updatePaciente: updatePaciente
      }}
    >
      {children}
    </PacienteContext.Provider>
  );
};
