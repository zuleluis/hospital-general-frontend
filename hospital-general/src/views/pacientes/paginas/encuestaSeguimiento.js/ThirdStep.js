import React from 'react';
import clsx from 'clsx';
import {
  TextField,
  Button,
  Typography
} from '@material-ui/core';
import useStyles from '../historiaClinica/formularioStyles';
import SaveOutlined from '@material-ui/icons/SaveOutlined';

export default function PasoTres(props) {
  const style = useStyles();

  return (
    <div>      
      <Typography variant="h6" align="center">
        Encuesta de seguimiento - Paso 3
      </Typography>  

      <form>
        <div className={style.justify}>
          <TextField label="Si es peor, ¿por qué?"
            name="razonPeor" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
          <TextField label="Fecha de negatividad de su espermatoconteo" type="date"
            name="fechaEspNegativa" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required InputLabelProps={{shrink: true}}/>
          <TextField label="¿Dónde se realizó el espermatoconteo?"
            name="dondeEsp" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
           
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