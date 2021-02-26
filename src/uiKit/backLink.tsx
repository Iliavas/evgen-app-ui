import react from "react";

import {Link} from "react-router-dom";

import "./css/backLink.css";

export const BackLink:react.FC<{link:string}> = (props) => {
    return <Link to={props.link}>
        <span className="colorize">Назад</span>
    </Link>
}