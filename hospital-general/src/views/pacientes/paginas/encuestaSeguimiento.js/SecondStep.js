import React from 'react';
import clsx from 'clsx';
import {
  TextField,
  Button,
  Typography
} from '@material-ui/core';
import useStyles from '../historiaClinica/formularioStyles';
import SaveOutlined from '@material-ui/icons/SaveOutlined';

export default function PasoDos(props) {
  const style = useStyles();

  return (
    <div>      
      <Typography variant="h6" align="center">
        Encuesta de seguimiento - Paso 2
      </Typography>

      <form>
        <div className={style.justify}>
          <TextField label="¿Como se informó de la Vasectomía Sin Bisturí?"
            name="comoInformo" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
          <TextField label="¿Quien le dio la orientación-conserjería en Vasectomía Sin Bisturí? "
            name="fuenteOrientacion" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
           
        </div>

        <div className={style.contenedorButton}>
          <Button variant="contained" color="secondary"
            size="large" onClick={props.handleComplete}
            startIcon={<SaveOutlined/>}>
            GUARDAR
          </Button>
        </div>
        
      </form>
    </div>
  );
}