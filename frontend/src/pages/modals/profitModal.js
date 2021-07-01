import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';

// Import Icons
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ContactsIcon from '@material-ui/icons/Contacts';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

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

export const EditProfitModal = (props) => {
    const {
        open,
        setOpen,
        addStatus,
        games,
        userdata,
        firstName,
        gameName,
        gameBank,
        userProfit,
        providerProfit,
        status,
        setFirstName,
        setGameId,
        setUserId,
        setGameName,
        setGameBank,
        setUserProfit,
        setProviderProfit,
        setStatus,
        editProfit,
        addNewProfitHandle
    } = props;
    const classes = useStyles();

    useEffect(() => {
        if(games) {
            if(games.length > 0) {
                setGameId(games[0]._id)
            }
        }
    // eslint-disable-next-line
    }, [games])

    useEffect(() => {
        if(userdata) {
            if(userdata.length > 0) {
                setUserId(userdata[0]._id)
            }
        }
    // eslint-disable-next-line
    }, [userdata])

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
                        <h2 id="spring-modal-title">{addStatus === true ? 'Add': 'Edit'} Profit</h2>
                        {
                            addStatus === false ?
                            <>
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <SportsEsportsIcon />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                disabled
                                                label="First Name"
                                                defaultValue={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
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
                                                disabled
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
                                            <AccountBalanceIcon />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                label="Game Bank"
                                                defaultValue={gameBank}
                                                type="number"
                                                onChange={(e) => setGameBank(e.target.value)}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <AssignmentIndIcon />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                label="User Profit"
                                                defaultValue={userProfit}
                                                type="number"
                                                onChange={(e) => setUserProfit(e.target.value)}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <ContactsIcon />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                label="Provider Profit"
                                                defaultValue={providerProfit}
                                                type="number"
                                                onChange={(e) => setProviderProfit(e.target.value)}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <RemoveCircleIcon />
                                        </Grid>
                                        <Grid item>
                                            <Switch
                                                checked={status === "true" ? true : false}
                                                onChange={(e) => {
                                                    setStatus(e.target.checked)
                                                }}
                                                name="Game Status"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            </> :
                            <>
                                <div className={classes.margin}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">Games</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            defaultValue={games[0] ? games[0]._id : "Game"}
                                            onChange={(e) => {
                                                setGameId(e.target.value)
                                            }}
                                        >
                                            {
                                                games.length > 0 ?
                                                games.map((item, index) => {
                                                    return <MenuItem value={item._id} key={index}>{item.name}</MenuItem>
                                                }) :
                                                <MenuItem value={'Game'} key={0}>Game</MenuItem>
                                            }
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className={classes.margin}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">User</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            defaultValue={userdata[0] ? userdata[0]._id : "User"}
                                            onChange={(e) => {
                                                console.log(e.target.value)
                                                setUserId(e.target.value)
                                            }}
                                        >
                                            {
                                                userdata.length > 0 ?
                                                userdata.map((item, index) => {
                                                    return <MenuItem value={item._id} key={index}>{item.firstName}</MenuItem>
                                                }) :
                                                <MenuItem value={'User'} key={0}>User</MenuItem>
                                            }
                                        </Select>
                                    </FormControl>
                                </div>
                            </>
                        }
                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end" className={classes.customBtnGroup}>
                                <Grid item>
                                    <Button variant="contained" color="primary" 
                                        onClick={() => {
                                            if(addStatus) {
                                                addNewProfitHandle()
                                            } else {
                                                editProfit()
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