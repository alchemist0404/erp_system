import React, { useEffect, useState } from "react";
import clsx from "clsx";

// ** Import Material-Ui Components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

// ** Import Assets
import useStyles from "../assets/styles";
import LiveGame from "../assets/img/PlayGame/live-game.jpg";
import GameAd from "../assets/img/PlayGame/game-ad.png";
import GameT01 from "../assets/img/PlayGame/game-t01.png";
import Game01 from "../assets/img/PlayGame/game01.png";
import Game02 from "../assets/img/PlayGame/game02.png";
import Game03 from "../assets/img/PlayGame/game03.png";
import Game04 from "../assets/img/PlayGame/game04.png";
import DefaultAvatar from "../assets/img/ChooseGame/avatar.png";

// ** Import SVG Icons
import WifiIcon from "../assets/icons/wifi.svg";
import LikeIcon from "../assets/icons/like.svg";
import ShareIcon from "../assets/icons/share.svg";
import AddCircleOutlinedIcon from "../assets/icons/addCircleOutlined.svg";
import MoreIcon from "../assets/icons/more.svg";
import MoreIconVertical from "../assets/icons/morevertical.svg";
import PlayIcon from "../assets/icons/play.svg";
import SettingIcon from "../assets/icons/setting.svg";
import TheatreIcon from "../assets/icons/theatre.svg";
import FullScreenIcon from "../assets/icons/fullscreen.svg";
import OpenChat from "../assets/icons/openChat.svg";
import Close from "../assets/icons/close.svg";
import Messages from "../assets/icons/videomessages.svg";
import Chat from "../assets/icons/chatavatar.svg";

// **
import { useApi } from "../hooks";

import { useSelector, useDispatch } from "react-redux";

import { session_store } from "../redux/actions/auth";

const PlayGame = () => {
    // ** Define Maintainers
    const classes = useStyles.playGame();
    const [value, setValue] = useState(0);

    const { session } = useSelector(state => state.auth);

    const api = useApi();
    const dispatch = useDispatch();
    // ** Define Actions
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        (async () => {
            const data = await api.getGameTypes();
            dispatch(session_store('Hi', 'Hola Mundo'));
        })();
    }, [])

    const chatcontrol = (flag) => {
        if(flag === 'open') {
            document.getElementsByClassName(classes.parentVideo)[0].style.display = 'none';
            document.getElementsByClassName(classes.parentChat)[0].style.display = 'block';
        } else {
            document.getElementsByClassName(classes.parentVideo)[0].style.display = 'block';
            document.getElementsByClassName(classes.parentChat)[0].style.display = 'none';
        }
    }

    return(
        <Box>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} lg={8} className={classes.parentVideo}>
                    <Card className={classes.root}>
                        <Box className={classes.overlayPanel}>
                            <CardMedia
                                className={classes.media}
                                image={LiveGame}
                                title="Live Game"
                            />
                            <Box className={classes.overlay}>
                                <Box className={classes.tag}>24K Playing</Box>
                                <IconButton className={classes.messages} onClick={() => chatcontrol('open')}>
                                    <img src={Messages} alt={"Messages"} />
                                </IconButton>
                                <IconButton className={classes.playButton}>
                                    <img src={PlayIcon} alt={"PlayIcon Icon"} />
                                </IconButton>
                                <Box className={classes.actions}>
                                    <IconButton>
                                        <img src={SettingIcon} alt={"SettingIcon Icon"} />
                                    </IconButton>
                                    <IconButton>
                                        <img src={TheatreIcon} alt={"TheatreIcon Icon"} />
                                    </IconButton>
                                    <IconButton>
                                        <img src={FullScreenIcon} alt={"FullScreenIcon Icon"} />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                        <CardContent className={classes.content}>
                            <Grid container>
                                <Grid item xs={12} sm={8} className={classes.gameDescription}>
                                    <Box>
                                        <Chip
                                            avatar={
                                                <Avatar src={WifiIcon} />
                                            }
                                            className={classes.chip}
                                            label="Live"
                                        />
                                    </Box>
                                    <Typography variant={"h4"} className={classes.currentTitle}>
                                        Catchy Game 1 Description
                                    </Typography>
                                    <Box className={classes.gameProperty}>
                                        <Button
                                            component={"span"}
                                            className={classes.gpButton}
                                            startIcon={<img src={GameT01} alt={"Game Temp 01"} />}
                                        >
                                            Game Title 1
                                        </Button>
                                        <Button
                                            component={"span"}
                                            className={classes.gpButton}
                                            startIcon={
                                                <Box className={"dot green"} />
                                            }
                                        >
                                            Reward Available
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4} className={classes.gameAd}>
                                    <img src={GameAd} alt={"Game AD"} />
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <Button
                                className={classes.button}
                                startIcon={
                                    <img src={LikeIcon} alt={"Like Icon"} />
                                }
                            >
                                Like
                            </Button>
                            <Button
                                className={classes.button}
                                startIcon={
                                    <img src={ShareIcon} alt={"Share Icon"} />
                                }
                            >
                                Share
                            </Button>
                            <Button
                                className={classes.button}
                                startIcon={
                                    <img src={AddCircleOutlinedIcon} alt={"AddCircleOutlined Icon"} />
                                }
                            >
                                <Box className={classes.ControlRes}>Add to playlist</Box>
                            </Button>
                            <IconButton className={classes.ControlRes}>
                                <img src={MoreIcon} alt={"More Icon"} />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Box className={classes.gameList}>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Games" />
                    <Tab label="Games 1" />
                    <Tab label="Games 2" />
                </Tabs>
            </Box>
            <Grid container className={classes.gameList} spacing={4}>
                <Grid item xs={12} sm={3}>
                    <Card className={classes.root}>
                        <Box className={classes.overlayPanel}>
                            <CardMedia
                                className={classes.media}
                                image={Game01}
                                title="Live Game"
                            />
                            <Box className={classes.overlay}>
                                <Box className={clsx(classes.tag, classes.rightTag)}>10 : 42</Box>
                                <Box className={classes.bottomLine} />
                            </Box>
                        </Box>
                        <CardContent>
                            <Typography variant={"h6"} className={classes.gameTitle}>
                                Game 01 Title
                            </Typography>
                            <Grid container className={classes.gameProperty}>
                                <Grid item xs={"auto"}>
                                    <Button
                                        component={"span"}
                                        className={classes.gpButton}
                                        startIcon={
                                            <Box className={"dot blue"} />
                                        }
                                    >
                                        8.1M Plays
                                    </Button>
                                </Grid>
                                <Grid item xs={"auto"}>
                                    <Button
                                        component={"span"}
                                        className={classes.gpButton}
                                        startIcon={
                                            <Box className={"dot green"} />
                                        }
                                    >
                                        Reward Available
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card className={classes.root}>
                        <Box className={classes.overlayPanel}>
                            <CardMedia
                                className={classes.media}
                                image={Game02}
                                title="Live Game"
                            />
                            <Box className={classes.overlay}>
                                <Box className={clsx(classes.tag, classes.rightTag)}>10 : 42</Box>
                                <Box className={classes.bottomLine} />
                            </Box>
                        </Box>
                        <CardContent>
                            <Typography variant={"h6"} className={classes.gameTitle}>
                                Game 02 Title
                            </Typography>
                            <Grid container className={classes.gameProperty}>
                                <Grid item xs={"auto"}>
                                    <Button
                                        component={"span"}
                                        className={classes.gpButton}
                                        startIcon={
                                            <Box className={"dot blue"} />
                                        }
                                    >
                                        8.1M Plays
                                    </Button>
                                </Grid>
                                <Grid item xs={"auto"}>
                                    <Button
                                        component={"span"}
                                        className={classes.gpButton}
                                        startIcon={
                                            <Box className={"dot green"} />
                                        }
                                    >
                                        Reward Available
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card className={classes.root}>
                        <Box className={classes.overlayPanel}>
                            <CardMedia
                                className={classes.media}
                                image={Game03}
                                title="Live Game"
                            />
                            <Box className={classes.overlay}>
                                <Box className={clsx(classes.tag, classes.rightTag)}>10 : 42</Box>
                                <Box className={classes.bottomLine} />
                            </Box>
                        </Box>
                        <CardContent>
                            <Typography variant={"h6"} className={classes.gameTitle}>
                                Game 03 Title
                            </Typography>
                            <Grid container className={classes.gameProperty}>
                                <Grid item xs={"auto"}>
                                    <Button
                                        component={"span"}
                                        className={classes.gpButton}
                                        startIcon={
                                            <Box className={"dot blue"} />
                                        }
                                    >
                                        8.1M Plays
                                    </Button>
                                </Grid>
                                <Grid item xs={"auto"}>
                                    <Button
                                        component={"span"}
                                        className={classes.gpButton}
                                        startIcon={
                                            <Box className={"dot green"} />
                                        }
                                    >
                                        Reward Available
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card className={classes.root}>
                        <Box className={classes.overlayPanel}>
                            <CardMedia
                                className={classes.media}
                                image={Game04}
                                title="Live Game"
                            />
                            <Box className={classes.overlay}>
                                <Box className={clsx(classes.tag, classes.rightTag)}>10 : 42</Box>
                                <Box className={classes.bottomLine} />
                            </Box>
                        </Box>
                        <CardContent>
                            <Typography variant={"h6"} className={classes.gameTitle}>
                                Game 04 Title
                            </Typography>
                            <Grid container className={classes.gameProperty}>
                                <Grid item xs={"auto"}>
                                    <Button
                                        component={"span"}
                                        className={classes.gpButton}
                                        startIcon={
                                            <Box className={"dot blue"} />
                                        }
                                    >
                                        8.1M Plays
                                    </Button>
                                </Grid>
                                <Grid item xs={"auto"}>
                                    <Button
                                        component={"span"}
                                        className={classes.gpButton}
                                        startIcon={
                                            <Box className={"dot green"} />
                                        }
                                    >
                                        Reward Available
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PlayGame;