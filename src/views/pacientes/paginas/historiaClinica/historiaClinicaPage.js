import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VerticalTabs from './formularioHC';
import DatosPrincipales from './datosSuperior';

const data = {
  nombre: "Marco Antonio Arcos Sánchez",
  edad: 21,
  sexo: "Masculino",
}

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(2),
    border: "1px solid black",
    borderRadius: 5,
    padding: 8,
  }
}));

function PaginaHistoriaClinica() {
  const styles = useStyles();

  return (
    <div>
        <DatosPrincipales data = {data}/>
        <div  className ={styles.form}>
          <VerticalTabs/>
        </div>
    </div>
  );
}

export default PaginaHistoriaClinica;