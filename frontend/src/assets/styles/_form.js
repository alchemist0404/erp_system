import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
}));
export default useStyles;