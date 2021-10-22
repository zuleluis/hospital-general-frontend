import React from 'react';
import {
  Accordion,
  AccordionSummary,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from '../../styles/pacientesStyles';

import HistoriaClinica from "./secciones/historiaClinica";
import NotaMedica from "./secciones/notaMedica";
import CartaConsentimiento from "./secciones/cartaConsentimiento";
import AvisoImportante from './secciones/avisoImportante';
import EncuestaSeguimiento from './secciones/encuestaSeguimiento';
import ExamenLaboratorio from './secciones/examenesLaboratorio';
import DatosPrincipales from './paginas/historiaClinica/datosSuperior';

const data = {
  nombre: "Marco Antonio Arcos Sánchez",
  edad: 21,
  sexo: "Masculino",
}

function Pacientes() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.contenedor}>
        <DatosPrincipales data={data}/>

        <Accordion className={classes.datoSuperior}>
          <AccordionSummary
            className={classes.head}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Historia Clinica</Typography>
          </AccordionSummary>
          <HistoriaClinica/>
        </Accordion>

        <Accordion>
          <AccordionSummary
            className={classes.head}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Nota Médica</Typography>
          </AccordionSummary>
          <NotaMedica/>
        </Accordion>

        <Accordion>
          <AccordionSummary
            className={classes.head}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Carta de consetimiento</Typography>
          </AccordionSummary>
          <CartaConsentimiento/>
        </Accordion>

        <Accordion>
          <AccordionSummary
            className={classes.head}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography className={classes.heading}>Aviso importante</Typography>
          </AccordionSummary>
          <AvisoImportante/>
        </Accordion>

        <Accordion>
          <AccordionSummary
            className={classes.head}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography className={classes.heading}>Encuesta de seguimiento</Typography>
          </AccordionSummary>
          <EncuestaSeguimiento/>
        </Accordion>

        <Accordion>
        <AccordionSummary
          className={classes.head}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className={classes.heading}>Solicitud de examenes de laboratorio</Typography>
        </AccordionSummary>
        <ExamenLaboratorio/>
      </Accordion>
      </div>
    </React.Fragment>
  );
}

export default Pacientes;