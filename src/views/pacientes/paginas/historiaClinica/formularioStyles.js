import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fullWidth: {
      width: "100%",
    },
    justify: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between"
    },
    input: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(2)
    },
    input15: {
      width: `calc(15% - ${theme.spacing(2)}px)`
    },
    input25: {
      width: `calc(25% - ${theme.spacing(2)}px)`
    },
    input30: {
      width: "30%",
    },
    input50: {
      width: "46%",
    },
    input60: {
      width: "62%",
    },
    line: {
      marginTop: theme.spacing(2),
      color: theme.palette.secondary.dark,
      borderBottom: `1px solid ${theme.palette.divider}`,
      paddingLeft: theme.spacing(2),
    },
    contenedorButton: {
      padding: theme.spacing(2),
      display: 'flex',
      justifyContent: "center",
    },
    radioGroup: {
      display: "block !important",
    },
    radioButton: {
      justifyContent: "center",
    }
  }));
  
export default useStyles;