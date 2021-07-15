import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List, 
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  img: {
    marginRight: 30,
    width: 25,
  }
});

function TemporaryDrawer(props) {
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    props.menuCallBack();
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
       <List>
        <ListItem button key="pacientes">
          <img className={classes.img} alt="ico-pacientes" src="/img/paciente.svg" />
          <ListItemText primary="Pacientes"/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="doctor">
        <img className={classes.img} alt="ico-medicos" src="/img/medico.svg" />
          <ListItemText primary="Doctores"/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="enfermera">
          <img className={classes.img} width="25" alt="ico-enfermeras" src="/img/enfermera.svg" />
          <ListItemText primary="Enfermeras"/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="salir">
          <ListItemIcon>
            <ExitToAppIcon/>
          </ListItemIcon>
          <ListItemText primary="Salir"/>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer open={props.open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default TemporaryDrawer;