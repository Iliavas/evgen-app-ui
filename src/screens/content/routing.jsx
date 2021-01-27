import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import {Registration} from "./registration"


export const Routing = () => {
    return <Router>
        <Switch>
            <Route path="/enter-user">
                <Registration></Registration>
            </Route>
        </Switch>
    </Router>;
}