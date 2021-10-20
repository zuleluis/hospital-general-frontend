import express from "express";
 
import { 
    listaPacientes,
    agregaPaciente,
    obtenerPaciente,
} from "../controllers/pacientes.js";
 
const router = express.Router();
 
router.get('/', listaPacientes);
router.get('/:id', obtenerPaciente);
router.post('/', agregaPaciente);
//router.patch('/:id', updateProduct);
//router.delete('/:id', deleteProduct);
 
export default router;