import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(2, 2) + "!important",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(224, 224, 224, 1)"
    },
    spacing: {
        padding: theme.spacing(0, .5)
    },
    allowChipIcon: {
        color: "green"
    },
    blockChipIcon: {
        color: "crimson"
    },
    verifyChipIcon: {
        color: "green"
    },
    nonVerifyChipIcon: {
        color: "grey"
    },
    chipIcon: {
        fontSize: 17,
    },
    tools: {
        padding: 4
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 2
    },
    formControl: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 50,
        "& > div": {
            padding : theme.spacing(0, 0.5)
        }
    },
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems : "center",
        padding : theme.spacing(2, 5)
    },
    workWrap: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    }
}));
export default useStyles;