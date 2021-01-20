import React, {useImperativeHandle, useState} from 'react';
import ReactDOM from 'react-dom';
import "./css/Pagination.css"

interface PaginationConfig{
    quantity:number;
    handleClick:Function;
    thisPage:number;
    pageList:Array<number>
};

export const Pagination : React.FC<PaginationConfig> = (props) => {
    let list = new Array<JSX.Element>()
    for (var i = 1; i <= props.quantity; i++) {
        let el;
        if (i == props.thisPage){
             el = <button className = "paginationBTN green" onClick={()=>props.handleClick(i)}>{i}</button>
        }
        else if(props.pageList.includes(i)){
            el = <button className = "paginationBTN gray" onClick={()=>props.handleClick(i)}>{i}</button>

        }
        else{
            el = <button className = "paginationBTN yellow" onClick={()=>props.handleClick(i)}>{i}</button>
        }
        list.push(el)
     }
    return(
        <div className="row">
            {list}
        </div>

    );
}