import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import {
    ApolloProvider
} from "@apollo/client"
import client from "../../client"

import {Registration} from "./registration"

import {OrganisationList} from "./organisations";

import {ChildLobby} from "./LobbyContentRouter";

import {checkToken} from "../../LocalStorageInteraction/checkToken"

export const Routing = () => {

    return <ApolloProvider client={client}>
        <Router>
            <Switch>
                <Route path="/enter-user">
                    <Registration></Registration>
                </Route>
                <Route path="/">
                    <OrganisationList></OrganisationList>
                </Route>
            </Switch>
        </Router>
    </ApolloProvider>
;
}