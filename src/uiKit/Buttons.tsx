import React from 'react';
import ReactDOM from 'react-dom';
import "./css/Buttons.css"

interface ButtonsConfig{
    text:String;
    handleClick:Function;
};

export const DefaultButton : React.FC<ButtonsConfig> = (props) => {
    return (
        <button className="defaultButton" onClick={()=> props.handleClick()}>{props.text}</button>
    );
}


