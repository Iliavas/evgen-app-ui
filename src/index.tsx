import { from } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import {MySelect} from './uiKit/Select';
import {Conformity, UnDropColumn} from "./uiKit/conformity";
import "./uiKit/css/conformity.css"

function click(){
  console.log("походу работает")
}

ReactDOM.render(
  <div className="myDiv">
      <UnDropColumn answers={["спит","спать", "Петербург","бобра"]}></UnDropColumn>
      <Conformity answers={["Пошла","Наелся и", "Съел","Санкт"]}></Conformity>
  </div>,
  
  document.getElementById('root')
);