import AppBar from './views/AppBar';
import MenuDrawer from './views/Drawer';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDrawer = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppBar data = "Hello" menuCallBack = {handleDrawer}/>
        <MenuDrawer open={menuOpen} menuCallBack = {handleDrawer}/>
      </ThemeProvider>
       <h1>Mi primer web con React.js  {menuOpen? "True":"False"}</h1>
    </div>
  );
}

export default App;
