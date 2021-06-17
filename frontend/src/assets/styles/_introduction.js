import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        padding: theme.spacing(5)
    },
    introductionTitle: {
        padding: theme.spacing(5),
        textAlign: 'center',
    },
    visitAPIkeyButton: {
        fontSize: theme.spacing(3),
    },
}))

export default useStyles;