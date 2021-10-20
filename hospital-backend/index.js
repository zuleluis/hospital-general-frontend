import express from "express";
import db from "./src/config/database.js";
import pacientesRoutes from "./src/routes/index.js";
import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/pacientes', pacientesRoutes);
 
app.listen(5000, () => console.log('Server running at port 5000'));