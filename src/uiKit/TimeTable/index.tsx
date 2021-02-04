import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./css/Timetable.css"


function Time(startTime:String, endTime:String) {

    let newStartTime = startTime.split(":")
    let startTimeMin = Number(newStartTime[0]) * 60 + Number(newStartTime[1])
    let newEndTime = endTime.split(":")
    let endTimeMin = Number(newEndTime[0]) * 60 + Number(newEndTime[1])
    let returnTime = endTimeMin-startTimeMin

    return(
        returnTime
    );

}

interface TmeTableConfig{
    cols:Array<any>;
    firstCol:number;
}


interface TimeColConfig{
    number:number;
    name:String;
    content:Array<any>
}

interface TimeCellConfig{
    name:String;
    startTime:String;
    endTime:String;
    test:number;
}

interface TestCmpConfig{
    value:number;
}
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');




export const ExpTimeCol : React.FC<TimeColConfig> = (props) => {
    let showModal = false
    const content = useState(props.content)
    let el =  document.createElement('div');
    return(
        <div className="myCol">
            <p>{props.name}</p>
            <div>
                {content}
            </div>
            <button onClick={() => showModal=false}>+</button>
        </div>
    );
}

export const TimeCol : React.FC<TimeColConfig> = (props) => {
    return(
        <div className="myCol">
            <p>{props.name}</p>
            <div>
                {props.content}
            </div>
        </div>
    );
}


export const TestCmp : React.FC<TestCmpConfig> = (props) => {
    return(
        <div className="test">тесты:{props.value}</div>
    );
}

export const TimeCell : React.FC<TimeCellConfig> = (props) => {
    let divHeight = Number(Time(props.startTime, props.endTime)/10).toString() + "vw"
    return (
        <div className="timeCell">
            <div style={{height:divHeight}} className="a">
                {props.name}
            </div>
            <div className="b">
            <TestCmp value={props.test}></TestCmp> 
            {/* тут надо решить, через выражение, если тестов 0 */}
                {props.startTime} - {props.endTime}
            </div>
        </div>
    );
}


export const TimeTable : React.FC<TmeTableConfig> = (props) => {
    let cols = props.cols.slice(props.firstCol).concat(props.cols.slice(0, props.firstCol))
    return (
        <div className="mainDiv">
            {cols}
        </div>
    );
}