import React, {useState} from 'react';
import "./css/TestCardHW.css";



export const Card : React.FC = () => {
    return <div className="card">
        <div className="row">
            <div className="title">Напишите раличия кислот</div>
            <p className="minutes">1 минута</p>
        </div>
        <div className="row">
            <div className="answer">расширенный ответ</div>
            <div className="check">
                <p>проверка учителем</p>
            </div>
        </div>
        <div className="row">
            <div className="balls">баллы</div>
            <div className="points">
                <p>3</p>
            </div>
        </div>
    </div>
}