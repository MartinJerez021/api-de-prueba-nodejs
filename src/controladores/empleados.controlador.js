import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try{
  const [rows] = await pool.query("select * from empleados");
  res.send({ rows });
  }
  catch (error){
    return res.status(500).json({
      mensaje: 'Error inesperado'
    })
  }
};

export const getEmpleado = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from empleados where id = ?", [req.params.id]);
    if (rows.length <= 0) return res.status(404).json(
        {
          mensaje: 'El empleado que insertaste no existe.'
        }
      )
    
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Error inesperado'
    })
  }
};

export const postEmpleados = async (req, res) => {
  const { nombre, salario } = req.body;
 try {
  const [rows] = await pool.query(
    "insert into empleados (nombre, salario) values (?,?)",
    [nombre, salario]
  );
  res.send({ id: rows.insertId, nombre, salario });
 } catch (error) {
  return res.status(500).json({
    mensaje: 'Error inesperado'
  })
 }
};

export const patchEmpleados = async (req, res) => {
  const {id} = req.params
  const {nombre, salario} = req.body

try {
  const [result] = await pool.query ('update empleados set nombre = ifnull(?, nombre), salario = ifnull(?, salario) where id = ?', [nombre, salario, id])
  if (result.affectedRows === 0) return res.status(404).json({
    mensaje : 'No se encontro un empleado con el id asignado para modificar'
    
  })
  const [rows] = await pool.query('select * from empleados where id = ?', [id])
    res.json(rows[0])
} catch (error) {
  return res.status(500).json({
    mensaje: 'Error inesperado'
  })
}
}
;

export const deleteEmpleado = async (req, res) => {
try {
  const [result] = await pool.query('delete from empleados where id = ?', [req.params.id])
  if (result.affectedRows <= 0) return res.status(404).json({
    mensaje :'No se encontro un empleado con el id designado para eliminar'
  })
  res.sendStatus(204)
} catch (error) {
  return res.status(500).json({
    mensaje: 'Error inesperado'
  })
}

};
