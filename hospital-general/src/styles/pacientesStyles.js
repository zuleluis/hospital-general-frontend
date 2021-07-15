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
    }
  }));

export default useStyles;