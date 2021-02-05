import React, {useState} from 'react';
import "./materialCard.css"
import {DefaultButton} from "../../Buttons/DefaultButton"

interface materialCardIE{
    name:string;
    time:number;
    onClick:Function;
}

export const MaterialCard : React.FC<materialCardIE> = (props) =>{
    function declOfNum(number:number, words:Array<string>) {  
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }
    return(
        <div className="card">
            <p>
                <span className="textName">{props.name}</span><br></br>
                <span className="timeText">{props.time} <span className="colorized">&#8194;{declOfNum(props.time, [" минута", " минуты", " минут"])}</span></span>
            </p>
            <DefaultButton handleClick={()=>props.onClick()} class="btn">Прочитать</DefaultButton>
        </div>
    );
}