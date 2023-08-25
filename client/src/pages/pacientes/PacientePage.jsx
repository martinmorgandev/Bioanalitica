import React, { useEffect, useState } from "react";
import PacienteCard from "../../components/PacienteCard";
import { usePaciente } from "../../context/PacienteContext";
import { useEstudio } from "../../context/EstudiosContext";

function PacientePage() {
  const { pacientes, loadPacientes } = usePaciente();

  const [tabla, settabla] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    loadPacientes();
  }, [tabla, search, renderMain]);

  function renderMain() {
    // if (pacientes.length === 0) return <tr><td>No hay elementos</td></tr>;
    if (search.length == "") {
      return pacientes.map((paciente) => (
        <PacienteCard paciente={paciente} key={paciente.id}></PacienteCard>
      ));
    } else {
      return tabla.map((tabla) => (
        <PacienteCard paciente={tabla} key={tabla.id}></PacienteCard>
      ));
    }
  }

  // const valorEncontrado = (termino) => {
  //  const busqueda = pacientes.filter((item) => {
  //   if(item.nombre === termino){
  //     return item
  //   }
  //  })
  //   settabla(busqueda)
  //   console.log(tabla)
  // }

  const valorEncontrado2 = (termino) => {
    const busqueda = pacientes.filter((item) => {
      if (
        item.nombre.toString().toLowerCase().includes(termino.toLowerCase())
      ) {
        return item;
      }
    });
    settabla(busqueda);
    //  console.log(tabla)
  };

  const actualizacion = (e) => {
    setsearch(e.target.value);
    valorEncontrado2(search);
    // console.log(e.target.value)
  };

  // const onSubmit = (e) => {
  //   e.preventDefault()
  // valorEncontrado2(search)

  // }

  return (
    <>
      <div className="col">
        <div class="card mb-3 mt-3">
        <button class="btn btn-primary" type="button" disabled>
            <h1>Lista de Pacientes</h1>
            </button>
        </div>
        {/* <form onSubmit={onSubmit}> */}
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="inputPassword6" class="col-form-label">Buscar:</label>
          </div>
          <div class="col-auto">
              <input
              className="form-control"
              aria-describedby="passwordHelpInline"
              type="text"
              id="inputPassword6"
              placeholder="ejem. Martin"
              value={search}
              onChange={(e) => actualizacion(e)}
            />
          </div>
          </div>
          <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
              Puedes hacer una busqueda de un paciente por nombre
            </span>
          </div>
        </div>

      
      <div className="table-responsive mt-3">
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
