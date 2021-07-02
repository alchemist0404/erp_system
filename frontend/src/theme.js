// ** Import Headers
import React, { useEffect } from "react";

import Mode from "./config/theme.json";
import Routes from "./config/routes.json";

import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import { CssBaseline } from '@material-ui/core';
import { createBrowserHistory } from "history";
import { useHistory } from "react-router-dom";

// ** Import Sass files
import "./assets/sass/index.scss";

// ** Declare Theme Provider
export const MuiTheme = ({ children }) => {
    const storedMode = localStorage.getItem("themeMode");
    const themeMode = storedMode ? storedMode : "dark";
    const theme = createMuiTheme(Mode[themeMode]);
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

// ** Declare Style Provider
export const Styles = ({ children }) => {
    return (
        <>
            <CssBaseline />
            {children}
        </>
    )
}

// ** Declare Route Provider
export const To = (pageName) => {
    // document.title = Routes[pageName].title;
    return ({
        exact: true,
        path: Routes[pageName].path
    })
}

// ** Declare Notification Provider
export const NotificationProvider = ({ children }) => {
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        const alert = (message, variant) => {
            enqueueSnackbar(message, { variant: variant });
        }
        window.alert = alert;
    }, [enqueueSnackbar])
    return (
        <>{children}</>
    )
}

// ** Declare Auth Provider
export const AuthProvider = ({ children }) => {
    const isSession = localStorage.getItem("auth");
    const history = useHistory();
    useEffect(() => {
        console.log('window.location.pathname :>> ', window.location.pathname);
        if (
            window.location.pathname === "/3card" ||
            window.location.pathname === "/american-roullete" ||
            window.location.pathname === "/baccarat" ||
            window.location.pathname === "/blackjack" ||
            window.location.pathname === "/craps" ||
            window.location.pathname === "/hilow" ||
            window.location.pathname === "/jackorbetter" ||
            window.location.pathname === "/paigow" ||
            window.location.pathname === "/studpoker"
        ) {
            console.log("This is game");
        } else {
            if (
                (isSession === null || isSession === "") &&
                window.location.pathname !== "/signin"
            ) {
                history.push("signin");
            }
        }
    }, [isSession, history])
    return children;
}
// ** Declare History As Global
export const History = createBrowserHistory({ basename: "", forceRefresh: false });

// ** Declare Check Response Func
export const checkResponse = (response) => {
    switch (response) {
        case "success": {
            alert("Successful", "success");
            break;
        }
        case "exist": {
            alert("Alredy Exist", "info");
            break;
        }
        case "not found": {
            alert("Email or Password is incorrect.", "error");
            break;
        }
        case "block": {
            alert("You are blocked by admin", "warning");
            break;
        }
        case "error": {
            alert("Something went wrong!", "error");
            break;
        }
        default: {
            alert(response.toString(), "error");
        }
    }
}