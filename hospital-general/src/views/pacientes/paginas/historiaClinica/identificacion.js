import React from 'react';
import useStyles from './formularioStyles';
import { 
  Button, 
  TextField, 
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import clsx from 'clsx';


export default function Identificacion() {
  const [escolaridad, setEscolaridad] = React.useState('');
  const [religion, setReligion] = React.useState('');
  const style = useStyles();

  return (
    <div className={style.fullWidth}>
      <form className={style.fullWidth}>
        <div className={style.justify}>
          <TextField className={clsx(style.input, style.input30)} name="noExpediente" label="Número de expediente" variant="outlined" required type="number" />
          <TextField className={clsx(style.input, style.input30)} name="fecha" label="Fecha de elaboración de la Historia Clínica" variant="outlined" required type="date" InputLabelProps={{shrink: true}}/>
          
        </div>
        
        <Typography className={style.line} variant="h6">Información básica</Typography>
        <div className={style.justify}>
          <TextField label="Nombre de paciente" name="nombre" required className={ clsx(style.input, style.input50)} variant="outlined" />
          <TextField label="Apellidos" name="apellidos" className={clsx(style.input, style.input50) } variant="outlined" required/>
          <TextField label="Fecha de nacimiento" name="fechaNacimiento" type="date" className={clsx(style.input, style.input30) } variant="outlined" required InputLabelProps={{shrink: true}}/>
          <TextField label="Edad" name="edad" type="number" className={clsx(style.input, style.input30) } variant="outlined" disabled InputLabelProps={{shrink: true}} />
          <TextField label="IVS" name="IVS" className={clsx(style.input, style.input30) } variant="outlined"/>

          <FormControl variant="outlined" className={clsx(style.input, style.input30)}>
            <InputLabel id="escolaridad-label" required>Escolaridad</InputLabel>
            <Select
              labelId="escolaridad-label"
              id="demo-simple-select-outlined"
              value={escolaridad}
              name="escolaridad"
              onChange={event => setEscolaridad(event.target.value)}
              label="Escolaridad"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Preescolar</MenuItem>
              <MenuItem value={2}>Primaria</MenuItem>
              <MenuItem value={3}>Secundaria</MenuItem>
              <MenuItem value={4}>Licenciatura</MenuItem>
              <MenuItem value={5}>Maestría o más</MenuItem>
            </Select>
          </FormControl>

          <TextField label="Ocupación Actual" className={clsx(style.input, style.input30) } variant="outlined" required/>

          <FormControl variant="outlined" className={clsx(style.input, style.input30)}>
            <InputLabel id="religion-label" required>Religión</InputLabel>
            <Select
              labelId="religion-label"
              id="demo-simple-select-outlined"
              value={religion}
              name="religion"
              onChange={event => setReligion(event.target.value)}
              label="Religión"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Católica</MenuItem>
              <MenuItem value={2}>Cristiana</MenuItem>
              <MenuItem value={3}>Ateo</MenuItem>
              <MenuItem value={4}>Otra</MenuItem>
              <MenuItem value={5}>Prefiero no decirlo</MenuItem>
            </Select>
          </FormControl>

          <TextField label="Lugar de referencia" name="lugarReferencia" fullWidth className={clsx(style.input, style.input100) } variant="outlined"/>
        </div>
        
        <Typography className={style.line} variant="h6">Información familiar</Typography>
        <div className={style.justify}>
          <TextField label="Nombre de la esposa" name="nombreEspsoa" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
          <TextField label="Años de relación" name="yearsRelacion" type="number" className={clsx(style.input, style.input30) } variant="outlined" required/>
          <TextField label="Número de hijos vivos" name="hijosvivos" type="number" className={clsx(style.input, style.input30) } variant="outlined" required/>
          <TextField label="Edad del menor" name="edadMenor" type="number" className={clsx(style.input, style.input30) } variant="outlined" required/>
        </div>

        <Typography className={style.line} variant="h6">Domicilio y contacto</Typography>
        <div className={style.justify}>
          <TextField label="Domicilio actual" name="domicilioActual" className={clsx(style.input60, style.input)} variant="outlined" required/>
          <TextField label="Teléfono" name="telefono" className={clsx(style.input, style.input30) } variant="outlined" required/>
          <TextField label="Domicilio de trabajo" name="domicilioTrabajo" className={clsx(style.input60, style.input)} variant="outlined"/>
          <TextField label="Teléfono 2" name="telefono2" className={clsx(style.input, style.input30) } variant="outlined"/>
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
