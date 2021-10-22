import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton
    }from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
		color: "#540D18",
    textDecoration: "none",
  },
	logo: {
		height: 50,
		marginRight: theme.spacing(2),
	}
}));

function ButtonAppBar(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" >
        <Toolbar>
          <IconButton
            onClick= {() => props.menuCallBack()}
            edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
					<img src="/img/ss.png" alt="logo" className={classes.logo}/>
          <Link className={classes.title} to="/">
            <Typography variant="h6" className={classes.title}>
              HOSPITAL GENERAL BOCA DEL RÍO
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;