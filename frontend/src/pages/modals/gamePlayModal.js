import React, { useEffect, useState } from 'react';
import { makeStyles, Modal, IconButton, Grid } from '@material-ui/core';
import { API, ROOT } from '../../hooks'
import { Close } from '@material-ui/icons/'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gameWindow: {
        width: "100%",
        height: "100%",
        backgroundColor: "#1f2128"
    },
    gameIframe: {
        width: "100%",
        border: 0,
        marginTop: "10px",
        paddingBottom: '10px'
    },
    gameHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
    },
    gameName: {
        marginLeft: "20px"
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        left: "50%",
        transform: "translate(-50%, 10px)",
    }
}));

export const GamePlayModal = (props) => {
    const {
        open,
        setOpen,
        gameId,
        gameRoute,
        player
        // gameName
    } = props;
    const classes = useStyles();
    const [ready, setReady] = useState(false)
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        loadPlayerBalance()
    }, [])

    const loadPlayerBalance = async () => {
        const response = await API.actionBetPlayerBalance({Player: player.Player})
        if (response.status) {
            setBalance(response.data.Balance)
            setReady(true)
        } else {
            alert(response.data)
            setOpen(false)
        }
    }

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={open}
            onClose={() => setOpen(false)}
        >
            <Grid className={classes.gameWindow}>
                {/* <Grid className={classes.gameHeader}>
                    <Typography className={classes.gameName}>{gameName}</Typography>
                </Grid> */}
                <IconButton aria-label="close" className={classes.closeButton} onClick={() => setOpen(false)}>
                    <Close fontSize="small" />
                </IconButton>
                {
                    ready ? 
                        <iframe
                            title="game window"
                            className={clsx("game-window-iframe", classes.gameIframe)}
                            // src="http://localhost:6140/letitride/?customerid=60de8dee7010c075e796606a&gameid=60ebaed15775dc051016329e&balance=1000"
                            src={`${ROOT.home_url}/${gameRoute}?customerid=611ca790234c5f2ab4dd3b50&gameid=${gameId}&player=${player.Player}&balance=${balance}`}
                        ></iframe>
                    : null
                }
            </Grid>
        </Modal>
    );
}