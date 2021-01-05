import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DefaultButton} from "./uiKit/Buttons"

function click(){
  console.log("походу работает")
}

ReactDOM.render(
  <DefaultButton text="батон" handleClick={click} />,
  document.getElementById('root')
);