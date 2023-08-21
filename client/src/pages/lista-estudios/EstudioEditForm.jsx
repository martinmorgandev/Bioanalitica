import React, { useEffect, useState } from "react";
import { useEstudio } from "../../context/EstudiosContext";
import { useNavigate, useParams } from "react-router-dom";

function EstudioEditForm() {

  const { getEstudio, updateEstudio } = useEstudio();
  const params = useParams();
  const navigate = useNavigate()

  const [estudio, setestudio] = useState('');
  const [indicaciones, setindicaciones] = useState('');
  const [tipo_cantidad, settipo_cantidad] = useState('');
  const [precio, setprecio] = useState('');


  useEffect(() => {
    const loadPaciente = async () => {
      if (params.id) {
        const paciente = await getEstudio(params.id);
        console.log(paciente)
        setestudio(paciente.estudio)
        setindicaciones(paciente.indicaciones)
        settipo_cantidad(paciente.tipo_cantidad)
        setprecio(paciente.precio)
      }
    };
    loadPaciente();
  }, []);

  

  const clear = () => {
    setestudio("");
    setindicaciones("");
    settipo_cantidad("");
    setprecio("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if(params.id){
        console.log("Updating")
        updateEstudio(params.id, {
            estudio: estudio,
            indicaciones: indicaciones,
            tipo_cantidad: tipo_cantidad,
            precio: precio,
          });
          navigate("/lista-estudios")
          clear();
    }
  };

  const onChange = (e) => {
    if (e.target.name === "estudio") {
      setestudio(e.target.value);
    } else if (e.target.name === "indicaciones") {
      setindicaciones(e.target.value);
    } else if (e.target.name === "tipo_cantidad") {
      settipo_cantidad(e.target.value);
    } else if (e.target.name === "precio") {
      setprecio(e.target.value);
    } 
  };

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-12'>
          <h1>Editar Paciente</h1>
        <form onSubmit={onSubmit}>
          <input className='form-control form-control-lg mb-3' onChange={(e) => onChange(e)} value={estudio} name='estudio' type="text" placeholder='nombre'/>
          <input className='form-control form-control-lg  mb-3' onChange={(e) => onChange(e)} value={indicaciones} name='indicaciones' type="text" placeholder='edad'/>
          <input className='form-control form-control-lg  mb-3' onChange={(e) => onChange(e)} value={tipo_cantidad} name='tipo_cantidad' type="text" placeholder='medico'/>
          <input className='form-control form-control-lg  mb-3' onChange={(e) => onChange(e)} value={precio} name='precio' type="text" placeholder='diagnostico'/>
          <button className='btn btn-primary form-control-lg  mb-3' type='submit'>Guardar Paciente</button>
         </form>
        </div>
      </div>
    </div>
  );
}
export default EstudioEditForm;
