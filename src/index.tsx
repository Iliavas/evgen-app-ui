import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DefaultButton} from "./uiKit/Buttons"
import {DefaultInput} from "./uiKit/Inputs"

function click(){
  console.log("походу работает123")
}

ReactDOM.render(
  <DefaultInput placeHolder="привет" handleChange={click}  type="e-mail"/>,
  document.getElementById('root')
);