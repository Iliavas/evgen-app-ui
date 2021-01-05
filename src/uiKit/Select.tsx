import React from 'react';
import ReactDOM from 'react-dom';
import { StringMappingType } from 'typescript';
import "./css/Select.css"

interface SelectConfig{
    handleChange:Function;
    el:Array<String>;
};
interface typeElInterface{
    text:Array<String>;
}

function typeEl (props:typeElInterface){

    var finalArray = new Array<JSX.Element>();
    props.text.forEach(function(item){
        finalArray.push(<option>{item}</option>);
      });
    return(
        finalArray
    );
}

export const MySelect : React.FC<SelectConfig> = (props) => {
    let el = props.el;
    return (
        <select className="mySelect" onClick={()=> props.handleChange()}>
            {typeEl({text:props.el})}
        </select>
    );
}