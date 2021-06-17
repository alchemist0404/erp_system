import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Import Icons
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import RouterIcon from '@material-ui/icons/Router';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

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
        padding: theme.spacing(2, 4, 3),
        width: '100%'
    },
    margin: {
        margin: theme.spacing(1),
    },
    customBtnGroup: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        in: open,
        children,
        onEnter,
        onExited, ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

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
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="spring-modal-title">{addStatus === true ? 'Add': 'Edit'} Game</h2>
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
                            <Grid container spacing={1} alignItems="flex-end" className={classes.customBtnGroup}>
                                <Grid item>
                                    <Button variant="contained" color="primary" 
                                        onClick={() => {
                                            if(addStatus) {
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
                </Fade>
            </Modal>
        </div>
    );
}