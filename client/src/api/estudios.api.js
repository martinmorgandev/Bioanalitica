import axios from "axios"

export const getEstudiosRequest = async () => {
    return await axios.get('http://localhost:4000/estudios')
}

export const createEstudiosRequest = async (paciente) => {
    return await axios.post('http://localhost:4000/estudios',paciente)
}

export const deleteEstudiosRequest = async (id) => {
    return await axios.delete(`http://localhost:4000/estudios/${id}`)
}

export const getEstudioRequest = async (id) => {
    return await axios.get(`http://localhost:4000/estudios/${id}`)
}

export const updateEstudiosRequest = async (id, newFilds) => {
    return await axios.put(`http://localhost:4000/estudios/${id}`, newFilds)
}
