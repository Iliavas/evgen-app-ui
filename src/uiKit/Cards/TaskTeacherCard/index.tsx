import React, {useState} from "react";
import "./TaskTeacherCard.css"
import cancel from "../../../images/cancel.svg"

interface TaskIE{
    name:string;
    type:string;
    teacherCheck:boolean;
    time?:number;
    points?:number;
}

export const TaskTeacherCard:React.FC<TaskIE>=(props)=>{
    function declOfNum(number:number, words:Array<string>) {  
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }
    let points = props.points
    return(
        <div>
        <div className="card">
            <p>
                <span className="name">{props.name}</span><br/>
                <span className="time"><span className="colorized"> {props.time==undefined? null:props.time.toString() + " "}</span>{props.time == undefined? "нет": declOfNum(props.time, [ " минута", " минуты", " минут"])}</span>
            </p>
            <p>
                <span className="type">{props.type}</span><br/>
                <span className="check">{props.teacherCheck==true? "проверка учителем":"автоматическая проверка"}</span>
            </p>
            <div className="cont">
                <p className="balls">баллы </p>
                <input type="number" className="in" max={99} min={0} value={points} maxLength={2}></input>
            </div>
        </div>
        <img className="img" src={cancel}/>

        </div>
    );
}