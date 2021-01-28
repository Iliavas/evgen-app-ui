import react from "react";

import "./css/org-card.css"

import {DefaultButton} from "./Buttons";

interface IEOrgCard {
    name:string,
    role:string,
    childLen:number,
    classesLen:number,
    subjects:string[]
}

export const OrgCard:react.FC<IEOrgCard> = (props) => {
    return <div className="org-card__container">
        <div className="org-card__heading">{props.name}</div>
        <div className="role">{props.role}</div>
        <div className="subjects">{props.subjects.join(", ")}</div>
        <div className="children">
            Учеников: <span className="colorize">{props.childLen}</span>
        </div>
        <div className="classes">
            Классов: <span className="colorize">{props.classesLen}</span>
        </div>
        <DefaultButton handleClick={()=>{}} class="org-btn">Перейти</DefaultButton>
    </div>
}