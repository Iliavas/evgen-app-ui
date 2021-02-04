import React from 'react';
import "./taskCard.module.css";

import {DefaultButton} from "../../Buttons/DefaultButton"

interface TaskConfig{
    subject:string;
    theme:string;
    teacher:string;
    period?:Date;
    questions:number;
    minuts?:number;
    task:Function;
}

function declOfNum(number:number, words:Array<string>) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}

export const TaskCard :React.FC<TaskConfig> = (props) => {
    return(
        <div className="tkCard">
            <span className="SubjectText">{props.subject}</span>
            <p>
                <span className="noTasks">{props.theme}</span><br></br>
                <span className="TeacherText">{props.teacher}</span><br></br>
                <span className="TeacherText">{props.period==undefined? "не ограничено": "до " + props.period?.getDate() + "." + props.period?.getMonth()+"."+props.period?.getFullYear()+"    "+props.period.getHours()+":"+ props.period.getMinutes()}</span>
            </p>
            <p>
                <span className="noTasks">{props.questions.toString() + declOfNum(props.questions, [" вопрос"," вопроса"," вопросов"])}</span><br></br>
                <span className="noTasks">{props.minuts==undefined? "Время на выполнение неограничено": props.minuts.toString() + declOfNum(props.minuts,[' минута', ' минуты', ' минут' + " "])}
                    {props.minuts==undefined? "":<span className="TeacherText"> на выполнение</span>}
                </span>
            </p>
            <DefaultButton text="начать выполнение" handleClick={()=>props.task()} style={true}></DefaultButton>
        </div>
    );
}