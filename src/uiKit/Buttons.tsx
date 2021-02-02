import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./css/Buttons.css"
import download from "../images/download.svg"
import { CSSProperties } from 'react';






interface ButtonsConfig{
    text?:String;
    handleClick:Function;
    style?:boolean;
    class?:string;
    children?:React.ReactNode;
};

export const DefaultButton : React.FC<ButtonsConfig> = (props) => {
    const btnStyle = {
        width:"30vw",
        height:"5vw"
    };
    const classes = "defaultButton " + (props.class == undefined ? "" : props.class);
    return (
        <button className={classes} style={props.style == true? btnStyle:{}} onClick={()=> props.handleClick()}>{props.children}</button>
    );
}

export const DownloadButton : React.FC<ButtonsConfig> = (props) => {
    return (
        <button className="DownloadButton" onClick={()=> props.handleClick()}><img src={download}></img></button>
    );
}

interface ToogleConfig{
    handleChange:Function;
    buttons:Array<string>;
}


