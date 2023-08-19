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

export const getPacienteRequest = async (id) => {
    return await axios.get(`http://localhost:4000/pacientes/${id}`)
}

export const updatePacienteRequest = async (id, newFilds) => {
    return await axios.put(`http://localhost:4000/pacientes/${id}`, newFilds)
}
