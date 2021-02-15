import React, {useState} from 'react';
import "./searchTaskCard.css"

interface CardIE{
    question: string;
    minuts: number;
    answer: string;
    checking:string;
}


export const QuestionCard : React.FC<CardIE> = (props) =>{
    function declOfNum(number:number, words:Array<string>) {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }
    return(
        <div className="wrapper">
            <div className="col">
                <div className="question">{props.question}</div>
                <div className="minuts min"><span className="minuts">{props.minuts}</span>{declOfNum(props.minuts, [" минута", " минуты", " минут"])}</div>
            </div>
            <div className="col">
                <div className="answer">{props.answer}</div>
                <div className="checking">{props.checking}</div>
            </div>

        </div>
    );
}
