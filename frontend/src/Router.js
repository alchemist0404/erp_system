import React, { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";
import BaseLayout from "./components/BaseLayout";

// Import Providers
// import { AuthProvider } from "./theme";
// Import Route Providers
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { History, To } from "./theme";

const Games = lazy(() => import("./pages/games"));
const RTP = lazy(() => import("./pages/rtp"));
const Profit = lazy(() => import("./pages/profit"));
const Customers = lazy(() => import("./pages/customers"));
const BetHistory = lazy(() => import("./pages/betHistory"));

const AppRouter = () => {
    return(
        <Router history={History}>
			{/* <Route {...To("signin")} component={Games} /> */}
            <Suspense fallback={<Spinner />}>
                {/* <AuthProvider> */}
                    <Switch>
                        <BaseLayout>
                            <Route exact path="/" >
                                <Redirect to="/customers" />
                            </Route>
                            <Route {...To("customers")} component={Customers} />
                            <Route {...To("games")} component={Games} />
                            <Route {...To("rtp")} component={RTP} />
                            <Route {...To("profit")} component={Profit} />
                            <Route {...To("bet-history")} component={BetHistory} />
                        </BaseLayout>
                    </Switch>
                {/* </AuthProvider> */}
            </Suspense>
        </Router>
    )
}
export default AppRouter;