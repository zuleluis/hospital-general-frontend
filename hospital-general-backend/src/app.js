const express = require('express');
const app = express();
const cors = require('cors');

const pacientesRouter = require('./routes/pacientesRouter');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("El servidor esta corriendo en el puerto "+PORT);
});

app.use("/pacientes",pacientesRouter);

app.use((req, res) => {
  res.status(404).send({data: "No encontrado"});
});
