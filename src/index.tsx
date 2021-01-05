import React from 'react';
import ReactDOM from 'react-dom';
import { MySelect } from './uiKit/Select';
import {DownloadButton} from "./uiKit/Buttons"

function click(){
  console.log("походу работает")
}

ReactDOM.render(
  <DownloadButton handleClick={click}></DownloadButton>,
  document.getElementById('root')
);