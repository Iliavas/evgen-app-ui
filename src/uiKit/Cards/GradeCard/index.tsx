import React from 'react';
import "./gradeCard.module.css";

interface GradeConfig{
    subject:string;
    theme:string;
    teacher:string;
    period?:Date;
    grade_num?:number;
    grade_text?:string;
    exeptions?:number;
}

export const GradeCard :React.FC<GradeConfig> = (props) => {
    function declOfNum(number:number, words:Array<string>) {  
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }
    return(
        <div className="tkCard">
            <span className="SubjectText">{props.subject}</span>
            <p>
                <span className="noTasks">{props.theme}</span><br></br>
                <span className="TeacherText">{props.teacher}</span><br></br>
                <span className="TeacherText">{props.period==undefined? "не ограничено": "до " + props.period?.getDate() + "." + props.period?.getMonth()+"."+props.period?.getFullYear()+"    "+props.period.getHours()+":"+ props.period.getMinutes()}</span>
            </p>
            <div className="p">
                <span className="grade">{props.grade_num == undefined? props.grade_text:props.grade_num}</span>
                <span className="SubjectText" style={{color:"#565656", display:"flex", justifyContent:"flex-end", flexDirection:"column"}}><span style={{display:"block",position:"relative",bottom:"0" }}>{props.exeptions == undefined? "":props.exeptions + declOfNum(props.exeptions, [" ошибка", " ошибки", " ошибок"])}</span></span>
            </div>
        </div>
    );
}