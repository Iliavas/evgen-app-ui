import react from "react";

import ReactDom from "react-dom";

import {Registration} from "./screens/content/registration";

import {Routing} from "./screens/content/routing"

import {LineButtons} from "./uiKit/LineOfButtons";

ReactDom.render(
    <LineButtons></LineButtons>,
    document.getElementById("root")
)