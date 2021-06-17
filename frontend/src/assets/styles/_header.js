import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: "#1F2128",
        boxShadow: "0px 2px 10px -8px rgba(0,0,0,0.2), 0px 1px 10px -8px rgba(0,0,0,0.14), 0px 1px 10px -8px rgba(0,0,0,0.12)",
        color: "#6c7293",
        borderBottom: "1px solid rgba(228, 228, 228, .1)",
        padding: theme.spacing(0, 2),
        width: `calc(100% - ${theme.spacing(12)}px)`,
        marginLeft: theme.spacing(12),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.down("sm")]:{
            width: "100%",
            margin: 0
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    scrollbar: {
        height: "calc(100% - 48px - 64px) !important"
    },
    avatar : {
        width: theme.spacing(6),
        height: theme.spacing(6),
        margin: theme.spacing(0, 1),
        borderRadius: "50%",
        marginRight: 0
    },
    hide: {
        display: 'none',
    },
    toolbar: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        padding: theme.spacing(2, 1),
        ...theme.mixins.toolbar
    },
    toolbarNested: {
        minHeight: 50,
        color: "#222"
    },
    breadcrumbs: {
        paddingLeft: theme.spacing(3),
        "& a":{
            display: "flex",
            alignItems: "center",
            textDecoration: "none !important"
        }
    },
    breadCrumbsSeparate: {
        fontSize: 4
    },
    drawer: {
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerPaper: {
        width: drawerWidth,
        border: "none",
        borderRight: "1px solid rgba(228, 228, 228, .1)",
        background: '#1F2128',
        [theme.breakpoints.down("sm")]:{
            width: 0,
            margin: 0
        },
    },
    drawerPaperClose: {
        width: theme.spacing(12),
        [theme.breakpoints.down("sm")]:{
            width: "100%",
            margin: 0
        },
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: theme.spacing(3, 1),
        paddingLeft: theme.spacing(2),
        overflowX: 'hidden',
        color: "white",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        "& > img" : {
           height : 64
        }
    },
    mini: {
        display: "none",
        [theme.breakpoints.down("sm")]:{
            display: "block"
        },
    },
    spacing: {
        flexGrow : 1,
        [theme.breakpoints.down("sm")]:{
            display: "none"
        },
    },
    miniSpacing: {
        display: "none",
        [theme.breakpoints.down("sm")]:{
            display: "block"
        },
    },
    hideMenuIcon: {
        color: "#FFFFFF",
        transform: "rotate(180deg)",
        fontSize: 25,
        transition: theme.transitions.create("color", {
            easing: theme.transitions.easing.easeOut,
            duration: "0.5s",
        }),
        "&:hover":{
            color: "#3597fc"
        }
    },
    list: {
        padding: 0
    },
    listItem: {
        padding: theme.spacing(2.5, 4.5),
        color: "#a2a3b7",
        overflow: "hidden",
        "&:hover": {
            background: "#1b1b28"
        }
    },
    listItemIcon: {
        // color: '#494b74',
        minWidth: 45
    },
    listItemText: {
        color: "#a2a3b7",
        [theme.breakpoints.down("sm")]:{
            display: "block"
        }
    },
    listItemDivider: {
        padding: theme.spacing(2, 5),
        color: "#a2a3b7",
        opacity: .7,
        marginTop: theme.spacing(2)
    },
    listItemDividerCenter: {
        "& > div": {
            display : "flex",
            justifyContent : "center",
            alignItems : "center"
        }
    },
    listItemIconNested: {
        minWidth: 35,
        "& circle":{
            r : 3
        }
    },
    nestedList: {
        paddingLeft: theme.spacing(5.5)
    },
    active: {
        color: "white",
        background: "#1b1b28",
        "& svg": {
            color: "#3597fc"
        },
        "& span":{
            color: "white"
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 3),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        padding: theme.spacing(1, 3)
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    browseMenuIcon: {
        [theme.breakpoints.down("sm")]:{
            display: "none"
        }
    },
    browseMenu: {
        padding: theme.spacing(1, 1),
        "& .MuiSelect-select.MuiSelect-select": {
            paddingRight : 36
        },
        [theme.breakpoints.down("sm")]:{
            display: "none"
        },
    },
    select: {
        color: "#a2a3b7"
    },
    appBarTools: {
        margin: theme.spacing(0, 2),
        [theme.breakpoints.down("sm")]:{
            margin: 0
        },
    },
    barStyle: {
        width: 24,
        height: 24
    }
}));

export default useStyles;