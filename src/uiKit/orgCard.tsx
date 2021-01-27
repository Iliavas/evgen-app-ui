import react from "react";

import "./css/org-card.css"

import {DefaultButton} from "./Buttons";

export const OrgCard:react.FC = () => {
    return <div className="org-card__container">
        <div className="org-card__heading">ГБОУ ИТШ 777</div>
        <div className="role">Учитель</div>
        <div className="subjects">Алгебра, геометрия, математика</div>
        <div className="children">
            Учеников: <span className="colorize">345</span>
        </div>
        <div className="classes">
            Классов: <span className="colorize">12</span>
        </div>
        <DefaultButton handleClick={()=>{}} class="org-btn">Перейти</DefaultButton>
    </div>
}