import { from } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import {MySelect} from './uiKit/Select';
import {Conformity, UnDropColumn} from "./uiKit/conformity";
import {TaskRow, NumRow
} from "./uiKit/ChildTestDetail"
import "./uiKit/css/conformity.css"

function click(){
  console.log("походу работает")
}

// <div className="myDiv">
// <UnDropColumn answers={["спит","спать", "Петербург","бобра"]}></UnDropColumn>
// <Conformity answers={["Пошла","Наелся и", "Съел","Санкт"]}></Conformity>
// </div>,

let chels = [  
<TaskRow name="Афанасий" surname="Петров" states={[true, false, false, true, false, false]}></TaskRow>,
<TaskRow name="Афанасий" surname="Петров" states={[true, false, false, true, false, false]}></TaskRow>,
<TaskRow name="Афанасий" surname="Петров" states={[true, false, false, true, false, false]}></TaskRow>,
<TaskRow name="Афанасий" surname="Петров" states={[true, false, false, true, false, false]}></TaskRow>,
<TaskRow name="Афанасий" surname="Петров" states={[true, false, false, true, false, false]}></TaskRow>,
<TaskRow name="Афанасий" surname="Петров" states={[true, false, false, true, false, false]}></TaskRow>,
]
ReactDOM.render(
  <NumRow num={6} taskrows={chels}/>,
  document.getElementById('root')
);