import React, {useImperativeHandle, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import "./css/Pagination.css"

interface PaginationConfig{
    quantity:number;
    handleClick:Function;
    thisPage?:number;
    pageList?:Array<number>
};

// export const Pagination : React.FC<PaginationConfig> 
// = (props) => {
//     let list = new Array<JSX.Element>()
//     for (var i = 1; i <= props.quantity; i++) {
//         let el;
//         if (i == props.thisPage){
//              el = <button className = "paginationBTN green" onClick={()=>props.handleClick(i)}>{i}</button>
//         }
//         else if(props.pageList.includes(i)){
//             el = <button className = "paginationBTN gray" onClick={()=>props.handleClick(i)}>{i}</button>

//         }
//         else{
//             el = <button className = "paginationBTN yellow" onClick={()=>props.handleClick(i)}>{i}</button>
//         }
//         list.push(el)
//      }
//     return(
//         <div className="row">
//             {list}
//         </div>

//     );
// }

export const MyPagination : React.FC<PaginationConfig> = (props) => {
    useEffect(()=>{
        const content = [
            "4",
            "5",
            "6",
            "7"

        ]
        let pag = document.getElementsByClassName("pagination")[0]
        console.log(content)
        for(let elem of pag.children){
            if (content.includes(elem.children[0].innerHTML)){
                console.log(elem.children[0].innerHTML)

                // console.log(elem.children[0])
                elem.innerHTML = elem.innerHTML.replace('<a', '<a style="background-color:magenta"')
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