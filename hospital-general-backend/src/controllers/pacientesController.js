const fs = require('fs');
const path = require('path');

const pacientesFilePath = path.join(__dirname, '../databases/pacientes.json');
const pacientes = JSON.parse(fs.readFileSync(pacientesFilePath, 'utf-8'));

const pacientesController = {
    index: (req, res) => {
        console.log("Peticion");
        res.status(200).send(pacientes);
    }
}

module.exports = pacientesController;