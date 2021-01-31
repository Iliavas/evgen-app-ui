import React from 'react';
import ReactDOM from 'react-dom';
import "./css/TopOfSchool.css"

interface TopConfig{
    name:String;
    surname:String;
    points:number;
};


export const Top : React.FC<TopConfig> = (props) => {
    return(
        <div className="top">
            <p className="text">{props.surname} {props.name}</p>
            <p className="points">{props.points} points</p>
        </div>
    );
}
