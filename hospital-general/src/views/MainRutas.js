import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pacientes from './pacientes/Pacientes';
import PaginaHistoriaClinica from './pacientes/paginas/historiaClinica/historiaClinicaPage';
import Home from './Home';
import ListadoPacientes from './pacientes/paginas/listadoPacientes';

function MainRoutes() {

  return (
    <Switch>
      <Route path="/pacientes">
        <Route exact path="/pacientes">
          <ListadoPacientes/>
        </Route>
        <Route exact path="/pacientes/idpaciente">
          <Pacientes/>
        </Route>
        <Route path="/pacientes/idpaciente/historia-clinica">
          <PaginaHistoriaClinica/>
        </Route>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="*">
        <h1>Ruta no encontrada</h1>
      </Route>
    </Switch>
  );
}

export default MainRoutes;