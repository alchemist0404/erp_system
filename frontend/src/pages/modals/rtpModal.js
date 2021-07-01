import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Import Icons
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

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
    // const style = useSpring({
    //     from: { opacity: 0 },
    //     to: { opacity: open ? 1 : 0 },
    //     onStart: () => {
    //         if (open && onEnter) {
    //             onEnter();
    //         }
    //     },
    //     onRest: () => {
    //         if (!open && onExited) {
    //             onExited();
    //         }
    //     },
    // });

    return (
        <div ref={ref} {...other}>
            {children}
        </div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

export const EditRtpModal = (props) => {
    const {
        open,
        setOpen,
        rtpValue,
        setRtpValue,
        editRtp
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
                        <h2 id="spring-modal-title">Edit Rtp Data</h2>
                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <SportsEsportsIcon />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label="Game Rtp"
                                        type="number"
                                        defaultValue={rtpValue}
                                        onChange={(e) => setRtpValue(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end" className={classes.customBtnGroup}>
                                <Grid item>
                                    <Button variant="contained" color="primary" 
                                        onClick={editRtp}
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