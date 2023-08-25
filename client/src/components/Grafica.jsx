import React, { useEffect, useState } from "react";
import { VictoryPie, VictoryLabel } from "victory";
import { usePaciente } from "../context/PacienteContext";
import { useEstudio } from "../context/EstudiosContext";

export const Grafica = () => {
  const { loadPacientes, pacientes } = usePaciente();
  const { loadEstudios, estudios } = useEstudio();

  const npacientes = pacientes.length;
  const nestudios = estudios.length;

  useEffect(() => {
    loadPacientes();
    loadEstudios();
  }, []);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 d-flex justify-content-bewtween">
          <button className="btn m-2 btn-success p-5 btn-xl">
            <h5>Cantidad de Pacientes registrados: {pacientes.length}</h5>
          </button>

          <button className="btn m-2 btn-danger p-5 btn-xl">
            <h5>Cantidad de Estudios registrados: {estudios.length}</h5>
          </button>

          <button className="btn m-2 btn-warning p-5 btn-xl">
            <h5>Cantidad de pacientes registrados: {pacientes.length}</h5>
          </button>
        </div>

        <div className="col-6 d-flex justify-content-bewtween">
          <div className="row">
            <div className="col">
              <VictoryPie
                colorScale={["#e74c3c", "#2ecc71"]}
                data={[
                  { x: "Pacientes", y:  nestudios },
                  { x: "Estudios", y: npacientes },
                ]}
                labels={({ datum }) => datum.y}
                animate={{
                  duration: 200,
                }}
              />
            </div>
          </div>
        </div>

        <button class="btn btn-primary" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
          <span role="status">Actualizando tabla...</span>
        </button>
      </div>
    </div>
  );
};
