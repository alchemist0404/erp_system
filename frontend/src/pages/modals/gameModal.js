import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Import Icons
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import RouterIcon from '@material-ui/icons/Router';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MinimizeIcon from '@material-ui/icons/Minimize';
import MaximizeIcon from '@material-ui/icons/Maximize';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    margin: {
        margin: theme.spacing(1),
    },
    customBtnGroup: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}));

export const EditGameModal = (props) => {
    const {
        open,
        setOpen,
        addStatus,
        editGame,
        gameName,
        setGameName,
        gameType,
        setGameType,
        gameRoute,
        setGameRoute,
        winPercentage,
        setWinPercentage,
        losePercentage,
        setLosePercentage,
        min,
        setMin,
        max,
        setMax,
        addNewGameHandle
    } = props;
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => setOpen(!open)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 200,
                }}
            >
                <div className={classes.paper}>
                    <h2 id="spring-modal-title">{addStatus === true ? 'Add' : 'Edit'} Game</h2>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <SportsEsportsIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Game Name"
                                    defaultValue={gameName}
                                    onChange={(e) => setGameName(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <StoreMallDirectoryIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Game Type"
                                    defaultValue={gameType}
                                    onChange={(e) => setGameType(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <RouterIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Game Route"
                                    defaultValue={gameRoute}
                                    onChange={(e) => setGameRoute(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <EmojiPeopleIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Game Win Percentage"
                                    type="number"
                                    defaultValue={winPercentage}
                                    onChange={(e) => setWinPercentage(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <HighlightOffIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Game Lose Percentage"
                                    type="number"
                                    defaultValue={losePercentage}
                                    onChange={(e) => setLosePercentage(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <MinimizeIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Game Min Bet Amount"
                                    type="number"
                                    defaultValue={min}
                                    onChange={(e) => setMin(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <MaximizeIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Game Max Bet Amount"
                                    type="number"
                                    defaultValue={max}
                                    onChange={(e) => setMax(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end" className={classes.customBtnGroup}>
                            <Grid item>
                                <Button variant="contained" color="primary"
                                    onClick={() => {
                                        if (addStatus) {
                                            addNewGameHandle()
                                        } else {
                                            editGame()
                                        }
                                    }}
                                >
                                    Save
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Modal>
        </div>
    );
}