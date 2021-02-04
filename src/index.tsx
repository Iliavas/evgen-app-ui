import react from "react";

import ReactDom from "react-dom";

import {Registration} from "./screens/content/registration";

import {Routing} from "./screens/content/routing"

import {EmptyTask} from "./screens/childTestCompletion/emptyTask/index";

ReactDom.render(
    <EmptyTask></EmptyTask>,
    document.getElementById("root")
)