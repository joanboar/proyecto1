import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import joanboarRoutes from "./routes/joanboar.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(joanboarRoutes);
app.listen(PORT);
console.log("Servidor ejecutando en puerto", PORT);