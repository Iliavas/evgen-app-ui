import react from "react";

import "./css/material-card.css"

import {Link} from "react-router-dom";

interface IEMaterialCard{
    name:string;
    link:string;
}

export const MaterialCard:react.FC<IEMaterialCard> = (props) => {
    return <a href={"http://"+props.link}>
            <div className="material-card__container">
        <div className="material-card__header">
            {props.name}
        </div>
        <div className="material-card__content">
            {props.link}
        </div>
    </div>
    </a>    

}