import React from 'react';
import ReactDOM from 'react-dom';
import "./css/Textarea.css"

interface IETextArea{
  content:String;
  onChange:Function;

}

export const MyTextarea : React.FC<IETextArea> = (props) => {
  return <textarea onChange={(e) => {props.onChange(e)}}>{ props.content }</textarea>
}