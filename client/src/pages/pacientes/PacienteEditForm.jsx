import React, { useEffect, useState } from "react";
import { usePaciente } from "../../context/PacienteContext";
import { useNavigate, useParams } from "react-router-dom";

function PacienteEditForm() {

  const { getPaciente, updatePaciente } = usePaciente();
  const params = useParams();
  const navigate = useNavigate()

  const [nombre, setnombre] = useState("");
  const [edad, setedad] = useState("");
  const [sexo, setsexo] = useState("");
  const [medico, setmedico] = useState("");
  const [diagnostico, setdiagnostico] = useState("");


  useEffect(() => {
    const loadPaciente = async () => {
      if (params.id) {
        const paciente = await getPaciente(params.id);
        console.log(paciente)
        setnombre(paciente.nombre)
        setedad(paciente.edad)
        setsexo(paciente.sexo)
        setmedico(paciente.medico)
        setdiagnostico(paciente.diagnostico)
      }
    };
    loadPaciente();
  }, []);

  

  const clear = () => {
    setnombre("");
    setedad("");
    setsexo("");
    setmedico("");
    setdiagnostico("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if(params.id){
        console.log("Updating")
        updatePaciente(params.id, {
            nombre: nombre,
            edad: edad,
            sexo: sexo,
            medico: medico,
            diagnostico: diagnostico
          });
          navigate("/listapacientes")
          clear();
    }
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
    }
  };

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-12'>
          <h1>Editar Paciente</h1>
        <form onSubmit={onSubmit}>
          <input className='form-control form-control-lg mb-3' onChange={(e) => onChange(e)} value={nombre} name='nombre' type="text" placeholder='nombre'/>
          <input className='form-control form-control-lg  mb-3' onChange={(e) => onChange(e)} value={edad} name='edad' type="number" placeholder='edad'/>
          {/* <input  className='form-control form-control-lg  mb-3' onChange={(e) => onChange(e)} value={sexo} name='sexo' type="text" placeholder='sexo'/> */}

          <select name="sexo" id="sexo" className='form-select form-select-lg mb-3' onChange={(e) => onChange(e)}  value={sexo}>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>

          <input className='form-control form-control-lg  mb-3' onChange={(e) => onChange(e)} value={medico} name='medico' type="text" placeholder='medico'/>
          <input className='form-control form-control-lg  mb-3' onChange={(e) => onChange(e)} value={diagnostico} name='diagnostico' type="text" placeholder='diagnostico'/>
          <button className='btn btn-primary form-control-lg  mb-3' type='submit'>Guardar Paciente</button>
         </form>
        </div>
      </div>
    </div>
  );
}
export default PacienteEditForm;
