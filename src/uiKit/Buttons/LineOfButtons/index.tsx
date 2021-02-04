import React, {useState} from 'react';
import "./lineOfButtons.css"

interface  LineButtonsConfig{
    answeres:Array<string>;
    onClick:Function;
    numerous?:boolean;
}


export const LineButtons : React.FC<LineButtonsConfig> = (props) => {
    function onChange(n:number){
        // console.log(classes)
        let list = simple
        list[n] = true
        setClasses(list)
        props.onClick(props.answeres[n])
    }

    let simple = new Array<boolean>()
    for (let i=0; i <= props.answeres.length; i++){
        simple.push(false)
    }
    let childrenes = new Array<JSX.Element>()
    let [classes,setClasses]= useState(simple)
    
    props.answeres.forEach((el)=>{
        let n = props.answeres.indexOf(el)
        childrenes.push(<button onClick={()=>onChange(n)} className={classes[n]==false? "button":"button active"}>{el}</button>)
    })

    return <div className="lineOfButtons">
        {childrenes}
    </div>
} 