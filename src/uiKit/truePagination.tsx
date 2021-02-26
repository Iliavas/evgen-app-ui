import React from "react";
import react, {useState, useContext} from "react";
import {Link, useRouteMatch} from "react-router-dom";
import "./css/truePagination.css"

import {TestCompletionContext} from "../screens/content/testCompletion";
import { DefaultInput } from "./Inputs";
import { DefaultButton } from "./Buttons";

interface IEPaginationElement{
    active:boolean;
    value:number;
    link:string;
}

const PaginationContext = react.createContext({
    setActive: (e:number) => {},
    link: ""
})

const PaginationElement:react.FC<IEPaginationElement> = (props) => {
    const {setActive, link} = useContext(TestCompletionContext);
    console.log(link, "link")
    return <Link to={`${props.link}/${props.value-1}`}>
        <div className={"pagination__element " + (props.active ? 
            "pagination__element-active": "")} onClick={() => {
                setActive(props.value-1);
        }}>{props.value}</div>
    </Link> 

}

interface IEPagination{
    length:number;
    active?:number;
    link:string;
    isTeacher?:boolean;
}

export const Pagination:react.FC<IEPagination> = (props) => {
    let res = []
    
    for (let i = 0; i < props.length; ++i) {
        res.push(<PaginationElement
        active={i==props.active} value={i+1}
        link={props.link}
        ></PaginationElement>)
    }
    return <PaginationContext.Provider value={{link:props.link, setActive:() => {}}}>
            <div className="pagniation">
            <div className="pagination__container">
                {res} 
            </div>
    </div> 
    </PaginationContext.Provider>
}