import React from 'react';
import "./unDropColumn.module.css.css";
  
interface ConformityConfig{
    answers:Array<string>
};

interface ItemProps {
    text: string
    charPointer:string
    index: number
  }
  
export const UnDropColumn: React.FC<ConformityConfig> = (props) => {
    var alphavit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return (
            <div className="col">
              {props.answers.map((text, index) => (
                <UnDropItem key={text} charPointer={alphavit.charAt(index)} text={text} index={index} />
              ))}
            </div>
      )
  }

  const UnDropItem: React.FC<ItemProps> = (props) => {
    return (
          <div className="item">
            <div className="txtDiv"><span className="charPointer">{props.charPointer + " "}</span>{props.text}</div>
          </div>
    );
  }

  