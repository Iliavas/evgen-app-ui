import React from 'react';
import ReactDOM from 'react-dom';
import "./css/Cards.css";
import image1 from "../images/cardImg.svg";
import image2 from "../images/cardImg1.svg";
import image3 from "../images/cardImg2.svg";
import image4 from "../images/cardImg3.svg";
import image5 from "../images/cardImg4.svg";
import {DefaultButton} from "./Buttons"
import { TaskRow } from './ChildTestDetail';


interface SubjectConfig{
    teacher:string;
    subject:string;
    date?:Date;
    newTasks?:number;
    onClick:Function;
};

export const SubjectCard : React.FC<SubjectConfig> = (props) => {
    function getRandomInt(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
      }

    let image;

    let images = [image5,image1,image2,image3,image4]

    image = images[getRandomInt(0,images.length)]
    return (
        <button className="SbCard" onClick={(event)=>props.onClick(event)}>
            <div className="padDiv">
                <div className="subDiv">
                    <div className="SubjectText">{props.subject}</div>
                    <div className="TeacherText">{props.teacher}</div>
                </div>
                <div className="taskDiv">
                    <div className={props.newTasks==undefined? "noTasks":"newTasks"}>{props.newTasks==undefined? "Нет заданий":`Новое задание(${props.newTasks})`}</div>
                    <div className="TeacherText">
                        {props.newTasks==undefined? "": props.date == undefined? "":"до " + props.date?.getDate() + "." + props.date?.getMonth()}
                    </div>
                </div>
            </div>
            <img className="image" src={image}></img>
            

        </button>
    );
}

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

interface GradeSubject{
    subject:string;
    grades:Array<any>
}

export const GradeSubjectCard : React.FC<GradeSubject> = (props) => {

    let classNames = ["grayGrade","grayGrade","grayGrade","purpleGrade","purpleGrade"]
    let grades = new Array()

    props.grades.forEach((el:any) => {
        grades.push(<span className={classNames[el-1]}>{"  "+ el +"   "}</span>)
      })

    return (
        <div className="SbCard">
            <p className="sbp">
                <span className="SubjectText">{props.subject}</span><br/>
                {grades}
            </p>
        </div>
    );
}