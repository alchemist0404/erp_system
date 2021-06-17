import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	margin: {
		margin: theme.spacing(1),
	},
	textField: {
		width: '100%',
		margin: theme.spacing(1, 0),
	},
	alertStyle: {
		position: 'absolute',
		top: theme.spacing(2),
	},
}))

export default useStyles;