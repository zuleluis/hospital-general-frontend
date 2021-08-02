import React from 'react';
import useStyles from './formularioStyles';
import { 
  Button, 
  TextField, 
  Typography,
} from '@material-ui/core';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import clsx from 'clsx';


export default function ProcedimientoQuirurgico() {
  const style = useStyles();

  return (
    <div className={style.fullWidth}>
      <form className={style.fullWidth}>
        <div className={style.justify}>
          <TextField className={clsx(style.input, style.input30)} name="noExpediente" label="Número de expediente" variant="outlined" required type="number" />
          <TextField className={clsx(style.input, style.input30)} name="fecha" label="Fecha de elaboración de la Historia Clínica" variant="outlined" required type="date" InputLabelProps={{shrink: true}}/>
        </div>
        
        <Typography className={style.line} variant="h6">
          Cirugía
        </Typography>
        <div className={style.justify}>
          <TextField label="Fecha de cirugía" type="date" InputLabelProps={{shrink: true}} 
            name="fechaCirugia" className={clsx(style.input, style.input30) } variant="outlined" required/>

          <TextField label="Nombre del cirujano"
            name="nombreCirujano" className={clsx(style.input, style.input60) } variant="outlined" required/>
            
          <TextField label="Nota Quirúrgica"
            name="notaQuirurgica" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
        
          <TextField label="Patología encontrada"
            name="patologia" fullWidth className={clsx(style.input, style.input100) } variant="outlined"/>
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
