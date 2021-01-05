import React from 'react';
import ReactDOM from 'react-dom';
import "./css/Select.css"

interface SelectConfig{
    handleChange:Function;
    el:any;
};

export const MySelect : React.FC<SelectConfig> = (props) => {

    return (
        <select className="mySelect" onClick={()=> props.handleChange()}>
            {props.el}
        </select>
    );
}