import React from 'react';
import ReactDOM from 'react-dom';

// Import Providers
import { Provider as ReduxProvider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { CookiesProvider } from 'react-cookie';

import { MuiTheme as ThemeProvider} from "./theme";
import { Styles as StyleProvider } from "./theme";
import { NotificationProvider } from "./theme";
import ReactNotification from 'react-notifications-component'

import { PRE } from "./hooks";
import configureStore from "./redux/store";

import App from './App';
import report from './report';

import 'react-notifications-component/dist/theme.css'

const renderApp = preloadedStates => {
    const store = configureStore(preloadedStates);
    ReactDOM.render(
        <ThemeProvider>
            <ReduxProvider store={store}>
                <StyleProvider>
                    <SnackbarProvider>
                        <NotificationProvider>
                            <CookiesProvider>
                                <ReactNotification />
                                <App />
                            </CookiesProvider>
                        </NotificationProvider>
                    </SnackbarProvider>
                </StyleProvider>
            </ReduxProvider>
        </ThemeProvider>,
        document.getElementById('app-root')
    );
    report();
}
(async () => renderApp(await PRE.sessionCheck()))();
