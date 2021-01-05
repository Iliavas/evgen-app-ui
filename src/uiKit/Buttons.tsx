import React from 'react';
import ReactDOM from 'react-dom';
import "./css/Buttons.css"
import download from "D:/Programs_pc/react/Projects/evgen-app-ui/src/images/download.svg"

interface ButtonsConfig{
    text?:String;
    handleClick:Function;
};

export const DefaultButton : React.FC<ButtonsConfig> = (props) => {
    return (
        <button className="defaultButton" onClick={()=> props.handleClick()}>{props.text}</button>
    );
}

export const DownloadButton : React.FC<ButtonsConfig> = (props) => {
    return (
        <button className="DownloadButton" onClick={()=> props.handleClick()}><img src={download}></img></button>
    );
}


