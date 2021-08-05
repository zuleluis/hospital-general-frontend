import React from 'react';
import clsx from 'clsx';
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Fade
} from '@material-ui/core';
import useStyles from '../historiaClinica/formularioStyles';
import SaveOutlined from '@material-ui/icons/SaveOutlined';

export default function PasoTres(props) {
  const style = useStyles();
  const [relacionSexual, setRelacionSexual] = React.useState("");
  const [recomendaria, setRecomendaria] = React.useState("");
  const [lugarRecomendado, setLugarRecomendado] = React.useState("");
  const [recomendacion, setRecomendacion] = React.useState("");

  return (
    <div>
      <Fade in>
      <form>
        <div className={style.justify}>

          <FormControl fullWidth component="fieldset" required className={clsx(style.input)}>
            <FormLabel component="legend">Después de los 3 meses de la cirugía su relación sexual es:</FormLabel>
            <RadioGroup className={style.radioGroup} aria-label="relacionSexual" 
              name="relacionSexual" value={relacionSexual} onChange={(event) => setRelacionSexual(event.target.value)}>
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="igual" label="Igual" />
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="mejor" label="Mejor"/>
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="peor" label="Peor"/>
            </RadioGroup>
          </FormControl>

          <TextField fullWidth className={clsx(style.input, style.input100) } variant="outlined" required
            label="Si es peor, ¿por qué?" name="razonPeor" />
          <TextField type="date" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required InputLabelProps={{shrink: true}}
            label="Fecha de negatividad de su espermatoconteo" name="fechaEspNegativa"/>
          <TextField fullWidth className={clsx(style.input, style.input100) } variant="outlined" required
            label="¿Dónde se realizó el espermatoconteo?" name="dondeEsp" />

          <FormControl fullWidth component="fieldset" required className={clsx(style.input)}>
            <FormLabel component="legend">¿Recomendaría la realización de la Vasectomía Sin Bisturí?</FormLabel>
            <RadioGroup className={style.radioGroup} aria-label="recomendaria" 
              name="recomedaria" value={recomendaria} onChange={(event) => setRecomendaria(event.target.value)}>

              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="si" label="Sí" />
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="no" label="No"/>
              <TextField label="¿Porqué?" disabled = {!recomendaria.match('no')}
                name="recomendariaPorque" className={clsx(style.input, style.input30) } variant="outlined" size="small"/>

            </RadioGroup>
          </FormControl>

          <FormControl fullWidth component="fieldset" required className={clsx(style.input)}>
            <FormLabel component="legend">¿Qué lugar le parece mejor para realizarse la Vasectomía Sin Bisturí?</FormLabel>
            <RadioGroup className={style.radioGroup} aria-label="lugarMejor" 
              name="lugarMejor" value={lugarRecomendado} onChange={(event) => setLugarRecomendado(event.target.value)}>

              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="hospital" label="Hospital" />
              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="centroSalud" label="Centro de Salud"/>
              <TextField label="¿Porqué?"
                name="lugarPorque" className={clsx(style.input, style.input30) } variant="outlined" size="small"/>

            </RadioGroup>
          </FormControl>

          <FormControl fullWidth component="fieldset" required className={clsx(style.input)}>
            <FormLabel component="legend">¿Tiene alguna recomendación para mejorar los servicios de salud?</FormLabel>
            <RadioGroup className={style.radioGroup} aria-label="recomendación" 
              name="recomendación" value={recomendacion} onChange={(event) => setRecomendacion(event.target.value)}>

              <FormControlLabel control={<Radio />} className={clsx(style.input, style.input30, style.radioButton) }
                value="si" label="Sí" />
              <TextField label="¿Cuál?" disabled={!recomendacion.match("si")}
                name="cualRecomendacion" className={clsx(style.input, style.input30) } variant="outlined" size="small"/>
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