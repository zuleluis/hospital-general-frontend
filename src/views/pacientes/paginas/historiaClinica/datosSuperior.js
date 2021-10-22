import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import axios from  'axios';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  datosPrincipales: {
    paddingLeft: theme.spacing(4), 
  }
}));

function DatosPrincipales(props) {
  //const { data } = props;
  const [ datos, setDatos] = React.useState({});
  const [ loaded, setLoaded] = React.useState(false);
  const styles = useStyles();

  const fetchData = () => {
    return axios.get("http://localhost:3001/pacientes")
      .then((response) => {
        setLoaded(true);
        setDatos(response.data[0]);
        console.log(response.data[0]);
      })
      .catch( err => console.log("Ha ocurrido un error "+err));
  }

  useEffect(()=>{
    fetchData();
  },[]);

  if (loaded) {
    return (
      <div className={styles.datosPrincipales}>
        <Typography>Nombre del paciente: {datos.Nombre} {datos.Apellidos} </Typography>
        <Typography>Edad: {datos.FechaNacimiento} Años &nbsp;&nbsp;&nbsp;&nbsp; Sexo: {datos.Sexo}</Typography>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }
}

export default DatosPrincipales;