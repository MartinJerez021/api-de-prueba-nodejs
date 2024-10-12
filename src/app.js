import express from "express";
import rutasempleados from "./routes/empleados.routes.js";
import rutasindex from "./routes/index.routes.js";
import {PORT} from './config.js'

const app = express();

app.use(express.json());

app.use('/api',rutasempleados);
app.use('/api',rutasindex);

app.use((req, res, next) => {
    res.status(404).json({
        mensaje : 'not found'
    })
})

export default app;