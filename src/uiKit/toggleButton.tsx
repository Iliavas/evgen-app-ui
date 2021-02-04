import React, {useState} from 'react';
import "./css/Buttons.css"
import { ToggleButton, ToggleButtonGroup} from '@material-ui/lab';

import {Link} from "react-router-dom";

interface IEButton {
    name:string;
    link:string;
}

interface ToogleConfig{
    handleChange:Function;
    buttons:Array<IEButton>;
}



export const MyToogleButton : React.FC<ToogleConfig> = (props) =>{
    let [active, setActive] = useState(false)
    const TGbtn = {
        fontFamily:  "'Montserrat', sans-serif",
        background: "#FFFFFF",
        border: "1px solid #F5F5F5",
        borderRadius: "10px",
        fontSize: "20px",
        color:"#000000",
        outline:"none!important;",
        padding:"20px;",
        width: "220px"
    }

    const TGbtnActive = {
        background: "#F5F5F5",
        border: "none",
        fontFamily:  "'Montserrat', sans-serif",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        letterSpacing: "0.2px",
        color:"#636363",
        borderRadius: "10px",
        width: "220px"
    }
    const TGbtnGroup = {
        border: "none",

        background: "#F5F5F5",
        borderRadius: "10px"
        
    }

    let buttons = new  Array<JSX.Element>()
    props.buttons.forEach((el) => {
        buttons.push(
            <Link to={el.link}>
                <ToggleButton 
                onClick={(e) => setActive(!active)} 
                style={props.buttons.indexOf(el)==0?   active? TGbtn:TGbtnActive: !active? TGbtn:TGbtnActive} 
                value={el.name} aria-label={el.name}>
                    {el.name}
                </ToggleButton>
            </Link>
            
            )
      })
    return(
        <ToggleButtonGroup style={TGbtnGroup} orientation="horizontal">
            {buttons} 
        </ToggleButtonGroup>
    );
}
