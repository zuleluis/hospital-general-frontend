import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Button, 
  Typography 
} from '@material-ui/core';
import GetApp from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: theme.spacing(2),
  },
  downloadContent: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(6),
    padding: theme.spacing(2),
    borderBottom: '1px solid #ccc',
    width: "400px",
    margin: 'auto'
  },
  buttonContent: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(4)
  },
  icon: {
    marginLeft: theme.spacing(1)
  }
}));

export default function PasoCuatro() {
  const styles = useStyles();

  return (
    <div>      
      <Typography variant="h6" align="center" className={styles.text}>
        ¡Encuesta finalizada con éxito!
      </Typography>

      <div className={styles.downloadContent}>
        <GetApp/>
        <Typography className={styles.icon} align="center">Descargar archivo</Typography>
      </div>
      
      <div className={styles.buttonContent}>
          <Button variant="contained" color="secondary" size="large">
            Descargar
          </Button>
        </div>
    </div>
  );
}