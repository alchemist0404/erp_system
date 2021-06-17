import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(8),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: theme.spacing(12),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
        [theme.breakpoints.down("sm")]:{
            width: "100%",
            margin: 0,
            padding: theme.spacing(1)
        },
    },
}));
export default useStyles;