import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Paciente = db.define('pacientes',{
    noExpediente:{
        type: DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING
    },
    apellidos:{
        type: DataTypes.STRING
    },
    fechaNac:{
        type: DataTypes.DATE
    },
    sexo:{
        type: DataTypes.INTEGER
    },
    idEscolaridad:{
        type: DataTypes.INTEGER
    },
    idOcupacion:{
        type: DataTypes.INTEGER
    },
    idReligion:{
        type: DataTypes.INTEGER
    },
    
},{
    freezeTableName: true
});
 
export default Paciente;