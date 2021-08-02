import { Typography } from '@material-ui/core';
import React from 'react';
import DatosPrincipales from '../historiaClinica/datosSuperior';
import EncuestaLinearStepper from './encuesta';

const data = {
  nombre: "Marco Antonio Arcos Sánchez",
  edad: 21,
  sexo: "Masculino",
}

export default function PaginaEncuestaSeguimiento() {

  return (
    <div>      
      <DatosPrincipales data = {data}/>
      <div>
        <Typography variant="h6" align="center">ENCUESTA DE SEGUIMIENTO A PACIENTES CON VASECTOMÍA SIN BISTURÍ </Typography>
        <EncuestaLinearStepper/>
      </div>
    </div>
  );
}