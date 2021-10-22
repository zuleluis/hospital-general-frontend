import React from 'react';
import {
  AccordionDetails,
  Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    padding: theme.spacing(5),
    justifyContent: "space-around",
  }
}));

function Seccion_encuestaSeguimiento() {
  const styles = useStyles();

  return (
    <AccordionDetails className={styles.center}>
      <Link to="idpaciente/encuesta-seguimiento">
        <Button variant="outlined" size="large" >
          Abrir Encuesta de Seguimiento
        </Button>
      </Link>
      <Button variant="outlined" size="large" startIcon={<GetAppRoundedIcon/>}>
        Descargar Encuesta de Seguimiento
      </Button>
    </AccordionDetails>
  );
}

export default Seccion_encuestaSeguimiento;