import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import { API } from '../hooks';
import { Card, CardMedia, makeStyles, CardContent, Typography, IconButton } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { PlayArrow } from '@material-ui/icons';
import { GamePlayModal } from './modals'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        padding: "20px",
        margin: 0,
    },
    card: {
        maxWidth: 345,
        margin: 'auto'
    },
    cardContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "5px",
        paddingBottom: "5px !important"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Games() {
    const classes = useStyles();
    const [player, setPlayer] = useState({})
    const [ready, setReady] = useState(false)
    const [state, setState] = useState({
        games: [],
        gameId: "",
        gameRoute: "",
        gameName: ""
    })
    const [open, setOpen] = useState(false)

    const loadGames = async () => {
        const url_string = window.location.href;
        const url = new URL(url_string);
        const playerName = url.searchParams.get("Player");
        const userId = url.searchParams.get("IdUser");

        const response = await API.getGames();
        if (response.status) {
            setState({ ...state, games: response.data })
        }

        const auth = await API.actionBetPlayerAuthenticate({playerName, userId});
        if (!auth.status) {
            alert("User is not authenticated!")
            window.location.href="https://actionbetz.org/"
        } else {
            setPlayer(auth.data)
            setReady(true)
        }
    }

    useEffect(() => {
        loadGames()
    }, [])

    return (
        <Grid container spacing={3} className={classes.root}>
            {
                state.games.map((item, i) => (
                    <Grid key={i} item md={3} sm={6} xs={12} >
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={require(`../assets/img/games/${item.route}.jpg`).default}
                                title="Paella dish"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" color="textSecondary" component="p">{item.name}</Typography>
                                <IconButton aria-label="delete" className={classes.margin} onClick={() => { setState({ ...state, gameId: item._id, gameRoute: item.route, gameName: item.name }); setOpen(true) }}>
                                    <PlayArrow fontSize="large" />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
            {
                open && ready ?
                    <GamePlayModal
                        open={open}
                        setOpen={setOpen}
                        gameId={state.gameId}
                        gameRoute={state.gameRoute}
                        gameName={state.gameName}
                        player={player}
                    />
                    : null
            }
        </Grid>
    );
}