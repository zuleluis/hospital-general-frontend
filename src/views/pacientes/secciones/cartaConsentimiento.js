import React from 'react';
import {
  AccordionDetails,
  Button,
  TextField
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(2),
  },
  fullWidth: {
    width: "100%",
  },
  marginLeft: {
    marginLeft: theme.spacing(2),
  }
  
}));

function Seccion_cartaConsentimiento() {
  const classes = useStyles();

  return (
    <AccordionDetails>
      <form  autoComplete="off" className={classes.fullWidth}>
        <div className={classes.center}>
          <TextField id="outlined-basic" variant="outlined"
            fullWidth required
            label="Nombre del (la) Testigo 1" />
          <TextField id="outlined-basic" variant="outlined" 
            fullWidth required
            className={classes.marginLeft}
            label="Nombre del (la) Testigo 2" />
        </div>
        <div className={classes.center}>
          <TextField id="outlined-basic" variant="outlined" 
            fullWidth required
            label="Personal que proporcionó la consejería" />
          <TextField id="outlined-basic" variant="outlined"
            fullWidth required
            className={classes.marginLeft}
            label="Nombre de la Médica o el Médico tratante que otorgó el método" />
        </div>
        <div className={classes.center}>
          <Button variant="outlined" size="large" startIcon={<GetAppRoundedIcon/>}
            type="submit">
            Generar Carta
          </Button>
        </div>
      </form>
    </AccordionDetails>
  );
}

export default Seccion_cartaConsentimiento;