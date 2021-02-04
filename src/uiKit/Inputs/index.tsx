import React from 'react';
import "./InputField.module.css"

interface InputsConfig{
    placeHolder?:string;
    handleChange:Function;
    type?: string;
    value?:string;
};

export const DefaultInput : React.FC<InputsConfig> = (props) => {   
    return (
        <input className="myInput" value={props.value} placeholder={props.placeHolder} onChange={(event)=>props.handleChange(event)} type={props.type}></input>
    );
}