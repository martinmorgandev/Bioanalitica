import React, {useState } from 'react'
import { useEstudio } from '../../context/EstudiosContext';

function EstudioForm() {

  const {createNewEstudio} = useEstudio()

  const [estudio, setestudio] = useState('');
  const [indicaciones, setindicaciones] = useState('');
  const [tipo_cantidad, settipo_cantidad] = useState('');
  const [precio, setprecio] = useState('');


  const clear = () => {
    setestudio('')
    setindicaciones('')
    settipo_cantidad('')
    setprecio('')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    createNewEstudio({
        estudio: estudio,
        indicaciones: indicaciones,
        tipo_cantidad: tipo_cantidad,
        precio: precio
    })
    clear()
  }
  
  const onChange = (e) => {
    if(e.target.name === "estudio"){
        setestudio(e.target.value)
    }else if(e.target.name === "indicaciones"){
        setindicaciones(e.target.value)
    }else if(e.target.name === "tipo_cantidad"){
        settipo_cantidad(e.target.value)
    }else if(e.target.name === "precio"){
        setprecio(e.target.value)
    }
  }


  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-12'>
        <div className="card mb-3">
            <div className="card-body border border-1 rounded">
              <h3>Registrar un estudio</h3>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body border border-1 rounded border">
              <form onSubmit={onSubmit}>
                <input className='form-control form-control-md mb-3' onChange={(e) => onChange(e)} value={estudio} name='estudio' type="text" placeholder='Estudio'/>
                <input className='form-control form-control-md  mb-3' onChange={(e) => onChange(e)} value={indicaciones} name='indicaciones' type="text" placeholder='Indicaciones'/>
                <input className='form-control form-control-md  mb-3' onChange={(e) => onChange(e)} value={tipo_cantidad} name='tipo_cantidad' type="text" placeholder='Tipo y cantidad'/>
                <input className='form-control form-control-md  mb-3' onChange={(e) => onChange(e)} value={precio} name='precio' type="number" placeholder='Precio'/>
                <button className='btn btn-primary form-control-md  mb-3' type='submit'>Guardar Estudio</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default EstudioForm