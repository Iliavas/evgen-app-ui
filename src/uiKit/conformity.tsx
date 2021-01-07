import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./css/conformity.css";
import {DragDropContext, Droppable,Draggable  } from 'react-beautiful-dnd'
import cursor from "../images/cursor.svg"


interface ColumnProps {
    list: string[]
  }

interface ConformityConfig{
    answers:Array<string>
};

interface ItemProps {
    text: string
    charPointer:string
    index: number
  }
  
  const Item: React.FC<ItemProps> = (props) => {
    return (
      <Draggable draggableId={props.text} index={props.index}>
        {provided => (
          <div className="item"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
             <div className="txtDiv"><span className="charPointer">{props.charPointer + " "}</span>{props.text}</div>
             <div className="cursor">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
             </div>
            {/* <img src={cursor} className="cursor"/> */}

          </div>
        )}
      </Draggable>
    )
  }
  
  
export const Conformity : React.FC<ConformityConfig> = (props) => {
    const onDragEnd = ({ source, destination }: any) => {
        if (destination === undefined || destination === null) return null
        if (destination.index === source.index) return null
        const newList = list.filter((_: any, idx: number) => idx !== source.index)
        newList.splice(destination.index, 0, list[source.index])
        setList(newList)
      }
    
    const [list, setList] = useState(props.answers)
    return (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="col">
            <Column list={list} />
          </div>
        </DragDropContext>
      )
}

export const Column: React.FC<ColumnProps> = ({ list }) => {
    return (
        <Droppable droppableId='col-1'>
          {provided => (
            <div
              className="col"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {list.map((text, index) => (
                <Item key={text} text={text} index={index} charPointer={(index+1).toString()} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )
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

  