import { pool } from "../db.js";

export const getPacientes = async (req, res) => {
  // throw new Error("Error de conexcion")
  try {
    const [result] = await pool.query(
      "SELECT * FROM pacientes ORDER BY fecha ASC"
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPaciente = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM pacientes WHERE id = ?", [
      req.params.id,
    ]);
    console.log(result);
    if (result.length === 0) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPaciente = async (req, res) => {
  try {
    console.log(req.body);
    const { nombre, edad, sexo, medico, diagnostico } = req.body;
    const [result] = await pool.query(
      "INSERT INTO pacientes(nombre, edad, sexo, medico, diagnostico) VALUES (?, ?, ? ,? ,?) ",
      [nombre, edad, sexo, medico, diagnostico]
    );
    console.log(result);
    res.json({
      id: result.insertId,
      nombre: nombre,
      edad: edad,
      sexo: sexo,
      medico: medico,
      disgnostico: diagnostico,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePaciente = async (req, res) => {
  try {
    const result = await pool.query("UPDATE pacientes SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePaciente = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM pacientes WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
