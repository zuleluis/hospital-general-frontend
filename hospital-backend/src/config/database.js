import { Sequelize } from "sequelize";
 
const db = new Sequelize('hospitalGeneral_BocaDelRio', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;