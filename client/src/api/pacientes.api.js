import axios from "axios"


export const getPacientesRequest = async () => {
    return await axios.get('http://localhost:4000/pacientes')
}

export const createPacienteRequest = async (paciente) => {
    return await axios.post('http://localhost:4000/pacientes',paciente)
}

export const deletePacienteRequest = async (id) => {
    return await axios.delete(`http://localhost:4000/pacientes/${id}`)
}

