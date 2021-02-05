import React, {useState} from 'react';
import "./testCard.css"
import {DefaultButton} from "../../Buttons/DefaultButton"

interface TestCardIE{
    name:string;
    questions:number;
    onClick:Function;
}

export const TestCard : React.FC<TestCardIE> = (props) =>{
    function declOfNum(number:number, words:Array<string>) {  
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }
    return(
        <div className="card">
            <p>
                <span className="textName">{props.name}</span><br></br>
                <span className="timeText">{props.questions} <span className="colorized">&#8194;{declOfNum(props.questions, [" вопрос", " вопроса", " вопросов"])}</span></span>
            </p>
            <DefaultButton handleClick={()=>props.onClick()} class="btn">Начать</DefaultButton>
        </div>
    );
}