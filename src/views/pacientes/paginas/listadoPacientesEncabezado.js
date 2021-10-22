import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Toolbar,
  Typography,
  InputAdornment,
  Button,
  IconButton
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ClearRounded from '@material-ui/icons/ClearRounded';

const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      display: "block",
    },
    title: {
      flex: '1 1 100%',
    },
    search: {
      marginTop: theme.spacing(2)
    },
    button: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(1),
      color: "white",
    },
    iconButton: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1),
      color: "red",
    }
  }));

export default function EnhancedTableToolbar (props) {
    const classes = useToolbarStyles();
  
    return (
      <Toolbar
        className={clsx(classes.root)}
      >
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Listado de pacientes
        </Typography>
        
        <TextField size="small" variant="outlined" label="Busqueda:" placeholder="Buscar..."
          className={classes.search}
          onKeyDown={props.handleEnterSearch}
          value={props.search}
          onChange={props.handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon/>
              </InputAdornment>
            ),
          }}
        />
        <IconButton className={classes.iconButton} aria-label="informacion" color="inherit"
          onClick={props.handleCancelSearch}>
          <ClearRounded/>
        </IconButton>
        <Button className={classes.button} variant="contained" color="secondary" startIcon={<PersonAddIcon/>}>Agregar paciente</Button>
      </Toolbar>
    );
  };