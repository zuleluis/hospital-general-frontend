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

function Seccion_historiaClinica() {
  const styles = useStyles();

  return (
    <AccordionDetails className={styles.center}>
      <Link to="/pacientes/historia-clinica">
        <Button variant="outlined" size="large" >
          Abrir Historia Clinica
        </Button>
      </Link>
      <Button variant="outlined" size="large" startIcon={<GetAppRoundedIcon/>}>
        Abrir Historia Clinica
      </Button>
    </AccordionDetails>
  );
}

export default Seccion_historiaClinica;