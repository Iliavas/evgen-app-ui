import react from "react";

import "./css/test-card.css"

interface IETestCard{
    name:string;
    deadline:Date;
    questions:number;
}

export const TestCard:react.FC<IETestCard> = (props) => {
    return <div className="test-card__container">
        <div className="test-card__header">{props.name}</div>
        <div className="test-card__content">
            <div>
                До: <span className="colorize">{
                `${props.deadline.getMonth()+1}.${props.deadline.getDay()}`
                }</span>
            </div>
            <div>Вопросов: <span className="colorize">{props.questions}</span></div>
        </div>
        
    </div>
}