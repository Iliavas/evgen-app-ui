import { nextTick } from "process";
import React, {useState} from "react";
import avatar1 from "../../../images/avatar1.svg";
import avatar2 from "../../../images/avatar2.svg";
import avatar3 from "../../../images/avatar3.svg";
import avatar4 from "../../../images/avatar4.svg";
import avatar5 from "../../../images/avatar5.svg";

import "./selectAvatarCard.css"

interface SelectAvatarCardIE{
    next:Function;
    previous:Function;
    onChange:Function;
}

export const SelectAvatarCard : React.FC<SelectAvatarCardIE> = (props) => {
    let avatars = [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar5,
    ]
    
    const simages = [
        <button id = "1" className="img" onClick={(e:any)=>onClick(e)}><img  id = "1" className={"Myimg"} src={avatar1}></img></button>,
        <button id = "2" className="img" onClick={(e:any)=>onClick(e)}><img id = "2" className={"Myimg"} src={avatar2}></img></button>,
        <button id = "3" className="img" onClick={(e:any)=>onClick(e)}><img id = "3" className={"Myimg"} src={avatar3}></img></button>,
        <button id = "4" className="img" onClick={(e:any)=>onClick(e)}><img id = "4" className={"Myimg"} src={avatar4}></img></button>,
        <button id = "5" className="img" onClick={(e:any)=>onClick(e)}><img  id = "5" className={"Myimg"} src={avatar5}></img></button>
    
    ]
    let [images, setImages] = useState(simages)

    function onClick(e:any){
        props.onChange(e)
        setImages(simages.map((el:any) =>{
            return e.target.id == el.props.id? <button id = {e.target.id} className="img" onClick={(e:any)=>onClick(e)}><img  id = {e.target.id} className="activeimg" src={avatars[Number(e.target.id)-1]}></img></button> : el
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