import React from 'react';
import ReactDOM from 'react-dom';
import { MySelect } from './uiKit/Select';

function click(){
  console.log("походу работает")
}

ReactDOM.render(
  <MySelect handleChange={click} el={["ddd","ddeed","ddeeed","ddeewwerd"]}></MySelect>,
  document.getElementById('root')
);