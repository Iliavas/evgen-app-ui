import React from 'react';
import ReactDOM from 'react-dom';
import "./css/TopOfSchool.css"


export const Top : React.FC = (props) => {
    return <div className="top">
        <p className="text">Афанасьев Афанасий</p>
        <p className="points">34567 points</p>
    </div>
}