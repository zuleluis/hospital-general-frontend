import React from 'react';
import useStyles from './formularioStyles';
import { 
  Button, 
  TextField, 
  Typography,
} from '@material-ui/core';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import clsx from 'clsx';


export default function MotivoSolicitud() {
  const style = useStyles();

  return (
    <div className={style.fullWidth}>
      <form className={style.fullWidth}>
        <div className={style.justify}>
          <TextField className={clsx(style.input, style.input30)} name="noExpediente" label="Número de expediente" variant="outlined" required type="number" />
          <TextField className={clsx(style.input, style.input30)} name="fecha" label="Fecha de elaboración de la Historia Clínica" variant="outlined" required type="date" InputLabelProps={{shrink: true}}/>
        </div>
        
        <Typography className={style.line} variant="h6">
          Motivos de solicitud
        </Typography>
        <div className={style.justify}>
          <TextField label="¿Cuál es la causa más importante para no tener más hijos? "
            name="motivoNoHijos" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>

          <TextField label="¿Que opinión tiene su pareja sobre su decisión?"
            name="opinionPareja" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
            
          <TextField label="¿Que método de planificación familiar está utilizando?"
            name="metodoPlanificacionUsado" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
        </div>
        
        <div className={style.contenedorButton}>
          <Button variant="contained" color="secondary"
            type="submit" size="large"
            startIcon={<SaveOutlinedIcon/>}>
            GUARDAR
          </Button>
        </div>
      </form>
    </div>
  );
}
