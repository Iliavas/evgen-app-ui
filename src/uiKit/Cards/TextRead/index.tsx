import React  from "react"
import "./textRead.css"

interface textCardIE{
}

export const TextReadCard : React.FC<textCardIE> = (props) =>{
    return(
        <div className="card">
            {props.children}
        </div>
    );
}