import React  from 'react';
import "./defaultButton.module.css"


interface ButtonsConfig{
    text?:String;
    handleClick:Function;
    style?:boolean;
    class?:string;
    children?:React.ReactNode;
};

export const DefaultButton : React.FC<ButtonsConfig> = (props) => {
    const btnStyle = {
        width:"30vw",
        height:"5vw"
    };
    const classes = "defaultButton " + (props.class == undefined ? "" : props.class);
    return (
        <button className={classes} style={props.style == true? btnStyle:{}} onClick={()=> props.handleClick()}>{props.children}</button>
    );
}
