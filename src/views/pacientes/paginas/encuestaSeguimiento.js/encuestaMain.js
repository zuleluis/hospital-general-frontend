import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DatosPrincipales from '../historiaClinica/datosSuperior';
import EncuestaLinearStepper from './encuesta';

const data = {
  nombre: "Marco Antonio Arcos Sánchez",
  edad: 21,
  sexo: "Masculino",
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  titulo: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main
  },
  stepper: {
    width: '100%',
    backgroundColor: "white",
  }
}));

export default function PaginaEncuestaSeguimiento() {
  const styles = useStyles();

  return (
    <div>
      <DatosPrincipales data = {data}/>
      <div className={styles.root}>
        <Typography className={styles.titulo} variant="h6" align="center">ENCUESTA DE SEGUIMIENTO A PACIENTES CON VASECTOMÍA SIN BISTURÍ </Typography>
        <EncuestaLinearStepper className={styles.stepper}/>
      </div>
    </div>
  );
}