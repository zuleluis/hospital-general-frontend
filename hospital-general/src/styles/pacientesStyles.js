import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightRegular,
      color: "white",
    },
    head: {
      backgroundColor: "#5CC3C8",
    },
    contenedor: {
      backgroundColor: "white",
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: theme.spacing(4),
    },
    datoSuperior: {
      marginTop: theme.spacing(4),
    }
  }));

export default useStyles;