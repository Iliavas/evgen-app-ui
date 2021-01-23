import React from 'react';
import ReactDOM from 'react-dom';
import "./css/Buttons.css"
import download from "../images/download.svg"
import { CSSProperties } from 'react';

interface ButtonsConfig{
    text?:String;
    handleClick:Function;
    style?:boolean;
};

export const DefaultButton : React.FC<ButtonsConfig> = (props) => {
    const btnStyle = {
        width:"30vw",
        height:"5vw"
    };
    return (
        <button className="defaultButton" style={props.style == true? btnStyle:{}} onClick={()=> props.handleClick()}>{props.text}</button>
    );
}

export const DownloadButton : React.FC<ButtonsConfig> = (props) => {
    return (
        <button className="DownloadButton" onClick={()=> props.handleClick()}><img src={download}></img></button>
    );
}


