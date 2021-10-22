import React from 'react';
import {
    Button
    }from '@material-ui/core';
import {
    Link
} from 'react-router-dom';

function Home(props) {
  
  return (
    <div >
      <Link to="/pacientes">
        <Button variant="contained" color="primary">Pacientes</Button>
      </Link>
    </div>
  );
}

export default Home;