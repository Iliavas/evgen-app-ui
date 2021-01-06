import React from 'react';
import ReactDOM from 'react-dom';
import { MyTextarea } from './uiKit/Textarea';

function click(){
  console.log("походу работает")
}

ReactDOM.render(
  <MyTextarea content = {"Hello word"} onChange={(e:any) => {console.log(e.target.value);}}/>,
  document.getElementById('root')
);