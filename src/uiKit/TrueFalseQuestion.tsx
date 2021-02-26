import react, {useState} from "react";

import "./css/TrueFalseQuestion.css"

import Back from "../images/TrueRectangle.svg"

import FalseBack from "../images/FalseRectangle.svg";
import { url } from "inspector";

interface IETrueFalseQuestion{
    isTrue:boolean;
    onChange:Function;
}


export const TrueFalseQuestionWidget:react.FC<IETrueFalseQuestion> = (props) => {
    const [active, setActive] = useState(props.isTrue);
    console.log(active , "active")
    props.onChange(active)
    return <div className="true-false__main-container">
            <div className="true-false__container">
        <div className="true__container" onClick={
            () => {
                setActive(true)
            }
        }>
            <div className="true__content">
                <div className="true__word-content" style={active ? {
                    backgroundImage: `url("${Back}")`,
                    color: "white"
                } : {}}>
                    Правда
                </div>
                
            </div>
        </div>
        <div className="false__container" onClick={
            () => {
                setActive(false)
            }
        }>
            <div className="false__content" style={ !active ? {
                    backgroundImage: `url("${FalseBack}")`,
                    color: "white"
                } : {}}>
                Ложь
            </div>
        </div>
    </div>
    <div className="write-answer">
        Выбрано: {active ? "Правда" : "Ложь"}
    </div>
</div> 
    
}