import React, {useImperativeHandle, useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import "./pagination.css"

interface PaginationConfig{
    quantity:number;
    handleClick:Function;
    thisPage?:number;
    pageList?:Array<number>
    content?: Array<string>
};

export const MyPagination : React.FC<PaginationConfig> = (props) => {
    function onChange(e:any){
        if (props.content != undefined){
            const content = props.content
            let pag = document.getElementsByClassName("pagination")[0] as any
            console.log(content)
            for(let elem of pag.children){
                if (content.includes(elem.children[0].innerHTML)){
                    elem.classList.add("ungrade")
                }
            }
        }
        console.log(e.selected+1)
        props.handleClick(e.selected+1)
    }
    
    useEffect(()=>{
        if (props.content != undefined){
            const content = props.content
            let pag = document.getElementsByClassName("pagination")[0] as any
            console.log(content)
            for(let elem of pag.children){
                if (content.includes(elem.children[0].innerHTML)){
                    console.log(elem)
                    elem.classList.add("ungrade")
                }
            }
        }
    })
    return(
        <ReactPaginate
        previousLabel={'назад'}
        nextLabel={'далее'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={props.quantity}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={(e)=>onChange(e)} 
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    );
}