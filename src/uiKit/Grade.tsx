import React, {useState} from 'react';
import "./css/Grade.css"

interface GradeWidgetConfig{
    grades:number;
};

export const GradeWidget : React.FC<GradeWidgetConfig> = (props) => {
    let l = new Array<JSX.Element>()
    let [actives, setActives] = useState(new Array<string>())
    let [grade, setGrade] = useState(new Array<JSX.Element>())

    function focusClick(event:any, focus:boolean){
        let la = actives

        la[Number(event.target.id)] = focus? "active":"cmp"

        la.length = 10

        setGrade(l)
        setActives(la)
    }

    for (var i = 1; i <= props.grades; i++) {
        actives.push("cmp")
        let cmp = <button id={(i-1).toString()} className={actives[i-1]} onBlur={(event)=>focusClick(event, false)} onFocus={(event)=>focusClick(event,true)}>{i}</button>
        l.push(cmp)
    }
    
    return(
        <div>{l}</div>
    );

}
