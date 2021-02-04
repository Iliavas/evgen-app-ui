import React, {useImperativeHandle, useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import "./pagination.module.css"

interface PaginationConfig{
    quantity:number;
    handleClick:Function;
    thisPage?:number;
    pageList?:Array<number>
    content?: Array<string>
};

export const MyPagination : React.FC<PaginationConfig> = (props) => {
    useEffect(()=>{
        if (props.content != undefined){
            const content = props.content
            let pag = document.getElementsByClassName("pagination")[0]
            console.log(content)
            for(let elem of pag.children){
                if (content.includes(elem.children[0].innerHTML)){
                    console.log(elem.children[0].innerHTML)
                    elem.innerHTML = elem.innerHTML.replace('<a', '<a style="background-color:magenta"')
                }
            }
        }
        
    })
    return(
        <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={props.quantity}
        marginPagesDisplayed={2}
        pageRangeDisplayed={10}
        onPageChange={()=>props.handleClick()}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    );
}