import React from 'react';
import clsx from 'clsx';
import {
  TextField,
  Button,
  Radio, 
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Fade
} from '@material-ui/core';
import useStyles from '../historiaClinica/formularioStyles';
import SaveOutlined from '@material-ui/icons/SaveOutlined';

export default function PasoDos(props) {
  const style = useStyles();
  const [referido, setReferido] = React.useState('no');
  const [trato, setTrato] = React.useState('');
  const [atencionBrindada, setAtencionBrindada] = React.useState('');
  const [complicacion, setComplicacion] = React.useState('');

  return (
    <div>
      <Fade in>
      <form>
        <div className={style.justify}>
          <TextField label="¿Como se informó de la Vasectomía Sin Bisturí?"
            name="comoInformo" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
          <TextField label="¿Quien le dio la orientación-conserjería en Vasectomía Sin Bisturí? "
            name="fuenteOrientacion" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>

          <FormControl fullWidth component="fieldset" required className={clsx(style.input)}>
            <FormLabel component="legend">¿Fue referido de un Centro de Salud?</FormLabel>
            <RadioGroup className={style.radioGroup} aria-label="referido" 
              name="referido" value={referido} onChange={(event) => setReferido(event.target.value)}>
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="si" label="Sí" />
              <TextField label="¿Cuál Centro de Salud?" disabled = {referido.match('no')}
                name="referidoCentroSalud" className={clsx(style.input, style.input30) } variant="outlined" size="small"/>
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="no" label="No"/>
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth component="fieldset" className={clsx(style.input)} required>
            <FormLabel component="legend">
              ¿Cómo fue el trato del personal desde su llegada hasta que salió del servicio en donde le realización la Vasectomía Sin Bisturí?
            </FormLabel>
            <RadioGroup className={style.radioGroup} aria-label="referido" 
              name="nivelTrato" value={trato} onChange={(event) => setTrato(event.target.value)}>
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input25, style.radioButton) }
                value="excelente" label="Excelente"/>
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input25, style.radioButton) }
                value="bueno" label="Bueno"/>
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input25, style.radioButton) }
                value="regular" label="Regular"/>
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input25, style.radioButton) }
                value="malo" label="Malo"/>
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth component="fieldset" required className={clsx(style.input)}>
            <FormLabel component="legend">¿Quedó satisfecho con la atención brindada durante la cirugía?</FormLabel>
            <RadioGroup className={style.radioGroup} aria-label="atencionBrindada" 
              name="atencionBrindada" value={atencionBrindada} onChange={event => setAtencionBrindada(event.target.value)}>
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="si" label="Sí" />
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="no" label="No"/>
              <TextField label="¿Porqué?" disabled = {!atencionBrindada.match('no')}
                name="atencionBrindadaPorque" className={clsx(style.input, style.input30) } variant="outlined" size="small"/>
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth component="fieldset" required className={clsx(style.input)}>
            <FormLabel component="legend">¿Tuvo alguna complicación después de la cirugía? </FormLabel>
            <RadioGroup className={style.radioGroup} aria-label="complicacionDespues" 
              name="complicacion" value={complicacion} onChange={(event) => setComplicacion(event.target.value)}>
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="si" label="Sí" />
              <TextField label="Cuál?" disabled = {!complicacion.match('si')}
                name="complicacionCual" className={clsx(style.input, style.input30) } variant="outlined" size="small"/>
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="no" label="No"/>
            </RadioGroup>
          </FormControl>
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