import React from 'react';
import "./subjectTeacherCard.css";
import image1 from "../../../images/cardImg.svg";
import image2 from "../../../images/cardImg1.svg";
import image3 from "../../../images/cardImg2.svg";
import image4 from "../../../images/cardImg3.svg";
import image5 from "../../../images/cardImg4.svg";



interface SubjectConfig{
    discription:string;
    theme:string;
    tests?:number;
    materials?:number;
    deadline:Date;
    classes:number;
    onClick:Function;
};

export const SubjectTeacherCard : React.FC<SubjectConfig> = (props) => {
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
                        <div className="SubjectText">{props.theme}</div>
                        <div className="TeacherText">{props.discription}</div>
                    </div>
                    <div className="back_label">Дедлайн: <span className="colorized">{props.deadline == undefined? "нет":props.deadline?.getDate() + "." + props.deadline?.getMonth()}</span></div>
                </div>
                <div className="subDiv pad">
                    <div className="group">
                        <div className="noTasks">Материалов к уроку:<span className="newTasks">{props.materials}</span></div>
                        <div className="TeacherText">
                        Тестов:<span className="newTasks">{props.tests}</span>
                        </div>
                    </div>
                    
                    <div className="back_label">Класс:<span className="colorized">{props.classes}</span></div>

                </div>
            </div>

            <img className="image" src={image}></img>
            

        </button>
    );
}