/*jshint esversion: 6 */
import React, {useEffect, useState} from "react";
import clsx from 'clsx';
import { useDispatch } from 'react-redux'

// ** Import Material-Ui Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import InputBase from '@material-ui/core/InputBase';

// ** Import Material Ui Icons 
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import FaceIcon from '@material-ui/icons/Face';
import RestoreIcon from '@material-ui/icons/Restore';

// import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';

import jwt from 'jwt-simple';

// ** Import SVG Icons
import BarIcon from "../assets/icons/bar.svg";
import SearchIcon from "../assets/icons/search.svg";
// import DefaultMenuIcon from "../assets/icons/browse.svg";

import { session_expire, session_store } from "../redux/actions/auth";
import { games_store } from "../redux/actions/games";
import { users_store, user_id_store } from "../redux/actions/users";
import { rtp_store } from "../redux/actions/rtp";
import config from '../config/config.json';

// ** Import Actions
import { History } from "../theme";
// ** Import Assets
import useStyles from "../assets/styles";

// import Logo from "../assets/img/logo.png";
import StellarImage from "../assets/img/stellar.png";

// ** Import Other Components
import { Scrollbars } from 'react-custom-scrollbars';

// ** import API from hooks
import { API } from '../hooks'
import { useHistory } from "react-router-dom";

const Header = ({ open, openDrawer, closeDrawer }) => {
    // ** Declare Maintainers
    const classes = useStyles.header();
    // ** Declare States
    const [values, setValues] = useState({});
    // const [openFlag, setOpenFlag] = useState(false);

    const isSession = localStorage.getItem("auth") === null || localStorage.getItem("auth") === "" ? false : true;
    const dispatch = useDispatch();
    const history = useHistory();

    // ** Declare Actions
    const handleChange = (prop) => {
        setValues({ [prop]: true });
        const activeDrawers = JSON.stringify({[prop]:true});
        sessionStorage.setItem("activeDrawers", activeDrawers);
    };
    const handleDrawer = () => {
        if(open){
            closeDrawer();
        } else {
            openDrawer();
        }
    }
    const gotoPage = (page, userId = null) => {
        dispatch(user_id_store( userId ))
        History.push(`/${page}`);
    };
    const logout = () => {
        dispatch(session_expire())
        history.push('signin')
    };

    // let pageName = History.location.pathname.split("/");
    // alert(pageName);
    // pageName.splice(0, 1);


    // ** Declare Effects
    useEffect(() => {
        const activeDrawers = sessionStorage.getItem("activeDrawers");
        if(activeDrawers)
            setValues(JSON.parse(activeDrawers));
        else
            setValues({ activeDashboard : true });

        try {
            var encryptedData = sessionStorage.getItem('token');
            var decodedData = jwt.decode(encryptedData, config.jwt_secret)

            dispatch(session_store( decodedData ))
        } catch(err) {
            // console.log(err);
        }

    // eslint-disable-next-line
    }, []);

    const getGamesData = async () => {
        var games = { data: [] }
        games = await API.getGames();
        dispatch(games_store( games.data ))
    }

    const getRtpData = async () => {
        var rtp = { data: [] }
        rtp = await API.getRtp();
        dispatch(rtp_store( rtp.data ))
    }

    const getUsersData = async () => {
        var users = { data: [] }
        users = await API.getUsers();
        dispatch(users_store( users.data ))
    }

    useEffect(() => {
        getGamesData()
        getRtpData()
        getUsersData()
    // eslint-disable-next-line
    }, [])
    
    // ** Render Components
    return(
        <>
            <AppBar
                position="static"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.toolbar}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <img src={SearchIcon} alt={"Search Icon"} />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.spacing} />
                    {
                        isSession === true ?
                        <Button 
                            href="#" 
                            variant="outlined" 
                            className={classes.link}
                            onClick={() => logout()}
                        >
                            Logout
                        </Button> : ""
                    }
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, {
                        [classes.drawerPaperClose] : !open
                    }),
                }}
            >
                <div className={classes.drawerHeader}>
                    <img src={StellarImage} alt="logo" className={clsx({
                        [classes.hide] : !open
                    })} />
                    <IconButton onClick={handleDrawer}>
                        <img src={BarIcon} alt={"Bar Icon"} className={classes.barStyle} />
                    </IconButton>
                </div>
                <Scrollbars className={classes.scrollbar}>
                    <List className={classes.list}>

                        <ListItem 
                            button 
                            className={clsx(classes.listItem, {
                                [classes.active] : values["users"]
                            })}
                            
                            onClick={() => {
                                handleChange("users")
                                gotoPage("users")
                            }}
                        >
                            <ListItemIcon className={classes.listItemIcon}>
                                <FaceIcon />
                            </ListItemIcon>
                            <ListItemText className={clsx(classes.listItemText, {
                                [classes.hide] : !open
                            })} primary="Users" />
                        </ListItem>

                        <ListItem 
                            button 
                            className={clsx(classes.listItem, {
                                [classes.active] : values["games"]
                            })}
                            
                            onClick={() => {
                                handleChange("games")
                                gotoPage("games")
                            }}
                        >
                            <ListItemIcon className={classes.listItemIcon}>
                                <SportsEsportsIcon />
                            </ListItemIcon>
                            <ListItemText className={clsx(classes.listItemText, {
                                [classes.hide] : !open
                            })} primary="Games" />
                        </ListItem>

                        <ListItem 
                            button 
                            className={clsx(classes.listItem, {
                                [classes.active] : values["rtp"]
                            })}
                            
                            onClick={() => {
                                handleChange("rtp")
                                gotoPage("rtp")
                            }}
                        >
                            <ListItemIcon className={classes.listItemIcon}>
                                <QueuePlayNextIcon />
                            </ListItemIcon>
                            <ListItemText className={clsx(classes.listItemText, {
                                [classes.hide] : !open
                            })} primary="RTP" />
                        </ListItem>

                        <ListItem 
                            button 
                            className={clsx(classes.listItem, {
                                [classes.active] : values["profit"]
                            })}
                            
                            onClick={() => {
                                handleChange("profit")
                                gotoPage("profit")
                            }}
                        >
                            <ListItemIcon className={classes.listItemIcon}>
                                <AccountBalanceIcon />
                            </ListItemIcon>
                            <ListItemText className={clsx(classes.listItemText, {
                                [classes.hide] : !open
                            })} primary="Profit" />
                        </ListItem>
                        
                        <ListItem 
                            button 
                            className={clsx(classes.listItem, {
                                [classes.active] : values["bet-history"]
                            })}
                            
                            onClick={() => {
                                handleChange("bet-history")
                                gotoPage("bet-history")
                            }}
                        >
                            <ListItemIcon className={classes.listItemIcon}>
                                <RestoreIcon />
                            </ListItemIcon>
                            <ListItemText className={clsx(classes.listItemText, {
                                [classes.hide] : !open
                            })} primary="Bet History" />
                        </ListItem>

                        {/* <ListItem 
                            button 
                            className={clsx(classes.listItem, {
                                [classes.active] : values["profit"]
                            })}
                            onClick={() => setOpenFlag(!openFlag)}
                        >
                            <ListItemIcon className={classes.listItemIcon}>
                                <AccountBalanceIcon />
                            </ListItemIcon>
                            <ListItemText className={clsx(classes.listItemText, {
                                [classes.hide] : !open
                            })} primary="Bank" />
                            {openFlag ? <ExpandLess  className={clsx(classes.listItemText, {
                                        [classes.hide] : !open
                                    })} /> : <ExpandMore  className={clsx(classes.listItemText, {
                                        [classes.hide] : !open
                                    })} />}
                        </ListItem>
                        <Collapse in={openFlag} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {
                                    userdata.map((item, index) => {
                                        return <ListItem 
                                                    key={index}
                                                    button 
                                                    className={classes.listItem}
                                                    onClick={() => {
                                                        handleChange("profit")
                                                        gotoPage("profit", item._id)
                                                    }}
                                                >
                                                    <ListItemIcon className={classes.listItemIcon}>
                                                        <StarBorder />
                                                    </ListItemIcon>
                                                    <ListItemText className={clsx(classes.listItemText, {
                                                        [classes.hide] : !open
                                                    })} primary={item.firstName} />
                                                </ListItem>
                                    })
                                }
                            </List>
                        </Collapse> */}

                        {/* <ListItem button
                            className={clsx(classes.listItem, {
                                [classes.active] : values["endpoints"]
                            })}
                            onClick={() => {
                                handleChange("endpoints")
                                gotoPage("endpoints")
                            }}
                        >
                            <ListItemIcon className={classes.listItemIcon}>
                                <img src={DefaultMenuIcon} alt={"Endpoints Icon"} />
                            </ListItemIcon>
                            <ListItemText className={clsx(classes.listItemText, {
                                [classes.hide] : !open
                            })} primary="Endpoints" />
                        </ListItem> */}

                    </List>
                </Scrollbars>
            </Drawer>
        </>
    )
}
export default Header;