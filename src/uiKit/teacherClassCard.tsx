import react from "react";

import cardImg from "../images/cardImg.svg";

import "./css/teacher-class-card.css"


interface IETeacherClassCard {
    name:string;
    childrenLen:number;
    lessonsLen:number;
    groupName:string;
}

export const TeacherClassCard:react.FC<IETeacherClassCard> = (props) => {
    return <div className = "teacher-class-card__container">
        
        <div className="teacher-class-card__content">
            <div className="info">
                <div className="teacher-class-card__heading">
                    {props.name}
                </div>
                <div className="class__name">{props.groupName}</div>
                <div className="children">
                    учеников: <span className="colorized">{props.childrenLen}</span>
                </div>
            </div>
            <div className="statistics">
                <div className="lessons__all">
                    Уроков всего <span className="colorized">{props.lessonsLen}</span>
                </div>
                <div className="last-lesson">
                    Задана работа <span className="colorized">27.09</span>
                </div>
            </div>
        </div>
        <img src={cardImg} alt="" className="teacher-class__decor"/>
    </div>
}