import React from 'react';
import clsx from 'clsx';
import {
  TextField,
  Button,
  Fade
} from '@material-ui/core';
import useStyles from '../historiaClinica/formularioStyles';
import SaveOutlined from '@material-ui/icons/SaveOutlined';

export default function PasoUno(props) {
  const style = useStyles();

  return (
    <div>
      <Fade in >
      <form method="Post">
        <div className={style.justify}>
          <TextField className={clsx(style.input, style.input60)} variant="outlined" required
            name="juridiccion" label="Jurisdicción Sanitaria"/>
          <TextField className={clsx(style.input, style.input30)} variant="outlined" required type="date" InputLabelProps={{shrink: true}}
            name="fecha" label="Fecha"/>
        </div>
        <div className={style.justify}>
          <TextField label="Centro de Salud u Hospital donde se realizó la vasectomía"
            name="centroSalud" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
          <TextField label="Nombre completo"
            name="centroSalud" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
          
          <TextField className={clsx(style.input, style.input30) } variant="outlined" disabled InputLabelProps={{shrink: true}} 
            label="Edad" name="edad" type="number" />
          <TextField className={clsx(style.input, style.input30) } variant="outlined" disabled InputLabelProps={{shrink: true}} 
            label="Escolaridad" name="escolaridad" />
          <TextField className={clsx(style.input, style.input30) } variant="outlined" disabled InputLabelProps={{shrink: true}} 
            label="Ocupación" name="ocupacion" />

          <TextField className={clsx(style.input, style.input30) } variant="outlined" disabled InputLabelProps={{shrink: true}} 
            label="No. de Hijos" name="noHijos" type="number" />
          <TextField className={clsx(style.input, style.input30) } variant="outlined" disabled InputLabelProps={{shrink: true}} 
            label="Edad del menor" name="edadMenor" type="number" />
          <TextField className={clsx(style.input, style.input30) } variant="outlined" disabled InputLabelProps={{shrink: true}} 
            label="Religión" name="religion" />
        </div>

        <div className={style.contenedorButton}>
          <Button variant="contained" color="secondary"
            size="large" onClick={props.handleComplete}
            startIcon={<SaveOutlined/>}>
            GUARDAR
          </Button>
        </div>

      </form>
      </Fade>
    </div>
  );
}