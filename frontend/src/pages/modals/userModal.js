import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Import Icons
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EmailIcon from '@material-ui/icons/Email';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import FaceIcon from '@material-ui/icons/Face';
import LinkIcon from '@material-ui/icons/Link';

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
    },
    margin: {
        margin: theme.spacing(1),
    },
    customBtnGroup: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}));

export const EditUserModal = (props) => {
    const {
        open,
        setOpen,
        addStatus,
        editUser,
        userFirstName,
        userLastName,
        userPhoneNumber,
        userEmail,
        userProfit,
        userEndpoints,
        setUserFirstName,
        setUserLastName,
        setUserPhoneNumber,
        setUserEmail,
        setUserProfit,
        setUserEndpoints,
        addNewUserHandle
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
                    <h2 id="spring-modal-title">{addStatus === true ? 'Add' : 'Edit'} User</h2>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <SupervisorAccountIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="First Name"
                                    defaultValue={userFirstName}
                                    onChange={(e) => setUserFirstName(e.target.value)}
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
                                    defaultValue={userLastName}
                                    onChange={(e) => setUserLastName(e.target.value)}
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
                                    defaultValue={userPhoneNumber}
                                    onChange={(e) => setUserPhoneNumber(e.target.value)}
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
                                    defaultValue={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
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
                                    defaultValue={userProfit}
                                    onChange={(e) => setUserProfit(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <LinkIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Get User Endpoint"
                                    type="string"
                                    defaultValue={userEndpoints.getUser}
                                    onChange={(e) => setUserEndpoints({...userEndpoints, getUser: e.target.value})}
                                    required
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <LinkIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Credit Endpoint"
                                    type="string"
                                    defaultValue={userEndpoints.credit}
                                    onChange={(e) => setUserEndpoints({...userEndpoints, credit: e.target.value})}
                                    required
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <LinkIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Debit Endpoint"
                                    type="string"
                                    defaultValue={userEndpoints.debit}
                                    onChange={(e) => setUserEndpoints({...userEndpoints, debit: e.target.value})}
                                    required
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
                                            addNewUserHandle()
                                        } else {
                                            editUser()
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