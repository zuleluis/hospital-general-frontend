import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  datosPrincipales: {
    paddingLeft: theme.spacing(4), 
  }
}));

function DatosPrincipales(props) {
  const { data } = props;
  const styles = useStyles();

  return (
    <div className={styles.datosPrincipales}>
      <Typography>Nombre del paciente: {data.nombre} </Typography>
      <Typography>Edad: {data.edad} Años &nbsp;&nbsp;&nbsp;&nbsp; Sexo: {data.sexo}</Typography>
    </div>
  );
}

export default DatosPrincipales;