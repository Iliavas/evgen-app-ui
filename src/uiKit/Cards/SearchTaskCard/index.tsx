import React, {useState} from 'react';
import "./searchTaskCard.css"
import {MyToogleButton} from "../../Buttons/ToogleButton"

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

export const SearchTaskCard : React.FC = () =>{
    let [answer, setAnswer] = useState(new Array<CardIE>())
    function onChange(value:string){
        //отправляем запрос, получаем список ответов, пока просто список
        answer = [{
            question:"Напишите различия кислот",
            minuts:1,
            answer:"расширенный ответ",
            checking:"автопроверка"
        },{
            question:"Напишите различия солей",
            minuts:2,
            answer:"сжатый ответ",
            checking:"проверка учителем"
        }]
        
    }
    
    let results = new Array()
    answer.forEach((el)=>{
        results.push(<QuestionCard question={el.question} answer={el.answer} minuts={el.minuts} checking={el.checking}></QuestionCard>)
    })

    const search = <div>
        <input className="myInput" placeholder="Начните вводить запрос" onChange={(e:any)=>onChange(e.target.value)}></input>
        <div>
            {results}
        </div>
    </div>

    const tasks = <div>
            <div className="card"></div>

    </div>


    return(
        <div></div>
    );
}