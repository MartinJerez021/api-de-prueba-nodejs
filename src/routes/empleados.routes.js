import { Router } from "express";
import { getEmpleados,getEmpleado , postEmpleados, patchEmpleados, deleteEmpleado } from "../controladores/empleados.controlador.js";
const router = Router();

router.get("/employees", getEmpleados);

router.get("/employee/:id", getEmpleado);

router.post("/employees", postEmpleados );

router.patch("/employees/:id", patchEmpleados);

router.delete("/employees/:id", deleteEmpleado);
export default router;
