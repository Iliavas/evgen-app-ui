import { type } from 'os';
import React from 'react';
import ReactDOM from 'react-dom';
import "./css/InputField.css"

interface InputsConfig{
    placeHolder?:string;
    handleChange:Function;
    type?: string;
};

export const DefaultInput : React.FC<InputsConfig> = (props) => {   
    return (
        <input className="myInput" placeholder={props.placeHolder} onChange={(event)=>props.handleChange(event)} type={props.type}></input>
    );
}