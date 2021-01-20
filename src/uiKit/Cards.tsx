import React from 'react';
import ReactDOM from 'react-dom';
import "./css/Cards.css"
import image from "../images/cardImg.svg"


interface SubjectConfig{
    teacher:string;
    subject:string;
    date?:Date;
    newTasks?:number;
};

export const SubjectCard : React.FC<SubjectConfig> = (props) => {
    return (
        <div className="SbCard">
            <div>
                <div className="SubjectText">{props.subject}</div>
                <div className="TeacherText">{props.teacher}</div>
                <div></div>
            </div>
            <div>
                <p className="TeacherText">
                    <span className={props.newTasks==undefined? "noTasks":"newTasks"}>{props.newTasks==undefined? "Нет заданий":`Новое задание(${props.newTasks})`}</span><br></br>
                    {props.newTasks==undefined? "":"до "+ props.date == undefined? "":props.date?.getDate() + "." + props.date?.getMonth()}

                    

                </p>
            </div>
            <img className="image" src={image}></img>
            

        </div>
    );
}

