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
        <h1>Lista</h1>
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