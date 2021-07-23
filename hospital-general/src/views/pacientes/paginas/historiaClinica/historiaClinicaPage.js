import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import VerticalTabs from './formularioHC';

const data = {
  nombre: "Marco Antonio Arcos Sánchez",
  edad: 21,
  sexo: "Masculino",
}

const useStyles = makeStyles((theme) => ({
  datosPrincipales: {
    paddingLeft: theme.spacing(4), 
  },
  form: {
    marginTop: theme.spacing(2),
    border: "1px solid black",
    borderRadius: 5,
    padding: 8,
  }
}));

function PaginaHistoriaClinica() {
  const styles = useStyles();

  return (
    <div>
        <div className={styles.datosPrincipales}>
          <Typography>Nombre del paciente: {data.nombre} </Typography>
          <Typography>Edad: {data.edad} Años &nbsp;&nbsp;&nbsp;&nbsp; Sexo: {data.sexo}</Typography>
        </div>
        <div  className ={styles.form}>
          <VerticalTabs/>
        </div>
    </div>
  );
}

export default PaginaHistoriaClinica;