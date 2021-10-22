import React from 'react';
import {
  AccordionDetails,
  Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    justifyContent: "space-around",
  }
}));

function Seccion_notaMedica() {
  const styles = useStyles();

  return (
    <AccordionDetails className={styles.center}>
      <Button variant="outlined" size="large" >
        Consultas
      </Button>
      <Button variant="outlined" size="large" >
        Notas Médicas
      </Button>
      <Button variant="outlined" size="large" startIcon={<GetAppRoundedIcon/>}>
        Descargar Notas Médicas
      </Button>
    </AccordionDetails>
  );
}

export default Seccion_notaMedica;