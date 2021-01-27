import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import {
    ApolloProvider
} from "@apollo/client"
import client from "../../client"

import {Registration} from "./registration"


export const Routing = () => {
    return <ApolloProvider client={client}>
        <Router>
            <Switch>
                <Route path="/enter-user">
                    <Registration></Registration>
                </Route>
            </Switch>
        </Router>
    </ApolloProvider>
;
}