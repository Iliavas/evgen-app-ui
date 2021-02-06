import { nextTick } from "process";
import React, {useState} from "react";

import "./taskChoiceCard.css"

interface SelectAvatarCardIE{
    next:Function;
    previous:Function;
    onChange:Function;
}

export const TaskChoiceCard : React.FC<SelectAvatarCardIE> = (props) => {
    let avatars = [
        "Прочитать текст",
        "выбрать правильный вариант ответа",
        "расставить заголвки",
        "правда/ложь",
        "краткий письменный ответ",
        "опишите устно изображение",
        "установите соответствия",
        "расширенный письменный ответ",
        "монологическое высказывание на выбранную тему",
        "загрузка файла"
    ]
    
    const simages = [
        <button id = "1" className="img" onClick={(e:any)=>onClick(e)}><div className="cards" id="1">Прочитать текст</div></button>,
        <button id = "2" className="img" onClick={(e:any)=>onClick(e)}><div className="cards" id="2">выбрать правильный вариант ответа</div></button>,
        <button id = "3" className="img" onClick={(e:any)=>onClick(e)}><div className="cards" id="3">расставить заголвки</div></button>,
        <button id = "4" className="img" onClick={(e:any)=>onClick(e)}><div className="cards" id="4">правда/ложь</div></button>,
        <button id = "5" className="img" onClick={(e:any)=>onClick(e)}><div className="cards" id="5">краткий письменный ответ</div></button>,
        <button id = "6" className="img" onClick={(e:any)=>onClick(e)}><div className="cards" id="6">опишите устно изображение</div></button>,
        <button id = "7" className="img" onClick={(e:any)=>onClick(e)}><div className="cards" id="7">кустановите соответствия</div></button>,
        <button id = "8" className="img" onClick={(e:any)=>onClick(e)}><div className="cards" id="8">расширенный письменный ответ</div></button>,
        <button id = "9" className="img" onClick={(e:any)=>onClick(e)}><div className="cards" id="9">монологическое высказывание на выбранную тему</div></button>,
        <button id = "10" className="img" onClick={(e:any)=>onClick(e)}><div className="cards" id="10">загрузка файла</div></button>,


    
    ]
    let [images, setImages] = useState(simages)

    function onClick(e:any){
        props.onChange(e)
        setImages(simages.map((el:any) =>{
            return e.target.id == el.props.id? <button id = {e.target.id} className="img" onClick={(e:any)=>onClick(e)}><div className="activecards" id={e.target.id}>{avatars[Number(e.target.id)-1]}</div></button> : el
        }))
    }

    return(
        <div className="card">
            <div className="wrapper">
               {images}
            </div>
            <div className="buttons">
                <button className="button" onClick={()=>props.next()}>Отмена</button>
                <button className="active" onClick={()=>props.previous()}>Выбрать</button>
            </div>
        </div>
    );
}