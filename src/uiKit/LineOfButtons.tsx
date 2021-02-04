import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./css/LineOfButtons.css"



export const LineButtons : React.FC = () => {
    return <div className="lineOfButtons">
        <div className="button">to</div>
        <div className="button">with</div>
        <div className="button">from</div>
        <div className="button">who</div>
    </div>
}