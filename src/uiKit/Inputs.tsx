import { type } from 'os';
import React from 'react';
import ReactDOM from 'react-dom';
import "./css/InputField.css"

interface InputsConfig{
    placeHolder:string;
    handleChange:Function;
    type?: string;
};

export const DefaultInput : React.FC<InputsConfig> = (props) => {
    let input;

    if (props.type){
        input  = <input placeholder={props.placeHolder} onChange={()=>props.handleChange()} type={props.type}></input>
    }
    else{
        input = <input placeholder={props.placeHolder} onChange={()=>props.handleChange()}></input>
    }
    return (
       input
    );
}