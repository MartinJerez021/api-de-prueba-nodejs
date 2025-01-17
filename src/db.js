import mysql2 from "mysql2/promise";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER, DB_PORT} from "./config.js";

//create pool es una funcion que nos permite crear multiples conexiones hacia una bd
export const pool = mysql2.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});
