import { Router } from "express";
import { getDb } from "../controladores/index.controladores.js";
const router = Router();

router.get("/db", getDb );
router.get("/a", (req,res)=>{
    res.send('aaa')
} );
export default router;
