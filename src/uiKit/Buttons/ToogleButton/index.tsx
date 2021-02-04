import React, {useState} from 'react';
import "./css/Buttons.css"
import { ToggleButton, ToggleButtonGroup} from '@material-ui/lab';

interface ToogleConfig{
    handleChange:Function;
    buttons:Array<string>;
}



export const MyToogleButton : React.FC<ToogleConfig> = (props) =>{
    let [active, setActive] = useState(false)
    const TGbtn = {
        fontFamily:  "'Montserrat', sans-serif",
        background: "#FFFFFF",
        border: "1px solid #F5F5F5",
        borderRadius: "10px",
        lineHeight: "24px",
        fontSize: "20px",
        color:" #000000",
        width:"12vw"        
    }

    const TGbtnActive = {
        background: "#F5F5F5",
        border: "none",
        fontFamily:  "'Montserrat', sans-serif",
        fontSize: "20px",
        lineHeight: "24px",
        display: "flex",
        alignItems: "center",
        letterSpacing: "0.2px",
        color:" #636363",
        borderRadius: "10px",
        width:"12vw"
    }
    const TGbtnGroup = {
        border: "none",

        background: "#F5F5F5",
        borderRadius: "10px"
        
    }

    let buttons = new  Array<JSX.Element>()
    props.buttons.forEach((el) => {
        buttons.push(<ToggleButton onClick={(e) => setActive(!active)} style={props.buttons.indexOf(el)==0?   active? TGbtn:TGbtnActive: !active? TGbtn:TGbtnActive} value={el} aria-label={el}>{el}</ToggleButton>)
      })
    return(
        <ToggleButtonGroup style={TGbtnGroup} orientation="horizontal">
            {buttons} 
        </ToggleButtonGroup>
    );
}
