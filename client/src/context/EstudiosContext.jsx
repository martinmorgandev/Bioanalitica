import { createContext, useContext, useState } from "react";
import {
  getEstudiosRequest,
  createEstudiosRequest,
  deleteEstudiosRequest,
  getEstudioRequest,
  updateEstudiosRequest,
} from "../api/estudios.api";

export const EstudioContext = createContext();

export const useEstudio = () => {
  const context = useContext(EstudioContext);
  if (!context) {
    throw new Error(
      "usePaciente must be used within a PacienteContextProvider"
    );
  }
  return context;
};

export const EstudioContextProvider = ({ children }) => {
  const [estudios, setestudios] = useState([]);

  const loadEstudios = async () => {
    const estudios = await getEstudiosRequest();
    setestudios(estudios.data);
  };

  const deleteEstudio = async (id) => {
    try {
      const response = await deleteEstudiosRequest(id);
      const newEstudios = estudios.filter((item) => item.id !== id);
      setestudios(newEstudios);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewEstudio = async ({ estudio, indicaciones, tipo_cantidad, precio }) => {
    try {
      const result = await createEstudiosRequest({
        estudio,
        indicaciones,
        tipo_cantidad,
        precio,
      });
      console.log(result);
      //   clear();
    } catch (error) {
      console.log(error);
    }
  };

  const getEstudio = async (id) => {
    try {
      const response = await getEstudioRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updatePaciente = async (
    id,
    { estudio, indicaciones, tipo_cantidad, precio }
  ) => {
    try {
      const result = await updateEstudiosRequest(id, {
        estudio: estudio,
        indicaciones: indicaciones,
        tipo_cantidad: tipo_cantidad,
        precio: precio
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EstudioContext.Provider
      value={{
        estudios: estudios,
        loadEstudios: loadEstudios,
        deleteEstudio: deleteEstudio,
        createNewEstudio: createNewEstudio,
        getEstudio: getEstudio,
        updatePaciente: updatePaciente,
      }}
    >
      {children}
    </EstudioContext.Provider>
  );
};
