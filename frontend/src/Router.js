import React, { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";
import BaseLayout from "./components/BaseLayout";
import Fullayout from "./components/Fullayout";

// Import Providers
import { AuthProvider } from "./theme";
// Import Route Providers
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { History, To } from "./theme";

const Games = lazy(() => import("./pages/games"));
const RTP = lazy(() => import("./pages/rtp"));
const Profit = lazy(() => import("./pages/profit"));
const Users = lazy(() => import("./pages/users"));
const BetHistory = lazy(() => import("./pages/betHistory"));
const Signin = lazy(() => import("./pages/auth/signin"));

const AppRouter = () => {
    const isSession = localStorage.getItem("auth");
    console.log(`window.location.pathname`, window.location.pathname)
    if (
        window.location.pathname === "/3card/" ||
        window.location.pathname === "/3card" ||
        window.location.pathname === "/american-roullete/" ||
        window.location.pathname === "/american-roullete" ||
        window.location.pathname === "/baccarat/" ||
        window.location.pathname === "/baccarat" ||
        window.location.pathname === "/blackjack/" ||
        window.location.pathname === "/blackjack" ||
        window.location.pathname === "/craps/" ||
        window.location.pathname === "/craps" ||
        window.location.pathname === "/hilow/" ||
        window.location.pathname === "/hilow" ||
        window.location.pathname === "/jackorbetter/" ||
        window.location.pathname === "/jackorbetter" ||
        window.location.pathname === "/paigow/" ||
        window.location.pathname === "/paigow" ||
        window.location.pathname === "/studpoker/" ||
        window.location.pathname === "/studpoker"
    ) {
        console.log("This is game");
    } else {
        if (
            !isSession &&
            window.location.pathname !== "/" &&
            window.location.pathname !== "/signin"
        ) {
            History.push("signin");
        }
    }
    return (
        <Router history={History}>
            <Suspense fallback={<Spinner />}>
                <AuthProvider>
                    <Switch>
                        <Route
                            {...To("signin")}
                            render={props => (
                                <Fullayout>
                                    <Signin />
                                </Fullayout>
                            )}
                        />
                        <BaseLayout>
                            <Route exact path="/" >
                                <Redirect to="/users" />
                            </Route>
                            <Route {...To("users")} render={props => ( <Users /> )} />
                            <Route {...To("games")} render={props => ( <Games /> )} />
                            <Route {...To("rtp")} render={props => ( <RTP /> )} />
                            <Route {...To("profit")} render={props => ( <Profit /> )} />
                            <Route {...To("bet-history")} render={props => ( <BetHistory /> )} />
                        </BaseLayout>
                    </Switch>
                </AuthProvider>
            </Suspense>
        </Router>
    )
}
export default AppRouter;