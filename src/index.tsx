import React from 'react';
import ReactDOM from 'react-dom';
import { Top } from './uiKit/TopOfSchool';

function click(){
  console.log("походу работает")
}

ReactDOM.render(
  <Top />,
  document.getElementById('root')
);