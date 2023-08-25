import React, { useEffect, useState } from "react";
import { createPacienteRequest } from "../../api/pacientes.api";
import { usePaciente } from "../../context/PacienteContext";
import { useParams } from "react-router-dom";
import { useEstudio } from "../../context/EstudiosContext";

function PacienteForm() {
  const params = useParams();
  // console.log(params)

  const { createNewPaciente} = usePaciente();
  const {estudios, loadEstudios}= useEstudio()

  const [nombre, setnombre] = useState("");
  const [edad, setedad] = useState("");
  const [sexo, setsexo] = useState("masculino");
  const [medico, setmedico] = useState("");
  const [diagnostico, setdiagnostico] = useState("");

  const [estudio1, setestudio1] = useState();
  const [estudio2, setestudio2] = useState();
  const [estudio3, setestudio3] = useState();





  const clear = () => {
    setnombre("");
    setedad("");
    setsexo("");
    setmedico("");
    setdiagnostico("");
  };

  useEffect(() => {
    loadEstudios()
  }, [])
  

  const onSubmit = async (e) => {
    e.preventDefault();
    // setObjeto()
    // console.log(nombre)
    createNewPaciente({
      nombre: nombre,
      edad: edad,
      sexo: sexo,
      medico: medico,
      diagnostico: diagnostico,
      estudio1: estudio1,
      estudio2: estudio2,
      estudio3: estudio3,
    });
    clear();
  };

  const onChange = (e) => {
    if (e.target.name === "nombre") {
      setnombre(e.target.value);
    } else if (e.target.name === "edad") {
      setedad(e.target.value);
    } else if (e.target.name === "sexo") {
      setsexo(e.target.value);
    } else if (e.target.name === "medico") {
      setmedico(e.target.value);
    } else if (e.target.name === "diagnostico") {
      setdiagnostico(e.target.value);
    }else if (e.target.name === "estudio1") {
      setestudio1(e.target.value);
    }else if (e.target.name === "estudio2") {
      setestudio2(e.target.value);
    }else if (e.target.name === "estudio3") {
      setestudio3(e.target.value);
    }
  };

  return (
    <div className="container">
      <div className="row mt-1">
        <div className="col-12 p-3">
          <div className="card mb-3">
            {/* <div className="card-body border border-1 rounded">
              <h3>Registrar un paciente</h3>
            </div> */}
            <button class="btn btn-primary" type="button" disabled>
            <h1>Registrar un nuevo <span class="badge bg-dark">Paciente</span></h1>
            </button>
          </div>
          <div className="card">
            <div className="card-body border border-1 rounded border">
              <form onSubmit={onSubmit}>
                <input
                  className="form-control form-control-md mb-3"
                  onChange={(e) => onChange(e)}
                  value={nombre}
                  name="nombre"
                  type="text"
                  placeholder="Nombre"
                />
                <input
                  className="form-control form-control-md  mb-3"
                  onChange={(e) => onChange(e)}
                  value={edad}
                  name="edad"
                  type="number"
                  placeholder="Edad"
                />
                <select
                  name="sexo"
                  id="sexo"
                  className="form-select form-select-md mb-3"
                  onChange={(e) => onChange(e)}
                  value={sexo}
                >
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>

                <input
                  className="form-control form-control-md  mb-3"
                  onChange={(e) => onChange(e)}
                  value={medico}
                  name="medico"
                  type="text"
                  placeholder="Medico"
                />
                <input
                  className="form-control form-control-md  mb-3"
                  onChange={(e) => onChange(e)}
                  value={diagnostico}
                  name="diagnostico"
                  type="text"
                  placeholder="Diagnostico"
                />
                

                <h3>Estudios a realizar</h3>
                <span id="passwordHelpInline" class="form-text">
                  Puedes agregar un maximo de 3 estudios
                </span>

                {/* ESTUDIO 1 */}
                <select
                  name="estudio1"
                  id="estudio1"
                  className="form-select form-select-md mb-3 mt-3"
                  onChange={(e) => onChange(e)}
                  value={estudio1}
                >
                  <option value=""></option>

                  {
                    estudios.map((item) => {
                      return <>
                        <option key={item.id} value={item.estudio}>{item.estudio} - 
                        </option>
                      </>
                    })
                  }
                </select>

                {/* ESTUDIO 2 */}
                <select
                  name="estudio2"
                  id="estudio2"
                  className="form-select form-select-md mb-3"
                  onChange={(e) => onChange(e)}
                  value={estudio2}
                >
                  <option value=""></option>

                  {
                    estudios.map((item) => {
                      return <>
                        <option value={item.estudio}>{item.estudio} - 
                        </option>
                      </>
                    })
                  }
                </select>

                  {/* ESTUDIO 3 */}
                <select
                  name="estudio3"
                  id="estudio3"
                  className="form-select form-select-md mb-3"
                  onChange={(e) => onChange(e)}
                  value={estudio3}
                >
                  <option value=""></option>

                  {
                    estudios.map((item) => {
                      return <>
                        <option value={item.estudio}>{item.estudio} - 
                        </option>
                      </>
                    })
                  }
                </select>

                <button
                  className="btn btn-primary form-control-md  mb-3"
                  type="submit"
                >
                  Guardar Paciente
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PacienteForm;
