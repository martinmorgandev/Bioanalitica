import React from "react";
import { useEstudio} from "../context/EstudiosContext";
import {useNavigate} from "react-router-dom"

function EstudioCard({ estudio }) {

    const {deleteEstudio} = useEstudio()
    const navigate = useNavigate()

  return (
    <tr>
      <td>{estudio.estudio}</td>
      <td>{estudio.indicaciones}</td>
      <td>{estudio.tipo_cantidad}</td>
      <td>{estudio.precio}</td>
      <td>
      <button onClick={() => deleteEstudio(estudio.id)} className="btn btn-danger">Eliminar</button>
      <button onClick={() => navigate(`/edit-estudio/${estudio.id}`)} className="btn btn-warning">Actualizar</button>
      </td>
    </tr>
  );
}

export default EstudioCard;
