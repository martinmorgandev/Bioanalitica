import React, { useEffect } from "react";
import EstudioCard from "../../components/EstudioCard";
import { useEstudio } from "../../context/EstudiosContext";

function PacientePage() {
  const { estudios, loadEstudios } = useEstudio();

  useEffect(() => {
    loadEstudios();
  }, []);

  function renderMain() {
    if (estudios.length === 0)
      return (
        <tr>
          <td>No hay elementos</td>
        </tr>
      );
    return estudios.map((estudio) => (
      <EstudioCard estudio={estudio} key={estudio.id}></EstudioCard>
    ));
  }

  return (
    <>
      <div className="col">
      <div class="card mb-3 mt-3">
          {/* <div class="card-body card-body border border-1 rounded ">
            <h3>Lista de estudios</h3>
          </div> */}
          <button class="btn btn-primary" type="button" disabled>
            <h1>Lista de Estudios</h1>
            </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-dark">
              <th>Estudio</th>
              <th>indicaciones</th>
              <th>tipo y cantidad</th>
              <th>precio</th>
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