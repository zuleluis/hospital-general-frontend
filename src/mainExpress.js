const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const pacientesRouter = require('./routes/pacientesRouter');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

const publicPath = path.resolve(__dirname, '../public');
//app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log("El servidor esta corriendo en el puerto "+PORT);
});

app.use('/', (req, res) => {
    console.log(publicPath+'\index.html');
    //res.send("Hola mundo");
    res.sendFile(publicPath+'\\index.html');
});
app.use("/pacientes",pacientesRouter);

app.use((req, res) => {
  res.status(404).send({data: "No encontrado"});
});
