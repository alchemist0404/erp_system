import React from 'react';
import { makeStyles, Modal, IconButton, Grid, Typography } from '@material-ui/core';
import { ROOT } from '../../hooks'
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
        marginRight: '20px'
    }
}));

export const GamePlayModal = (props) => {
    const {
        open,
        setOpen,
        gameId,
        gameRoute,
        gameName
    } = props;
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={open}
            onClose={() => setOpen(!open)}
        >
            <Grid className={classes.gameWindow}>
                <Grid className={classes.gameHeader}>
                    <Typography className={classes.gameName}>{gameName}</Typography>
                    <IconButton aria-label="close" className={classes.closeButton} onClick={() => setOpen(!open)}>
                        <Close fontSize="small" />
                    </IconButton>
                </Grid>
                <iframe
                    title="game window"
                    className={clsx("game-window-iframe", classes.gameIframe)}
                    src={`${ROOT.home_url}/${gameRoute}?customerid=60de8dee7010c075e796606a&gameid=${gameId}&balance=1000`}
                ></iframe>
            </Grid>
        </Modal>
    );
}