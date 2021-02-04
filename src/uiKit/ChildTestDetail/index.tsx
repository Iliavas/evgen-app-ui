import React, {useState} from 'react';
import "./childTestDetail.module.css";

interface TaskRowConfig{
    states:Array<boolean>
    name:string;
    surname:string;
}
interface NumRowConfig{
    num:number;
    children:Array<JSX.Element>
}

export const TaskRow : React.FC<TaskRowConfig> = (props) => {
    let el = new Array<JSX.Element>()
    props.states.forEach(function(item) {
        if(item == true){
            el.push(<div className="myDiv green"></div>)
        }
        else{
            el.push(<div className="myDiv gray"></div>)
        }
      });
    return (
        <div className="myContainer">
            <div className="text">{props.name} {props.surname}</div>
            <div className="row">
                {el}
            </div>
        </div>
    );
}


export const NumRow : React.FC<NumRowConfig> = (props) => {
    let nums = new Array<any>()
    for (let i = 1; i <= props.num; i++) {
        let el = <div className="text">{i}</div>
        nums.push(el)
      }


    return(
        <div>
            <div className="NumRow">{nums}</div>
            <div className="scroll">{props.children}</div>
        </div>
    );
}
