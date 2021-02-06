import react from "react";

import ReactDom from "react-dom";

import {Card} from "./uiKit/TestCardHW"

import {Routing} from "./screens/content/routing.jsx"

ReactDom.render(
    <Routing></Routing>,
    document.getElementById("root")
)