import React from 'react';
import {
  AccordionDetails,
  TextField,
  Button
} from "@material-ui/core";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  marginTop: {
    marginTop: theme.spacing(2),
  }
  
}));

function Seccion_avisoImportante() {
  const classes = useStyles();

  return (
    <AccordionDetails>
      <form  autoComplete="off" className={classes.fullWidth}>
        <TextField id="outlined-basic" variant="outlined"
          fullWidth required
          className={classes.marginTop}
          label="Médico responsable" />
        
        <Button variant="outlined" size="large" startIcon={<GetAppRoundedIcon/>}
          type="submit" className={classes.marginTop}>
          Generar Aviso
        </Button>
        
      </form>
    </AccordionDetails>
  );
}

export default Seccion_avisoImportante;