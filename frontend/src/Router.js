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
    return(
        <Router history={History}>
            <Suspense fallback={<Spinner />}>
                <Route 
                    {...To("signin")}
                    render={props => (
                        <Fullayout>
                            <Signin />
                        </Fullayout>
                    )}
                />
                <AuthProvider>
                    <Switch>
                        <Route exact path="/" >
                            <Redirect to="/users" />
                        </Route>
                        <Route 
                            {...To("users")}
                            render={props => (
                                <BaseLayout>
                                    <Users />
                                </BaseLayout>
                            )}
                        />
                        <Route 
                            {...To("games")}
                            render={props => (
                                <BaseLayout>
                                    <Games />
                                </BaseLayout>
                            )}
                        />
                        <Route 
                            {...To("rtp")}
                            render={props => (
                                <BaseLayout>
                                    <RTP />
                                </BaseLayout>
                            )}
                        />
                        <Route 
                            {...To("profit")}
                            render={props => (
                                <BaseLayout>
                                    <Profit />
                                </BaseLayout>
                            )}
                        />
                        <Route 
                            {...To("bet-history")}
                            render={props => (
                                <BaseLayout>
                                    <BetHistory />
                                </BaseLayout>
                            )}
                        />
                    </Switch>
                </AuthProvider>
            </Suspense>
        </Router>
    )
}
export default AppRouter;