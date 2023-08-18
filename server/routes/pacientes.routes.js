import { Router } from "express";
import {
  getPacientes,
  getPaciente,
  createPaciente,
  updatePaciente,
  deletePaciente,
} from "../controllers/pacientes.controllers.js";

const router = Router();

router.get("/pacientes", getPacientes);

router.get("/pacientes/:id", getPaciente);

router.post("/pacientes", createPaciente);

router.put("/pacientes/:id", updatePaciente);

router.delete("/pacientes/:id", deletePaciente);

export default router;
