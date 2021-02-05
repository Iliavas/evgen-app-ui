import React from 'react';
import "./subjectCard.css";
import image1 from "../../../images/cardImg.svg";
import image2 from "../../../images/cardImg1.svg";
import image3 from "../../../images/cardImg2.svg";
import image4 from "../../../images/cardImg3.svg";
import image5 from "../../../images/cardImg4.svg";



interface SubjectConfig{
    teacher:string;
    subject:string;
    date?:Date;
    newTasks?:number;
    class:string;
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
            <div className="card__content">
                <div className="subDiv">
                    <div className="group">
                        <div className="SubjectText">{props.subject}</div>
                        <div className="TeacherText">{props.teacher}</div>
                    </div>
                    <div className="back_label">Класс: <span className="colorized">{props.class}</span></div>
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