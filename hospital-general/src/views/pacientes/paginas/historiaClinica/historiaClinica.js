import React from 'react';
import useStyles from './formularioStyles';
import { 
  Button, 
  TextField, 
  Typography,
} from '@material-ui/core';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import clsx from 'clsx';


export default function HistoriaClinicaEF() {
  const style = useStyles();

  return (
    <div className={style.fullWidth}>
      <form className={style.fullWidth}>
        <div className={style.justify}>
          <TextField className={clsx(style.input, style.input30)} name="noExpediente" label="Número de expediente" variant="outlined" required type="number" />
          <TextField className={clsx(style.input, style.input30)} name="fecha" label="Fecha de elaboración de la Historia Clínica" variant="outlined" required type="date" InputLabelProps={{shrink: true}}/>
        </div>
        
        <Typography className={style.line} variant="h6">
          Antecedentes
        </Typography>
        <div className={style.justify}>
          <TextField label="Antecedentes heredo-familiares"
            name="antecedentesHeredo" className={clsx(style.input, style.input30) } variant="outlined" required/>

          <TextField label="Antecedentes personales no patológicos (higiene, alimentación, deportes)"
            name="antecedentesPersonalesNP" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
            
          <TextField label="Antecedentes personales patológicos"
            helperText="(Antecedentes alérgicos, traumatismo en área genital, infecciones urinarias, parotiditis. ITS, SIDA)."
            name="antecedentesPersoanlesP" fullWidth className={clsx(style.input, style.input100) } variant="outlined" required/>
        </div>

        <Typography className={style.line} variant="h6">
          Exploración
        </Typography>
        <div className={style.justify}>
          
          <div className={clsx(style.fullWidth, style.justify)}>
            <TextField label="TA" 
              name="TA" className={clsx(style.input, style.input15) } variant="outlined"/>
            <TextField label="PESO" 
              name="Peso" className={clsx(style.input, style.input15) } variant="outlined"/>
            <TextField label="TALLA" 
              name="Talla" className={clsx(style.input, style.input15) } variant="outlined"/>
            <TextField label="FC" 
              name="FC" className={clsx(style.input, style.input15) } variant="outlined"/>
            <TextField label="FR" 
              name="FR" className={clsx(style.input, style.input15) } variant="outlined"/>
            <TextField label="TEM" 
              name="TEM" className={clsx(style.input, style.input15) } variant="outlined"/>
          </div>
          
          <TextField label="Exploración de órganos genitales "
            name="exploracionOrganos" className={clsx(style.input, style.input60) } variant="outlined" required/>
          
          <TextField label="Tipo de paciente"
            name="tipoPaciente"  className={clsx(style.input, style.input100) } variant="outlined" required/>
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
