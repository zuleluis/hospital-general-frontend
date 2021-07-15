import AppBar from './views/AppBar';
import MenuDrawer from './views/Drawer';
import Pacientes from './views/pacientes/Pacientes';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#A7C8F2',
      dark: '#002884',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#5CC3C8',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
	
  root: {
    flexGrow: 1,
  },
  main: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2)
  },
  mainDiv: {
    maxWidth: 1100,
    width: "100%",
    marginBottom: theme.spacing(4)
  },
}));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();

  const handleDrawer = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header>
          <AppBar menuCallBack = {handleDrawer}/>
          <MenuDrawer open={menuOpen} menuCallBack = {handleDrawer}/>
        </header>
        <main className={classes.main}>
          <div className={classes.mainDiv}>
            <Pacientes/>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
