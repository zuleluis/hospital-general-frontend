import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Typography
} from '@material-ui/core';

const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    title: {
      flex: '1 1 100%',
    },
  }));

export default function EnhancedTableToolbar () {
    const classes = useToolbarStyles();
  
    return (
      <Toolbar
        className={clsx(classes.root)}
      >
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Listado de pacientes
        </Typography>
        
      </Toolbar>
    );
  };