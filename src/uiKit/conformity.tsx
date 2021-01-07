import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./css/conformity.css";
import {DragDropContext, Droppable,Draggable  } from 'react-beautiful-dnd'
import { graphqlSync } from 'graphql';
import cursor from "../images/cursor.svg"


interface ColumnProps {
    list: string[]
  }

interface ConformityConfig{
    answers:Array<string>
};

interface ItemProps {
    text: string
    index: number
  }
  
  const Item: React.FC<ItemProps> = ({ text, index }) => {
    return (
      <Draggable draggableId={text} index={index}>
        {provided => (
          <div className="item"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {text}
            <img src={cursor} className="cursor"></img>

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
                <Item key={text} text={(index+1).toString() + " " + text} index={index} />
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
                <UnDropItem key={text} text={alphavit.charAt(index) + " " + text} index={index} />
              ))}
            </div>
      )
  }

  const UnDropItem: React.FC<ItemProps> = ({ text }) => {
    return (
          <div className="item">
            {text}
          </div>
    );
  }

  