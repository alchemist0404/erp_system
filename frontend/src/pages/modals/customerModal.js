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
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EmailIcon from '@material-ui/icons/Email';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import FaceIcon from '@material-ui/icons/Face';

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

export const EditCustomerModal = (props) => {
    const {
        open,
        setOpen,
        addStatus,
        editCustomer,
        customerFirstName,
        customerLastName,
        customerPhoneNumber,
        customerEmail,
        customerProfit,
        setCustomerFirstName,
        setCustomerLastName,
        setCustomerPhoneNumber,
        setCustomerEmail,
        setCustomerProfit,
        addNewCustomerHandle
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
                        <h2 id="spring-modal-title">{addStatus === true ? 'Add': 'Edit'} Customer</h2>
                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <SupervisorAccountIcon />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label="First Name"
                                        defaultValue={customerFirstName}
                                        onChange={(e) => setCustomerFirstName(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <SupervisedUserCircleIcon />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label="Last Name"
                                        defaultValue={customerLastName}
                                        onChange={(e) => setCustomerLastName(e.target.value)}
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
                                        label="Phone"
                                        defaultValue={customerPhoneNumber}
                                        onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <EmailIcon />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label="Email"
                                        defaultValue={customerEmail}
                                        onChange={(e) => setCustomerEmail(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <FaceIcon />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label="Provider Profit"
                                        type="number"
                                        defaultValue={customerProfit}
                                        onChange={(e) => setCustomerProfit(e.target.value)}
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
                                                addNewCustomerHandle()
                                            } else {
                                                editCustomer()
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